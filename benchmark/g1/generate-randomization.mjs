#!/usr/bin/env node

import { createHash } from "node:crypto";

const studyId = "G1-GAME-PILOT-V0.1";
const incidents = ["G1-I01", "G1-I02", "G1-I03"];
const conditions = ["A", "B", "C"];
const replicates = [1, 2, 3, 4, 5];
const oddOrders = ["ABC", "BCA", "CAB"];
const evenOrders = ["ACB", "CBA", "BAC"];

function digest(label) {
  return createHash("sha256").update(`${studyId}|${label}`).digest("hex");
}

const blocks = [];
for (const replicate of replicates) {
  const orders = replicate % 2 === 1 ? oddOrders : evenOrders;
  incidents.forEach((incident, incidentIndex) => {
    const rotatedIndex = (incidentIndex + replicate - 1) % incidents.length;
    blocks.push({ incident, replicate, order: orders[rotatedIndex] });
  });
}

const runCells = blocks.flatMap((block) =>
  [...block.order].map((condition, index) => ({
    incident: block.incident,
    replicate: block.replicate,
    slot: index + 1,
    condition,
  })),
);

const shuffledAnswerNumbers = [...Array(runCells.length).keys()]
  .map((number) => number + 1)
  .sort((left, right) =>
    digest(`answer-number|${left}`).localeCompare(digest(`answer-number|${right}`)),
  );

const runs = runCells.map((cell, index) => ({
  runId: `G1-R${String(index + 1).padStart(3, "0")}`,
  answerId: `G1-A${String(shuffledAnswerNumbers[index]).padStart(3, "0")}`,
  ...cell,
}));

function judgeOrder(judgeId) {
  return runs
    .map((run) => run.answerId)
    .sort((left, right) =>
      digest(`${judgeId}|${left}`).localeCompare(digest(`${judgeId}|${right}`)),
    );
}

const positionCounts = Object.fromEntries(
  conditions.map((condition) => [condition, [0, 0, 0]]),
);
for (const run of runs) positionCounts[run.condition][run.slot - 1] += 1;

console.log(`# ${studyId} deterministic randomization`);
console.log(`Seed: SHA-256 labels rooted at \`${studyId}\`.`);
console.log("\n## Position balance\n");
console.log("| Condition | Slot 1 | Slot 2 | Slot 3 |");
console.log("|---|---:|---:|---:|");
for (const condition of conditions) {
  console.log(`| ${condition} | ${positionCounts[condition].join(" | ")} |`);
}
console.log("\n## Restricted run map\n");
console.log("| Run ID | Incident | Replicate | Slot | Condition | Answer ID |");
console.log("|---|---|---:|---:|---|---|");
for (const run of runs) {
  console.log(`| ${run.runId} | ${run.incident} | ${run.replicate} | ${run.slot} | ${run.condition} | ${run.answerId} |`);
}
for (const judgeId of ["judge-1", "judge-2"]) {
  console.log(`\n## ${judgeId} blinded order\n`);
  console.log(judgeOrder(judgeId).map((id, index) => `${index + 1}. ${id}`).join("\n"));
}
