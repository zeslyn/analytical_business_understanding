#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const judgeId = process.argv[2];
const part = Number(process.argv[3]);

const judgeNumber = { "G1-J01": 1, "G1-J02": 2 }[judgeId];
if (!judgeNumber || !Number.isInteger(part) || part < 0 || part > 10) {
  console.error("Usage: node benchmark/g1/build-judge-packet.mjs G1-J01|G1-J02 PART(0-10)");
  process.exit(1);
}

const read = (relativePath) => readFileSync(resolve(root, relativePath), "utf8").trim();
const randomization = read("benchmark/g1/randomization.md");
const rows = [...randomization.matchAll(/^\| (G1-R\d{3}) \| (G1-I\d{2}) \| ([1-5]) \| ([1-3]) \| ([ABC]) \| (G1-A\d{3}) \|$/gmu)];
const incidentByAnswer = new Map(rows.map((row) => [row[6], row[2]]));
const orderMatch = randomization.match(
  new RegExp(`## Judge ${judgeNumber} blinded order\\n\\n([\\s\\S]*?)(?=\\n## |$)`, "u"),
);

if (!orderMatch) {
  console.error(`Missing frozen blinded order for ${judgeId}`);
  process.exit(1);
}

const answerOrder = [...orderMatch[1].matchAll(/^\d+\. (G1-A\d{3})$/gmu)].map((match) => match[1]);
if (answerOrder.length !== 45 || new Set(answerOrder).size !== 45) {
  console.error(`Invalid blinded order for ${judgeId}`);
  process.exit(1);
}

const incidentFiles = {
  "G1-I01": "references/game/incidents/G1-I01-activation-drop.md",
  "G1-I02": "references/game/incidents/G1-I02-engagement-drop.md",
  "G1-I03": "references/game/incidents/G1-I03-first-purchase-drop.md",
};
const targetPath = `benchmark/results/g1-game-pilot-v0.1/scores/${judgeId}.jsonl`;
const divider = "\n\n---\n\n";

const caseMaterial = Object.entries(incidentFiles)
  .map(([incidentId, path]) => `# Scoring Case ${incidentId}\n\n${read(path)}`)
  .join(divider);

const renderAnswer = (answerId, index) => {
    const incidentId = incidentByAnswer.get(answerId);
    if (!incidentId) throw new Error(`Missing Incident for ${answerId}`);
    const body = read(`benchmark/results/g1-game-pilot-v0.1/blinded-outputs/${answerId}.md`);
    return `# Answer ${index + 1} of 45\n\nAnswer ID: ${answerId}\nIncident ID: ${incidentId}\n\n${body}`;
};

let packet;
if (part === 0) {
  packet = [
    `# G1 Blind Judge Packet — Part 0 of 10\n\nJudge ID: ${judgeId}\nTarget path: ${targetPath}\nFrozen answer count: 45\nControlled read sequence: parts 0 through 10, exactly once each`,
    read("benchmark/g1/judge-instructions.md"),
    read("benchmark/scoring-rubric.md"),
  ].join(divider);
} else if (part === 1) {
  packet = [
    `# G1 Blind Judge Packet — Part 1 of 10\n\nJudge ID: ${judgeId}\nThis part contains the remaining shared scoring context and no Answers.`,
    read("benchmark/judging-form.md"),
    `# Shared Semantic Layer\n\n${read("references/game/SEMANTIC.md")}`,
    `# Hidden Business Reality for Scoring\n\n${read("references/game/BUSINESS_REALITY.md")}`,
    caseMaterial,
  ].join(divider);
} else {
  const start = (part - 2) * 5;
  const selected = answerOrder.slice(start, start + 5);
  const answers = selected.map((answerId, offset) => renderAnswer(answerId, start + offset)).join(divider);
  packet = `# G1 Blind Judge Packet — Part ${part} of 10\n\nJudge ID: ${judgeId}\nFrozen positions: ${start + 1}–${start + selected.length}\n\n${answers}`;
}

if (/G1-R\d{3}/u.test(packet)) {
  console.error("Refusing to emit Judge packet containing a raw Run ID");
  process.exit(1);
}

process.stdout.write(`${packet}\n`);
