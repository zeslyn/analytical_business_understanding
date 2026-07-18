# RN-0004 — Boundary of Analytical Business Understanding

**Classification:** Research  
**Status:** Draft  
**Version:** 0.1  
**Date:** 2026-07-18  
**Depends on:** [RN-0001 — What Is ABU?](./RN-0001-what-is-abu.md)  
**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)  
**Related Open Questions:** OQ-0001, OQ-0004, OQ-0008, OQ-0011

## Abstract

本文定义 ABU 的候选边界和路由规则。边界不以“内容是否属于业务”判断，而以三个维度判断：

1. **Purpose**：是否直接改变分析假设或证据路径；
2. **Temporal Scope**：是否能够在明确语境内跨多个 Incident 复用；
3. **Layer Ownership**：它描述的是业务现象与机制，还是目标、当前操作、测量定义、数据实现或软件执行。

一项内容只有同时满足业务特定、Incident 前可表达、分析相关、语境明确和可复用等条件，才进入候选 ABU。其“必要性”仍需通过移除或替换实验验证。

本文的核心结论是：

> **ABU 的边界由分析用途决定，而不是由文档类型、信息来源或抽象程度决定。**

同一条知识可能同时存在于代码、专家经验或流程文档中，但只有对分析推理有直接价值的表达进入 `BUSINESS.md`。

## 1. Boundary Problem

“业务理解”几乎可以包含企业中的任何信息。如果没有边界，`BUSINESS.md` 会逐渐吸收：

- 公司与行业介绍；
- 战略目标；
- 组织职责；
- 产品功能；
- 流程和规则；
- 活动和实验；
- 指标与数据字典；
- 数据血缘；
- Incident 事实；
- 分析建议；
- 最终根因。

这样的文档也许信息丰富，但无法证明：

- 哪些内容对分析真正必要；
- 哪些信息应长期维护；
- 哪些内容会造成答案泄漏；
- 哪个系统是事实来源；
- BUP 相比普通 Domain Notes 有什么区别。

因此，边界必须允许内容被明确纳入、排除或路由到其他层。

## 2. Boundary Dimensions

### 2.1 Purpose: Does It Change Analytical Reasoning?

候选内容必须至少改变以下之一：

- 候选业务解释；
- 假设优先级；
- 可排除的假设；
- 需要检查的证据；
- 验证顺序；
- 对结论业务一致性的判断。

如果内容只帮助“更全面地介绍公司”，但不会改变分析路径，就不属于第一阶段 ABU。

### 2.2 Temporal Scope: Is It Reusable Before an Incident?

候选内容必须在当前 Incident 发生前可被陈述，并能在相同语境下服务多个 Incident。

它可以变化，但必须能够记录：

- 生效时间；
- 失效时间；
- 适用市场、产品或渠道；
- 例外；
- 发生 Definition Drift 的条件。

“长期稳定”不应机械解释为年级更新频率。判断标准是：

> 它是否描述一个可复用的业务机制，而不是当前一次执行或异常？

### 2.3 Layer Ownership: What Kind of Fact Is It?

候选内容需要区分：

- **业务机制**：业务为什么和如何变化；
- **目标与优先级**：当前组织想优化什么；
- **执行上下文**：最近发生了什么活动、版本或资源变化；
- **测量语义**：如何定义和计算指标；
- **数据实现**：字段、表、事件和 Join；
- **软件执行**：系统如何强制规则；
- **Incident Evidence**：这次异常观察到了什么。

ABU 主要拥有第一类内容，并引用而不是复制其他层。

## 3. Candidate ABU Admission Test

对每一项候选知识依次检查：

### Test 1 — Business Specificity

它是否描述特定业务、产品、市场或行业如何运行？

- 否：通常属于通用分析知识，不进入 ABU。
- 是：继续。

### Test 2 — Analytical Relevance

删除它是否可能明显改变假设、优先级、证据或验证路径？

- 否：不进入第一阶段 ABU。
- 不确定：可进入试验候选集，但必须标记为 Hypothesis。
- 是：继续。

### Test 3 — Pre-incident Independence

它能否在不知道当前 Incident 根因时写出？

- 否：路由到 `INCIDENT.md`、`OPERATIONS.md` 或 `BUSINESS_REALITY.md`。
- 是：继续。

### Test 4 — Cross-incident Reuse

它是否在同一语境下适用于多个可能 Incident？

- 否：通常属于当前执行上下文。
- 是：继续。

### Test 5 — Context Boundedness

能否说明它适用于哪些 Actor、产品、市场、渠道和时间？

- 否：需要补充上下文，不能作为稳定 ABU 接受。
- 是：继续。

### Test 6 — Layer Ownership

它的主体是否只是指标公式、数据字段、单次目标、活动记录或代码实现？

- 是：路由到对应层；仅在 `BUSINESS.md` 中引用分析含义。
- 否：继续。

### Test 7 — Non-leakage

它是否直接或间接暴露某个 Benchmark Incident 的预设答案？

- 是：从 `BUSINESS.md` 删除，并进行污染检查。
- 否：可作为 candidate ABU。

通过测试只表示“适合进入候选集合”，不表示已证明其必要性。

## 4. Routing Model

| 内容类型 | 首要归属 | 更新触发 | ABU 如何处理 |
|---|---|---|---|
| 长期业务机制、关键状态和变化 | `BUSINESS.md` | 机制、产品或适用边界改变 | 直接表达 |
| 当前目标、优先级、预算和约束 | `STRATEGY.md` | 战略周期或管理决策改变 | 必要时引用，不复制 |
| 活动、版本、实验、故障和资源变化 | `OPERATIONS.md` | 执行环境变化 | 作为当前诊断上下文读取 |
| 指标、维度、事件、字段和计算口径 | Semantic Layer / `SEMANTIC.md` | 数据模型或口径改变 | 引用观测意义，不重复实现 |
| 当前异常和可见证据 | `INCIDENT.md` | 每个 Incident | 作为待解释输入 |
| 模拟世界的隐藏机制和真实原因 | `BUSINESS_REALITY.md` | 案例设计改变 | 对分析者隐藏 |
| 软件执行规则和代码路径 | Code / Business Logic | 实现改变 | 只提升对分析有价值的机制 |
| 术语和概念关系 | Glossary / Ontology | 词义或模型改变 | 复用词义，不要求完整复制 |
| 分析方法、统计和 SQL 知识 | Method / Tooling Docs | 方法变化 | 排除 |

该模型表达首要所有权，不禁止交叉引用。

## 5. Boundary with Adjacent Concepts

### 5.1 Strategy

Strategy 描述：

- 当前目标；
- 竞争选择；
- 优先级；
- 资源分配；
- 风险偏好；
- 计划进入或退出的市场。

这些内容会改变“什么值得分析”和“成功意味着什么”，但通常不是长期业务机制。

路由原则：

- “本季度优先提升新市场 GMV” → `STRATEGY.md`；
- “新市场的供给密度会改变履约成功和复购” → 候选 ABU；
- “当前对利润的约束高于增长” → `STRATEGY.md`；
- “补贴通过价格感知影响首次购买，但可能吸引低留存用户” → 候选 ABU。

### 5.2 Operations

Operations 描述当前发生的执行变化：

- 活动；
- 版本发布；
- 实验；
- 配置；
- 渠道投放；
- 库存或人力变化；
- 故障。

路由原则：

- “7 月 15 日发布版本 3.2” → `OPERATIONS.md`；
- “客户端版本割裂可能使匹配池变小并提高等待时间” → 候选 ABU；
- “本周支付服务中断 40 分钟” → `OPERATIONS.md` 或 `INCIDENT.md`；
- “支付失败会阻断首购 Transition，并可能延迟重试” → 候选 ABU。

### 5.3 Semantic Layer, Metrics and Data

Google 的 LookML 文档展示了典型 Semantic Layer 的职责：定义数据库中的维度、聚合、计算、关系和查询模型。

路由原则：

- “D1 retention = 注册次日回访用户 / 注册用户” → Semantic Layer；
- “回访事件来自 `session_started` 表” → Data / Semantic Layer；
- “早期核心体验不足通常表现为激活后回访下降” → 候选 ABU；
- “内容更新会造成回访延迟，因此固定 D1 窗口可能低估参与” → 同时涉及 ABU 和 Metric 风险；ABU 记录机制，Semantic Layer 记录计算实现。

ABU 不应成为数据字典，也不应在多个文档重复维护公式。

### 5.4 Domain Knowledge

Domain Knowledge 是某领域的广泛知识。Eric Evans 对 domain 和 model 的定义强调：模型只选择领域中与解决问题有关的方面。

ABU 对 Domain Knowledge 再施加分析过滤：

- 游戏世界观设定可能是 Domain Knowledge，但通常不是 ABU；
- 关卡难度如何影响失败、挫败和流失，是候选 ABU；
- 完整监管法规属于 Domain Knowledge；
- KYC 如何阻断开户注册，以及会留下什么证据，是候选 ABU。

### 5.5 Business Logic and Business Rules

路由原则：

- 完整状态机实现 → Code / Business Logic；
- 状态迁移中对分析重要的约束和失败机制 → 候选 ABU；
- 折扣计算公式 → Business Logic / Semantic Layer；
- 折扣门槛如何改变购买行为和用户构成 → 候选 ABU。

代码是否包含一项规则不能自动决定它是否属于 ABU。

### 5.6 Ontology

W3C 的 OWL 2 规范把 Ontology 定位为形式化术语及其关系，并提供明确的语义和交换表示。

Ontology 可以帮助：

- 统一术语；
- 表达实体和关系；
- 检查部分一致性；
- 在工具间交换模型。

ABU 第一阶段不要求完整 Ontology，因为研究问题不是“能否形式化企业”，而是“哪些知识能改善分析，以及如何低成本表达”。

路由原则：

- 术语层级和一般实体关系 → Glossary / Ontology；
- 这些关系对某类分析假设的影响 → 候选 ABU。

### 5.7 Process, Workflow, Journey and Capability

这些概念可能是 ABU 的来源或替代表示：

- **Process**：一组产生结果的活动；
- **Workflow**：任务、规则和角色之间的执行流；
- **Journey**：Actor 跨触点的经历；
- **Capability**：组织能够完成的业务能力。

它们不应被整体复制进 `BUSINESS.md`。

纳入标准仍是：

- 哪部分会改变分析假设？
- 哪部分能够跨 Incident 复用？
- 哪部分能帮助定位变化、机制和证据？

如果某类分析使用 Process 或 Journey 比 Transition 更自然，它应作为 RN-0003 的反例，而不是被强行改写成状态迁移。

## 6. Boundary Cases

### Case 1 — “免费试用 14 天后自动到期”

- 若只是计费系统配置：Business Logic。
- 若它决定用户何时面临付费选择，并影响激活、采用和流失的观察窗口：候选 ABU。
- 精确到期计算和字段：Semantic Layer / Code。

### Case 2 — “Q3 重点扩展亚太市场”

- 当前组织目标：Strategy。
- 亚太市场特有的渠道、支付或合规机制如何影响转化：候选 ABU。

### Case 3 — “上周发生服务中断”

- 单次事实：Operations / Incident。
- 服务不可用如何中断下单、造成重试并产生延迟履约：候选 ABU。

### Case 4 — “高价值用户定义为过去 30 天消费前 5%”

- 计算口径：Semantic Layer。
- 高价值用户通常对内容、价格或服务有哪些不同机制：若可验证且影响分析，则是候选 ABU。
- “高价值用户更忠诚”如果没有证据，应标记为 Hypothesis。

### Case 5 — “银行拒付导致支付失败”

- 支付失败的稳定外部机制：候选 ABU。
- 某天某银行接口故障：Operations。
- `decline_code` 字段映射：Semantic Layer。

### Case 6 — “KYC 是开户注册前置条件”

- 完整法规和法务解释：Domain/Legal Knowledge。
- KYC 如何阻断状态变化、影响耗时并留下拒绝或放弃证据：候选 ABU。

### Case 7 — “增长团队负责激活率”

- 组织责任：通常不是 ABU。
- 如果责任边界造成可重复的数据或执行断点，且会改变诊断路径，该机制可以作为候选 ABU。

### Case 8 — “用分层漏斗先排查”

- 通用分析方法：不属于 ABU。
- 某业务的真实阶段和阶段间机制：候选 ABU。

### Case 9 — “新手教学完成事件可靠”

- 事件质量事实：Semantic Layer / Data Quality。
- 教学完成与真实核心体验之间的业务差异：候选 ABU。

### Case 10 — “此次 Incident 的根因是匹配配置错误”

- 隐藏答案：`BUSINESS_REALITY.md`。
- 匹配配置一般如何影响等待、对手质量和首局完成：候选 ABU。

## 7. Minimality and Removal

### 7.1 Admission Is Not Validation

Admission Test 解决“这项知识是否值得进入候选集合”，不解决“它是否必要”。

必要性需要比较：

```text
完整 BUSINESS.md
vs.
移除单项知识
vs.
更换表达方式
vs.
普通 Domain Notes
```

### 7.2 Removal Unit

可能的移除单位包括：

- 一条业务机制；
- 一个 Transition；
- 一段 Observation/Evidence 说明；
- 一个完整业务区域；
- 整个 `BUSINESS.md`。

第一阶段至少需要：

1. 文档级对照：有无 `BUSINESS.md`；
2. 关键知识项级消融：移除预期最重要的内容；
3. 结构对照：BUP 文档与等长度普通 Domain Notes。

否则只能证明“更多上下文可能有帮助”，不能证明 ABU 的边界或 BUP 的结构有效。

### 7.3 Redundancy

如果移除一项知识没有影响，可能因为：

- 它不重要；
- 它被其他段落重复表达；
- 模型已经从预训练知识知道；
- Incident 本身泄露了相同信息；
- 评分量表无法检测其价值；
- 表达不够清晰。

因此，单次无效消融不能立即证明知识不属于 ABU。

## 8. Completeness without Scope Creep

`BUSINESS.md` 不需要完整描述企业。它需要对选定分析任务族达到 **analytical sufficiency**。

候选完整性问题包括：

- 是否覆盖主要 Actor 和有意义的变化？
- 是否说明最重要的推动、阻断和恢复机制？
- 是否给出能够区分假设的 Observation/Evidence？
- 是否记录适用边界、时滞和例外？
- 是否遗漏会系统性改变诊断的业务机制？

完整性不能只用 5W2H 字段是否填写判断。字段齐全仍可能没有分析价值。

## 9. Change and Versioning Boundary

文档更新不应只按固定周期，而应按事实变化触发。

### BUSINESS.md

当以下内容变化时更新：

- 核心业务机制；
- 有意义的 State 或 Transition；
- 适用市场、产品或 Actor；
- 关键例外；
- Observation 与机制的稳定关系。

### STRATEGY.md

当目标、优先级、资源约束或风险偏好变化时更新。

### OPERATIONS.md

当活动、版本、实验、故障和执行环境变化时更新。

### Semantic Layer

当指标、事件、字段、数据模型或计算口径变化时更新。

跨层变化需要引用，但不应通过复制保持同步。

## 10. Proposed Authoring Rules

以下是供 RFC-0002 和 RFC-0003 评审的候选要求：

1. 每项主要 ABU 内容必须说明分析用途；
2. `BUSINESS.md` 必须声明适用语境和版本；
3. 稳定机制与当前 Strategy/Operations 必须分离；
4. 指标公式和字段映射必须引用 Semantic Layer；
5. 不确定的业务模式必须标记为 Hypothesis；
6. Incident 特定事实不得伪装成长期规律；
7. 必须允许记录反例、时滞和例外；
8. 不得要求所有内容都适配 Transition；
9. 每个案例必须执行答案泄漏检查；
10. 主要知识项应具有稳定标识，以支持消融实验和变更追踪。

第 10 条可能引入过强结构，应在自然语言优先原则下谨慎验证。

## 11. Claims and Epistemic Status

### Claim B1 — ABU 边界应由用途而不是主题决定

**Status:** Draft Conclusion

“属于业务”是必要但不充分条件。只有对分析推理产生直接作用的部分进入候选 ABU。

### Claim B2 — 稳定性应按跨 Incident 复用判断

**Status:** Draft Conclusion

固定的年、季、周更新频率只是维护建议，不能定义知识类型。

### Claim B3 — Layer Ownership 可以减少重复和污染

**Status:** Hypothesis

明确 Strategy、Operations、Semantic Layer 和 Incident 的首要所有权，预期能降低 `BUSINESS.md` 膨胀和答案泄漏。

验证方式：比较有无路由规则时的文档一致性、重复率和泄漏问题。

### Claim B4 — Admission Test 可以提高作者一致性

**Status:** Hypothesis

验证方式：让多个作者独立分类同一批知识项，并计算一致性及分歧类型。

### Claim B5 — ABU 不应以 Transition 定义边界

**Status:** Draft Conclusion

先通过分析用途判断知识是否属于 ABU，再判断用 Transition、Process、Journey 或其他方式表达。否则表示选择会提前决定研究边界。

## 12. Failure Modes

- **Background accumulation**：所有有趣背景都进入 `BUSINESS.md`；
- **Metric duplication**：复制 Semantic Layer 公式并产生版本分叉；
- **Operational contamination**：把当前活动和故障写成长期规律；
- **Answer leakage**：根据 Incident 根因定制 BUSINESS.md；
- **Transition forcing**：将不适合的机制强行改写成状态迁移；
- **Normative confusion**：把组织目标误写成业务因果；
- **Code dominance**：认为代码中存在的规则才是真实业务；
- **Expert folklore**：把未经验证的经验当作稳定规律；
- **Timeless definitions**：忽略市场、产品和时间边界；
- **Completeness theater**：5W2H 齐全但不能改善任何分析判断。

## 13. Open Questions

- Admission Test 的作者一致性需要达到什么水平？
- “分析用途”应由专家判断，还是必须先有实验结果？
- Strategy 对假设优先级影响很大时，是否应作为 ABU Condition 的独立输入？
- 通用业务模式库是否属于 ABU，还是仅作为 authoring aid？
- 如何引用 Semantic Layer 而不让模型因缺少公式上下文而误解 Evidence？
- 机制的有效期未知时，默认状态应该是什么？
- 多 Actor 协同变化能否由单个 Transition 清晰表达？
- BUP 是否需要稳定知识项 ID 来支持消融？

## 14. Draft Conclusion

ABU 的候选边界可以由以下组合确定：

```text
业务特定
+ 分析相关
+ Incident 前独立
+ 跨 Incident 可复用
+ 语境明确
+ 不属于其他层的实现细节
+ 不泄露答案
```

通过这些条件的内容可以进入 candidate ABU；只有在对照或消融实验中显示稳定增量价值后，才得到“必要性”的经验支持。

这一边界保留了 ABU 的独立研究价值：

- 它比 General Business Understanding 更窄；
- 比 Semantic Layer 更关注解释；
- 比 Business Logic 更关注分析用途；
- 比 Ontology 更少形式化承诺；
- 比 Strategy 和 Operations 更稳定；
- 比 Incident 更早存在且可复用。

下一步不是立即冻结边界，而是：

1. 用独立作者测试 Admission Test 的一致性；
2. 在游戏案例中记录所有边界分歧；
3. 设计文档级、知识项级和结构级对照；
4. 根据反例修订 RN-0001、RN-0003 和 RFC。

## References

1. Chapman, P. et al. (2000). [CRISP-DM 1.0: Step-by-step Data Mining Guide](https://www.dataprix.com/files/CRISP-DM.pdf).
2. Davis, R., Shrobe, H., & Szolovits, P. (1993). [What Is a Knowledge Representation?](https://groups.csail.mit.edu/medg/ftp/psz/k-rep.html), *AI Magazine*, 14(1), 17–33.
3. Evans, E. (2015). [Domain-Driven Design Reference: Definitions and Pattern Summaries](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf).
4. W3C OWL Working Group (2012). [OWL 2 Web Ontology Language Document Overview, Second Edition](https://www.w3.org/TR/owl-overview/).
5. Google Cloud. [Introduction to LookML](https://docs.cloud.google.com/looker/docs/what-is-lookml).

