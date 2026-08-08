# G0 Calibration AI Dry Run

**Status:** Completed — Provisional Independent-Judge Run

**Classification:** Calibration Evidence / Provisional

> 本目录记录两个独立 AI Agent 对 G0 材料的盲评。协议 v0.2 允许独立 AI Agent 作为早期评分者；但本次运行没有完整记录精确 Judge 模型版本、Prompt hash 和 Session / Run ID，且必要裁决尚未完成，因此仍不能单独满足 G1 reliability gate。

## Blinding Rules

- Judge 1 与 Judge 2 不继承项目对话历史；
- 评分前和评分中不得读取 `benchmark/calibration/answer-key.md`；
- 不得读取另一名 Judge 的输出或讨论分数；
- 只使用 Case、Answer、`benchmark/scoring-rubric.md` 和 `benchmark/judging-form.md`；
- 原始评分完成后不得为提高一致性而覆盖；
- 任何主 Agent 统计和讨论必须与两份原始记录分开保存。

## Planned Artifacts

- `judge-1.md`：Judge 1 原始评分；
- `judge-2.md`：Judge 2 原始评分；
- `calculate-reliability.mjs`：从两份汇总表复算一致性的脚本；
- `reliability-report.md`：一致性与流程演练报告。

## Completion

- Judge 1：12/12，SHA-256 `3ce7dc4fffe3bd6bbf36b109365d74824b2b9481c6a7bce87d841277cf6853e0`；
- Judge 2：12/12，SHA-256 `78051bad3b0a283bed5fdd634bca7a6661f71305f4f0717a76fce61105d052e4`；
- 两份评分均声明未读取 Answer Key、另一 Judge 输出或 Git 历史；
- 统计结果见 [reliability-report.md](./reliability-report.md)。
