# RN-0001 — What Is Analytical Business Understanding?

**Classification:** Research  
**Status:** Draft  
**Version:** 0.1  
**Date:** 2026-07-18  
**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)  
**Related Open Questions:** OQ-0001, OQ-0003, OQ-0008

## Abstract

Analytical Business Understanding（ABU）是为企业分析推理而选择和表达的业务知识子集。它不等于完整的 Business Understanding，也不等于 Domain Knowledge、Business Logic、Ontology 或 Semantic Layer。

本文提出以下工作定义：

> **ABU 是在明确业务语境和分析任务族内，能够改变候选业务解释、假设优先级或证据验证路径，并且可以在单次 Incident 发生前表达和复用的业务知识集合。**

Project Charter 中“完成分析推理所必需的最小业务知识集合”的定义继续保留。本文对其中两个关键点作出操作化解释：

1. **“最小”是相对于业务语境、分析任务族和评价标准而言的，不存在脱离任务的全局最小 ABU。**
2. **知识是否属于 ABU，最终需要通过移除或替换该知识后的分析表现变化来验证，而不能只靠作者直觉决定。**

本文不把 Transition 的核心地位作为 ABU 定义的一部分。Transition 是当前候选表示承诺，需要在 RN-0003 和 Benchmark 中单独验证。

## 1. Research Questions

本文回答：

1. ABU 是什么？
2. 为什么企业分析需要一个显式 ABU 层？
3. ABU 与一般 Business Understanding、Domain Knowledge 和 Business Logic 有什么区别？
4. “最小业务知识集合”如何被操作化？
5. 什么证据会支持、修正或否证 ABU 的核心假设？

本文暂不回答：

- Transition 是否是最佳核心表示单元；
- BUP 的具体规范字段；
- `BUSINESS.md` 的正式写作格式；
- Benchmark 的最终评分尺度；
- ABU 在真实企业中的外部有效性。

## 2. Motivation

### 2.1 已有分析方法承认 Business Understanding 的重要性

CRISP-DM 把 Business Understanding 作为数据挖掘项目的初始阶段：先理解业务目标和要求，再将其转化为数据分析问题和初步计划。其用户指南还要求识别业务问题、约束、假设、知识来源和成功标准。

这说明“先理解业务，再处理数据”不是本项目新创造的原则。

但 CRISP-DM 主要描述：

- 一个分析项目应该完成哪些活动；
- 如何明确当前项目的目标、资源、约束和成功标准；
- 如何在项目生命周期中往返于业务理解、数据理解和建模。

它没有试图定义一个可跨 Incident 复用、专门帮助生成解释性假设的最小业务知识表示层。

因此，ABU 与 CRISP-DM 的关系是：

> **CRISP-DM 说明分析项目何时以及为什么需要 Business Understanding；ABU 研究其中哪些业务知识应被显式保存，并在后续分析推理中复用。**

### 2.2 数据语义不能完整回答业务解释问题

Semantic Layer 可以定义：

- 可查询的业务对象；
- 表、字段和 Join；
- Dimension 和 Measure；
- 指标公式、过滤规则和时间粒度；
- 数据模型中的部分 Business Rules。

例如，LookML 官方文档把语义模型描述为数据库中的维度、聚合、计算和数据关系，并用于生成 SQL 查询。

这些能力可以回答：

- “活跃用户”如何计算？
- 收入应该按哪个日期和粒度汇总？
- 订单与客户怎样关联？
- 哪个字段代表渠道或市场？

但它通常不能单独回答：

- 为什么新用户激活下降时，应优先检查哪个业务变化？
- 哪些机制会使付费率下降但留存不变？
- 哪类异常更可能发生在状态进入、状态维持还是状态退出？
- 哪项证据能够区分两个都与指标相关的竞争性解释？

ABU 的候选价值不在于重复数据定义，而在于把分析注意力引向具有业务解释力的假设和证据。

### 2.3 知识表示会影响推理方式

Davis、Shrobe 和 Szolovits 将知识表示描述为现实世界的替代物、对世界观察方式的承诺、推理理论、计算媒介和人类表达媒介。他们特别指出，任何表示都会突出某些方面并忽略另一些方面。

这一观点对 ABU 有两个直接影响：

1. ABU 不可能完整复制企业现实，只能选择对分析任务重要的部分；
2. 选择 Actor、State、Transition 等概念，不只是选择文档格式，也是在选择 AI 应如何观察和推理业务。

所以，Transition 不能因为容易写成模板就被默认接受。它必须证明自己能比其他表示更有效地引导分析推理，并且不会系统性遮蔽重要现象。

## 3. Working Definition

### 3.1 Charter Definition

Project Charter v0.1 定义：

> ABU 是正确解释业务现象、生成业务假设、缩小验证范围并完成分析推理所必需的最小业务知识集合。

该定义明确了 ABU 的目的，但“必需”“最小”和“分析推理”仍需进一步操作化。

### 3.2 Operational Working Definition

本文提出：

> **ABU 是在明确业务语境和分析任务族内，能够改变候选业务解释、假设优先级或证据验证路径，并且可以在单次 Incident 发生前表达和复用的业务知识集合。**

这个定义包含六项约束：

#### A. Task-relative

ABU 总是相对于某类分析任务定义，例如：

- 激活异常诊断；
- 交易转化下降；
- 留存变化；
- 履约失败；
- 续费风险；
- 广告效果异常。

一项知识可能对激活诊断属于 ABU，对财务预测却不属于。

#### B. Context-bounded

ABU 只在明确语境内成立。语境至少可能包括：

- 企业或业务线；
- 产品和版本；
- 市场或渠道；
- Actor 类型；
- 有效时间窗口；
- 关键业务例外。

这与 DDD 的 Bounded Context 有相似动机：模型和术语只有在适用语境中才有稳定含义。但 ABU 的边界服务于分析推理，而不是软件模型一致性。

#### C. Business-specific

ABU 必须描述特定业务如何运行、变化或产生可观测结果。

通用的统计学知识、SQL 技巧、分析方法论和模型能力不属于 ABU。

#### D. Pre-incident

知识应能在当前 Incident 原因未知时独立表达。

它可以来自历史经验，但不能包含：

- 当前 Incident 的隐藏答案；
- 根据当前异常临时反推的“长期规律”；
- 只有看到实验输出后才加入的解释。

#### E. Reasoning-relevant

一项知识必须至少改变以下之一：

- 哪些假设应被提出；
- 哪些假设应被优先验证；
- 哪些假设可以被排除；
- 哪类证据具有区分力；
- 验证路径的顺序或范围；
- 对最终结论的业务一致性判断。

仅仅“与业务有关”不够。

#### F. Reusable

知识应在同一语境下跨多个 Incident 有效，而不是一次活动、故障或版本发布的记录。

可复用不等于永久不变。知识可以有版本、有效期和例外。

## 4. What “Minimal” Means

### 4.1 不存在全局最小 ABU

“最小”必须同时指定：

```text
业务语境
+ 分析任务族
+ 可接受的分析质量
+ 评价方法
```

不同任务和评价标准会产生不同的最小集合。

例如，解释游戏新玩家次日留存下降时，支付结算机制可能不属于最小集合；解释首购转化下降时，它可能是必要知识。

### 4.2 最小性是一种反事实性质

对候选知识项 `k`，可以提出移除测试：

```text
ABU 完整集合 → 分析结果 A
ABU 移除 k   → 分析结果 B
```

如果移除 `k` 后，以下指标没有稳定变化：

- 假设质量；
- 根因命中程度；
- 分析路径合理性；
- 无效排查数量；
- 业务一致性；
- 证据选择质量；
- 搜索空间大小；

那么 `k` 尚不能被证明是该任务族的必要 ABU。它可能是：

- 有帮助但非必要的背景；
- 与其他知识项冗余；
- 表达方式无效；
- 不属于 ABU。

### 4.3 文档作者只能提出候选集合

在 Benchmark 前，`BUSINESS.md` 中的内容应被视为 **candidate ABU**，而不是已经证明的最小集合。

只有当移除、替换或对照实验显示其对分析有稳定增量价值时，才能说它在当前语境和任务族内得到了经验支持。

本文不建议把 candidate ABU 和 validated ABU 立即加入全局 Glossary。它们目前只是区分“作者判断”和“实验支持”的研究用语。

## 5. Expected Content of ABU

以下内容是候选范围，不是最终 BUP 规范。

### 5.1 Meaningful Business States and Changes

- 哪些 Actor 对当前分析有意义；
- 哪些 State 具有业务解释力；
- 哪些变化会产生重要结果；
- 哪些变化是进入、维持、中断、退出或恢复。

### 5.2 Mechanisms

- 什么业务机制推动或阻碍变化；
- 哪些前置条件必须满足；
- 哪些约束、激励或资源限制会改变结果；
- 哪些机制只在特定细分、渠道或时间窗口生效。

### 5.3 Expected Observations and Discriminating Evidence

- 某种业务变化通常会留下什么现象；
- 哪些证据支持或反驳某个解释；
- 哪些证据能够区分竞争性假设；
- 业务变化与数据出现之间可能存在什么延迟。

### 5.4 Context and Exceptions

- 定义适用的产品、市场、渠道和 Actor；
- 已知例外、边界条件和 Definition Drift；
- 哪些相似概念不应被混用。

## 6. Distinction from Adjacent Concepts

### 6.1 ABU vs. General Business Understanding

| 维度 | General Business Understanding | ABU |
|---|---|---|
| 范围 | 战略、组织、财务、法务、产品、运营、文化等 | 只保留对分析推理有直接价值的部分 |
| 目的 | 全面理解企业或支持多类决策 | 解释业务现象、生成假设和选择证据 |
| 最小性 | 通常不要求 | 相对于分析任务族要求最小或至少精简 |
| 实验验证 | 通常不是必要条件 | 应通过分析增量价值验证 |

ABU 是 Business Understanding 的功能性子集，而不是另一套完整企业模型。

### 6.2 ABU vs. Domain Knowledge

Eric Evans 将 domain 定义为知识、影响或活动的领域，将 model 定义为对领域选定方面的抽象，用来解决相关问题。

据此，Domain Knowledge 可以包含：

- 行业术语；
- 专业事实；
- 法规和政策；
- 产品与技术细节；
- 工作流程；
- 历史经验；
- 角色和组织惯例；
- 软件设计所需规则。

ABU 的差异是强制施加 **analytical-purpose filter**：

> Domain Knowledge 回答“这个领域有哪些重要知识”；ABU 回答“哪些知识会改变这类分析的假设和证据路径”。

因此：

```text
ABU ⊂ Domain Knowledge
```

在具体项目中，这个集合关系是工作假设而非形式化数学关系，因为 Domain Knowledge 本身没有唯一边界。

### 6.3 ABU vs. Business Logic

Business Logic 通常指系统执行或强制实施的业务规则和行为，例如：

- 订单状态能否迁移；
- 折扣如何计算；
- 权限如何检查；
- 试用何时到期；
- 退款流程如何执行。

ABU 可以引用其中与分析有关的机制，但二者不等同：

| Business Logic | ABU |
|---|---|
| 主要服务于系统正确执行 | 主要服务于分析解释和假设生成 |
| 经常可以在代码、规则或工作流中找到 | 可能来自专家经验、运营机制和跨系统知识 |
| 倾向描述“系统做什么” | 还需描述“为什么会影响业务变化、如何观察和区分” |
| 包含大量与分析无关的实现细节 | 应排除不能改善分析的细节 |

一条 Business Logic 只有在通过 reasoning-relevance test 时，才属于候选 ABU。

### 6.4 ABU vs. Business Rules

Business Rule 是约束、允许、触发或计算业务行为的明确规则。

ABU 可能包含重要 Business Rule，但还可能包含：

- 非确定性机制；
- 典型而非必然的行为模式；
- 状态变化的前置条件；
- 证据与解释之间的经验联系；
- 时滞、例外和异质性。

所以 ABU 不能退化成规则清单。

### 6.5 ABU vs. Semantic Layer

| Semantic Layer | ABU |
|---|---|
| 定义如何查询和计算 | 定义如何理解和解释 |
| 关注实体、字段、维度、指标、Join 和口径 | 关注有意义的业务状态、变化、机制和区分性证据 |
| 将业务术语连接到数据实现 | 将业务现象连接到分析假设 |
| 通常直接生成查询 | 通常先改变假设排序和验证计划 |

两者需要引用关系，但不应复制所有内容。

### 6.6 ABU vs. Ontology

W3C 将 Ontology 描述为特定领域中术语及其关系的形式化词汇。Ontology 关注概念如何被精确定义和关联。

ABU 可以使用 Ontology，但第一阶段不要求：

- 全局统一词汇；
- 形式逻辑语义；
- RDF/OWL 序列化；
- 自动一致性推理；
- 完整的实体关系覆盖。

自然语言优先是 BUP 的实现选择，不意味着 Ontology 没有价值；它只意味着第一阶段优先验证分析增量，而不是形式化程度。

### 6.7 ABU vs. CRISP-DM Business Understanding

| CRISP-DM Business Understanding | ABU |
|---|---|
| 分析项目生命周期中的阶段 | 可被多个分析项目复用的知识层 |
| 聚焦目标、要求、约束、资源和成功标准 | 聚焦解释业务现象所需的稳定知识 |
| 强调把业务目标转成数据挖掘问题 | 强调生成和排序业务假设 |
| 包含大量项目特定上下文 | 排除单次项目管理信息 |

ABU 可以成为 CRISP-DM Business Understanding 阶段的一项输入或产物，但不能替代整个阶段。

## 7. Running Example: Game Activation

假设一个游戏业务定义：

- Actor：新玩家；
- Candidate State：已注册、已完成核心教学、已体验核心循环、稳定参与；
- Candidate Transition：从注册进入核心循环体验；
- Stable Mechanisms：教学摩擦、首局匹配、内容理解、早期失败体验、社交带入；
- Expected Evidence：教学步骤完成、首局开始与完成、失败位置、组队行为、后续回访。

Semantic Layer 可以说明：

- “激活率”的公式；
- 教学完成事件；
- 首局事件和留存窗口；
- 平台、版本和渠道字段。

ABU 的候选增量是：

- 激活不是单一事件，而是玩家进入可持续核心体验的业务变化；
- 教学完成不必然表示进入核心循环；
- 不同机制会留下不同的证据组合；
- 教学完成稳定但首局完成下降时，应降低“教学故障”的优先级；
- 渠道构成变化与产品内体验故障需要不同的验证路径。

这些知识不会告诉分析者某次 Incident 的答案，但会改变候选假设和检查顺序。

如果加入这些知识后，分析表现没有稳定改善，则它们不能仅凭“听起来像业务知识”被认定为必要 ABU。

## 8. Claims and Epistemic Status

### Claim C1 — ABU 可以成为独立的分析知识层

**Status:** Hypothesis

理由：其目的、时间尺度和输出不同于 Semantic Layer、业务规则和项目级 Business Understanding。

否证信号：在多个任务和行业中，ABU 内容都能无损地归入已有层，且独立表达没有增量价值。

### Claim C2 — ABU 的主要价值是改变搜索顺序，而不是增加数据

**Status:** Hypothesis

ABU 预期通过改变假设生成、排序和证据选择来缩小搜索空间。

否证信号：性能提升完全来自更多文本、答案泄漏或额外指标，而不是推理路径变化。

### Claim C3 — “最小”必须是任务相对的

**Status:** Draft Conclusion

脱离任务族、业务语境和评价标准，无法判断某项知识是否必要。

反例要求：找到一个跨企业、跨任务仍保持同样必要性的有限 ABU 集合。

### Claim C4 — 自然语言不是 ABU 的定义属性

**Status:** Draft Conclusion

ABU 是知识集合；自然语言是第一阶段 BUP 的表达选择。未来使用 JSON、图或 Ontology 不会自动改变知识是否属于 ABU。

### Claim C5 — Transition 不是 ABU 定义的一部分

**Status:** Draft Decision Candidate

ABU 应先由分析功能定义，再研究 Transition 是否是最有效的核心表示单元。把两者绑定会导致无法公平比较替代表示。

该项需通过 RN-0003 和 Decision Record 决定。

## 9. Falsifiability and Evaluation Implications

ABU 核心假设至少应允许以下失败结果：

1. `BUSINESS.md` 对分析质量没有稳定增量；
2. 它增加假设数量，却没有改善排序或命中；
3. 它使分析过度服从预设业务模型，错过数据中的新机制；
4. 不同作者无法对候选 ABU 的纳入范围形成可接受的一致性；
5. 改进只来自文档长度、术语提示或 Incident 答案泄漏；
6. 任意 Domain Notes 与 BUP 表现相同，说明 BUP 结构没有独立价值；
7. Transition 表示系统性遗漏重要解释，而替代表示更好；
8. 结果只能在生成材料的同源模型上复现。

因此 Benchmark 不应只评分“最终是否猜中预设根因”，还需要观察：

- 假设集合和优先级；
- 每一步检查的理由；
- 证据的区分力；
- 无效路径；
- 对模型边界和不确定性的识别；
- 是否提出 BUSINESS.md 未覆盖但由数据支持的替代解释。

## 10. Implications for BUP

以下只是候选要求，需由 RFC 决定：

1. BUP 应记录知识适用的业务语境；
2. BUP 应区分稳定机制与当前 Incident 信息；
3. 每项主要知识应能说明其分析用途；
4. BUP 应允许记录例外、时滞和 Definition Drift；
5. BUP 应引用而非复制 Semantic Layer 的指标实现；
6. BUP 不应强迫所有知识写成 Transition；
7. BUP 应支持知识项级别的移除实验；
8. `BUSINESS.md` 不得包含 Incident 隐藏答案。

## 11. Open Questions

- OQ-0001：移除测试应以单项知识、段落还是 Transition 为单位？
- OQ-0002：Transition 相比 Process、Journey、Capability 或机制图的增量价值是什么？
- OQ-0003：Observation、Evidence、Metric 和 Data 的关系是否应建模为多对多？
- OQ-0008：Semantic Layer 中的 Business Rules 在什么条件下应被 ABU 引用或提升？
- 如何衡量假设空间大小，而不强迫模型输出固定格式？
- ABU 是否必须由业务专家认可，还是只要实验有效即可？
- 同一知识通过不同表达产生不同效果时，应评价知识还是表达协议？

## 12. Draft Conclusion

ABU 的独特性不来自它收集了“更多业务背景”，而来自严格的功能边界：

> **只保留那些在明确语境和任务族中，能够改变业务解释、假设排序或证据验证路径，并能在 Incident 前复用的知识。**

该定义使 ABU 成为可检验的研究对象：

- 内容可以通过纳入测试被筛选；
- 必要性可以通过移除实验被检验；
- 表示承诺可以与替代方案比较；
- 与 Semantic Layer、Domain Knowledge 和 Business Logic 的边界可以通过用途与时间尺度判断。

目前最关键的未验证部分仍是：

1. 人是否能一致地写出这样的知识集合；
2. AI 是否会以预期方式使用它；
3. Transition 是否提供了正确的表示承诺；
4. 分析改进是否能跨 Incident、模型和行业复现。

## References

1. Chapman, P. et al. (2000). [CRISP-DM 1.0: Step-by-step Data Mining Guide](https://www.dataprix.com/files/CRISP-DM.pdf).
2. Davis, R., Shrobe, H., & Szolovits, P. (1993). [What Is a Knowledge Representation?](https://groups.csail.mit.edu/medg/ftp/psz/k-rep.html), *AI Magazine*, 14(1), 17–33.
3. Evans, E. (2015). [Domain-Driven Design Reference: Definitions and Pattern Summaries](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf).
4. W3C OWL Working Group (2012). [OWL 2 Web Ontology Language Document Overview, Second Edition](https://www.w3.org/TR/owl-overview/).
5. Google Cloud. [Introduction to LookML](https://docs.cloud.google.com/looker/docs/what-is-lookml).

