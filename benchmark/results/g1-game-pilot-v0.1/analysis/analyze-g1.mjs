#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const root = "benchmark/results/g1-game-pilot-v0.1";
const scoreDir = `${root}/scores`;
const metrics = [
  "rcc_at_3",
  "hqi",
  "dee",
  "business_evidence_integrity",
  "open_world_resilience",
  "relevance",
  "mechanistic_specificity",
  "testability",
  "prioritization",
  "first_discriminating_evidence",
  "valid_check_ratio_score",
];
const primary = ["rcc_at_3", "hqi", "dee"];
const guardrails = ["business_evidence_integrity", "open_world_resilience"];

function readJsonl(file) {
  return readFileSync(file, "utf8").trim().split("\n").map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      throw new Error(`${file}:${index + 1}: ${error.message}`);
    }
  });
}

function readJudge(id) {
  const rows = readJsonl(`${scoreDir}/${id}.jsonl`);
  const answers = new Map(rows.filter((row) => row.record_type === "answer").map((row) => [row.answer_id, row]));
  if (answers.size !== 45) throw new Error(`${id}: expected 45 unique answers`);
  return answers;
}

function readRunMap() {
  const text = readFileSync("benchmark/g1/randomization.md", "utf8");
  const pattern = /^\| (G1-R\d{3}) \| (G1-I\d{2}) \| (\d+) \| (\d+) \| ([ABC]) \| (G1-A\d{3}) \|$/gm;
  const rows = [...text.matchAll(pattern)].map((match) => ({
    run_id: match[1],
    incident_id: match[2],
    replicate: Number(match[3]),
    slot: Number(match[4]),
    condition: match[5],
    answer_id: match[6],
  }));
  if (rows.length !== 45 || new Set(rows.map((row) => row.answer_id)).size !== 45) {
    throw new Error("randomization.md: expected 45 unique mapped answers");
  }
  return rows;
}

const mean = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
const variance = (values) => values.length < 2 ? 0 : values.reduce((sum, value) => sum + (value - mean(values)) ** 2, 0) / (values.length - 1);
const sd = (values) => Math.sqrt(variance(values));
const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};
const round = (value) => Number(value.toFixed(4));
const summarize = (values) => ({
  n: values.length,
  mean: round(mean(values)),
  sd: round(sd(values)),
  variance: round(variance(values)),
  min: round(Math.min(...values)),
  max: round(Math.max(...values)),
});
const groupBy = (rows, keyFn) => {
  const groups = new Map();
  for (const row of rows) {
    const key = keyFn(row);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  }
  return groups;
};

const judge1 = readJudge("G1-J01");
const judge2 = readJudge("G1-J02");
const adjudications = new Map(
  readJsonl(`${scoreDir}/G1-ADJ01.jsonl`)
    .filter((row) => row.record_type === "adjudication")
    .map((row) => [row.answer_id, row.adjudicated_scores.rcc_at_3]),
);
if (adjudications.size !== 21) throw new Error("expected 21 adjudications");

const rows = readRunMap().map((mapping) => {
  const left = judge1.get(mapping.answer_id);
  const right = judge2.get(mapping.answer_id);
  if (!left || !right) throw new Error(`${mapping.answer_id}: missing Judge score`);
  if (left.incident_id !== mapping.incident_id || right.incident_id !== mapping.incident_id) {
    throw new Error(`${mapping.answer_id}: Incident mismatch`);
  }
  const rawJudgeMean = Object.fromEntries(metrics.map((metric) => [metric, (left.scores[metric] + right.scores[metric]) / 2]));
  const finalScores = { ...rawJudgeMean };
  if (adjudications.has(mapping.answer_id)) finalScores.rcc_at_3 = adjudications.get(mapping.answer_id);
  return {
    ...mapping,
    final_scores: finalScores,
    raw_judge_mean: rawJudgeMean,
    structure: {
      required_sections: left.structure.required_sections && right.structure.required_sections,
      refusal_empty_truncated: [left.structure.refusal_empty_truncated, right.structure.refusal_empty_truncated],
      hypotheses_count: [left.structure.hypotheses_count, right.structure.hypotheses_count],
      checks_count: [left.structure.checks_count, right.structure.checks_count],
    },
    flags: [...new Set([...left.flags, ...right.flags])],
    invalid_checks: Math.max(left.invalid_checks.length, right.invalid_checks.length),
    integrity_counts: Object.fromEntries(Object.keys(left.integrity_counts).map((key) => [key, Math.max(left.integrity_counts[key], right.integrity_counts[key])])),
  };
});

const expectedHeadings = ["## 当前诊断", "## 有序假设", "## 有序检查", "## 表示、证据与未知机制", "## 结论与置信度"];
const explicitConditionPattern = /BUSINESS\.md|DOMAIN_NOTES|Domain Notes|Full ABU|Baseline|Condition [ABC]|条件[：: ]*[ABC]|SEMANTIC\.md/gi;
const outputAuditRows = rows.map((row) => {
  const body = readFileSync(`${root}/raw-outputs/${row.run_id}.md`, "utf8").trim();
  return {
    run_id: row.run_id,
    condition: row.condition,
    codepoints: [...body].length,
    body_sha256: createHash("sha256").update(body).digest("hex"),
    complete_headings: expectedHeadings.every((heading) => body.includes(heading)),
    explicit_condition_markers: body.match(explicitConditionPattern) || [],
  };
});

function summarizeCells(scoreField) {
  const cells = [];
  const grouped = groupBy(rows, (row) => `${row.incident_id}|${row.condition}`);
  for (const [key, group] of [...grouped.entries()].sort()) {
    const [incident_id, condition] = key.split("|");
    cells.push({
      incident_id,
      condition,
      metrics: Object.fromEntries(metrics.map((metric) => [metric, summarize(group.map((row) => row[scoreField][metric]))])),
    });
  }
  return cells;
}

function summarizeConditions(cells, scoreField) {
  return ["A", "B", "C"].map((condition) => {
    const selected = cells.filter((cell) => cell.condition === condition);
    return {
      condition,
      metrics: Object.fromEntries(metrics.map((metric) => {
        const incidentMeans = selected.map((cell) => cell.metrics[metric].mean);
        return [metric, {
          incident_mean: round(mean(incidentMeans)),
          between_incident_sd: round(sd(incidentMeans)),
          descriptive_run_sd: round(sd(rows.filter((row) => row.condition === condition).map((row) => row[scoreField][metric]))),
        }];
      })),
    };
  });
}

function contrasts(cells, leftCondition, rightCondition) {
  return Object.fromEntries(metrics.map((metric) => {
    const incident_differences = ["G1-I01", "G1-I02", "G1-I03"].map((incident_id) => {
      const left = cells.find((cell) => cell.incident_id === incident_id && cell.condition === leftCondition).metrics[metric].mean;
      const right = cells.find((cell) => cell.incident_id === incident_id && cell.condition === rightCondition).metrics[metric].mean;
      return { incident_id, difference: round(left - right) };
    });
    const values = incident_differences.map((row) => row.difference);
    return [metric, {
      contrast: `${leftCondition}-${rightCondition}`,
      incident_differences,
      mean_difference: round(mean(values)),
      median_difference: round(median(values)),
      between_incident_sd: round(sd(values)),
      win_tie_loss: {
        wins: values.filter((value) => value > 1e-12).length,
        ties: values.filter((value) => Math.abs(value) <= 1e-12).length,
        losses: values.filter((value) => value < -1e-12).length,
      },
    }];
  }));
}

const finalCells = summarizeCells("final_scores");
const rawCells = summarizeCells("raw_judge_mean");
const quality = Object.fromEntries(["A", "B", "C"].map((condition) => {
  const selected = rows.filter((row) => row.condition === condition);
  return [condition, {
    answers: selected.length,
    required_sections_complete: selected.filter((row) => row.structure.required_sections).length,
    refusal_empty_or_truncated: selected.filter((row) => row.structure.refusal_empty_truncated.some((value) => value !== "none")).length,
    any_judge_flags: selected.filter((row) => row.flags.length > 0).length,
    any_invalid_checks: selected.filter((row) => row.invalid_checks > 0).length,
    any_integrity_count: selected.filter((row) => Object.values(row.integrity_counts).some((value) => value > 0)).length,
  }];
}));

const distributions = Object.fromEntries(metrics.map((metric) => {
  const values = rows.map((row) => row.final_scores[metric]);
  return [metric, {
    floor_0: values.filter((value) => value === 0).length,
    ceiling_4: values.filter((value) => value === 4).length,
    unique_values: [...new Set(values)].sort((a, b) => a - b),
  }];
}));

const withinCellVariance = Object.fromEntries(metrics.map((metric) => [metric,
  Object.fromEntries(["A", "B", "C"].map((condition) => [condition, round(mean(finalCells.filter((cell) => cell.condition === condition).map((cell) => cell.metrics[metric].variance)))])),
]));
const duplicateBodyGroups = [...groupBy(outputAuditRows, (row) => row.body_sha256).values()]
  .filter((group) => group.length > 1)
  .map((group) => group.map((row) => row.run_id));
const outputLengthByCondition = Object.fromEntries(["A", "B", "C"].map((condition) => [
  condition,
  summarize(outputAuditRows.filter((row) => row.condition === condition).map((row) => row.codepoints)),
]));

const result = {
  study_id: "G1-GAME-PILOT-V0.1",
  status: "exploratory_unblinded_analysis",
  units: { runs: 45, incidents: 3, conditions: 3, replicates_per_cell: 5 },
  scoring_rule: "Adjudicated RCC for triggered Answers; otherwise the two-Judge mean. All other metrics use the two-Judge mean.",
  primary_metrics: primary,
  guardrails,
  by_incident_condition: finalCells,
  by_condition: summarizeConditions(finalCells, "final_scores"),
  contrasts: {
    full_abu_minus_baseline: contrasts(finalCells, "C", "A"),
    full_abu_minus_domain_notes: contrasts(finalCells, "C", "B"),
    domain_notes_minus_baseline: contrasts(finalCells, "B", "A"),
  },
  variance: { mean_within_cell_variance_by_condition: withinCellVariance },
  distributions,
  execution_quality: quality,
  output_audit: {
    complete_heading_sets: outputAuditRows.filter((row) => row.complete_headings).length,
    explicit_condition_marker_hits: outputAuditRows.flatMap((row) => row.explicit_condition_markers.map((marker) => ({ run_id: row.run_id, marker }))),
    unique_body_hashes: new Set(outputAuditRows.map((row) => row.body_sha256)).size,
    duplicate_body_groups: duplicateBodyGroups,
    codepoint_length_by_condition: outputLengthByCondition,
  },
  sensitivity_raw_two_judge_mean: {
    by_incident_condition: rawCells,
    by_condition: summarizeConditions(rawCells, "raw_judge_mean"),
    contrasts: {
      full_abu_minus_baseline: contrasts(rawCells, "C", "A"),
      full_abu_minus_domain_notes: contrasts(rawCells, "C", "B"),
    },
  },
};

process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
