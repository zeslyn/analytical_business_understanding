# G0 Calibration AI Dry-run Reliability Report

**Status:** Complete — Provisional Independent-Judge Run

**Date:** 2026-08-08

**Judges:** Two independent blank-context AI Agents

> Protocol v0.2 不再要求评分者必须是人类。本次结果在数值上达到一致性目标；未暴露的运行字段作为 G0-only 偏离记录于 [run-manifest.md](./run-manifest.md)，必要裁决与锚点讨论已经完成。

## 1. Preserved Inputs

| Artifact | Answers | SHA-256 |
|---|---:|---|
| [judge-1.md](./judge-1.md) | 12/12 | `3ce7dc4fffe3bd6bbf36b109365d74824b2b9481c6a7bce87d841277cf6853e0` |
| [judge-2.md](./judge-2.md) | 12/12 | `78051bad3b0a283bed5fdd634bca7a6661f71305f4f0717a76fce61105d052e4` |

两份文件均在比较前完成并封存。统计过程未读取或使用 `benchmark/calibration/answer-key.md`，也未修改任何原始分数。

本次运行发生在 Protocol、Rubric 和 Judging Form 升级到 v0.2 之前，实际使用的是 v0.1 评分材料。两个 Judge 的空白会话和文件隔离已有记录，但精确模型 build、Judge prompt hash 和 Session / Run ID 未在启动时封存；该缺口不能事后推断补写。

## 2. Method

- 评分单位：12 个配对 Answer；
- 维度：RCC@3、四个 HQI 子维度、两个 DEE 子维度、BEI、OWR；
- 一致性：逐维度 ordinal Krippendorff’s alpha；
- 辅助统计：完全一致率、相差不超过 1 分的一致率、相差超过 1 分的单元数；
- 分布门槛：两名 Judge 原始评分并集至少覆盖 3 个分值；
- 复算命令：`node benchmark/results/g0-calibration-ai-dry-run/calculate-reliability.mjs`。

## 3. Results

| Dimension | N | Distinct levels | Ordinal alpha | Exact agreement | Within-1 agreement | >1 differences | AI dry-run result |
|---|---:|---|---:|---:|---:|---:|---|
| RCC@3 | 12 | 0, 2, 3, 4 | 1.000 | 12/12 (100.0%) | 12/12 (100.0%) | 0 | Target met |
| Relevance | 12 | 0, 1, 2, 3, 4 | 0.986 | 11/12 (91.7%) | 12/12 (100.0%) | 0 | Target met |
| Mechanistic Specificity | 12 | 0, 1, 2, 3, 4 | 0.937 | 9/12 (75.0%) | 12/12 (100.0%) | 0 | Target met |
| Testability | 12 | 0, 1, 2, 3, 4 | 0.946 | 9/12 (75.0%) | 12/12 (100.0%) | 0 | Target met |
| Prioritization | 12 | 0, 2, 4 | 1.000 | 12/12 (100.0%) | 12/12 (100.0%) | 0 | Target met |
| First Discriminating Evidence | 12 | 0, 1, 2, 4 | 0.929 | 9/12 (75.0%) | 12/12 (100.0%) | 0 | Target met |
| Valid Check Ratio Score | 12 | 0, 1, 2, 4 | 1.000 | 12/12 (100.0%) | 12/12 (100.0%) | 0 | Target met |
| Business and Evidence Integrity | 12 | 0, 1, 2, 3, 4 | 0.949 | 9/12 (75.0%) | 12/12 (100.0%) | 0 | Target met |
| Open-world Resilience | 12 | 0, 1, 2, 4 | 0.963 | 10/12 (83.3%) | 12/12 (100.0%) | 0 | Target met |

## 4. Non-exact Cells

- Relevance：G0-A002，3 vs 2；
- Mechanistic Specificity：G0-A007，4 vs 3；G0-A008，0 vs 1；G0-A005，3 vs 2；
- Testability：G0-A007，4 vs 3；G0-A005，3 vs 2；G0-A012，1 vs 0；
- First Discriminating Evidence：G0-A003，0 vs 1；G0-A011，2 vs 1；G0-A012，1 vs 0；
- Business and Evidence Integrity：G0-A007，2 vs 1；G0-A005，2 vs 1；G0-A012，3 vs 4；
- Open-world Resilience：G0-A008，1 vs 0；G0-A012，1 vs 2。

所有差异均不超过 1 分。Mechanistic Specificity、Testability、First Discriminating Evidence 和 BEI 的完全一致率最低，均为 75%；这些维度应作为后续评分者校准讨论的优先观察点。

## 5. Procedural Findings

1. 两个空白上下文 Agent 都能按 Judging Form 完成全部字段，说明当前材料和量表在流程上可执行；
2. 每个主要子维度都覆盖至少 3 个分值，未出现无法解释 alpha 的退化分布；
3. 所有独立 AI Judge 维度达到 `α ≥ 0.80`，数值一致性门槛已满足；
4. 两名 Judge 都把 G0-A009 标记为 `candidate-valid-alternative`；独立裁决已接受该机制并维持 RCC@3 = 4；
5. Answer Key 未用于本报告的数值计算；揭示后的讨论单独保存在 [reference-discussion.md](./reference-discussion.md)。

## 6. Decision

**Independent AI Judge run:** Numeric reliability target met.

**G0 rubric gate:** Eligible for G1 Pilot with a disclosed G0-only runtime deviation.

本结果不能用于 F1。G1 的 Judge 指令、最高可用运行标识和产物哈希必须在运行前封存；F1 仍需满足 Protocol v0.2 的完整冻结条件。
