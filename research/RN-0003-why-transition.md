# RN-0003 — Why Transition?

**Classification:** Research  
**Status:** Draft  
**Version:** 0.1  
**Date:** 2026-07-18  
**Depends on:** [RN-0001 — What Is ABU?](./RN-0001-what-is-abu.md), [RN-0002 — Properties of ABU](./RN-0002-properties-of-abu.md), [RN-0004 — Boundary of ABU](./RN-0004-boundary-of-abu.md)  
**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)  
**Related Open Questions:** OQ-0002, OQ-0003, OQ-0012, OQ-0016, OQ-0022–OQ-0027

## Abstract

Project Charter v0.1 提出：

> Transition 是 ABU 中最重要的候选分析表达单元。

本文比较 Transition 与 Object、State、Event、Process、Workflow、Journey、Capability、Causal Model 和 Stock–Flow 等替代表示，得出一个较弱、但更可检验的结论：

> **Transition 是表达 Actor 生命周期和离散业务变化的强候选主要索引单元；它可以作为 `BUSINESS.md` 的分析骨架，但不是完整因果模型，也不应成为唯一允许的表示方式。**

Transition 的主要价值是把静态指标变化重新组织为：

- 哪类 Actor 进入了什么状态；
- 哪个进入、维持、退出或恢复路径发生变化；
- 什么机制可能改变这些路径；
- 哪些 Evidence 能区分竞争性解释。

但 Transition 单独不足以完成根因分析。仅有 `source state → target state` 最多帮助定位“变化发生在哪里”，不能可靠回答“为什么发生”。为了支持分析，它至少需要机制、上下文、时间、例外、Observation/Evidence 和多 Actor 依赖等补充。

本文建议第一阶段采用：

> **Transition-centered, mechanism-augmented, multi-view compatible**

即以 Transition Collection 作为第一参考实现的主要索引，以业务机制和证据补足解释，并允许在 Process、Journey、Causal Model 或 Stock–Flow 更适合时引用替代视图。

这一建议仍是 Draft Decision Candidate。游戏案例和跨行业反例验证完成前，不应冻结。

## 1. Research Questions

本文回答：

1. 为什么“业务变化”可能比静态业务对象更适合作为分析单元？
2. Transition 与 State、Event、Process、Workflow、Journey 和 Capability 有何区别？
3. Transition 如何帮助假设生成和缩小搜索空间？
4. Transition 是否足以支持根因分析？
5. 哪些业务现象无法自然地由 Transition 表达？
6. Transition 应是唯一模型、核心骨架还是普通备选工具？
7. 哪些实验能够支持或否证其核心地位？

本文不决定：

- 正式 Transition Schema；
- 是否使用图结构或 DSL；
- State 和 Transition 的最终 ID 规则；
- 因果关系的形式化语义；
- BUSINESS.md 是否必须可执行；
- Transition Graph Engine。

## 2. What Transition Means in This Project

### 2.1 Charter Definition

当前 Glossary 将 Transition 定义为：

> Actor 从一个有业务意义的 State 进入另一个 State 的变化。

一个候选 Transition 至少可以表示为：

```text
Actor
+ Source State
+ Target State
+ Business Context
+ Time Scope
```

例如：

```text
新玩家
+ 已注册
→ 已体验核心游戏循环
+ 当前产品版本与市场
+ 注册后的早期窗口
```

### 2.2 It Is Not Automatically a UML Transition

UML State Machine 中的 Transition 具有较明确的行为语义，包括 source、target，以及可能存在的 trigger、guard 和 effect。Harel 的 Statecharts 又通过层级、并发和通信扩展了传统状态图，以处理复杂离散事件系统。

ABU 当前使用的 Transition 更宽松：

- 可以描述人、账户、订单、商家等业务主体；
- 可以是概率性或群体层面的变化；
- 不要求确定性触发；
- 不要求可执行；
- 不要求所有 State 互斥；
- 不自动继承 UML 的运行语义；
- 不证明因果关系。

因此，BUP 不应借用“State Machine”带来的形式精确感，却没有定义相应语义。

### 2.3 Three Different Meanings Must Be Separated

项目中容易混淆：

#### Transition Occurrence

某个 Actor 实际发生一次状态变化。

#### Transition Rate

在给定时间和语境内，一组 Actor 发生该变化的比例或速率。

#### Population Stock Change

某个 State 中 Actor 数量的净变化，它可能同时由多个流入和流出 Transition 决定。

例如“活跃用户下降”不是单个 Transition。它可能来自：

- 新用户进入活跃状态减少；
- 活跃用户继续活跃减少；
- 沉默用户回流减少；
- 活跃用户进入沉默状态增加；
- 统计口径或观测失败。

不区分 occurrence、rate 和 stock，会把 Transition 模型错误地简化成指标漏斗。

## 3. Why Focus on Change?

### 3.1 Enterprise Analysis Usually Starts from a Difference

典型企业分析问题是：

- 为什么指标下降？
- 为什么某细分与预期不同？
- 为什么一个阶段转化异常？
- 为什么行为在版本后改变？
- 为什么同一机制在不同市场表现不同？

这些问题隐含比较：

```text
当前 vs. 过去
实际 vs. 预期
群体 A vs. 群体 B
有干预 vs. 无干预
```

静态对象定义可以说明“有哪些东西”，但分析还需要说明“什么变化产生了当前现象”。

### 3.2 Metrics Often Aggregate Movements

许多指标是状态数量、流量或速率的观测：

- Active Users：某状态中的 Actor 数量；
- Activation Rate：进入目标状态的比例；
- Retention：状态维持或再次进入；
- Churn：从使用状态退出；
- Conversion：从意向状态进入交易状态；
- Fulfillment Rate：订单进入成功完成状态；
- Renewal Rate：账户从到期前状态进入续费状态。

Transition 视角可以把一个总指标分解成不同业务变化，而不是只按维度穷举。

### 3.3 It Encourages Mechanistic Hypotheses

“移动端转化下降”是一个切分结果，不是业务解释。

Transition 视角会进一步追问：

- 哪个 Actor 的哪条路径变化？
- 变化发生在进入、维持、退出还是恢复？
- 哪个机制推动或阻断了这条路径？
- 如果机制成立，还应看到什么 Evidence？

这使假设更接近业务机制，而不是停留在相关性切片。

### 3.4 It Connects Stable Knowledge to Current Evidence

Transition 可以同时承接：

- 稳定业务知识：哪些变化重要、通常由什么机制影响；
- 当前 Incident：哪类变化可能异常；
- Semantic Layer：如何观测变化；
- Evidence：哪些事实支持或反驳机制。

这种连接是 Transition 成为候选“分析索引”的主要理由。

## 4. Evaluation Criteria

Transition 和替代表示应在相同标准下比较。

| 标准 | 问题 |
|---|---|
| Analytical relevance | 是否直接帮助解释业务现象？ |
| Hypothesis generation | 是否产生机制相关、可验证的假设？ |
| Search reduction | 是否减少低价值检查而不造成过早关闭？ |
| Evidence linkability | 是否能连接 Observation、Evidence、Metric 和 Data？ |
| Context boundedness | 是否能表达产品、市场、Actor、时间和例外？ |
| Human expressibility | 业务专家能否自然、稳定地写作？ |
| Data-model separability | 是否可以脱离具体 Schema 保留业务含义？ |
| Multi-actor support | 是否能表达协同、依赖和交互？ |
| Dynamics | 是否能表达并发、反馈、延迟、累积和路径依赖？ |
| Causal discipline | 是否会把顺序或相关性误写成因果？ |
| Composability | 是否能与其他视图协同，而不复制全部内容？ |
| Drift management | 是否能记录适用语境、版本和失效？ |

不能因为 Transition 与当前 Charter 一致，就降低对它的评价要求。

## 5. Comparison with Alternative Units

### 5.1 Object or Entity

**Strengths**

- 容易识别；
- 适合 Glossary、Ontology 和 Semantic Layer；
- 可以稳定连接数据实体。

**Weaknesses for Analysis**

- 静态；
- 不说明变化；
- 容易产生“围绕对象列属性”的分析；
- 不直接提供假设优先级。

**Best use**

作为 Actor、业务对象和数据实体定义，不作为 ABU 的唯一核心。

### 5.2 State

**Strengths**

- 表达业务上有意义的条件；
- 可以定义 population、segment 和 lifecycle；
- 与指标和事件有自然联系。

**Weaknesses**

- 单独的 State 不说明如何进入或退出；
- State 粒度选择可能任意；
- 多维状态可能重叠；
- 容易把连续行为强行离散化。

**Best use**

State 是 Transition 的必要组成，但不足以单独解释变化。

### 5.3 Event

**Strengths**

- 容易观测；
- 与日志和 Semantic Layer 直接连接；
- 有明确时间戳；
- 适合 Process Mining。

**Weaknesses**

- Event 是记录，不必然是业务状态变化；
- 同一 Transition 可能由多个 Event 共同证明；
- 一个 Event 可能只是尝试、失败或重复；
- 观测缺失不等于业务变化没有发生。

**Best use**

作为 Evidence 或 Observation 的数据实现，不自动等同于 Transition。

### 5.4 Process

BPMN 提供对业务流程的标准化表达，Process Mining 则从 Event Log 发现、检查和增强实际流程。Process 表示特别擅长活动顺序、分支、角色、等待、返工和并发。

**Strengths**

- 表达端到端活动；
- 适合操作流程和履约；
- 能定位瓶颈、等待和合规问题；
- 与事件序列和流程实例天然连接。

**Weaknesses for ABU**

- 容易关注组织做了什么，而不是 Actor 的业务变化；
- 流程边界和“case”选择可能决定分析视角；
- 非流程化行为不易表达；
- 设计流程可能与真实行为不同；
- 完整流程模型可能过于庞大。

**Best use**

当根因主要来自活动顺序、资源、等待或返工时，Process 应成为 Transition 的补充或更优主视图。

### 5.5 Workflow

Workflow 通常比 Process 更接近具体任务、角色、规则和系统执行。

**Strengths**

- 对自动化、审批、派单和系统状态机精确；
- 易于映射代码和操作日志；
- 适合定位执行断点。

**Weaknesses**

- 可能过度绑定当前实现；
- 容易混入大量分析无关细节；
- 同一业务结果可以由多个 Workflow 实现；
- 不一定解释用户或市场行为。

**Best use**

作为具体 Business Logic 和 Operations 的来源，不作为跨企业或跨实现的默认 ABU 单元。

### 5.6 Journey

Customer Journey 研究强调客户跨阶段、渠道和触点的整体体验。

**Strengths**

- Actor-centered；
- 能覆盖跨渠道和跨组织触点；
- 能表达感知、期望和体验连续性；
- 对发现漏掉的前后文很有价值。

**Weaknesses**

- 阶段边界可能较主观；
- 常以叙事或可视化为主，验证语义较弱；
- 不一定说明组织内部机制；
- 对非客户 Actor 或后台系统较弱。

**Best use**

当体验、触点和跨渠道路径主导问题时，Journey 可能比 Transition Collection 更自然。Transition 可以索引关键变化，但不应替代完整 Journey。

### 5.7 Capability

Business Architecture Guild 将 Capability 概括为企业做什么的能力，并把它作为业务架构的基础构件。

**Strengths**

- 稳定；
- 与组织结构和具体实现相对分离；
- 适合战略、能力缺口和投资分析；
- 可跨流程和系统复用。

**Weaknesses for Incident Analysis**

- 粒度通常较粗；
- 更接近“能做什么”，不说明某次变化如何发生；
- 不直接连接 Actor State 或 Evidence；
- 根因常需要进一步下钻到流程、机制或资源。

**Best use**

当问题是能力缺口、成熟度或组织设计时使用；它可以解释 Transition 为什么普遍受限，但不替代 Transition。

### 5.8 Causal Model

结构因果模型强调变量间因果结构、干预和反事实。Pearl 对因果推断的讨论说明，观察关联、干预结果和反事实解释不是同一层次的问题。

**Strengths**

- 直接表达因果假设；
- 支持干预和反事实问题；
- 迫使分析者区分相关与因果；
- 可以表示混杂、中介和共同原因。

**Weaknesses for First-stage BUP**

- 建模成本高；
- 因果方向和变量边界常有争议；
- 业务专家不一定能稳定形式化；
- 容易产生不被 Evidence 支持的精确图；
- 难以承担完整业务背景和写作入口。

**Best use**

当分析需要回答“如果改变 X，Y 会怎样”或区分因果机制时，Causal Model 是必要补充。Transition 顺序不能替代因果模型。

### 5.9 Stock–Flow and System Dynamics

System Dynamics 强调 stock、flow、delay 和 feedback，并将系统行为解释为结构、积累和反馈的结果。

**Strengths**

- 表达累积量和速率；
- 擅长反馈回路、延迟和非线性；
- 适合市场供需、库存、容量、网络效应和增长循环；
- 能解释局部合理行为为何产生系统级异常。

**Weaknesses**

- 模型构建和校准成本较高；
- 可能聚合掉个体 Actor 差异；
- 不一定容易连接具体 Incident Evidence；
- 对离散生命周期问题可能过重。

**Best use**

当 population stock、资源约束、反馈和延迟主导现象时使用。Transition 可以被视为 inflow/outflow 的业务解释，但不能替代反馈结构。

## 6. Comparative Summary

| 表示 | 最擅长回答 | 对根因分析的主要价值 | 主要盲点 |
|---|---|---|---|
| Object | 有哪些业务对象？ | 确定分析实体 | 缺少变化 |
| State | Actor 处于什么条件？ | 定义有意义群体 | 缺少进入/退出机制 |
| Event | 记录了什么？ | 提供时间化 Evidence | 记录不等于业务事实 |
| Transition | 哪个业务变化异常？ | 定位生命周期变化和候选机制 | 不自带因果、反馈和多 Actor 语义 |
| Process | 活动如何流动？ | 定位等待、返工、分支和执行问题 | 可能忽略 Actor 业务结果 |
| Workflow | 系统/人员如何执行？ | 定位规则和执行断点 | 过度实现绑定 |
| Journey | Actor 如何跨触点体验？ | 发现跨渠道和体验断点 | 边界主观、机制较弱 |
| Capability | 企业能做什么？ | 定位结构性能力缺口 | 粒度粗、Evidence 远 |
| Causal Model | 什么导致什么？ | 干预和反事实推理 | 成本高、假设要求强 |
| Stock–Flow | 累积与反馈如何演化？ | 解释延迟、约束和系统动态 | 聚合、建模复杂 |

不存在一个表示在所有标准上占优。

## 7. Transition’s Analytical Advantages

### 7.1 It Provides a Diagnostic Index

Transition Collection 可以把业务问题映射到有限的变化区域：

```text
进入
维持
退出
恢复
路径切换
```

这比从所有指标和维度开始更接近资深分析师的定位方式。

### 7.2 It Separates Business Reality from Observation

业务变化可以发生但未被正确记录；事件也可以记录但不代表真实变化。

明确区分：

```text
Transition
→ possible Observations
→ discriminating Evidence
→ Metric/Data implementation
```

有助于发现观测错误和指标代理失真。

### 7.3 It Supports Competing Hypotheses

同一指标下降可以映射到多条 Transition：

- 流入减少；
- 维持下降；
- 流出增加；
- 回流减少。

每条 Transition 又对应不同机制和 Evidence，形成可排序的竞争性解释。

### 7.4 It Is Relatively Schema-separable

“玩家未进入核心体验”可以在多个事件设计中成立。事件名和表结构改变时，业务含义可能保持稳定。

这支持 RN-0002 的 Data-model-separable 性质。

### 7.5 It Is Naturally Compatible with Running Examples

业务专家通常能够围绕“谁从什么状态变成什么状态”叙述案例，再补充为什么、何时、如何和如何知道。

这为自然语言优先提供了可理解的写作入口。

## 8. Why Transition Alone Is Not Root-cause Analysis

### 8.1 Localization Is Not Explanation

知道“Active → Dormant 增加”只定位了变化。

它没有区分：

- 内容消耗完毕；
- 难度突变；
- 版本性能问题；
- 渠道用户质量变化；
- 竞争产品发布；
- Measurement failure。

根因分析至少还需要机制和区分性 Evidence。

### 8.2 Temporal Order Is Not Causality

先发生 A、后发生 Transition B，不代表 A 导致 B。

可能存在：

- 共同原因；
- 反向作用；
- 选择偏差；
- Measurement artifact；
- 未观测变量。

Transition 文档只能表达业务因果假设，不能仅凭顺序证明因果。

### 8.3 States Can Hide Relevant History

两个 Actor 当前处于相同 State，但可能因为不同历史而有不同未来：

- 刚进入 Dormant；
- 长期 Dormant；
- 多次流失又回流；
- 被动停用；
- 主动离开。

如果 State 没有保留必要历史，Transition 会违反问题需要的记忆结构。

### 8.4 Multi-actor Outcomes Are Joint

外卖订单履约同时依赖：

- 消费者；
- 商家；
- 骑手；
- 平台调度；
- 支付和地图服务。

把根因归给单个 Actor Transition 可能丢失协同约束和资源竞争。

### 8.5 Aggregate Dynamics Can Dominate

广告库存、市场供给、骑手容量和网络效应可能由 stock、flow、feedback 和 delay 共同决定。

即使每个 Actor Transition 都被记录，系统级行为仍可能无法从独立变化简单相加得到。

## 9. Counterexamples and Boundary Cases

### 9.1 Continuous Engagement

用户参与度可能是连续强度，而不是清晰的 Engaged / Dormant 二元状态。

强行离散会：

- 引入任意阈值；
- 隐藏边界附近变化；
- 制造 Definition Drift；
- 使指标口径决定业务模型。

可能需要连续变量或分布视图。

### 9.2 Price Elasticity

价格变化影响需求强度，不一定先表现为清晰的个体状态迁移。Causal Model 或 response curve 可能更合适。

### 9.3 Marketplace Liquidity

供给和需求相互反馈，等待时间又影响退出，Stock–Flow 或 feedback model 比孤立 Transition 更有解释力。

### 9.4 Brand Perception

品牌信任可能缓慢变化、难以观测且跨触点形成。Journey、survey construct 或 latent variable model 可能优于离散 Transition。

### 9.5 Organizational Capability Gap

“无法稳定开展企业销售”可能来自能力、人才、流程和系统组合，不容易归结为某个 Actor State。

### 9.6 Process Rework

订单最终仍从 Submitted 进入 Completed，但中间重复审核三次。只看首尾 Transition 会遗漏导致成本和时延异常的 Process 路径。

### 9.7 Concurrent States

一个 SaaS 账户可以同时：

- 已付费；
- 部分团队已采用；
- 管理员不活跃；
- 接近额度上限；
- 处于续费谈判。

单一 State 会失真，多维 State 的组合又可能爆炸。

### 9.8 Exogenous Shock

监管变化、自然灾害或竞争者行为可能同时改变多条 Transition。把它们分别记录不能自动表达共同外因。

### 9.9 Measurement-only Incident

业务 Transition 没变，但事件埋点丢失造成指标下降。Transition 视角必须允许“业务无变化、Observation 失败”这一候选解释。

### 9.10 Non-actor Phenomenon

现金余额、库存水平、广告拍卖价格和系统容量可能更自然地表示为 stock 或 continuous state，而不是自主 Actor 的迁移。

这些反例不否定 Transition 的价值，但否定其普遍充分性。

## 10. Proposed Position

### 10.1 Strong Claim Rejected

> Transition 是 ABU 的唯一或充分表达单元。

当前理论和反例不支持该说法。

### 10.2 Weak Claim Proposed

> **对于以 Actor 生命周期、漏斗、采用、交易、履约、留存和续费为主的分析任务，Transition 是一个强候选主要索引单元。**

### 10.3 Architecture Candidate

```text
Analytical Business Overview
  ↓
Transition Collection as primary index
  ├── Mechanisms and constraints
  ├── Context, timing and exceptions
  ├── Multi-actor dependencies
  ├── Observation and Evidence
  ├── Semantic Layer references
  └── Alternative-view references
        ├── Process / Workflow
        ├── Journey
        ├── Capability
        ├── Causal Model
        └── Stock–Flow
```

Transition 是导航骨架，不是必须容纳所有内容的容器。

## 11. Mechanism-augmented Transition

一个具有分析价值的 Transition，候选内容至少包括：

### Analytical Purpose

它帮助解释哪类业务现象？

### Scope

适用于哪个产品、市场、Actor、版本和时间？

### Actor

谁或什么发生业务变化？

### Source and Target State

从什么业务状态进入什么状态？

### Preconditions

哪些条件必须先满足？

### Triggers, Drivers and Inhibitors

什么可能触发、推动、减弱或阻断变化？

### Mechanism

这些因素通过什么业务机制影响变化？

### Timing and Delay

通常何时发生？Evidence 何时出现？是否有延迟？

### Competing Transitions

Actor 还可能进入哪些替代状态？是否存在回退、退出或恢复？

### Multi-actor Dependencies

其他 Actor、资源、平台或环境如何共同影响？

### Observation and Evidence

如何知道变化增强、减弱、中断或被错误观测？

### Exceptions and Drift

哪些语境不适用？什么变化会使该知识失效？

### Alternative View

是否需要 Process、Journey、Causal Model 或 Stock–Flow 补充？

这不是最终 Schema，而是对当前 5W2H 完整性检查的研究扩展。

## 12. Running Example: Game Activity Decline

### 12.1 Incident

某游戏的周活跃用户下降。

### 12.2 Metric-first Search

可能直接切分：

- 平台；
- 渠道；
- 国家；
- 版本；
- 付费层级；
- 设备；
- 内容类型。

这些切分可能发现相关区域，但不自动形成业务解释。

### 12.3 Transition Index

将周活跃拆为：

1. 新玩家进入 Activated 减少；
2. Activated 进入稳定参与减少；
3. Active 维持 Active 减少；
4. Active 进入 Dormant 增加；
5. Dormant 回到 Active 减少；
6. 业务没变，但 Observation 或 Metric 失真。

### 12.4 Mechanism Layer

例如对 “Active → Dormant 增加”：

- 内容消耗和目标缺失；
- 难度或经济系统失衡；
- 匹配等待或质量下降；
- 性能和崩溃；
- 活动结束后的自然回落；
- 用户构成变化；
- 外部竞争；
- 埋点或登录识别问题。

### 12.5 Discriminating Evidence

- 内容进度与退出集中点；
- 失败和重试模式；
- 匹配等待与完成；
- 崩溃、延迟和设备分布；
- 活动 cohort 与非活动 cohort；
- 渠道 cohort 基线；
- 多套活跃 Observation 的一致性。

Transition 缩小了定位范围；Mechanism 和 Evidence 才完成解释。

## 13. Authoring Decision Rules

### Use Transition as Primary Index When

- 可以识别有意义的 Actor；
- 存在可解释的 before/after State；
- Incident 主要表现为进入、维持、退出、恢复或路径切换；
- 业务机制能够连接到该变化；
- 可以定义 Observation/Evidence；
- State 离散化不会严重失真。

### Prefer or Add Process/Workflow When

- 活动顺序、等待、返工、审批或资源分配主导问题；
- 同一首尾 State 隐藏重要执行差异；
- 需要分析并发和流程实例。

### Prefer or Add Journey When

- 跨渠道体验、触点、期望或感知主导问题；
- Actor 的体验连续性比系统状态更重要。

### Prefer or Add Capability When

- 问题涉及组织是否具备长期能力；
- 根因位于跨流程、人员、技术和信息的结构性缺口。

### Prefer or Add Causal Model When

- 需要回答干预或反事实；
- 需要区分中介、共同原因和混杂；
- Transition 的时间顺序不足以支持结论。

### Prefer or Add Stock–Flow When

- 累积量、容量、供需、网络效应、延迟或反馈主导现象；
- 个体 Transition 无法解释系统级动态。

### Avoid Transition When

- State 完全由任意指标阈值创造；
- Actor 无法合理定义；
- 现象主要是连续量变化；
- 表达会造成组合状态爆炸；
- 只有 Event，没有可辩护的业务状态变化。

## 14. Evaluation Plan

### 14.1 Hypotheses

#### H-T1 — Transition Index Value

**Hypothesis**

Transition-centered BUSINESS.md 比等长度普通 Domain Notes 更能改善假设相关性、优先级和 Evidence 选择。

#### H-T2 — Mechanism Augmentation Value

**Hypothesis**

包含机制、约束和区分性 Evidence 的 Transition 描述，优于只列 Actor/State/Transition 名称的骨架。

#### H-T3 — Boundary Awareness

**Hypothesis**

允许引用替代视图的 BUP，在多 Actor、反馈和流程型 Incident 中优于 Transition-only BUP。

#### H-T4 — Representation Mismatch Detection

**Hypothesis**

高质量作者和分析者能够识别“不适合用 Transition”的案例，而不是强制建模。

### 14.2 Candidate Conditions

第一轮可以探索：

```text
A. SEMANTIC + INCIDENT
B. Equal-length Domain Notes + SEMANTIC + INCIDENT
C. Transition Skeleton + SEMANTIC + INCIDENT
D. Mechanism-augmented Transition + SEMANTIC + INCIDENT
```

跨行业阶段再比较：

```text
E. Transition-only
F. Transition-centered + best-fit alternative view
```

条件数量、样本需求和多重比较风险必须在 RFC-0005 中评估，不能直接全部进入正式 Benchmark。

### 14.3 Measures

- Top-k 假设相关性；
- Root-cause coverage；
- 假设优先级；
- 可验证性；
- 首个区分性 Evidence 的位置；
- 无效检查数量；
- 未知机制开放性；
- 表示不匹配识别；
- 错误模型下的恢复；
- 作者 State/Transition 分类一致性；
- 写作和维护成本。

### 14.4 Falsification Conditions

以下结果会削弱 Transition 核心地位：

1. Transition Skeleton 与普通 Domain Notes 无差异；
2. Mechanism augmentation 有效，但 Transition 结构没有独立增益；
3. Process、Journey 或其他视图在多数案例中稳定更好；
4. 作者无法对 Actor、State 和 Transition 粒度形成可接受一致性；
5. Transition 造成严重过早关闭或未知机制遗漏；
6. 多 Actor 和反馈案例需要大量变通才能表达；
7. 数据映射成本抵消了搜索收益；
8. Transition-only 改善根因命中，却降低不确定性表达或错误恢复；
9. 结果只在游戏或同源模型上成立。

### 14.5 Support Conditions

以下结果会支持较弱主张：

1. Transition-centered 文档稳定改善生命周期类 Incident；
2. 增益超过等长度 Domain Notes；
3. 机制增强进一步改善结果；
4. 作者能稳定识别适用与不适用案例；
5. 替代视图可以通过引用补充，而不破坏主要索引；
6. 同一 Transition Collection 能跨 Incident 和 Schema 复用。

## 15. Risks

### 15.1 Transition Bias

项目作者已经偏好 Transition，案例设计可能故意让它胜出。

控制：

- 独立设计反例；
- 让替代表示专家评审；
- 预注册适用/不适用判断；
- 报告 Transition 失败案例。

### 15.2 State Granularity Manipulation

通过选择合适粒度，几乎任何结果都能被事后解释。

控制：

- Incident 前冻结 State；
- 记录粒度理由；
- 比较粗粒度和细粒度；
- 审计是否因答案而重新切分。

### 15.3 Causal Language Inflation

使用 “Why” 和 “Mechanism” 容易让文档看起来具有因果证明。

控制：

- 区分 Hypothesis、Evidence 和 causal identification；
- 记录替代解释；
- 不把顺序当作因果；
- 对干预结论要求额外设计。

### 15.4 Graph Expansion

Actor × State × Context × Version 可能产生大量 Transition。

控制：

- Analytical First；
- 只记录高价值变化；
- 使用层级和引用；
- 通过消融删除无增量内容；
- 不追求完整世界模型。

### 15.5 Hidden Alternative Views

作者可能在自然语言中偷偷使用 Process、Journey 或 Causal Model，却仍把效果归给 Transition。

控制：

- 对文档内容编码；
- 区分 Transition 结构与补充机制；
- 设计 Transition Skeleton 对照；
- 明确记录 alternative-view references。

## 16. Claims and Epistemic Status

### Claim T1 — Change Is a Better Default than Static Object

**Status:** Draft Conclusion

对解释指标变化和根因诊断，业务变化通常比静态对象更接近分析问题。

边界：对象和 State 仍是定义 Transition 的必要基础。

### Claim T2 — Transition Is a Strong Primary Index for Lifecycle Analysis

**Status:** Hypothesis

它预期改善激活、采用、转化、履约、留存、流失、回流和续费等任务。

### Claim T3 — Transition Alone Is Insufficient for Root-cause Analysis

**Status:** Draft Conclusion

它需要机制、上下文、Evidence 和必要的替代视图。

### Claim T4 — Transition Should Not Carry Formal Causal Semantics by Default

**Status:** Draft Conclusion

时间顺序和业务叙事不能替代因果识别。

### Claim T5 — BUP Should Be Transition-centered, Not Transition-only

**Status:** Draft Decision Candidate

在游戏与跨行业验证前，不进入 Accepted 或 Frozen 状态。

### Claim T6 — Representation Mismatch Is a First-class Result

**Status:** Hypothesis

能够识别某问题不适合 Transition，可能比强行表达所有业务更能证明 BUP 的成熟度。

## 17. Implications for BUP and RFCs

### RFC-0001

应把 Transition 标记为候选主要分析单元，而不是 ABU 定义的一部分。

### RFC-0002

应允许：

- Transition Collection；
- Mechanism 和 Evidence；
- alternative-view reference；
- Context 和版本；
- 明确的“不适用 Transition”记录。

### RFC-0003

Authoring Guide 应提供：

- State 粒度检查；
- occurrence/rate/stock 区分；
- 多 Actor 检查；
- 测量失败检查；
- 因果语言检查；
- alternative-view routing。

### RFC-0004

Reference Cases 必须刻意包含：

- Transition 适配案例；
- Process 主导案例；
- Journey 主导案例；
- 多 Actor 协同案例；
- feedback/stock 案例；
- Measurement-only Incident。

### RFC-0005

Benchmark 必须区分：

- 更多业务背景的效果；
- Transition 索引的效果；
- Mechanism augmentation 的效果；
- Hybrid view 的效果。

## 18. Open Questions

- OQ-0002：什么实验门槛足以称 Transition 为“核心”？
- OQ-0003：Transition、Observation 和 Evidence 是否应是多对多关系？
- OQ-0012：哪些反例必须进入第一阶段 Reference Cases？
- OQ-0016：消融单位应是完整 Transition、机制段落还是 Evidence 链接？
- OQ-0022：State 应互斥吗？多维 State 如何避免组合爆炸和历史信息丢失？
- OQ-0023：Actor 是否可以是订单、账户、库存或市场？多 Actor 变化由谁拥有？
- OQ-0024：occurrence、rate 和 stock 如何区分？什么时候必须引用 Process、Journey、Causal Model 或 Stock–Flow？
- OQ-0025：Mechanism 写到多深才有分析价值而不成为伪因果模型？
- OQ-0026：Transition Skeleton 对照是否人为削弱 Transition？
- OQ-0027：如何在相同 Token、写作质量和知识量下公平比较 Transition、Mechanism 和替代视图？如果 Mechanism 有效而 Transition 索引无效，BUP 应如何调整？

## 19. Draft Conclusion

本文支持：

> **Transition 是生命周期和离散业务变化分析的强候选主要索引。**

本文不支持：

> **Transition 是 ABU 的唯一、充分或普遍核心。**

更合理的第一阶段立场是：

```text
Transition-centered
+ Mechanism-augmented
+ Evidence-linked
+ Context-bounded
+ Multi-view compatible
```

Transition 的价值必须通过三层对照分开验证：

1. ABU 内容是否有价值；
2. Transition 索引是否有独立价值；
3. Mechanism 和替代视图是否才是真正产生增益的部分。

如果游戏案例只证明“机制丰富的业务说明有用”，而没有证明 Transition 结构本身有用，项目应接受这一结果并修订核心主张，而不是通过重新定义 Transition 保住假设。

## References

1. Object Management Group. [Unified Modeling Language, Version 2.5.1](https://www.omg.org/spec/UML/2.5.1/).
2. Harel, D. (1987). [Statecharts: A Visual Formalism for Complex Systems](https://doi.org/10.1016/0167-6423(87)90035-9), *Science of Computer Programming*, 8(3), 231–274.
3. Object Management Group. [Business Process Model and Notation, Version 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/).
4. van der Aalst, W. M. P. et al. (2012). [Process Mining Manifesto](https://www.vdaalst.com/publications/p658.pdf), *Business Process Management Workshops*, 169–194.
5. Lemon, K. N., & Verhoef, P. C. (2016). [Understanding Customer Experience Throughout the Customer Journey](https://doi.org/10.1509/jm.15.0420), *Journal of Marketing*, 80(6), 69–96.
6. Business Architecture Guild (2020). [The Business Architecture Metamodel Guide](https://www.businessarchitectureguild.org/resource/resmgr/public_resources/Business_Architecture_Metamo.pdf).
7. Pearl, J. (2019). [The Seven Tools of Causal Inference, with Reflections on Machine Learning](https://doi.org/10.1145/3241036), *Communications of the ACM*, 62(3), 54–60.
8. System Dynamics Society. [What Is System Dynamics?](https://systemdynamics.org/what-is-system-dynamics-old/).
9. Davis, R., Shrobe, H., & Szolovits, P. (1993). [What Is a Knowledge Representation?](https://groups.csail.mit.edu/medg/ftp/psz/k-rep.html), *AI Magazine*, 14(1), 17–33.
