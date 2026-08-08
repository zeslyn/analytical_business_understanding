# G0 Calibration — Judge 1 Runtime Metadata

This file records only metadata explicitly exposed during the Judge 1 run or objectively obtained from the filesystem. Unexposed fields are marked `Not exposed`; no values are inferred or guessed.

## Identity and execution context

| Field | Value | Basis |
|---|---|---|
| Judge task ID | `/root/g0_judge_1` | Canonical task name exposed in the task dispatch. |
| Opaque platform session ID | Not exposed | No separate session identifier was provided to this agent. |
| `fork_turns` setting | Not exposed | The dispatch did not expose the spawning call or its arguments. |
| Blank-context execution | No | The run began with a task payload plus system/developer/environment instructions; whether any additional parent turns were inherited is not exposed. |
| Runtime surface | Codex desktop | Explicitly identified by the runtime application context. |

## Provider and model

| Field | Value | Basis |
|---|---|---|
| Provider | Not exposed | No authoritative runtime provider field was exposed. |
| Model family | GPT-5 | The runtime developer instruction explicitly described Codex as “an agent based on GPT-5”. |
| Exact model name | Not exposed | No exact model identifier was exposed. |
| Exact model version / snapshot | Not exposed | No version or snapshot identifier was exposed. |
| Reasoning effort | Not exposed | No reasoning-effort value was exposed in the task dispatch. |

## Tool and permission summary

- Filesystem sandbox mode: `workspace-write`.
- Runtime filesystem policy exposed broad read access and write access to configured workspace roots and temporary directories. For this metadata task, the effective user-authorized write scope was narrower: create only `benchmark/results/g0-calibration-ai-dry-run/judge-1-runtime.md` and do not modify the original score file.
- Shell execution and `apply_patch` were available. The runtime also exposed web/image and collaboration capabilities, but they were not needed for metadata collection.
- Network access was restricted by the sandbox. No network request or privilege escalation was used for this run or this metadata collection.
- No sub-agent was spawned and no score discussion with another Judge occurred.
- Filesystem metadata was collected with `stat`; the digest was collected with `shasum -a 256`.

## Task-level file scope

### Files permitted for the scoring run

- `benchmark/calibration/randomized-order.md`
- `benchmark/calibration/manifest.md`
- The mapped files under `benchmark/calibration/cases/`
- The mapped files under `benchmark/calibration/answers/`
- `benchmark/scoring-rubric.md`
- `benchmark/judging-form.md`
- `GLOSSARY.md` only if terminology required it

`GLOSSARY.md` was not needed or read during the scoring run.

### Explicitly prohibited

- `benchmark/calibration/answer-key.md`
- `benchmark/results/g0-calibration-ai-dry-run/judge-2.md`
- Any other Judge output
- Git history or diffs used to infer a reference answer
- Changes to the rubric or any project file other than the authorized output file

For this follow-up metadata task, `judge-1.md` was used only as the already-produced scoring artifact whose filesystem metadata and digest were measured; it was not modified.

## Scoring artifact and verifiable completion metadata

| Field | Value |
|---|---|
| Scoring output path | `/Users/zhushuohan/projects/abu/benchmark/results/g0-calibration-ai-dry-run/judge-1.md` |
| Filesystem birth time | `2026-08-08 16:04:46 CST` |
| Filesystem birth time (Unix epoch) | `1786176286` |
| Filesystem final modification / completion time | `2026-08-08 16:06:21 CST` |
| Filesystem final modification time (Unix epoch) | `1786176381` |
| Size | `49,454 bytes` |
| SHA-256 | `3ce7dc4fffe3bd6bbf36b109365d74824b2b9481c6a7bce87d841277cf6853e0` |
| Verification commands | `stat -f ... judge-1.md`; `shasum -a 256 judge-1.md` |

The final modification time is recorded as the filesystem-verifiable completion timestamp for the scoring artifact. It is not a claimed external submission-receipt timestamp; no such receipt timestamp was exposed.
