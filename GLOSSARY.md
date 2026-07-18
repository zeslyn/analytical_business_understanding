# Glossary

**Version:** 0.1  
**Status:** Provisional  
**Classification:** Research  
**Last updated:** 2026-07-19

## 使用规则

1. 本文件是项目术语的当前唯一入口。
2. `Provisional` 表示定义可在研究或实验后修改，不表示已经冻结。
3. 修改核心术语必须创建 Decision Record，并列出受影响文档。
4. 尚有争议的定义必须关联 [OPEN_QUESTIONS.md](./OPEN_QUESTIONS.md)。
5. 文档首次使用术语时应使用完整名称，后续可使用缩写。

## 核心术语

### Analytical Business Understanding（ABU）

**Status:** Provisional

正确解释业务现象、生成业务假设、缩小验证范围并完成分析推理所必需的最小业务知识集合。

ABU 是完整 Business Understanding 的子集，只保留对分析推理有直接价值的知识。“最小”的可操作判定方法尚未解决，见 OQ-0001。

当前操作化草案见 [RN-0001 — What Is ABU?](./research/RN-0001-what-is-abu.md)；候选纳入边界见 [RN-0004 — Boundary of ABU](./research/RN-0004-boundary-of-abu.md)；候选性质及验证方法见 [RN-0002 — Properties of ABU](./research/RN-0002-properties-of-abu.md)。三份文档均为 Draft，尚未冻结本定义。

### Business Understanding

**Status:** Provisional

对企业如何创造价值、运行、决策和变化的广义理解。它可能包含战略、组织、财务、法务、产品、运营、文化和竞争等内容。

并非所有 Business Understanding 都属于 ABU。

### Business Understanding Protocol（BUP）

**Status:** Provisional

用于显式表达 ABU 的协议。BUP 标准化表达方式，而不统一不同企业的业务定义。

### BUSINESS.md

**Status:** Provisional

BUP 的第一种自然语言参考实现。它用于表达分析前必须理解的长期稳定业务规律、关键业务状态和变化。

它不是公司介绍、PRD、数据字典、指标平台、Ontology、SQL 文档或 Dashboard 说明。

### Analytical Business Overview

**Status:** Provisional

`BUSINESS.md` 中概述业务价值创造方式、主要参与者、关键状态和分析边界的部分。其最小内容要求将在 RFC-0002 和 RFC-0003 中定义。

### Actor

**Status:** Provisional

参与业务系统并可能处于有分析意义状态的主体，例如用户、商家、订单、账户或广告主。

Actor 不预设必须具有自主性，但订单、库存或市场等非人格实体应在什么条件下被视为 Actor，以及多 Actor 变化由谁拥有，仍是 OQ-0023。当前分析见 [RN-0003 — Why Transition?](./research/RN-0003-why-transition.md)。

### State

**Status:** Provisional

Actor 在一定业务语境和时间内所处的、对分析推理有意义的状态。

State 是业务语义，不等同于数据库字段值或未经解释的事件标签。

State 不预设必须互斥。多维 State、历史依赖和组合爆炸问题仍是 OQ-0022。

### Transition

**Status:** Provisional / Core Hypothesis

Actor 从一个有业务意义的 State 进入另一个 State 的变化。

当前 Draft 结论将 Transition 定位为 Actor 生命周期和离散业务变化的强候选主要索引，而不是唯一、充分或普遍核心。它需要 Mechanism、Context、Observation/Evidence 和必要的替代视图补充。理论比较见 [RN-0003 — Why Transition?](./research/RN-0003-why-transition.md)，核心地位仍需通过 OQ-0002 所要求的实验验证。

RN-0003 区分：

- **Transition Occurrence**：某个 Actor 实际发生一次状态变化；
- **Transition Rate**：在给定时间和语境内，一组 Actor 发生该变化的比例或速率；
- **Population Stock Change**：某个 State 中 Actor 数量的净变化，可能由多条流入和流出 Transition 共同决定。

三者如何进入 BUP 的正式表达仍是 OQ-0024。

### Mechanism

**Status:** Provisional

连接条件、驱动因素或阻碍因素与业务变化的解释，说明它们可能如何影响 Transition 或业务结果。

Mechanism 在 BUP 中表达的是可检验的业务解释，不自动构成形式化因果证明。其合理深度和证据要求仍是 OQ-0025。

### Observation

**Status:** Provisional

对业务变化的可观测表现或陈述。Observation 描述“观察到了什么”，但本身不等同于业务变化。

Observation 与 Evidence 的严格边界尚待澄清，见 OQ-0003。

### Evidence

**Status:** Provisional

支持、反驳或区分某个 Observation、假设或业务解释的具体事实。

Evidence 可以来自指标、事件、记录、日志、实验或其他可信业务事实。它不必被限定为单一 Metric。

### Metric

**Status:** Provisional

依据明确口径，对业务现象或 Evidence 进行量化的计算结果。Metric 依赖数据、时间窗口、分析粒度和业务定义。

### Data

**Status:** Provisional

由业务系统产生或收集的底层记录。Data 需要经过定义、计算和解释才能形成 Metric 或 Evidence。

### Semantic Layer

**Status:** Provisional

连接业务概念与数据实现的语义层，通常描述指标、维度、事件、字段、计算规则和数据关系。

Semantic Layer 说明数据如何被解释和计算；ABU 主要说明哪些业务变化值得解释、可能为何发生以及应寻找什么证据。二者边界见 OQ-0008。

当前边界草案见 [RN-0004 — Boundary of ABU](./research/RN-0004-boundary-of-abu.md)。

### Analytical Reasoning

**Status:** Provisional

围绕业务现象形成假设、选择验证路径、评估证据、排除替代解释并形成结论的过程。

### Business Insight

**Status:** Provisional

由证据支持、能够解释业务现象并对判断或行动产生价值的业务结论。

仅复述指标变化不构成 Business Insight。

### Definition Drift

**Status:** Provisional

同一业务概念的含义、边界或计算口径随企业、产品、市场、阶段或时间变化的现象。

BUP 接受 Definition Drift，并通过明确语境与版本来管理它，而不是试图建立全局统一定义。

Definition Drift 与机器学习中的 Concept Drift 不等同，当前区分和验证草案见 [RN-0002 — Properties of ABU](./research/RN-0002-properties-of-abu.md)。

## 实验与案例术语

### Reference Case

**Status:** Provisional

用于展示和验证 BUP 表达能力的一套完整业务案例，通常包含 `BUSINESS.md`、`SEMANTIC.md`、Incident 和隐藏的业务真实情况。

### Incident

**Status:** Provisional

向分析参与者提供的异常、变化或业务问题材料。Incident 应包含足够的观测信息，但不能直接泄露预设根因。

### BUSINESS_REALITY.md

**Status:** Provisional

记录模拟业务真实机制和 Incident 预设原因的隐藏评分材料。分析参与者不得读取该文件。

### Baseline Condition

**Status:** Provisional

分析参与者只获得 `SEMANTIC.md + INCIDENT.md` 的实验条件。

### ABU Condition

**Status:** Provisional

分析参与者获得 `BUSINESS.md + SEMANTIC.md + INCIDENT.md` 的实验条件。

### Benchmark

**Status:** Provisional

用于比较 Baseline Condition 与 ABU Condition 的实验协议、案例集合、评分量表、运行记录和结果集合。
