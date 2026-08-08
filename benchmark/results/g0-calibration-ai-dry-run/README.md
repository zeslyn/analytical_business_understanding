# G0 Calibration AI Dry Run

**Status:** Completed — Provisional Independent-Judge Run

**Classification:** Calibration Evidence / Provisional

> 本目录记录两个独立 AI Agent 对 G0 材料的盲评。协议 v0.2 允许独立 AI Agent 作为早期评分者。本次未暴露的精确运行字段已作为 G0-only 偏离封存，必要裁决和锚点讨论均已完成；结果可支持 G1 Pilot 的量表门禁，不适用于 F1。

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
- `compare-reference.mjs`：揭示后比较 Judge 与 provisional reference 的脚本；
- `reliability-report.md`：一致性与流程演练报告；
- `judge-1-runtime.md`、`judge-2-runtime.md`：可得运行元数据侧写；
- `adjudication-G0-A009.md`：合理替代解释裁决；
- `reference-discussion.md`：揭示后的参考锚点讨论；
- `run-manifest.md`：dispatch、哈希、顺序和 G0-only 偏离记录。

## Completion

- Judge 1：12/12，SHA-256 `3ce7dc4fffe3bd6bbf36b109365d74824b2b9481c6a7bce87d841277cf6853e0`；
- Judge 2：12/12，SHA-256 `78051bad3b0a283bed5fdd634bca7a6661f71305f4f0717a76fce61105d052e4`；
- 两份评分均声明未读取 Answer Key、另一 Judge 输出或 Git 历史；
- 统计结果见 [reliability-report.md](./reliability-report.md)。
