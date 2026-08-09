# G1-ADJ01 Runtime Sidecar

| Field | Value |
|---|---|
| Study ID | `G1-GAME-PILOT-V0.1` |
| Adjudicator ID / type | G1-ADJ01 / independent AI Agent |
| Canonical task | `/root/g1_adj01` |
| Parent dispatch | `fork_turns=none`; model and reasoning overrides omitted |
| Provider / model | OpenAI Codex managed runtime; inherited task model; exact build `Not exposed` |
| Session ID | Canonical task ID above; opaque session ID `Not exposed` |
| Sampling parameters | Platform default; `Not exposed` |
| Input delivery | 9 controlled `build-adjudicator-packet.mjs G1-ADJ01 <part>` calls; parts 0–8 exactly once in order |
| Adjudication lock commit | `ca60c9f18f64cd1efe583f7b1f5fb1e3dcbf4c1c` |
| Other reads or network | None reported |
| Write access | `apply_patch` only to `G1-ADJ01.jsonl` |
| Start time | Dispatch `2026-08-09 14:03:12 CST (+0800)`; accepted by `2026-08-09 14:03:56 CST (+0800)` |
| Completion checkpoint | At or before `2026-08-09 14:11:22 CST (+0800)` |
| Response status | Complete; 21 / 21 adjudication records |
| Independence confirmation | `true` in submitted run record |
| Format violation | None |
| Score output SHA-256 | `9546270d40f6ad1b5489e37ff4118015bc427e0fcc1718e14843494c49178326` |
| Co-origin risk | Same provider and inherited model lineage as the answer Agents and Judges; operational independence only, not model diversity |
