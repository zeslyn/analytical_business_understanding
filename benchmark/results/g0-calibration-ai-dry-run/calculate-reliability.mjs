import fs from "node:fs";

const dimensions = [
  ["RCC@3", 3],
  ["Relevance", 4],
  ["Mechanistic Specificity", 5],
  ["Testability", 6],
  ["Prioritization", 7],
  ["First Discriminating Evidence", 9],
  ["Valid Check Ratio Score", 10],
  ["Business and Evidence Integrity", 12],
  ["Open-world Resilience", 13],
];

function parseSummary(path) {
  const rows = new Map();
  for (const line of fs.readFileSync(path, "utf8").split("\n")) {
    if (!/^\|\s*\d+\s*\|\s*G0-A\d{3}\s*\|/.test(line)) continue;
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    rows.set(cells[1], cells);
  }
  if (rows.size !== 12) throw new Error(`${path}: expected 12 summary rows, found ${rows.size}`);
  return rows;
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

const judge1 = parseSummary("benchmark/results/g0-calibration-ai-dry-run/judge-1.md");
const judge2 = parseSummary("benchmark/results/g0-calibration-ai-dry-run/judge-2.md");
const answerIds = [...judge1.keys()];
if (answerIds.some((id) => !judge2.has(id))) throw new Error("Judge answer sets do not match");

console.log("| Dimension | N | Distinct levels | Ordinal alpha | Exact agreement | Within-1 agreement | >1 differences | Gate |\n|---|---:|---|---:|---:|---:|---:|---|");
for (const [name, column] of dimensions) {
  const scores1 = answerIds.map((id) => Number(judge1.get(id)[column]));
  const scores2 = answerIds.map((id) => Number(judge2.get(id)[column]));
  const exact = scores1.filter((value, i) => value === scores2[i]).length;
  const withinOne = scores1.filter((value, i) => Math.abs(value - scores2[i]) <= 1).length;
  const overOne = scores1.filter((value, i) => Math.abs(value - scores2[i]) > 1).length;
  const levels = [...new Set([...scores1, ...scores2])].sort((a, b) => a - b);
  const alpha = ordinalAlpha([scores1, scores2]);
  const gate = alpha >= 0.8 && levels.length >= 3 ? "AI dry-run target met" : alpha >= 0.667 ? "Tentative" : "Stop";
  console.log(`| ${name} | 12 | ${levels.join(", ")} | ${alpha.toFixed(3)} | ${exact}/12 (${(exact / 12 * 100).toFixed(1)}%) | ${withinOne}/12 (${(withinOne / 12 * 100).toFixed(1)}%) | ${overOne} | ${gate} |`);
}

console.log("\n## Non-exact cells\n");
for (const [name, column] of dimensions) {
  const differences = answerIds.flatMap((id) => {
    const a = Number(judge1.get(id)[column]);
    const b = Number(judge2.get(id)[column]);
    return a === b ? [] : [`${id}: ${a} vs ${b}`];
  });
  if (differences.length) console.log(`- ${name}: ${differences.join("; ")}`);
}
