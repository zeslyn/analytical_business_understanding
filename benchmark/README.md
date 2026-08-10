# Benchmark

**Classification:** Research / Engineering  
**Status:** Draft Preregistration

**Last updated:** 2026-08-10

**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)

本目录用于验证增加 `BUSINESS.md` 是否改善 LLM 的分析表现。

## 当前实验主张

第一轮正式实验只回答：

> 在贴近一般需求表达的 Natural Request 下，显式 ABU 是否在相同模型、Incident、Semantic Layer 和证据预算下，改善根因覆盖、假设质量和证据效率？

Transition 的独立价值、Hybrid View 和错误 ABU 恢复能力属于次级或探索性问题，不能替代主要 ABU 对照。

## 核心实验条件

| 条件 | 输入 | 解释目的 |
|---|---|---|
| A-N — Baseline | `SEMANTIC.md + INCIDENT.md` | Natural Request 下只有数据语义和事件证据 |
| B-N — Equal-length Basic Domain Notes | `DOMAIN_NOTES.md + SEMANTIC.md + INCIDENT.md` | Natural Request 下控制更多文本和一般领域知识 |
| C-N — Full ABU | `BUSINESS.md + SEMANTIC.md + INCIDENT.md` | Natural Request 下测量显式 ABU 的增量价值 |

Natural Request 只用一般需求方可能采用的语言提出分析目标、优先判断和下一步建议，不逐项教授 Rubric 中的机制、反证、区分性检查和结论更新方法。G1.1 和 F1 只使用 A-N/B-N/C-N；Prompt 与表示消融如有必要将进入独立研究。

候选 Incident 必须同时满足根因机制深度与难度门禁：存在多个共享表面症状的合理竞争解释，正确排序要求综合至少两类独立 Evidence 完成多步机制推断，不存在可单独泄露答案的句子或数字，并在 Full ABU 输出生成前通过多次独立 Baseline-only 预试。

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
2. **G1 — Game pilot：** 3 个游戏 Incident，A/B/C 每条件 5 次，已完成，仅用于可运行性、方差和设计缺陷发现；
3. **G1.1 — Discrimination pilot：** 只运行 A-N/B-N/C-N，用于根因机制深度、Case 难度、对照公平性、Natural Request 和 Rubric 修订；
4. **F1 — Cross-industry confirmation：** 只使用 Natural Request，暂定 5 行业 × 3 个未见 Incident，样本量在功效分析后冻结；
5. **E1 — Representation and safety：** 在预先指定子集上探索 Transition、Hybrid View 和 Perturbed ABU。

G1 的案例和输出不得进入 F1 的验证性效应估计。

## 目录内容

- [protocol.md](./protocol.md)：实验设计、控制变量、随机化和重复运行；
- [scoring-rubric.md](./scoring-rubric.md)：评价维度和评分锚点；
- [judging-form.md](./judging-form.md)：独立评分与裁决所需记录字段；
- [calibration](./calibration/)：G0 的 4 个非 Benchmark 案例、12 个匿名回答、盲评顺序和校准记录；
- [g1](./g1/)：游戏 Pilot 的输入、运行锁、随机化、审计和偏离模板；
- [results](./results/)：冻结协议后的运行记录和结果。

## 当前冻结状态

- Protocol：v0.5，Three-condition Natural Request Design，Draft Preregistration — Not Frozen；
- Scoring Rubric：v0.2，已为 G1 Pilot 完成校准，尚未 Frozen；
- Judging Form：v0.2，Draft；
- G0 Calibration Set：v0.1，G1 Pilot 量表门禁已完成；仅适用于探索性 G1，不适用于 F1；
- G1 Game Pilot：`G1-GAME-PILOT-V0.1` 已完成 45 / 45 个分析输出、双重盲评、裁决与揭盲报告；未观察到 Full ABU 探索性增量，F1 前必须修订 Case、Rubric 和 Judge 设计；
- Decisions：[DR-0002](../docs/decisions/DR-0002-benchmark-preregistration-design.md) 为 Proposed；[DR-0003](../docs/decisions/DR-0003-g1-game-pilot-launch.md) 为 Accepted。

在模型版本、Prompt、MID、护栏界值、功效分析、评分一致性和角色隔离完成前，不得开始 F1。
