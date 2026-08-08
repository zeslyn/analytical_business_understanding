# G0 Independent-Judge Run Manifest

**Status:** Sealed with Disclosed G0-only Runtime Deviation

**Date:** 2026-08-08

## 1. Parent Dispatch Record

| Role | Canonical task ID | Parent `fork_turns` | Model override | Reasoning override | Artifact |
|---|---|---|---|---|---|
| Judge 1 | `/root/g0_judge_1` | `none` | Omitted; inherited | Omitted; inherited | [judge-1.md](./judge-1.md) |
| Judge 2 | `/root/g0_judge_2` | `none` | Omitted; inherited | Omitted; inherited | [judge-2.md](./judge-2.md) |
| Adjudicator | `/root/g0_adjudicator` | `none` | Omitted; inherited | Omitted; inherited | [adjudication-G0-A009.md](./adjudication-G0-A009.md) |

`fork_turns=none` 来自主 Agent 的实际 dispatch 参数。子 Agent 运行视图没有独立暴露该参数，因此各自 runtime sidecar 不反向猜测它。

## 2. Sealed Artifacts

| Artifact | SHA-256 |
|---|---|
| [judge-1.md](./judge-1.md) | `3ce7dc4fffe3bd6bbf36b109365d74824b2b9481c6a7bce87d841277cf6853e0` |
| [judge-2.md](./judge-2.md) | `78051bad3b0a283bed5fdd634bca7a6661f71305f4f0717a76fce61105d052e4` |
| [adjudication-G0-A009.md](./adjudication-G0-A009.md) | `47c61016f43db189156ca6b10b8d939e30e0f77a7e6598dea5971a14a0380a63` |

Judge 运行侧写见 [judge-1-runtime.md](./judge-1-runtime.md) 和 [judge-2-runtime.md](./judge-2-runtime.md)。两份原始评分在侧写补录和裁决后哈希保持不变。

## 3. Sequence and Blinding

1. 两名 Judge 在不同空白任务中按冻结顺序独立评分；
2. 两份原始评分完成并哈希后，主 Agent 才计算一致性；
3. 第三名空白 Adjudicator 只读取 G0-A009、对应 Case、两份相关评分和裁决规则；
4. Adjudicator 接受 cache invalidation 为 Evidence 支持的独立可接受根因，裁决 RCC@3 = 4；
5. 完成裁决后才进入 Answer Key 锚点讨论；
6. 原始评分、统计与裁决文件均未被 Answer Key 覆盖。

## 4. Runtime Deviation

本运行开始时使用 Protocol / Rubric / Judging Form v0.1。主机未向 Agent 暴露精确模型 build、独立 opaque session ID 或 reasoning effort；Judge prompt hash 也未在 dispatch 前封存。这些字段保持 `Not exposed / not pre-sealed`，不得事后猜填。

对 G0 exploratory calibration，本偏离被接受，理由是：

- 两个 Judge 和 Adjudicator 均有独立 canonical task ID 与 `fork_turns=none` dispatch 记录；
- 允许和禁止访问范围在派发时明确；
- 原始文件在比较、裁决和揭示参考键前封存并哈希；
- 评分分布、一致性和全部非一致单元已完整报告；
- G0 只决定量表是否可进入探索性 G1，不产生 F1 验证性效应。

该偏离只适用于本次 G0。G1 新评分必须预先保存 Judge 指令和最高可用运行标识；F1 必须满足 Protocol v0.2 的冻结与可复现要求，不得引用本偏离放宽正式门槛。
