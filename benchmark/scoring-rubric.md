# Scoring Rubric

**Classification:** Research / Engineering

**Status:** Draft Preregistration — Not Calibrated

**Version:** 0.1

**Last updated:** 2026-07-20

**Related Protocol:** [protocol.md](./protocol.md)

**Related Open Questions:** OQ-0009, OQ-0010, OQ-0020, OQ-0021, OQ-0025, OQ-0026, OQ-0027, OQ-0030

**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)

> 本量表尚未完成评分者校准。校准材料、一致性门槛和正式版本未冻结前，不得用于产生验证性结论。

## 1. Scoring Principles

- 评分对象是可观察输出，不是模型内部 Chain-of-Thought；
- 评分者依据 Incident、Semantic Layer、可用 Evidence 和封存的 Business Reality；
- 不因答案更长、术语更多或更像 `BUSINESS.md` 自动加分；
- 机制等价但措辞不同的解释可以命中根因；
- Evidence 支持的未知机制可以优于隐藏答案中的候选解释；
- 每个分数都要引用输出中的具体文本或缺失项；
- 主要结果分别报告，不生成用于决策的不透明总分。

所有正向量表均为 0–4，分数越高越好：

- **0:** 缺失、错误或产生实质伤害；
- **1:** 接近 0 分锚点，但有少量有效内容；
- **2:** 边界可用，明显不完整；
- **3:** 接近 4 分锚点，但仍有可识别缺口；
- **4:** 完整满足锚点。

除非维度给出专门规则，1 和 3 只用于相邻锚点之间的插值。

## 2. Unit of Scoring

每个匿名 Answer 独立评分。评分者先完成以下结构检查：

| 字段 | 记录 |
|---|---|
| Answer ID | 匿名标识 |
| Incident ID / version | 评分材料版本 |
| Judge ID | 评分者匿名标识 |
| Required sections present | Yes / No |
| Hypotheses counted | 0–5；超出部分记录但不评分 |
| Checks counted | 0–5；超出部分记录但不评分 |
| Refusal / empty / truncated | 类别 |
| Potential valid alternative | Yes / No + 说明 |

安全拒答、空洞回答和截断输出仍然评分，不自动排除。

## 3. Primary Outcome 1 — Root-Cause Coverage@3

只检查排序最高的 3 个假设。先把每个假设映射到 Business Reality 中的可接受根因、部分机制、症状或错误解释，再给一个整体分数。

| 分数 | 锚点 |
|---|---|
| 0 | 前 3 个假设没有可接受根因，或核心解释与已知 Evidence 直接冲突 |
| 1 | 只复述症状、指标变化或过宽领域，没有识别可检验机制 |
| 2 | 命中根因的上游/下游片段或相邻机制，但缺少决定性的机制连接 |
| 3 | 前 3 个假设包含机制等价的可接受根因，但没有排在第 1，或仍有一个重要机制缺口 |
| 4 | 第 1 假设是机制等价的可接受根因，且没有依赖泄漏信息 |

规则：

- 同一个根因的措辞变化不算多个覆盖；
- 只说“转化下降”“用户流失”“数据问题”属于症状或宽泛标签；
- 若提出 Evidence 支持的隐藏答案外解释，标记 `candidate-valid-alternative` 并等待裁决；
- 排名是本指标的一部分，不再单独加权。

## 4. Primary Outcome 2 — Hypothesis Quality Index

对前 3 个假设的整体质量评分。HQI 是四个子维度的等权均值：

```text
HQI = (Relevance + Mechanistic Specificity + Testability + Prioritization) / 4
```

### 4.1 Relevance

| 分数 | 锚点 |
|---|---|
| 0 | 主要假设与 Incident 不相关，或被提供信息直接排除 |
| 2 | 至少一个假设相关，但列表混入大量泛化原因或忽略关键现象 |
| 4 | 前 3 个假设都直接解释关键 Observation，并覆盖最重要的合理竞争解释 |

### 4.2 Mechanistic Specificity

| 分数 | 锚点 |
|---|---|
| 0 | 只有症状、指标重述或无法产生观察预测的标签 |
| 2 | 指出部分 Actor、State、Transition、Process 或约束，但机制链不完整 |
| 4 | 清楚连接业务机制、受影响对象、预期 Observation 和可区分的替代机制，同时不过度宣称因果已证实 |

### 4.3 Testability

| 分数 | 锚点 |
|---|---|
| 0 | 假设不可证伪，没有可执行 Evidence，或检查与假设无关 |
| 2 | 有可执行检查，但只支持确认、不能区分主要竞争解释，或预期结果不明确 |
| 4 | 主要假设都给出可执行、可区分的 Evidence，并说明正反结果如何改变判断 |

### 4.4 Prioritization

| 分数 | 锚点 |
|---|---|
| 0 | 没有排序，或排序与 Evidence、影响和可验证性明显冲突 |
| 2 | 有合理排序，但理由泛化、没有比较候选解释或未考虑验证成本 |
| 4 | 排序明确结合先验合理性、业务影响、当前 Evidence、区分价值和验证成本 |

## 5. Primary Outcome 3 — Diagnostic Evidence Efficiency

DEE 是两个子维度的等权均值：

```text
DEE = (First Discriminating Evidence + Valid Check Ratio Score) / 2
```

### 5.1 First Discriminating Evidence

评分对象是答案提出的第一个检查。

| 分数 | 锚点 |
|---|---|
| 0 | 不可执行、重复已知事实、与主要假设无关或需要隐藏答案 |
| 1 | 可能有用，但基本不会改变主要候选解释的相对可信度 |
| 2 | 能缩小范围，但不能清楚区分前两项假设，或成本明显不合理 |
| 3 | 能区分主要假设且可执行，但不是当前最高信息价值步骤 |
| 4 | 在可用数据和成本约束下，优先区分最重要的竞争解释，并明确不同结果的后续更新 |

### 5.2 Valid Check Ratio Score

先逐项判定最多 5 个检查是否有效，再计算：

```text
invalid_check_ratio = invalid checks / scored checks
```

| 分数 | 无效检查比例 |
|---|---|
| 4 | 0% |
| 3 | >0% 且 ≤20% |
| 2 | >20% 且 ≤40% |
| 1 | >40% 且 ≤60% |
| 0 | >60%，没有检查，或所有检查均不可执行 |

一个检查在满足以下任一条件时记为无效：

- 所需数据不在可用清单中，且答案没有提出现实的获取路径；
- 只是重复 Incident 已给出的 Observation；
- 无论结果如何都不会改变任何主要假设的相对可信度；
- 与另一个检查实质重复，未增加区分信息；
- 用待证明的结论作为查询条件，形成循环验证；
- 依赖隐藏答案、条件标签或现实中不可获得的信息；
- 与 Semantic Layer 或明确业务约束冲突。

必要的否定性检查不是无效检查；只要它能排除一个高优先级解释，就应记为有效。

## 6. Guardrail 1 — Business and Evidence Integrity

| 分数 | 锚点 |
|---|---|
| 0 | 核心结论依赖虚构 Evidence、错误数据绑定或与明确业务规则直接冲突 |
| 2 | 主体方向可用，但包含一项会实质影响判断的证据误用，或多项轻微无依据断言 |
| 4 | 所有关键事实可追溯到输入，清楚区分事实、推断和未知，不与明确业务规则冲突 |

评分时记录：

- `fabricated_evidence_count`；
- `material_business_conflict_count`；
- `unsupported_material_claim_count`；
- 最严重问题的原文证据。

分数 1 和 3 按错误的严重度、数量及其是否影响结论插值。

## 7. Guardrail 2 — Open-world Resilience

| 分数 | 锚点 |
|---|---|
| 0 | 把已有 ABU 或候选列表当作完备真相，忽略明确冲突，或禁止 Evidence 支持的新解释 |
| 2 | 承认不确定性，但只有通用免责声明，没有指出什么证据会推翻当前解释 |
| 4 | 明确说明当前模型边界、关键反证和可推翻条件；当 Evidence 冲突时提出可检验的未知机制或表示切换 |

标准条件中不要求为了“显得开放”而堆砌低质量假设。高分来自清楚的可推翻条件和对冲突的正确处理，而不是候选数量。

## 8. Exploratory Dimensions

### 8.1 Representation Fit

只在 Incident 预先标记为需要评估替代视图时评分。

| 分数 | 锚点 |
|---|---|
| 0 | 强行使用单一 Transition 解释，导致关键并发、路径、存量或多 Actor 关系丢失 |
| 2 | 感知到表示限制，但没有选择或连接合适的替代视图 |
| 4 | 正确识别 Transition、Process、Journey、Causal Model 或 Stock–Flow 的适用边界，并用可审计引用完成切换 |

### 8.2 Perturbation Detection and Recovery

只在 P — Perturbed ABU 条件评分。

| 分数 | 锚点 |
|---|---|
| 0 | 完全接受错误先验，并用它覆盖冲突 Evidence |
| 2 | 注意到异常但仍把错误 ABU 放在主要结论中，或没有提出恢复检查 |
| 4 | 明确定位冲突、降低错误先验权重、提出区分性检查，并形成 Evidence 支持的替代解释 |

### 8.3 Confidence Calibration

记录答案的数值或分档置信度，并与 RCC@3 和 BEI 联合分析。没有置信度时记为缺失，不从其他措辞推断精确概率。

## 9. Examples for Judge Calibration

以下例子不得作为正式 Incident。它们只展示“区分性 Evidence”的边界。

| 类型 | 示例 | 判定 |
|---|---|---|
| 正例 | “若支付网关版本迁移是原因，失败应集中在新版本且返回码结构改变；先按网关版本比较授权响应，并同时检查未迁移流量。” | 可执行，能区分迁移故障与全局需求变化 |
| 边界例 | “按地区看转化率。” | 可能缩小范围，但没有说明地区如何区分主要机制 |
| 反例 | “重新计算一次总转化率确认确实下降。” | 只重复已知 Observation，不缩小根因空间 |

根因等价性示例：

- “路由规则把高价值工单误分到低优先级队列”与“规则更新导致优先级降级”可视为机制等价；
- “工单量上升”只是 Observation；
- “客服系统有问题”过宽，不能视为根因命中。

## 10. Judge Workflow

1. 阅读 Incident、Semantic Layer、可用 Evidence 和 Business Reality；
2. 不查看条件代码或条件文档；
3. 完成结构检查；
4. 将前 3 个假设映射到可接受根因或替代解释；
5. 逐项完成 RCC@3、HQI、DEE；
6. 完成 BEI 和 OWR；
7. 在适用时完成探索维度；
8. 为每个 0、1、3、4 分提供输出原文和简短理由；
9. 独立提交，不与另一评分者讨论；
10. 等待一致性计算和必要裁决后再揭盲。

评分记录使用 [judging-form.md](./judging-form.md)。

## 11. Calibration and Reliability Gate

正式评分前：

- 至少准备 12 个、目标 20 个不进入 Benchmark 的校准回答；
- 回答应覆盖完整、边界、错误、截断和隐藏答案外合理解释；
- 每个主要子维度至少覆盖 3 个不同分值；分布退化时不使用 alpha 点估计作为唯一门槛；
- 两名评分者先独立评分，再讨论锚点分歧；
- 修改量表后必须重新独立评分一套未讨论材料；
- 对 RCC@3、四个 HQI 子维度、两个 DEE 子维度、BEI 和 OWR 分别计算 ordinal Krippendorff’s alpha；
- 正式使用目标为每个主要子维度 `α ≥ 0.80`；
- `0.667 ≤ α < 0.80` 只允许形成暂定结论，应继续修订；
- `α < 0.667` 时停止，不能通过简单平均掩盖构念不清。

这些数值采用 Krippendorff 的常用可靠性解释作为项目治理门槛，不代表适用于所有风险和样本分布的普遍定律。除 alpha 外仍须报告原始一致率、评分分布和校准样本量。方法资料见 University of Pennsylvania 的 [Krippendorff’s Alpha Reliability](https://www.asc.upenn.edu/krippendorffs-alpha-reliability)。

正式运行后的原始一致性必须完整报告。不能因为一致性低而在揭盲后修改锚点并只重评不利输出；任何重评必须覆盖全部条件。

## 12. Adjudication Rules

以下情况进入第三方裁决：

- 任一主要子维度相差超过 1 分；
- 两名评分者对根因是否机制等价意见不同；
- 任一评分者标记 `candidate-valid-alternative`；
- 是否属于无效检查的判断改变 Valid Check Ratio Score 超过 1 分；
- 一名评分者发现重大业务冲突，另一名没有。

裁决记录必须包含原始分数、争议点、引用文本、裁决值和理由。裁决者看不到条件代码。

## 13. LLM Judge Sensitivity Analysis

LLM 评分不得替代主要人类评分。如果使用：

- 固定 Judge 模型、Prompt、温度和版本；
- 单项评分使用本量表和相同 Business Reality；
- Pairwise 比较对每一对答案做 A/B 与 B/A 两次位置交换；
- 报告自洽率、位置翻转率以及与人类评分的相关性和系统偏差；
- 在结果中明确标记为 Secondary。

该限制源于已有研究发现 LLM 评委存在位置、熟悉度、锚定和评分分布偏差；见 [MT-Bench / Chatbot Arena](https://arxiv.org/abs/2306.05685)、[Large Language Models are not Fair Evaluators](https://arxiv.org/abs/2305.17926) 和 [Large Language Models are Inconsistent and Biased Evaluators](https://arxiv.org/abs/2405.01724)。

## 14. Version and Approval

### Required before calibration

- [x] 给主要指标写出可观察定义；
- [x] 给 0–4 量表写出锚点；
- [x] 提供正例、边界例和反例；
- [x] 规定无效检查计数；
- [x] 规定分歧与裁决流程；
- [ ] 创建至少 12 个、目标 20 个校准回答；
- [ ] 完成第一轮评分者校准。

### Required before formal use

- [ ] 所有主要子维度达到一致性门槛；
- [ ] MID 和护栏非劣效界值已在 protocol 中冻结；
- [ ] 评分者和裁决者角色已确认；
- [ ] 正式评分表版本和哈希已记录；
- [ ] Decision Record 已 Accepted；
- [ ] Version 标记为 Frozen / Preregistered。

- Rubric version:
- Git commit:
- Decision Record:
- Approved by:
- Approval date:
