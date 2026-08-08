import fs from "node:fs";

const judgeColumns = [3, 4, 5, 6, 7, 9, 10, 12, 13];
const dimensionNames = ["RCC@3", "Rel", "Mech", "Test", "Prior", "FDE", "VCR", "BEI", "OWR"];

function parseJudge(path) {
  const rows = new Map();
  for (const line of fs.readFileSync(path, "utf8").split("\n")) {
    if (!/^\|\s*\d+\s*\|\s*G0-A\d{3}\s*\|/.test(line)) continue;
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    rows.set(cells[1], judgeColumns.map((column) => Number(cells[column])));
  }
  if (rows.size !== 12) throw new Error(`${path}: expected 12 Judge rows, found ${rows.size}`);
  return rows;
}

function parseReference(path) {
  const rows = new Map();
  for (const line of fs.readFileSync(path, "utf8").split("\n")) {
    if (!/^\|\s*G0-A\d{3}\s*\|/.test(line)) continue;
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    const scores = cells.slice(1, 10).map((cell, index) => {
      if (cells[0] === "G0-A009" && index === 0) return 4;
      const match = cell.match(/\d/);
      if (!match) throw new Error(`${cells[0]}: cannot parse ${cell}`);
      return Number(match[0]);
    });
    rows.set(cells[0], scores);
  }
  if (rows.size !== 12) throw new Error(`${path}: expected 12 reference rows, found ${rows.size}`);
  return rows;
}

const judges = [
  ["Judge 1", parseJudge("benchmark/results/g0-calibration-ai-dry-run/judge-1.md")],
  ["Judge 2", parseJudge("benchmark/results/g0-calibration-ai-dry-run/judge-2.md")],
];
const reference = parseReference("benchmark/calibration/answer-key.md");

console.log("| Dimension | Judge 1 exact | Judge 1 within 1 | Judge 2 exact | Judge 2 within 1 |\n|---|---:|---:|---:|---:|");
for (let dimension = 0; dimension < dimensionNames.length; dimension += 1) {
  const metrics = judges.flatMap(([, rows]) => {
    const differences = [...reference].map(([id, expected]) => Math.abs(rows.get(id)[dimension] - expected[dimension]));
    return [differences.filter((value) => value === 0).length, differences.filter((value) => value <= 1).length];
  });
  console.log(`| ${dimensionNames[dimension]} | ${metrics[0]}/12 | ${metrics[1]}/12 | ${metrics[2]}/12 | ${metrics[3]}/12 |`);
}

console.log("\n## Differences greater than 1 from the provisional reference\n");
for (const [judgeName, rows] of judges) {
  for (const [id, expected] of reference) {
    rows.get(id).forEach((score, dimension) => {
      if (Math.abs(score - expected[dimension]) > 1) {
        console.log(`- ${judgeName}: ${id} ${dimensionNames[dimension]} ${score} vs reference ${expected[dimension]}`);
      }
    });
  }
}
