#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const runId = process.argv[2];

if (!/^G1-R\d{3}$/u.test(runId ?? "")) {
  console.error("Usage: node benchmark/g1/build-run-packet.mjs G1-R###");
  process.exit(1);
}

const randomization = readFileSync(resolve(root, "benchmark/g1/randomization.md"), "utf8");
const rows = [...randomization.matchAll(/^\| (G1-R\d{3}) \| (G1-I\d{2}) \| ([1-5]) \| ([1-3]) \| ([ABC]) \| (G1-A\d{3}) \|$/gmu)];
const row = rows.find((match) => match[1] === runId);

if (!row) {
  console.error(`Unknown Run ID: ${runId}`);
  process.exit(1);
}

const incidentFiles = {
  "G1-I01": "references/game/incidents/G1-I01-activation-drop.md",
  "G1-I02": "references/game/incidents/G1-I02-engagement-drop.md",
  "G1-I03": "references/game/incidents/G1-I03-first-purchase-drop.md",
};
const conditionFiles = {
  A: [],
  B: ["references/game/DOMAIN_NOTES.md"],
  C: ["references/game/BUSINESS.md"],
};

const condition = row[5];
const incident = row[2];
const orderedFiles = [
  "benchmark/g1/analysis-instructions.md",
  ...conditionFiles[condition],
  "references/game/SEMANTIC.md",
  incidentFiles[incident],
  "benchmark/g1/analysis-prompt.md",
];

const neutralDivider = "\n\n---\n\n";
const packet = orderedFiles
  .map((relativePath) => readFileSync(resolve(root, relativePath), "utf8").trim())
  .join(neutralDivider);

if (/BUSINESS_REALITY|Restricted run map|Condition [ABC]/iu.test(packet)) {
  console.error("Refusing to emit packet with restricted or explicit condition material");
  process.exit(1);
}

process.stdout.write(`${packet}\n`);
