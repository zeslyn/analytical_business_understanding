#!/usr/bin/env node

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const game = resolve(root, "references/game");
const randomizationPath = resolve(root, "benchmark/g1/randomization.md");
const analystVisible = [
  "BUSINESS.md",
  "DOMAIN_NOTES.md",
  "SEMANTIC.md",
  "incidents/G1-I01-activation-drop.md",
  "incidents/G1-I02-engagement-drop.md",
  "incidents/G1-I03-first-purchase-drop.md",
];
const required = [...analystVisible, "BUSINESS_REALITY.md"];
const failures = [];

for (const relativePath of required) {
  if (!existsSync(resolve(game, relativePath))) failures.push(`Missing ${relativePath}`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

function read(relativePath) {
  return readFileSync(resolve(game, relativePath), "utf8");
}

function visibleCodePoints(text) {
  return [...text.replace(/\s+/gu, "").replace(/[`#*|>_\-]/gu, "")].length;
}

const business = read("BUSINESS.md");
const domainNotes = read("DOMAIN_NOTES.md");
const businessLength = visibleCodePoints(business);
const domainLength = visibleCodePoints(domainNotes);
const lengthDifference = Math.abs(domainLength - businessLength) / businessLength;

console.log("## Length and readability audit");
console.log(`BUSINESS visible code points: ${businessLength}`);
console.log(`DOMAIN_NOTES visible code points: ${domainLength}`);
console.log(`Relative difference: ${(lengthDifference * 100).toFixed(2)}%`);

if (lengthDifference > 0.05) {
  failures.push("DOMAIN_NOTES differs from BUSINESS by more than the frozen 5% code-point proxy tolerance");
}

for (const relativePath of ["BUSINESS.md", "DOMAIN_NOTES.md"]) {
  const text = read(relativePath);
  const h2Count = (text.match(/^## /gmu) ?? []).length;
  console.log(`${relativePath} H2 sections: ${h2Count}`);
  if (h2Count < 6) failures.push(`${relativePath} has fewer than 6 H2 sections`);
}

const forbiddenExperimentLabels = [
  /Condition\s+[ABC]/iu,
  /Equal-length/iu,
  /Full ABU/iu,
  /Baseline Condition/iu,
];

for (const relativePath of analystVisible) {
  const text = read(relativePath);
  for (const pattern of forbiddenExperimentLabels) {
    if (pattern.test(text)) failures.push(`${relativePath} exposes experiment label ${pattern}`);
  }
}

const exactRootPhrases = [
  "高分辨率视觉资源改为在进入首个标准远征后一次性预加载",
  "错误引用了高阶装备成本表",
  "错误的签名 canonicalization 顺序",
];

for (const phrase of exactRootPhrases) {
  for (const relativePath of analystVisible) {
    if (read(relativePath).includes(phrase)) {
      failures.push(`${relativePath} contains sealed root-cause phrase: ${phrase}`);
    }
  }
}

for (const relativePath of analystVisible.filter((path) => path.startsWith("incidents/"))) {
  const text = read(relativePath);
  for (const heading of ["## Incident", "## Available evidence", "## Task"]) {
    if (!text.includes(heading)) failures.push(`${relativePath} missing ${heading}`);
  }
}

console.log("\n## Leakage and structure audit");
console.log(`Analyst-visible files checked: ${analystVisible.length}`);
console.log(`Exact sealed root phrases checked: ${exactRootPhrases.length}`);

const randomization = readFileSync(randomizationPath, "utf8");
const runRows = [...randomization.matchAll(/^\| (G1-R\d{3}) \| (G1-I\d{2}) \| ([1-5]) \| ([1-3]) \| ([ABC]) \| (G1-A\d{3}) \|$/gmu)]
  .map((match) => ({
    runId: match[1],
    incident: match[2],
    replicate: Number(match[3]),
    slot: Number(match[4]),
    condition: match[5],
    answerId: match[6],
  }));

if (runRows.length !== 45) failures.push(`Randomization has ${runRows.length} run rows instead of 45`);
if (new Set(runRows.map((row) => row.runId)).size !== 45) failures.push("Run IDs are not unique");
if (new Set(runRows.map((row) => row.answerId)).size !== 45) failures.push("Answer IDs are not unique");

for (const incident of ["G1-I01", "G1-I02", "G1-I03"]) {
  for (const condition of ["A", "B", "C"]) {
    const count = runRows.filter((row) => row.incident === incident && row.condition === condition).length;
    if (count !== 5) failures.push(`${incident} × ${condition} has ${count} runs instead of 5`);
  }
}

for (const condition of ["A", "B", "C"]) {
  for (const slot of [1, 2, 3]) {
    const count = runRows.filter((row) => row.condition === condition && row.slot === slot).length;
    if (count !== 5) failures.push(`${condition} appears ${count} times in slot ${slot} instead of 5`);
  }
}

const answerSet = new Set(runRows.map((row) => row.answerId));
for (const judgeNumber of [1, 2]) {
  const match = randomization.match(new RegExp(`## Judge ${judgeNumber} blinded order\\n\\n([\\s\\S]*?)(?=\\n## |$)`, "u"));
  const order = match ? (match[1].match(/G1-A\d{3}/gu) ?? []) : [];
  if (order.length !== 45 || new Set(order).size !== 45 || order.some((id) => !answerSet.has(id))) {
    failures.push(`Judge ${judgeNumber} order is not a complete permutation of 45 Answer IDs`);
  }
}

console.log("\n## Randomization audit");
console.log(`Run rows: ${runRows.length}`);
console.log(`Unique Answer IDs: ${new Set(runRows.map((row) => row.answerId)).size}`);
console.log("Per Incident × condition: 5; per condition × slot: 5 (required)");

if (failures.length > 0) {
  console.error("\nFAIL");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("\nPASS — code-point proxy, readability structure, experiment labels, and exact root phrases passed.");
console.log("Model-native token counts must still be compared from run telemetry if the managed runtime exposes them.");
