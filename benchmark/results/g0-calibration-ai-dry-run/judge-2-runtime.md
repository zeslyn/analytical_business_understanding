# G0 Calibration — Judge 2 Runtime Metadata

This file records only metadata explicitly exposed to the Judge 2 worker or directly verifiable from the scoring output on the local filesystem. Unknown fields are not inferred.

## Identity and execution context

| Field | Value | Basis / limitation |
|---|---|---|
| Judge role | `Judge 2` | Explicit in the parent task payload. |
| Canonical judge task ID | `/root/g0_judge_2` | Explicitly exposed as the task name in the worker message envelope. |
| Opaque session ID | `Not exposed` | No separate runtime session identifier was provided. |
| `fork_turns` value | `Not exposed` | The worker was not shown its spawn call or `fork_turns` argument. |
| Blank-context status | `Not exposed` | The worker received the parent `NEW_TASK` payload and global runtime instructions; whether it was spawned with `fork_turns=none` cannot be independently confirmed. |
| Provider | `Not exposed` | No provider field was exposed as runtime metadata. |
| Model | `GPT-5 family` | The agent instruction explicitly describes Codex as “an agent based on GPT-5”; the serving model identifier was not exposed. |
| Exact model/version | `Not exposed` | No exact model or build/version identifier was provided. |
| Reasoning effort | `Not exposed` | No reasoning-effort value was provided to the worker. |

## Tool and permission summary

- Filesystem sandbox: `workspace-write`, with managed/restricted permissions.
- Relevant writable workspace root: `/Users/zhushuohan/projects/abu`.
- Additional writable roots were exposed for other workspaces and temporary directories, but the judging task did not authorize their use.
- Network access: restricted by the runtime; no network or web tool was used for scoring.
- Shell/file tools used during scoring: `exec_command` for permitted reads and verification, and `apply_patch` for creating the scoring output.
- Collaboration tools were exposed by the runtime, but the judging instructions prohibited communication about scores; no collaboration call was made during scoring.
- No privilege escalation was requested or used.

## Judge-task read scope

The parent task authorized reads only from:

- `/Users/zhushuohan/projects/abu/benchmark/calibration/randomized-order.md`
- `/Users/zhushuohan/projects/abu/benchmark/calibration/manifest.md`
- Corresponding files under `/Users/zhushuohan/projects/abu/benchmark/calibration/cases/`
- Corresponding files under `/Users/zhushuohan/projects/abu/benchmark/calibration/answers/`
- `/Users/zhushuohan/projects/abu/benchmark/scoring-rubric.md`
- `/Users/zhushuohan/projects/abu/benchmark/judging-form.md`
- `/Users/zhushuohan/projects/abu/GLOSSARY.md` only if terminology was needed

The scoring output itself was subsequently read only for local completion/hash verification.

## Explicit prohibitions

- Do not read, search, quote, or otherwise access `/Users/zhushuohan/projects/abu/benchmark/calibration/answer-key.md`.
- Do not read `/Users/zhushuohan/projects/abu/benchmark/results/g0-calibration-ai-dry-run/judge-1.md` or any other Judge output.
- Do not inspect Git history or diffs to infer reference answers.
- Do not communicate or discuss scores with other agents.
- Do not read condition code or condition documentation.
- Do not modify the rubric or any project file other than the authorized Judge output; this metadata follow-up separately authorizes only this runtime file.

## Scoring output artifact

| Field | Value |
|---|---|
| Output path | `/Users/zhushuohan/projects/abu/benchmark/results/g0-calibration-ai-dry-run/judge-2.md` |
| Coverage recorded in output | `12 / 12` answers |
| File birth time | `2026-08-08T16:06:20+0800` |
| File birth epoch | `1786176380` |
| Final modification/completion time | `2026-08-08T16:06:58+0800` |
| Final modification epoch | `1786176418` |
| Filesystem change time | `2026-08-08T16:06:58+0800` |
| File size | `44544` bytes |
| SHA-256 | `78051bad3b0a283bed5fdd634bca7a6661f71305f4f0717a76fce61105d052e4` |

The timestamps above are the macOS filesystem `stat` values for `judge-2.md`. No separate external submission timestamp was exposed, so the final modification time is recorded as the filesystem-verifiable completion time rather than claimed as an external system event.

## Metadata capture statement

- The original scoring file `judge-2.md` was not modified during this metadata follow-up.
- This follow-up created only `judge-2-runtime.md`.
- No unavailable runtime field was guessed or backfilled.
