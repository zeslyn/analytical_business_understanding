# DR-0002 — Benchmark Preregistration Design

**Status:** Proposed

**Date:** 2026-07-20

**Classification:** Research / Engineering

**Owners:** Project maintainer

**Related Open Questions:** OQ-0006, OQ-0007, OQ-0009, OQ-0010, OQ-0013, OQ-0015, OQ-0019, OQ-0020, OQ-0021, OQ-0026, OQ-0027, OQ-0028, OQ-0029, OQ-0030

**Related Protocol:** [benchmark/protocol.md](../../benchmark/protocol.md)

**Related Rubric:** [benchmark/scoring-rubric.md](../../benchmark/scoring-rubric.md)

**Related Glossary:** [GLOSSARY.md](../../GLOSSARY.md)

## Proposed Decision

第一阶段 Benchmark 采用分阶段、配对、盲评设计。

### Core confirmatory design

三个核心条件为：

1. **A — Baseline:** `SEMANTIC.md + INCIDENT.md`；
2. **B — Equal-length Domain Notes:** 控制额外文本和一般领域知识；
3. **C — Full ABU:** `BUSINESS.md + SEMANTIC.md + INCIDENT.md`。

同一 Incident 在三个条件下使用相同模型、Prompt、Semantic Layer、工具权限和输出预算。每个 Incident 有多个无状态重复运行，条件顺序随机化，输出匿名后由至少两名不知道条件的评分者独立评分。

### Metric hierarchy

主要结果分别为：

- Root-Cause Coverage@3；
- Hypothesis Quality Index；
- Diagnostic Evidence Efficiency。

Business and Evidence Integrity 与 Open-world Resilience 是非劣效护栏。主要决策不使用单一加权总分。

### Stages

- G0 用非 Benchmark 样例校准量表；
- G1 用 3 个游戏 Incident 做探索性端到端 Pilot；
- F1 用未见的跨行业 Incident 做验证性实验；
- Transition Skeleton、Hybrid View 和 Perturbed ABU 进入独立的 E1 探索模块。

G1 案例不得并入 F1。模型版本、Prompt、MID、护栏界值、功效分析、评分一致性和角色隔离未冻结前，F1 不得运行。

## Reason

只比较 Baseline 与 Full ABU 无法区分：

- ABU 的诊断性内容；
- `BUSINESS.md` 的组织结构；
- 一般领域提醒；
- 单纯增加上下文长度。

加入 Equal-length Domain Notes 可以控制其中一部分替代解释。主要结果分开报告，可以避免一个主观权重掩盖“找对原因但路径低效”或“路径漂亮但业务错误”的情况。

游戏 Pilot 与正式验证分离，可以在不污染验证性样本的情况下发现：

- Prompt 和输出契约是否可执行；
- 分数是否有天花板或地板效应；
- 模型随机性与评分者分歧；
- 条件输入是否泄漏隐藏根因；
- Domain Notes 是否构成公平对照。

## Alternatives

### A. 只比较 Baseline 与 Full ABU

优点是简单、成本低；缺点是正向结果可以完全由更多文本或一般领域知识解释，因此否决。

### B. 第一轮直接做完整因素实验

同时加入 Transition Skeleton、Mechanism、Hybrid View、Perturbed ABU 和多个模型，可以分解更多效应；但样本和多重比较迅速膨胀，对照公平性也尚未解决，因此暂不采用。

### C. 使用单一综合分数

优点是容易排序；缺点是权重难以论证，并可能掩盖安全退化，因此否决用于主要决策。子维度仍可作为诊断数据。

### D. 只使用 LLM-as-a-judge

成本较低，但既有研究已发现位置、锚定和评分分布偏差。LLM 评分保留为次级敏感性分析，不替代主要人类评分。

## Tradeoffs

- 需要独立案例作者、运行者、评分者和裁决者，治理成本上升；
- Pilot 不能贡献正式效应，增加总运行量；
- Equal-length Domain Notes 只能控制“更多文本”的一部分影响，不能完全分离知识内容与表示结构；
- 以 Incident 为推断单位时，增加重复运行不能替代增加独立 Incident；
- 评分一致性门槛可能暴露构念尚未操作化，并延迟正式实验。

## Evidence and Falsification

本决定建立在 [RN-0002](../../research/RN-0002-properties-of-abu.md)、[RN-0003](../../research/RN-0003-why-transition.md) 的可证伪要求和以下外部方法依据上：

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) 强调测试、评估、验证与确认过程及指标应可重复并有文档记录；
- [OSF preregistration guidance](https://help.osf.io/article/330-welcome-to-registrations) 要求在数据收集前形成带时间戳的只读计划，并透明记录偏离；
- [MT-Bench / Chatbot Arena](https://arxiv.org/abs/2306.05685) 和 [Large Language Models are not Fair Evaluators](https://arxiv.org/abs/2305.17926) 支持把 LLM 评分偏差作为显式风险。

以下结果会否证或削弱本决定：

- Domain Notes 无法在不知道隐藏答案的情况下构造为公平对照；
- 主要维度在多轮校准后仍无法达到评分一致性门槛；
- Incident 数量无法为声明的 MID 提供合理功效；
- 盲法在输出中系统性失效，导致评分者能够可靠识别条件；
- G1 证明当前指标只奖励长度、术语复用或隐藏答案相似度。

发生上述情况时，应暂停 F1，修订构念或降级可支持的主张，而不是放宽门槛。

## Impacted Documents

- `benchmark/README.md`
- `benchmark/protocol.md`
- `benchmark/scoring-rubric.md`
- `benchmark/judging-form.md`
- `benchmark/results/README.md`
- `OPEN_QUESTIONS.md`
- `docs/decisions/DR-0001-phase-1-execution-sequence.md`

## Unresolved Before Acceptance

- 为 RCC@3、HQI 和 DEE 冻结 MID；
- 为 BEI 和 OWR 冻结非劣效界值；
- 确定主要模型、精确版本、Prompt 和输出预算；
- 用 Pilot 方差完成聚类功效分析；
- 创建至少 12 个、目标 20 个评分校准回答并达到一致性门槛；
- 证明 Equal-length Domain Notes 的 Token、信息量和写作质量控制可审计；
- 指定角色和数据访问隔离方式。

## Follow-up

- [ ] 维护者评审并决定是否接受本记录；
- [ ] 创建 G0 校准材料；
- [ ] 创建 G1 游戏案例、Business Reality 和条件输入；
- [ ] 在盲态模拟数据上实现并测试分析脚本；
- [ ] 冻结 G1 protocol v0.2；
- [ ] G1 后修订并冻结 F1 protocol v1.0。
