# RN-0002 — Properties of Analytical Business Understanding

**Classification:** Research  
**Status:** Draft  
**Version:** 0.1  
**Date:** 2026-07-18  
**Depends on:** [RN-0001 — What Is ABU?](./RN-0001-what-is-abu.md), [RN-0004 — Boundary of ABU](./RN-0004-boundary-of-abu.md)  
**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)  
**Related Open Questions:** OQ-0001, OQ-0004, OQ-0009, OQ-0010, OQ-0011, OQ-0015–OQ-0021

## Abstract

Project Charter v0.1 提出 ABU 可能具有八项性质：

1. 先于数据；
2. 与具体数据模型相对独立；
3. 业务特定；
4. 可显式表达；
5. 支持假设生成；
6. 能够缩小分析搜索空间；
7. 允许定义漂移；
8. 在一定时期内相对稳定。

本文不把这些性质视为既定事实，而是将它们改写为可验证的研究命题。主要修正如下：

- “先于数据”改为 **先于目标 Incident，而非独立于所有历史数据**；
- “与数据模型独立”改为 **可与具体 Schema 分离，但必须能够连接到 Evidence**；
- “可显式表达”改为 **足够显式化，而非完整外化所有专家知识**；
- “缩小搜索空间”改为 **提高有用搜索的效率，同时保留对未知机制的开放性**；
- “允许定义漂移”和“相对稳定”被统一为 **有界稳定、显式版本化**。

八项性质分为四类：

| 类型 | 性质 | 研究角色 |
|---|---|---|
| 定义性 | Incident-prior、Business-specific | 决定候选知识是否属于 ABU |
| 表示性 | Data-model-separable、Sufficiently explicit | 决定知识能否被 BUP 有效表达 |
| 经验性 | Hypothesis-enabling、Search-reducing | 决定 ABU 是否真的改善分析 |
| 生命周期 | Drift-aware、Locally stable | 决定知识能否可靠维护和复用 |

最关键的两项仍是经验性质。即使文档满足其他六项，如果不能稳定改善假设和搜索，就不能证明 ABU 的核心价值。

## 1. Research Questions

本文回答：

1. 八项候选性质应如何精确定义？
2. 哪些是定义性要求，哪些必须通过实验验证？
3. 每项性质的强版本为什么可能不成立？
4. 哪些可观察指标能够支持或否证它？
5. 性质之间有哪些冲突和权衡？
6. 游戏案例和 Benchmark 应如何验证这些性质？

本文暂不决定：

- 每项指标的最终量表和权重；
- 通过或失败的统计阈值；
- `BUSINESS.md` 的规范字段；
- Transition 是否具有这些性质；
- 第一阶段最终需要支持哪些强度的结论。

## 2. Property Types

### 2.1 Definitional Properties

定义性性质来自 ABU 当前工作定义。它们用于判断一项知识是否是合理候选：

- 能否在目标 Incident 原因未知时表达；
- 是否描述特定业务语境；
- 是否与分析任务相关。

它们可以通过内容审查和作者一致性研究检验，但不能单独证明 ABU 有效。

### 2.2 Representational Properties

表示性质回答：

- 知识能否脱离具体数据实现继续成立；
- 人和 AI 能否以足够一致的方式表达和使用它。

它们同时评价 ABU 内容和 BUP 表达方式，实验时必须避免混淆两者。

### 2.3 Empirical Properties

经验性质是项目核心假设：

- 是否改善假设生成与排序；
- 是否减少无效搜索并改善证据路径。

这些性质不能由文档评审证明，必须通过受控对照实验验证。

### 2.4 Lifecycle Properties

生命周期性质回答：

- 知识在什么范围内可以复用；
- 发生业务或定义变化时如何失效、更新和选择版本。

它们防止 ABU 在短期内变成 Operations 日志，也防止其被错误地当作永恒事实。

## 3. Property P1 — Incident-prior

### 3.1 Proposed Property

> **候选 ABU 必须能够在不知道目标 Incident 隐藏原因的情况下表达，并在同一业务语境下被多个 Incident 复用。**

### 3.2 Strong Version Rejected

以下强版本不成立：

> ABU 必须先于、独立于所有数据存在。

理由：

- 业务知识可能来自历史数据、实验和以往 Incident；
- CRISP-DM 明确把业务理解与数据理解视为可往返的阶段，而不是严格单向顺序；
- 专家经验本身可能是长期观察数据后的归纳；
- 新数据可能揭示旧业务理解的错误。

所以“先于数据”不应阻止 ABU 被证据修订。

### 3.3 Operational Tests

#### Authoring Separation

记录 `BUSINESS.md` 的创建时间、作者可见材料和目标 Incident 创建时间。

通过条件：

- 作者在编写稳定业务知识时看不到目标 Incident 的隐藏原因；
- 同一 `BUSINESS.md` 用于多个 Incident；
- 正式实验启动后不针对单个答案修改文档。

#### Leakage Audit

独立评审者检查：

- 是否出现只对一个 Incident 有意义的异常细节；
- 是否包含与隐藏答案高度一致但不具一般性的措辞；
- 是否用当前观察反推长期机制；
- 是否存在文件、Prompt 或上下文顺序泄漏。

#### Reuse Test

在至少三个不同 Incident 中复用同一版本的 `BUSINESS.md`，观察其是否仍具有合理解释价值。

### 3.4 Failure Signals

- 每个 Incident 都需要专门改写 BUSINESS.md；
- 删除 Incident 特定措辞后，文档不再有分析价值；
- 实验效果只出现在编写文档时已经知道答案的案例；
- 新 Incident 一出现，大部分“稳定知识”就必须重写。

### 3.5 Status

**Status:** Draft Definitional Property

它适合作为候选 ABU 的纳入条件，但其可实现性需要通过案例生成隔离和泄漏审计验证。

## 4. Property P2 — Data-model-separable

### 4.1 Proposed Property

> **ABU 的业务含义应能与具体表、字段、事件名、Join 和指标实现分离，同时保留连接到 Observation 和 Evidence 的能力。**

### 4.2 Strong Version Rejected

以下强版本不成立：

> ABU 完全独立于数据模型和测量方式。

如果 ABU 无法连接到数据，它就不能指导验证。某些业务 State 和 Transition 也可能只有在可观测事件存在时才能被可靠分析。

更准确的关系是：

```text
ABU：要解释什么、为何可能变化、什么证据有区分力
Semantic Layer：如何定义、定位、计算和查询这些证据
```

### 4.3 Operational Tests

#### Schema Portability Test

为同一模拟业务创建两种不同数据实现：

- 不同事件名称；
- 不同表结构；
- 不同指标实现；
- 相同业务机制。

检查同一 `BUSINESS.md` 是否只需替换 Semantic Layer 引用，而不需要重写核心业务含义。

#### Implementation Removal Test

删除 `BUSINESS.md` 中的字段名、SQL、表名和公式后，检查：

- 业务机制是否仍清晰；
- 假设路径是否仍可生成；
- Evidence 类型是否仍可描述。

#### Evidence Linkability Test

给定 `BUSINESS.md` 和新的 `SEMANTIC.md`，分析者是否能把候选 Observation/Evidence 映射到新的数据实现。

### 4.4 Candidate Measures

- 核心知识项跨 Schema 保留比例；
- 必须因 Schema 改变而重写的知识项比例；
- Evidence 映射准确率；
- 文档中直接依赖字段或 SQL 的内容比例；
- 迁移到新 Schema 所需修改量。

这些指标的单位和阈值仍需 RFC-0005 定义。

### 4.5 Failure Signals

- 更换事件名或表结构后，BUSINESS.md 大面积失效；
- 业务知识实际上只是数据字典的自然语言复制；
- 文档虽然与 Schema 分离，但无法指导任何 Evidence 查询；
- 相同业务在两个数据模型中被描述成不兼容的机制。

### 4.6 Status

**Status:** Hypothesis

它是 ABU 独立于 Semantic Layer 的主要证据之一，需要专门的 Schema portability study。

## 5. Property P3 — Business-specific and Context-bounded

### 5.1 Proposed Property

> **ABU 必须描述特定业务语境中的机制、状态、变化和证据关系；通用分析方法本身不属于 ABU。**

### 5.2 Specificity Levels

```text
通用分析方法
  ↓
行业模式
  ↓
企业/产品机制
  ↓
市场/渠道/Actor 变体
  ↓
单次 Incident
```

ABU 主要位于行业模式到市场/Actor 变体之间：

- 太通用：无法改善具体假设；
- 太具体：退化为 Incident 答案或 Operations 记录。

### 5.3 Operational Tests

#### Cross-domain Swap

把游戏 `BUSINESS.md` 提供给电商 Incident，或反向交换。

预期：

- 错误领域文档不应带来与正确 ABU 相同的增益；
- 分析者应能识别语境不匹配，而不是盲目套用。

#### Within-domain Context Test

对同一行业的不同产品、市场或商业模式测试：

- 哪些知识可以复用；
- 哪些必须声明语境；
- 哪些概念发生 Definition Drift。

#### Generic-method Control

提供等长度的通用根因分析指南，比较它与业务特定 ABU 的效果。

### 5.4 Failure Signals

- 通用分析清单与 ABU 表现相同；
- 错误领域 ABU 也产生相同改善；
- 文档只有产品名不同，机制内容高度通用；
- 过度具体的知识直接暴露答案；
- 缺少适用边界导致错误迁移。

### 5.5 Status

**Status:** Draft Definitional Property + Empirical Hypothesis

业务特定性可作为纳入条件，但“需要多具体”必须通过跨语境实验确定。

## 6. Property P4 — Sufficiently Explicit

### 6.1 Proposed Property

> **对分析有增量价值的业务知识中，至少有一部分可以被人以足够清晰、一致和可维护的方式表达，使另一位分析者或 AI 能实际使用。**

### 6.2 Strong Version Rejected

以下强版本不成立：

> 资深分析师的业务理解可以被完整、无损地显式化。

Polanyi 对 tacit knowledge 的讨论强调，人可能知道得比能够说出的更多。Nonaka 的组织知识理论也把 tacit 和 explicit knowledge 的转换描述为持续过程，而不是一次性完整导出。

因此，ABU 项目必须允许：

- 部分知识无法直接表达；
- 表达会有损失和偏差；
- 不同专家会给出不同抽象；
- 文档需要通过案例和反馈逐步改进。

### 6.3 Operational Tests

#### Independent Authoring

让多名业务专家或案例作者基于相同业务材料独立编写候选 ABU，比较：

- 核心机制覆盖；
- 术语一致性；
- 边界判断；
- 例外和上下文；
- 分歧类型。

#### Interpretation Test

让未参与写作的分析者阅读文档后：

- 复述主要业务机制；
- 为新 Incident 生成假设；
- 指出适用边界；
- 区分文档事实和 Hypothesis。

#### Expert Review

业务专家评估：

- 是否准确；
- 是否遗漏关键但可表达的知识；
- 是否出现作者臆测；
- 是否把隐性经验过度确定化。

#### Incremental Elicitation

比较：

- 无 ABU；
- 静态 BUSINESS.md；
- BUSINESS.md + 专家问答。

如果问答显著优于静态文档，说明仍有重要知识未被外化，或 BUP 表达能力不足。

### 6.4 Candidate Measures

- 独立作者知识项一致性；
- 下游分析者理解准确率；
- 未定义术语和歧义数量；
- 专家纠错数量；
- 静态文档相对专家交互保留的分析增益；
- 文档版本迭代后的错误下降。

### 6.5 Failure Signals

- 专家无法就核心机制形成可用表达；
- 文档读者对同一内容产生系统性相反理解；
- 只有原作者能使用 BUSINESS.md；
- 文档增益远低于专家实时参与，且无法通过迭代改善；
- 为追求明确而把不确定经验写成伪规则。

### 6.6 Status

**Status:** Hypothesis

第一阶段只需要验证“足够显式化以产生分析增益”，不需要证明专家知识可以完整外化。

## 7. Property P5 — Hypothesis-enabling

### 7.1 Proposed Property

> **ABU 应提高候选业务假设的相关性、可验证性、优先级质量和根因覆盖，而不是只增加假设数量。**

这是核心经验性质之一。

### 7.2 Mechanism

预期机制：

```text
理解业务状态与机制
  → 识别可能发生变化的位置
  → 生成机制相关假设
  → 预测每个假设应出现的证据
  → 排序并区分竞争性解释
```

Davis 等人指出，知识表示会决定推理者关注什么、允许什么推断并推荐什么推断。ABU 的候选价值正是改变“推荐的分析推断”，而不是简单增加背景文本。

### 7.3 Operational Tests

对相同 Incident 比较 Baseline 和 ABU Condition：

- Top-k 假设是否更相关；
- 是否覆盖隐藏根因或可接受替代解释；
- 是否说明机制而不是复述相关指标；
- 是否提出可区分的预期 Evidence；
- 是否对假设进行有理由的优先级排序；
- 是否能发现 BUSINESS.md 未覆盖的新解释。

### 7.4 Candidate Measures

#### Hypothesis Precision

Top-k 假设中，与业务机制和可见证据一致的比例。

#### Root-cause Coverage

候选集合是否包含隐藏原因或由证据支持的合理替代原因。

#### Priority Quality

高价值假设是否更早出现，以及排序理由是否合理。

#### Testability

假设是否给出可以支持、反驳或区分它的 Evidence。

#### Mechanistic Depth

是否说明“如何导致现象”，而不是只列出与指标相关的维度。

#### Calibration

是否根据 Evidence 强度表达不确定性，而不是过度确定。

### 7.5 Failure Signals

- 假设更多但更分散；
- 只是把 BUSINESS.md 的名词重新排列；
- 根因命中来自直接泄漏；
- 排名更高但没有可验证 Evidence；
- 文档使模型忽略数据支持的未知机制；
- 只在单个模型或单次运行出现改善。

### 7.6 Status

**Status:** Core Hypothesis

若该性质无法得到支持，ABU 仍可能是一种文档方法，但不能支持项目的核心分析价值主张。

## 8. Property P6 — Search-reducing without Premature Closure

### 8.1 Proposed Property

> **ABU 应减少低价值分支和无效 Evidence 检查，提高有用假设被尽早验证的概率，同时避免过早关闭对未知解释的搜索。**

### 8.2 Strong Version Rejected

以下强版本不成立：

> 假设越少、步骤越短，分析越好。

过度缩小搜索可能：

- 错过文档未覆盖的新机制；
- 放大错误业务模型；
- 产生确认偏误；
- 快速得到错误答案。

真正需要优化的是：

> **达到足够结论质量所需的有效搜索成本。**

### 8.3 Operational Tests

#### Path Trace

要求分析输出可观察的：

- 候选假设；
- 优先级；
- 下一步 Evidence；
- 排除或保留理由。

这不是要求暴露隐藏思维过程，而是要求提供可审计的分析计划和结论依据。

#### Evidence Budget

给两个条件相同的 Evidence 查询预算，比较：

- 在预算内是否触达区分性证据；
- 是否浪费在低价值切分；
- 是否更早排除错误解释。

#### Robustness to Missing or Wrong ABU

提供：

- 正确 ABU；
- 缺失关键知识的 ABU；
- 过期 ABU；
- 错误领域 ABU。

观察分析者是否能识别冲突并回到 Evidence，而不是盲目服从文档。

### 8.4 Candidate Measures

- 首个高价值假设的排名；
- 首个区分性 Evidence 的步骤；
- 根因命中前的无效检查数；
- 固定 Evidence 预算下的结论质量；
- Top-k 假设 precision/coverage；
- 发现业务模型冲突的比例；
- 错误 ABU 条件下的性能损失。

### 8.5 Failure Signals

- 分支减少但根因覆盖下降；
- 模型机械遵循 BUSINESS.md；
- 遇到冲突 Evidence 不修正假设；
- 更短答案被误判为更短分析路径；
- 搜索改善只来自更长上下文或更明确的 Prompt；
- 错误 ABU 比无 ABU 造成严重且不可检测的损害。

### 8.6 Status

**Status:** Core Hypothesis

“缩小搜索空间”必须与开放性和错误恢复共同评估。

## 9. Property P7 — Definition-drift-aware

### 9.1 Proposed Property

> **ABU 和 BUP 必须允许相同术语、State、Transition 或机制在不同企业、产品、市场和时间具有不同定义，并明确记录适用语境和版本。**

### 9.2 Definition Drift Is Not Concept Drift

本项目中的 Definition Drift 指：

- 术语含义变化；
- 业务边界变化；
- 分类标准变化；
- 状态或机制的业务解释变化。

机器学习文献中的 Concept Drift 通常指输入与目标之间的统计关系随时间变化。二者可能同时出现，但不能混用：

```text
Definition Drift：我们所说的概念变了
Concept Drift：数据生成或预测关系变了
```

一次指标变化可能来自两者之一，也可能来自业务机制变化、数据错误或 Operations 事件。

### 9.3 Operational Tests

#### Context Variant Test

为相同术语创建多个合理语境，例如：

- Activation 在不同产品的含义；
- Active User 在不同阶段的含义；
- High-value User 在不同市场的标准。

检查 BUP 是否能表达差异，而不强制统一定义。

#### Historical Replay

用旧版本 ABU 分析新时期 Incident，再用正确版本分析，观察：

- 是否能识别版本不匹配；
- 错误版本造成什么偏差；
- 版本信息能否帮助选择正确知识。

#### Definition Change Audit

记录：

- 什么发生变化；
- 为什么变化；
- 生效范围和时间；
- 哪些 Transition、Observation、Evidence 和 Metric 受影响。

### 9.4 Failure Signals

- 同名术语被默认视为全局一致；
- 新定义覆盖旧定义，导致历史分析无法重放；
- 定义变化只能通过改写大量文档处理；
- BUSINESS.md 和 Semantic Layer 使用不同版本但没有提示；
- 把数据统计关系变化误称为业务定义变化。

### 9.5 Status

**Status:** Draft Design Property

第一阶段需要证明自然语言 BUP 能管理必要的上下文和版本，而不需要先建立全局 Ontology。

## 10. Property P8 — Locally Stable and Revisable

### 10.1 Proposed Property

> **ABU 应在声明的业务语境和分析时间范围内足够稳定，可以跨 Incident 复用；当业务机制变化或证据反驳它时，又必须能够被追踪、修订和失效。**

### 10.2 Strong Version Rejected

以下强版本不成立：

> ABU 是年级别更新的长期事实。

固定更新周期不能定义知识性质：

- 某些机制多年稳定；
- 某些产品规则可能每周变化；
- 市场、监管或平台变化可能突然使知识失效；
- 错误知识应在发现时立即修正。

因此，稳定性应按 **有效期和复用能力** 判断，而不是按日历频率。

### 10.3 Operational Tests

#### Cross-incident Survival

记录每项知识在多少个 Incident 中仍适用，以及失效原因。

#### Version Churn

区分修改类型：

- 文案澄清；
- 语境补充；
- Evidence 映射变化；
- 业务机制变化；
- 原知识被证伪。

只有后两类代表核心知识变化。

#### Temporal Holdout

用某个时间点冻结的 BUSINESS.md 分析之后生成、但仍处于相同业务机制期的 Incident。

#### Staleness Detection

当 Evidence 与 ABU 冲突时，分析者是否能够：

- 标记知识可能过期；
- 提出替代机制；
- 请求 Strategy/Operations 或新数据；
- 避免用文档否定观测事实。

### 10.4 Candidate Measures

- 跨 Incident 适用率；
- 核心知识修改频率；
- 版本选择准确率；
- 过期知识识别率；
- 错误知识条件下的恢复能力；
- 历史结果可重放性。

### 10.5 Failure Signals

- BUSINESS.md 实际成为每周 Operations 日志；
- 大部分知识只适用于一个 Incident；
- 为保持“稳定”而忽略反证；
- 旧版本无法恢复；
- 分析者把文档当作高于 Evidence 的绝对事实。

### 10.6 Status

**Status:** Draft Design Property + Hypothesis

局部稳定是候选 ABU 的设计目标；实际稳定程度必须由纵向案例验证。

## 11. Property Interactions and Tradeoffs

### 11.1 Explicitness vs. Fidelity

越追求简洁明确，越可能丢失专家判断中的条件和例外；越追求完整，文档越难维护和使用。

### 11.2 Specificity vs. Portability

越业务特定，越可能改善当前分析；越具体，跨产品和市场复用越困难。

### 11.3 Stability vs. Drift Awareness

知识必须稳定到值得维护，同时又要允许快速失效。二者通过语境、版本和证据反馈协调。

### 11.4 Search Reduction vs. Discovery

ABU 应提供高质量先验，但不能把先验变成不可质疑的规则。

### 11.5 Data-model Separation vs. Evidence Linkability

完全脱离数据会失去可验证性；过度绑定数据会退化为 Semantic Layer。BUP 需要稳定业务知识与可替换数据映射之间的接口。

### 11.6 Human Expression vs. Machine Consistency

自然语言容易表达真实业务细节，但可能产生歧义；更强结构提高一致性，却可能损失语义。第一阶段需要测量这个权衡，而不是预设答案。

## 12. Validation Matrix

| 性质 | 主要验证方法 | 首要对照 | 主要失败风险 |
|---|---|---|---|
| P1 Incident-prior | Authoring separation、leakage audit、reuse | 知道/不知道隐藏答案的作者 | Incident 污染 |
| P2 Data-model-separable | Schema portability、Evidence mapping | 同业务不同 Schema | 退化为数据字典 |
| P3 Business-specific | Cross-domain swap、generic-method control | 正确/错误领域文档 | 内容过度通用 |
| P4 Sufficiently explicit | 独立写作、解释测试、专家复核 | 静态文档/专家问答 | 隐性知识损失 |
| P5 Hypothesis-enabling | 假设质量评分 | Baseline、等长 Domain Notes | 更多文本效应 |
| P6 Search-reducing | Evidence budget、path audit | 正确/缺失/错误 ABU | 过早关闭 |
| P7 Drift-aware | Context variants、historical replay | 正确/错误版本 | 语境混用 |
| P8 Locally stable | Cross-incident、temporal holdout | 同期/跨机制期 | 文档快速失效 |

## 13. Recommended Experimental Conditions

第一轮游戏研究至少区分：

### Condition A — Baseline

```text
SEMANTIC.md + INCIDENT.md
```

### Condition B — ABU

```text
BUSINESS.md + SEMANTIC.md + INCIDENT.md
```

### Condition C — Equal-length Domain Notes

```text
与 BUSINESS.md 长度接近的普通业务介绍
+ SEMANTIC.md
+ INCIDENT.md
```

用于控制“更多业务文本”和上下文长度效应。

### Condition D — Perturbed ABU

探索性条件，可以是：

- 缺失关键知识；
- 错误领域知识；
- 过期版本；
- 顺序打乱但内容相同。

用于检验模型是否真正使用业务知识，以及错误 ABU 的风险。

正式条件数量和分析计划必须在 RFC-0005 中预注册。Condition D 可以先作为探索性研究，不与验证性结果混合。

## 14. Evidence Required by End of Phase 1

### Minimum Evidence

第一阶段至少需要：

1. 独立作者能够使用相同规则创建可比较的 BUSINESS.md；
2. 同一 BUSINESS.md 可用于多个 Incident；
3. 核心内容能迁移到不同 Schema；
4. ABU Condition 在假设质量或搜索效率上出现可重复增益；
5. 等长度 Domain Notes 不能完全解释该增益；
6. 分析者能够识别文档冲突或过期；
7. 跨行业案例暴露的例外被记录并用于修订理论。

### Stronger Evidence

更强但非第一阶段必需的证据：

- 真实企业 Incident；
- 多个独立业务专家；
- 不同模型家族；
- 长期纵向知识维护；
- 人类资深分析师基准；
- 对业务决策结果的实际改善。

## 15. Claims and Epistemic Status

### Claim P-A — 八项性质不具有相同逻辑地位

**Status:** Draft Conclusion

业务特定和 Incident-prior 可以作为定义边界；假设生成和搜索缩小必须作为经验结果；其他性质同时受内容和协议影响。

### Claim P-B — “先于数据”应解释为 Incident-prior

**Status:** Draft Conclusion

ABU 可以由历史数据形成并被新数据修订，但不能由目标 Incident 答案反向定制。

### Claim P-C — 完整显式化不是必要条件

**Status:** Draft Conclusion

项目只需证明足够多的分析相关知识可以被外化并产生稳定增益。

### Claim P-D — Search Reduction 必须包含错误恢复

**Status:** Draft Conclusion

只测量更短路径会奖励过早关闭。正确实验必须同时评价根因覆盖、未知机制开放性和错误 ABU 下的恢复。

### Claim P-E — BUP 的独立价值需要结构对照

**Status:** Hypothesis

只有 Baseline 不能区分：

- ABU 知识的价值；
- BUP 组织方式的价值；
- 更多 Token 的价值；
- 普通 Domain Notes 的价值。

等长度和结构对照是必要的实验补充。

## 16. Open Questions

- P2 的 Schema portability 需要多大结构差异才有意义？
- P4 的作者一致性应采用知识项、机制还是语义相似度评估？
- 模型预训练已经包含行业知识时，如何检测 ABU 的边际价值？
- BUSINESS.md 的长度是否需要在条件间严格匹配？
- Condition C 应由相同作者还是独立作者创建？
- 错误或过期 ABU 的安全性是否应成为 Phase 1 完成标准？
- 假设输出结构会不会反过来改变模型表现？
- 搜索路径如何审计而不依赖不可观察的内部推理？
- 历史数据归纳出的机制在什么证据下可以进入候选 ABU？
- 多模型结果不一致时，性质判断应以哪个层级汇总？

## 17. Draft Conclusion

ABU 的八项候选性质需要以弱而可检验的形式表述：

```text
先于目标 Incident
而非先于所有数据

可与具体数据模型分离
但必须能够连接 Evidence

业务特定且语境有界
而非全局统一

足够显式化
而非完整导出专家知识

改善假设质量
而非只增加假设数量

提高有效搜索效率
而非盲目减少分支

允许定义漂移并版本化
而非假设术语永恒稳定

在局部机制期内稳定
同时可被证据修订
```

其中，P5 和 P6 是决定项目是否成立的核心经验性质；P1 和 P3 确定候选范围；P2 和 P4 检验 BUP 是否可行；P7 和 P8决定它是否可以长期可靠使用。

RN-0003 接下来需要研究：Transition 作为表示承诺，是否比替代概念更好地实现这些性质。

## References

1. Chapman, P. et al. (2000). [CRISP-DM 1.0: Step-by-step Data Mining Guide](https://www.dataprix.com/files/CRISP-DM.pdf).
2. Davis, R., Shrobe, H., & Szolovits, P. (1993). [What Is a Knowledge Representation?](https://groups.csail.mit.edu/medg/ftp/psz/k-rep.html), *AI Magazine*, 14(1), 17–33.
3. Evans, E. (2015). [Domain-Driven Design Reference: Definitions and Pattern Summaries](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf).
4. Nonaka, I. (1994). [A Dynamic Theory of Organizational Knowledge Creation](https://pubsonline.informs.org/doi/10.1287/orsc.5.1.14), *Organization Science*, 5(1), 14–37.
5. Polanyi, M. (1966). [The Tacit Dimension](https://press.uchicago.edu/ucp/books/book/chicago/T/bo6035368), University of Chicago Press.
6. Gama, J., Žliobaitė, I., Bifet, A., Pechenizkiy, M., & Bouchachia, A. (2014). [A Survey on Concept Drift Adaptation](https://doi.org/10.1145/2523813), *ACM Computing Surveys*, 46(4).
7. Google Cloud. [Introduction to LookML](https://docs.cloud.google.com/looker/docs/what-is-lookml).
