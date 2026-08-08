# Benchmark

**Classification:** Research / Engineering  
**Status:** Draft Preregistration

**Last updated:** 2026-08-08

**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)

本目录用于验证增加 `BUSINESS.md` 是否改善 AI 的分析表现。

## 当前实验主张

第一轮正式实验只回答：

> 显式 ABU 是否在相同模型、Incident、Semantic Layer 和证据预算下，改善根因覆盖、假设质量和证据效率？

Transition 的独立价值、Hybrid View 和错误 ABU 恢复能力属于次级或探索性问题，不能替代主要 ABU 对照。

## 核心实验条件

| 条件 | 输入 | 解释目的 |
|---|---|---|
| A — Baseline | `SEMANTIC.md + INCIDENT.md` | 只有数据语义和事件证据 |
| B — Equal-length Domain Notes | `DOMAIN_NOTES.md + SEMANTIC.md + INCIDENT.md` | 控制更多文本和一般领域知识 |
| C — Full ABU | `BUSINESS.md + SEMANTIC.md + INCIDENT.md` | 测量显式 ABU 的增量价值 |

## 候选控制条件

[RN-0002](../research/RN-0002-properties-of-abu.md) 提出：

- **Perturbed ABU**：用缺失、错误领域或过期知识探索错误先验和恢复能力。

[RN-0003](../research/RN-0003-why-transition.md) 提出：

- **Transition Skeleton**：只包含 Actor、State 和 Transition 索引；
- **Mechanism-augmented Transition**：增加机制、约束和区分性 Evidence；
- **Hybrid View**：以 Transition 为索引，并引用最适合的 Process、Journey、Causal Model 或 Stock–Flow 视图。

这些探索条件只有在 [protocol.md](./protocol.md) 冻结案例子集、输入差异和评价指标后才能运行。探索性结果不得与验证性结果混合。

## 分阶段执行

1. **G0 — Rubric calibration：** 用非 Benchmark 样例校准评分量表；
2. **G1 — Game pilot：** 3 个游戏 Incident，A/B/C 每条件暂定 5 次，仅用于可运行性和方差估计；
3. **F1 — Cross-industry confirmation：** 暂定 5 行业 × 3 个未见 Incident，样本量在功效分析后冻结；
4. **E1 — Representation and safety：** 在预先指定子集上探索 Transition、Hybrid View 和 Perturbed ABU。

G1 的案例和输出不得进入 F1 的验证性效应估计。

## 目录内容

- [protocol.md](./protocol.md)：实验设计、控制变量、随机化和重复运行；
- [scoring-rubric.md](./scoring-rubric.md)：评价维度和评分锚点；
- [judging-form.md](./judging-form.md)：独立评分与裁决所需记录字段；
- [calibration](./calibration/)：G0 的 4 个非 Benchmark 案例、12 个匿名回答、盲评顺序和校准记录；
- [results](./results/)：冻结协议后的运行记录和结果。

## 当前冻结状态

- Protocol：v0.2，Draft Preregistration — Not Frozen；
- Scoring Rubric：v0.2，Draft Preregistration — Not Calibrated；
- Judging Form：v0.2，Draft；
- G0 Calibration Set：v0.1，材料及首轮独立 AI 评分已完成，运行元数据与裁决尚未完成；
- Decision：见 [DR-0002](../docs/decisions/DR-0002-benchmark-preregistration-design.md)，当前为 Proposed。

在模型版本、Prompt、MID、护栏界值、功效分析、评分一致性和角色隔离完成前，不得开始 F1。
