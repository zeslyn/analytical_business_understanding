#!/usr/bin/env node

import { readFileSync } from "node:fs";

const scoreDir = "benchmark/results/g1-game-pilot-v0.1/scores";
const dimensions = [
  ["RCC@3", "rcc_at_3"],
  ["Relevance", "relevance"],
  ["Mechanistic Specificity", "mechanistic_specificity"],
  ["Testability", "testability"],
  ["Prioritization", "prioritization"],
  ["First Discriminating Evidence", "first_discriminating_evidence"],
  ["Valid Check Ratio Score", "valid_check_ratio_score"],
  ["Business and Evidence Integrity", "business_evidence_integrity"],
  ["Open-world Resilience", "open_world_resilience"],
];

function readJudge(judgeId) {
  const lines = readFileSync(`${scoreDir}/${judgeId}.jsonl`, "utf8").trim().split("\n");
  const rows = lines.map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      throw new Error(`${judgeId} line ${index + 1}: ${error.message}`);
    }
  });
  if (rows.length !== 46 || rows[0].record_type !== "run") {
    throw new Error(`${judgeId}: expected one run record and 45 answer records`);
  }
  const answers = new Map(rows.slice(1).map((row) => [row.answer_id, row]));
  if (answers.size !== 45) throw new Error(`${judgeId}: expected 45 unique Answer IDs`);
  return answers;
}

function ordinalAlpha(valuesByJudge) {
  const categories = [...new Set(valuesByJudge.flat())].sort((a, b) => a - b);
  const index = new Map(categories.map((value, i) => [value, i]));
  const size = categories.length;
  const observed = Array.from({ length: size }, () => Array(size).fill(0));

  for (let unit = 0; unit < valuesByJudge[0].length; unit += 1) {
    const ratings = valuesByJudge.map((judge) => judge[unit]).filter(Number.isFinite);
    const m = ratings.length;
    if (m < 2) continue;
    const counts = Array(size).fill(0);
    for (const rating of ratings) counts[index.get(rating)] += 1;
    for (let c = 0; c < size; c += 1) {
      for (let k = 0; k < size; k += 1) {
        observed[c][k] += counts[c] * (counts[k] - (c === k ? 1 : 0)) / (m - 1);
      }
    }
  }

  const marginals = observed.map((row) => row.reduce((sum, value) => sum + value, 0));
  const total = marginals.reduce((sum, value) => sum + value, 0);
  const expected = Array.from({ length: size }, () => Array(size).fill(0));
  for (let c = 0; c < size; c += 1) {
    for (let k = 0; k < size; k += 1) {
      expected[c][k] = marginals[c] * (marginals[k] - (c === k ? 1 : 0)) / (total - 1);
    }
  }

  const distance = Array.from({ length: size }, () => Array(size).fill(0));
  for (let c = 0; c < size; c += 1) {
    for (let k = 0; k < size; k += 1) {
      if (c === k) continue;
      const low = Math.min(c, k);
      const high = Math.max(c, k);
      let intervalMass = 0;
      for (let g = low; g <= high; g += 1) intervalMass += marginals[g];
      intervalMass -= (marginals[low] + marginals[high]) / 2;
      distance[c][k] = intervalMass ** 2;
    }
  }

  let observedDisagreement = 0;
  let expectedDisagreement = 0;
  for (let c = 0; c < size; c += 1) {
    for (let k = 0; k < size; k += 1) {
      observedDisagreement += observed[c][k] * distance[c][k];
      expectedDisagreement += expected[c][k] * distance[c][k];
    }
  }
  return expectedDisagreement === 0 ? 1 : 1 - observedDisagreement / expectedDisagreement;
}

const mean = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
const distribution = (values) => [0, 1, 2, 3, 4].map((level) => `${level}:${values.filter((value) => value === level).length}`).join("; ");
const equivalence = new Set(["full", "mechanism-equivalent"]);

const judge1 = readJudge("G1-J01");
const judge2 = readJudge("G1-J02");
const answerIds = [...judge1.keys()].sort();
if (answerIds.some((id) => !judge2.has(id))) throw new Error("Judge Answer sets do not match");

const results = dimensions.map(([name, key]) => {
  const scores1 = answerIds.map((id) => judge1.get(id).scores[key]);
  const scores2 = answerIds.map((id) => judge2.get(id).scores[key]);
  const exact = scores1.filter((value, index) => value === scores2[index]).length;
  const withinOne = scores1.filter((value, index) => Math.abs(value - scores2[index]) <= 1).length;
  const overOne = answerIds.filter((id, index) => Math.abs(scores1[index] - scores2[index]) > 1);
  const levels = [...new Set([...scores1, ...scores2])].sort((a, b) => a - b);
  const alpha = ordinalAlpha([scores1, scores2]);
  const gate = levels.length < 3 ? "Distribution warning" : alpha >= 0.8 ? "Target met" : alpha >= 0.667 ? "Tentative" : "Stop";
  return { name, key, scores1, scores2, exact, withinOne, overOne, levels, alpha, gate };
});

const triggerMap = new Map();
const addTrigger = (answerId, type, detail) => {
  if (!triggerMap.has(answerId)) triggerMap.set(answerId, []);
  triggerMap.get(answerId).push({ type, detail });
};

for (const result of results) {
  for (const answerId of result.overOne) {
    const a = judge1.get(answerId).scores[result.key];
    const b = judge2.get(answerId).scores[result.key];
    addTrigger(answerId, "subscore-difference-over-1", `${result.name}: ${a} vs ${b}`);
  }
}

for (const answerId of answerIds) {
  const a = judge1.get(answerId);
  const b = judge2.get(answerId);
  for (let rank = 0; rank < 3; rank += 1) {
    const left = equivalence.has(a.root_mapping[rank].classification);
    const right = equivalence.has(b.root_mapping[rank].classification);
    if (left !== right) {
      addTrigger(answerId, "root-equivalence-disagreement", `Rank ${rank + 1}: ${a.root_mapping[rank].classification} vs ${b.root_mapping[rank].classification}`);
    }
  }
  const candidate = [...a.root_mapping, ...b.root_mapping].some((row) => row.classification === "candidate-valid-alternative")
    || a.flags.includes("candidate-valid-alternative")
    || b.flags.includes("candidate-valid-alternative");
  if (candidate) addTrigger(answerId, "candidate-valid-alternative", "At least one Judge marked a candidate valid alternative");

  const conflictA = a.integrity_counts.material_business_conflicts > 0;
  const conflictB = b.integrity_counts.material_business_conflicts > 0;
  if (conflictA !== conflictB) {
    addTrigger(answerId, "material-conflict-disagreement", `${a.integrity_counts.material_business_conflicts} vs ${b.integrity_counts.material_business_conflicts}`);
  }
}

const triggers = [...triggerMap.entries()].map(([answerId, reasons]) => ({ answerId, reasons }));

if (process.argv.includes("--json")) {
  process.stdout.write(`${JSON.stringify({
    study_id: "G1-GAME-PILOT-V0.1",
    n: 45,
    results: results.map(({ scores1, scores2, ...result }) => ({
      ...result,
      mean_judge_1: mean(scores1),
      mean_judge_2: mean(scores2),
      mean_difference_j1_minus_j2: mean(scores1) - mean(scores2),
      distribution_judge_1: distribution(scores1),
      distribution_judge_2: distribution(scores2),
    })),
    triggers,
  }, null, 2)}\n`);
  process.exit(0);
}

console.log("## Reliability by primary subdimension\n");
console.log("| Dimension | N | Levels | Ordinal alpha | Exact | Within 1 | >1 | Gate |");
console.log("|---|---:|---|---:|---:|---:|---:|---|");
for (const result of results) {
  console.log(`| ${result.name} | 45 | ${result.levels.join(", ")} | ${result.alpha.toFixed(3)} | ${result.exact}/45 (${(result.exact / 45 * 100).toFixed(1)}%) | ${result.withinOne}/45 (${(result.withinOne / 45 * 100).toFixed(1)}%) | ${result.overOne.length} | ${result.gate} |`);
}

console.log("\n## Judge distributions and directional bias\n");
console.log("| Dimension | J01 mean | J02 mean | J01 − J02 | J01 distribution | J02 distribution |");
console.log("|---|---:|---:|---:|---|---|");
for (const result of results) {
  console.log(`| ${result.name} | ${mean(result.scores1).toFixed(3)} | ${mean(result.scores2).toFixed(3)} | ${(mean(result.scores1) - mean(result.scores2)).toFixed(3)} | ${distribution(result.scores1)} | ${distribution(result.scores2)} |`);
}

console.log("\n## Required adjudication triggers\n");
console.log(`Triggered Answers: ${triggers.length}`);
for (const trigger of triggers) {
  console.log(`- ${trigger.answerId}: ${trigger.reasons.map((reason) => `${reason.type} (${reason.detail})`).join("; ")}`);
}
