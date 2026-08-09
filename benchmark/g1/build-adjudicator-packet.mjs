#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const adjudicatorId = process.argv[2];
const part = Number(process.argv[3]);

if (adjudicatorId !== "G1-ADJ01" || !Number.isInteger(part) || part < 0 || part > 8) {
  console.error("Usage: node benchmark/g1/build-adjudicator-packet.mjs G1-ADJ01 PART(0-8)");
  process.exit(1);
}

const read = (relativePath) => readFileSync(resolve(root, relativePath), "utf8").trim();
const readJsonl = (relativePath) => read(relativePath).split("\n").map((line) => JSON.parse(line));
const targetPath = "benchmark/results/g1-game-pilot-v0.1/scores/G1-ADJ01.jsonl";
const divider = "\n\n---\n\n";
const triggers = JSON.parse(read("benchmark/results/g1-game-pilot-v0.1/scores/adjudication-triggers.json")).triggers;
const judge1 = new Map(readJsonl("benchmark/results/g1-game-pilot-v0.1/scores/G1-J01.jsonl").filter((row) => row.record_type === "answer").map((row) => [row.answer_id, row]));
const judge2 = new Map(readJsonl("benchmark/results/g1-game-pilot-v0.1/scores/G1-J02.jsonl").filter((row) => row.record_type === "answer").map((row) => [row.answer_id, row]));

if (triggers.length !== 21 || judge1.size !== 45 || judge2.size !== 45) {
  console.error("Refusing to emit an incomplete adjudication packet");
  process.exit(1);
}

const incidentFiles = {
  "G1-I01": "references/game/incidents/G1-I01-activation-drop.md",
  "G1-I02": "references/game/incidents/G1-I02-engagement-drop.md",
  "G1-I03": "references/game/incidents/G1-I03-first-purchase-drop.md",
};
const caseMaterial = Object.entries(incidentFiles)
  .map(([incidentId, path]) => `# Scoring Case ${incidentId}\n\n${read(path)}`)
  .join(divider);

const renderDispute = (trigger, index) => {
  const left = judge1.get(trigger.answer_id);
  const right = judge2.get(trigger.answer_id);
  if (!left || !right || left.incident_id !== right.incident_id) throw new Error(`Invalid Judge records for ${trigger.answer_id}`);
  const body = read(`benchmark/results/g1-game-pilot-v0.1/blinded-outputs/${trigger.answer_id}.md`);
  return [
    `# Dispute ${index + 1} of 21\n\nAnswer ID: ${trigger.answer_id}\nIncident ID: ${left.incident_id}\nTrigger reasons: ${trigger.reasons.join("; ")}`,
    `## Anonymous Answer\n\n${body}`,
    `## Original G1-J01 Record\n\n${JSON.stringify(left)}`,
    `## Original G1-J02 Record\n\n${JSON.stringify(right)}`,
  ].join(divider);
};

let packet;
if (part === 0) {
  packet = [
    `# G1 Blind Adjudicator Packet — Part 0 of 8\n\nAdjudicator ID: ${adjudicatorId}\nTarget path: ${targetPath}\nTriggered Answer count: 21\nControlled read sequence: parts 0 through 8, exactly once each`,
    read("benchmark/g1/adjudicator-instructions.md"),
    read("benchmark/scoring-rubric.md"),
  ].join(divider);
} else if (part === 1) {
  packet = [
    `# G1 Blind Adjudicator Packet — Part 1 of 8\n\nAdjudicator ID: ${adjudicatorId}\nThis part contains shared adjudication context and no disputed Answers.`,
    `# Shared Semantic Layer\n\n${read("references/game/SEMANTIC.md")}`,
    `# Hidden Business Reality for Scoring\n\n${read("references/game/BUSINESS_REALITY.md")}`,
    caseMaterial,
  ].join(divider);
} else {
  const start = (part - 2) * 3;
  const selected = triggers.slice(start, start + 3);
  const disputes = selected.map((trigger, offset) => renderDispute(trigger, start + offset)).join(divider);
  packet = `# G1 Blind Adjudicator Packet — Part ${part} of 8\n\nAdjudicator ID: ${adjudicatorId}\nFrozen dispute positions: ${start + 1}–${start + selected.length}\n\n${disputes}`;
}

if (/G1-R\d{3}/u.test(packet)) {
  console.error("Refusing to emit Adjudicator packet containing a raw Run ID");
  process.exit(1);
}

process.stdout.write(`${packet}\n`);
