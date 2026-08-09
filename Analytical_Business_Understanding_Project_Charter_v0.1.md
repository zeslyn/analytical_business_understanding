# Analytical Business Understanding 项目总纲

> **项目定位：面向企业分析的业务理解研究与开放规范项目**  
> **目标读者：Codex、研究参与者、数据分析师、AI 工程师、未来项目维护者**  
> **当前阶段：Phase 1 — Research Foundation / 第一阶段研究基础建设**  
> **文档状态：Project Charter v0.1 — Post-G1 Scope and Prompt Design Clarification**
>
> **当前主要验证目标：显式 ABU 对 LLM 分析表现的增量价值**

---

## 1. 项目背景

现代企业分析已经较好地解决了数据采集、数据存储、指标定义、报表展示和自然语言查数等问题，但企业分析仍然高度依赖资深分析师。

面对相同的数据和分析问题，资深分析师通常能够：

- 更快判断问题可能发生在哪个业务环节；
- 提出更高质量的业务假设；
- 缩小验证范围；
- 避免无效的数据排查；
- 更快形成可信的业务结论。

这种差异并不主要来自 SQL、Python、统计学或工具能力，而来自分析师对业务运行规律的理解。

当前项目试图回答：

> **企业分析所依赖的业务理解究竟是什么，能否被显式表示，并进一步被 AI 使用？**

---

## 2. 项目愿景

### Vision

> **让显式 ABU 可验证地改善 LLM 的企业分析表现。**

AI 是本项目的重要使用者，但不是研究对象本身。

本项目不直接研究更强的模型、Prompt、Agent 编排或自动化工作流，而是优先研究：

> **分析推理所依赖的业务知识是什么，以及如何显式表示这些知识。**

资深分析师是项目理解 ABU 来源和性质的重要启发，但“ABU+LLM 是否达到资深分析师水平”不属于当前阶段的主要验证目标。Phase 1 比较的是同一 LLM 在受控条件下有无显式 ABU 时的表现差异，不进行人类能力非劣效或替代性验证。

---

## 3. 核心研究对象

### 3.1 Analytical Business Understanding（ABU）

**分析型业务理解（Analytical Business Understanding，ABU）**定义为：

> **正确解释业务现象、生成业务假设、缩小验证范围并完成分析推理所必需的最小业务知识集合。**

ABU 是完整 Business Understanding 的一个子集。

完整的企业业务理解可能包含：

- 战略；
- 组织；
- 财务；
- 法务；
- 产品规划；
- 运营流程；
- 企业文化；
- 竞争策略。

ABU 只保留对分析推理有直接价值的部分。

### 3.2 Analytical First 原则

项目中的所有新增概念、文档和功能都必须通过以下过滤器：

1. 是否提升分析推理质量？
2. 是否帮助生成或验证业务假设？
3. 删除它以后，根因分析能力是否会明显下降？

如果三个问题的答案都是否定的，该内容不属于 ABU 或 BUP 的第一阶段范围。

---

## 4. 核心研究假设

### Hypothesis

> **在贴近一般需求表达的 Natural Request 下，当模型、Incident、Evidence、Prompt、工具权限和输出预算保持一致时，获得显式 ABU 的 LLM，将比只获得数据语义或等长普通领域背景的 LLM 产生更好的分析结果。**

其逻辑链条为：

```text
AI 获得相同数据
        ↓
缺少业务理解时
        ↓
从指标和数据开始穷举
        ↓
假设质量低、验证路径长

AI 获得显式 ABU
        ↓
理解关键业务变化与因果关系
        ↓
生成更合理的假设
        ↓
缩小搜索空间
        ↓
提高分析效率与结论质量
```

---

## 5. 当前冻结的核心结论

以下内容已经经过多轮讨论，第一阶段默认冻结。除非出现强有力的理论或实验反例，不应随意修改。

### 5.1 企业分析的对象不是数据本身

数据和指标是业务变化留下的观测结果。

企业分析的目标是解释业务现象，而不是机械解释指标。

### 5.2 分析型业务理解用于解释业务变化

资深分析师的优势在于，他们理解：

- 哪些业务状态具有分析意义；
- 哪些状态迁移会影响当前现象；
- 什么原因可能导致迁移异常；
- 哪些证据能够验证这些判断。

### 5.3 Transition 是当前最重要的候选核心单元

目前项目采用以下基本对象：

- **Actor**：参与业务系统的主体；
- **State**：Actor 所处的有业务意义的状态；
- **Transition**：Actor 从一个 State 迁移到另一个 State。

当前工作假设是：

> **Transition 是 ABU 中最重要的分析表达单元。**

但该观点仍需在 Research 阶段进一步论证，而不是直接作为不可质疑的公理。

### 5.4 Observation 不是业务本身

关系链条暂定为：

```text
Business Rule / Business Understanding
        ↓
Transition
        ↓
Observation
        ↓
Evidence
        ↓
Metric
        ↓
Data
```

定义：

- **Transition**：真正发生的业务变化；
- **Observation**：Transition 在业务层面的可观测现象；
- **Evidence**：支持某项 Observation 的具体业务事实；
- **Metric**：Evidence 的量化表达；
- **Data**：Metric 的底层记录。

### 5.5 标准化表达方式，而不是标准化业务

不同企业、行业、产品和阶段会出现定义漂移。

例如：

- Active User；
- Activation；
- High-value User；
- Retention；
- Engagement。

这些概念无法被全局统一定义。

因此项目不建立统一的业务状态词典，而是遵循：

> **Standardize expression, not business.**

即统一“如何描述”，不统一“必须描述成什么”。

### 5.6 自然语言优先

ABU 的第一参考实现使用自然语言，而不是 YAML、JSON、DSL 或固定 Ontology。

原因包括：

- 业务定义天然存在漂移；
- LLM 对自然语言语义对齐能力较强；
- 文档同时面向分析师和 AI；
- 过强的结构约束可能损失真实业务语义。

---

## 6. 项目概念分层

项目必须严格区分 Vision、Research 与 Engineering。

### 6.1 Vision

> 让显式 ABU 更好地支持 LLM 完成企业分析工作。

当前研究只检验 ABU 对 LLM 的增量，不把“达到资深分析师水平”作为 Phase 1 成功标准。

### 6.2 Research

研究对象：

> Analytical Business Understanding（ABU）

核心研究问题：

1. ABU 是什么？
2. ABU 有哪些性质？
3. ABU 为什么能够提升分析？
4. ABU 的边界是什么？
5. 为什么 Transition 适合作为核心表达单元？

### 6.3 Engineering

工程产物包括：

- Business Understanding Protocol（BUP）；
- BUSINESS.md；
- Reference Cases；
- Benchmark；
- 未来的 Agent Runtime；
- 未来的 Business Reasoning Engine。

第一阶段不得让工程实现反向绑架 ABU 的理论定义。

---

## 7. Business Understanding Protocol（BUP）

### 7.1 定位

**BUP 是 ABU 的表达协议。**

其目标不是定义企业，而是定义：

> **如何用可被人和 AI 理解的方式，表达分析所需的业务理解。**

### 7.2 BUSINESS.md

`BUSINESS.md` 是 BUP 的第一参考实现。

它不是：

- 公司介绍；
- PRD；
- 产品说明；
- 数据字典；
- 指标平台；
- Ontology；
- SQL 文档；
- Dashboard 说明。

它的目标是：

> **显式表达分析师在解释业务现象之前必须理解的业务因果与关键状态迁移。**

### 7.3 当前组织原则

BUSINESS.md 暂定包含：

1. Analytical Business Overview；
2. Transition Collection。

每个 Transition 采用自然语言描述，并遵循分析版 5W2H。

---

## 8. Transition 描述方法

每一个重要 Transition 应尽量回答以下问题。

### Who

哪个 Actor 发生了状态变化？

### What

Actor 从什么 State 进入什么 State？

### Why

为什么这次迁移会发生？

### When

迁移通常在什么时间窗口内发生？

### Where

迁移在哪些业务场景、渠道、市场、产品环境或上下文中发生？

### How

哪些业务机制、产品能力、运营动作或外部因素会推动迁移？

### How do we know

哪些 Observation 和 Evidence 能够说明迁移发生、增强、减弱或中断？

### 设计原则

5W2H 不是严格字段结构，而是完整性检查框架。

文档可以使用自然语言自由表达，但不能遗漏分析所需的关键信息。

---

## 9. 企业目标与动态上下文

企业目标会随业务、阶段和时间变化，因此不应把所有内容都固化到 BUSINESS.md。

当前分层建议：

```text
BUSINESS.md
长期稳定的分析型业务规律
年级别更新

STRATEGY.md
当前阶段目标、优先级和约束
月度 / 季度更新

OPERATIONS.md
活动、版本、实验、资源变化和执行环境
周级别更新

Semantic Layer / Data
指标、事件、字段和数据记录
实时或准实时更新
```

第一阶段重点是 BUSINESS.md 和 ABU，不急于完整设计 STRATEGY.md 与 OPERATIONS.md。

它们只作为未来分析上下文分层的预留概念。

---

## 10. 第一阶段工作范围

### 第一阶段 Mission

> **定义 ABU，并验证它能否作为独立于 Semantic Layer 的知识层，为 LLM 带来可归因、可重复且不损害业务与证据诚信的分析增量。**

### 第一阶段不包含

暂不开展：

- Agent Runtime；
- 以提升单次模型表现为目的的 Prompt 工程；实验以 Natural Request 为主要条件，只在 G1.1 的 A/C 小样本中把 Structured Prompt 作为替代方案消融；
- 多 Agent 编排；
- Business Reasoning Engine；
- 图数据库实现；
- 可视化编辑器；
- 企业产品化；
- 私有化部署；
- 大规模真实数据接入；
- ABU+LLM 与资深分析师的能力等价或非劣效比较；
- “替代分析师”或人类水平能力主张；
- RFC-0006 及以后内容。

---

## 11. 第一阶段交付物

### 11.1 Research Notes

优先形成以下研究文档：

#### RN-0001 — What Is Analytical Business Understanding?

回答：

- ABU 是什么；
- 为什么需要 ABU；
- ABU 与一般 Business Understanding 的区别；
- ABU 与 Domain Knowledge、Business Logic 的区别。

#### RN-0002 — Properties of ABU

研究 ABU 是否具备以下性质：

- 先于数据；
- 与具体数据模型相对独立；
- 业务特定；
- 可显式表达；
- 支持假设生成；
- 能够缩小分析搜索空间；
- 允许定义漂移；
- 在一定时期内相对稳定。

#### RN-0003 — Why Transition?

回答：

- 为什么业务变化比业务对象更适合作为分析单元；
- 为什么不用 Process、Workflow、Journey、Capability；
- Transition 是否足以支持根因分析；
- Transition 的适用边界在哪里。

#### RN-0004 — Boundary of ABU

明确：

- 什么属于 ABU；
- 什么不属于 ABU；
- ABU 与 Strategy、Operations、Ontology、Semantic Layer、Metrics 的边界。

### 11.2 Glossary

建立全项目统一术语表，并冻结核心含义。

至少包含：

- Analytical Business Understanding；
- Business Understanding Protocol；
- BUSINESS.md；
- Actor；
- State；
- Transition；
- Observation；
- Evidence；
- Metric；
- Analytical Reasoning；
- Business Insight；
- Definition Drift。

### 11.3 Manifesto

输出一页式项目宣言，核心原则包括：

- Enterprise Analytics should reason about business before data.
- Data is evidence, not the business itself.
- Analytical business understanding should be explicit.
- Business change should be represented through meaningful transitions.
- Definition drift is expected.
- The protocol standardizes expression, not business definitions.
- AI is an important consumer, but analytics is the domain.

### 11.4 RFC 体系

当前计划：

```text
RFC-0000 — BUP RFC Writing Convention
RFC-0001 — ABU Definition and Conceptual Model
RFC-0002 — BUP Specification
RFC-0003 — BUSINESS.md Authoring Guide
RFC-0004 — Reference Cases
RFC-0005 — Evaluation Benchmark
```

所有 RFC 统一采用：

1. Abstract；
2. Motivation；
3. Problem Statement；
4. Design Goals；
5. Non-goals；
6. Design Rationale；
7. Specification；
8. Running Example；
9. Alternatives Considered；
10. Open Questions；
11. Future Work。

### 11.5 五个参考行业

第一阶段只覆盖五类业务：

1. 游戏；
2. 电商；
3. 外卖；
4. SaaS；
5. 广告。

选择原因：

- 游戏：持续参与和内购；
- 电商：交易；
- 外卖：多边协同与履约；
- SaaS：B2B 激活、采用和续费；
- 广告：多边价值交换与效果优化。

每个案例建议包含：

```text
BUSINESS.md
SEMANTIC.md
INCIDENT_01.md
INCIDENT_02.md
INCIDENT_03.md
BUSINESS_REALITY.md
```

### 11.6 初步验证实验

实验只验证显式 ABU 是否提升 LLM 分析，不验证复杂 Agent，也不验证 LLM 是否达到资深分析师水平。

#### Baseline

```text
SEMANTIC.md
+
INCIDENT.md
```

#### Equal-length Domain Notes Control

```text
DOMAIN_NOTES.md
+
SEMANTIC.md
+
INCIDENT.md
```

#### Full ABU

```text
BUSINESS.md
+
SEMANTIC.md
+
INCIDENT.md
```

控制变量：

- 使用相同模型；
- A-N、B-N、C-N 使用相同的 Natural Request；
- 使用相同异常数据；
- 在 A/B/C 主要比较中只改变所提供的业务上下文类型。

主要归因同时要求：

- Full ABU 优于 Baseline，说明存在上下文增量；
- Full ABU 优于等长 Domain Notes，排除“只是更多文本或一般背景”的解释；
- BEI、OWR 等护栏没有实质性下降。

G1 已表明题目过易和分析指令过强会压缩条件差异。后续主要实验使用贴近一般需求方表达的 Natural Request，不把 Rubric 改写为任务清单。详细教授机制、反证、区分性 Evidence 和结论更新方法的 Structured Prompt 不代表主要使用场景，只在 G1.1 中运行 A-S、C-S 小规模消融，用于判断通用系统脚手架能否替代部分 ABU 增量；它不进入 F1 主要实验或推进规则。

评价维度：

- 假设质量；
- 根因命中程度；
- 分析路径合理性；
- 无效排查数量；
- 业务一致性；
- 证据引用质量；
- 是否有效缩小搜索空间。

---

## 12. Agent 0 模拟业务设计

第一阶段可以在缺少真实业务数据时使用模拟实验。

Agent 0 负责设计五类业务，并为每类业务输出：

1. BUSINESS.md；
2. SEMANTIC.md；
3. 三个 Incident；
4. 隐藏的 BUSINESS_REALITY.md。

分析 Agent 只读取：

- BUSINESS.md（实验组）；
- SEMANTIC.md；
- INCIDENT.md。

必须避免自证循环：

- BUSINESS.md 只能描述长期稳定业务规律；
- BUSINESS.md 不得泄露单次 Incident 的真实原因；
- Incident 必须包含足够但不直接揭示答案的观测信息；
- BUSINESS_REALITY.md 只供评分使用。

---

## 13. 推荐项目目录

```text
analytical-business-understanding/
│
├── README.md
├── VISION.md
├── MANIFESTO.md
├── GLOSSARY.md
├── LICENSE
├── CONTRIBUTING.md
│
├── research/
│   ├── RN-0001-what-is-abu.md
│   ├── RN-0002-properties-of-abu.md
│   ├── RN-0003-why-transition.md
│   └── RN-0004-boundary-of-abu.md
│
├── rfcs/
│   ├── RFC-0000-writing-convention.md
│   ├── RFC-0001-abu-definition.md
│   ├── RFC-0002-bup-specification.md
│   ├── RFC-0003-business-md-authoring-guide.md
│   ├── RFC-0004-reference-cases.md
│   └── RFC-0005-evaluation-benchmark.md
│
├── references/
│   ├── game/
│   ├── ecommerce/
│   ├── delivery/
│   ├── saas/
│   └── advertising/
│
├── benchmark/
│   ├── protocol.md
│   ├── scoring-rubric.md
│   └── results/
│
└── docs/
    ├── architecture/
    ├── diagrams/
    └── decisions/
```

---

## 14. Codex 工作规则

Codex 在执行本项目时必须遵守以下规则。

### 14.1 聚焦 Analytical

所有新增内容必须明确说明其对分析推理的价值。

不得因为概念有趣而加入。

### 14.2 Research Before Engineering

在 ABU 理论未稳定前，不优先开发：

- Agent；
- Runtime；
- Graph Engine；
- Editor；
- SaaS；
- 数据库连接器。

### 14.3 不创造不必要的新术语

优先使用已有成熟概念。

只有现有术语无法表达关键差异时，才提出新术语。

### 14.4 区分三类内容

每个任务必须标记为：

- Vision；
- Research；
- Engineering。

### 14.5 记录设计决策

任何重要修改都必须形成 Decision Record，包含：

- Decision；
- Reason；
- Alternatives；
- Tradeoffs；
- Impacted Documents。

### 14.6 不把假设写成事实

尚未经过实验验证的观点必须标记为：

- Hypothesis；
- Open Question；
- Draft Decision。

### 14.7 维持术语一致性

所有文档必须引用 `GLOSSARY.md`。

不得同一概念使用多个名称。

### 14.8 使用贯穿案例

研究文档和 RFC 优先使用游戏业务作为 Running Example，再通过其他四类行业验证泛化能力。

---

## 15. 第一阶段完成标准

只有同时满足以下条件，第一阶段才算完成：

1. ABU 有清晰、可辩护的定义；
2. ABU 的边界与相邻概念明确；
3. Transition 作为核心单元具有充分理论依据；
4. Glossary、Manifesto、RN-0001 至 RN-0004 完成；
5. RFC-0000 至 RFC-0005 风格和术语一致；
6. 五类业务均能使用 BUP 表达；
7. 至少完成 15 个模拟 Incident；
8. 完成 Baseline、等长 Domain Notes 与 Full ABU 的受控对照实验；
9. 实验结果能够说明显式 ABU 在冻结任务与模型边界内是否产生可归因增量；
10. 所有未解决问题均被明确记录，而不是被隐含忽略。

---

## 16. 暂缓内容

以下内容推迟到第一阶段完成后再决定：

- RFC-0006 Agent Runtime；
- RFC-0007 Business Reasoning Engine；
- RFC-0008 Open Benchmark Dataset；
- BUSINESS.json；
- BUSINESS.graph；
- Transition Graph Engine；
- BUSINESS.md 自动生成 Agent；
- 企业真实试点；
- 产品定价与商业模式；
- 论文正式投稿。

---

## 17. 当前最重要的下一步

Codex 应按以下顺序执行：

### Step 1

把“ABU 对 LLM 的增量价值”固化为当前唯一主要验证目标，并统一 Charter、Vision、Protocol 与项目首页。

### Step 2

依据 G1 结果设计 G1.1：提高 Incident 歧义与难度，以 A-N、B-N、C-N 作为 Natural Request 主设计，并只在 A/C 小样本中运行 Structured Prompt 替代性消融。

### Step 3

修订 RCC、HQI、DEE、BEI 和 OWR 的评分锚点，使用能覆盖更多分值和失败模式的材料重新校准。

### Step 4

在不查看 ABU 条件结果的前提下完成 Baseline-only Case 难度预试，冻结 Incident 纳入规则、输入和哈希。

### Step 5

运行 G1.1，确认 Case、Natural Request 和 Rubric 能形成足够区分度；A-S、C-S 只形成独立的替代性诊断结果。

### Step 6

根据 G1.1 的方差与测量结果冻结 F1 的 MID、护栏、样本量、模型、Prompt 和 Judge 设计。

### Step 7

运行不包含 G1/G1.1 Incident 的跨行业 F1，检验 Full ABU 相对 Baseline 和等长 Domain Notes 的增量。

### Step 8

完成 ABU 增量对照实验并输出具有明确主张边界的研究总结。

---

## 18. 项目北极星

> **我们的最终目标是让 AI 更好地完成企业分析。**

> **我们当前唯一的主要验证目标，是显式 ABU 能否为 LLM 带来可测量、可归因的分析增量。**

> **我们的核心研究对象是 Analytical Business Understanding。**

> **BUP 用于显式表达 ABU。**

> **BUSINESS.md 是 BUP 的第一参考实现。**

> **任何不能提升分析推理能力的内容，都不属于当前项目范围。**
