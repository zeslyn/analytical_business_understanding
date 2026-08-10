# DR-0002 — Benchmark Preregistration Design

**Status:** Proposed

**G1.1 design amendment:** Maintainer-approved on 2026-08-10; G1.1 is limited to three Natural Request conditions with a stronger root-cause depth gate. The overall preregistration remains Proposed until all F1 freeze items are resolved.

**Date:** 2026-07-20

**Last updated:** 2026-08-10

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

1. **A-N — Baseline:** `SEMANTIC.md + INCIDENT.md`；
2. **B-N — Equal-length Basic Domain Notes:** 控制额外文本和一般领域知识；
3. **C-N — Full ABU:** `BUSINESS.md + SEMANTIC.md + INCIDENT.md`。

N 表示 Natural Request：使用一般需求方可能采用的语言提出分析目标、优先判断和下一步建议，不逐项教授评分量表对应的机制、反证、区分性检查和结论更新方法。同一 Incident 在三个条件下使用相同模型、Natural Request、Semantic Layer、工具权限和输出预算。每个 Incident 有多个无状态重复运行，条件顺序随机化，输出匿名后由至少两名不知道条件的评分者独立评分。

### G1.1 scope

G1.1 只运行 A-N、B-N、C-N 三个 Natural Request 条件。Structured Prompt、Business Narrative、Transition Skeleton 和其他表示消融不进入 G1.1 或 F1；若未来需要分解增益来自内容、索引还是表达结构，必须作为独立研究重新预注册。

候选 Incident 必须具有多步根因机制链和多个共享表面症状的合理竞争解释；正确排序要求综合至少两类独立 Evidence。隐藏答案不能由题面、近义改写或单个显著线索直接推出。每道题在生成任何 Full ABU 输出前完成单线索审计和多次独立 Baseline-only 预试，并依据预先冻结的 Top-1 命中、天花板/地板、分值覆盖和回答相似度规则纳入。不得根据 `C − A` 或 `C − B` 的方向挑选题目。

### Metric hierarchy

主要结果分别为：

- Root-Cause Coverage@3；
- Hypothesis Quality Index；
- Diagnostic Evidence Efficiency。

Business and Evidence Integrity 与 Open-world Resilience 是非劣效护栏。主要决策不使用单一加权总分。

### Stages

- G0 用非 Benchmark 样例校准量表；
- G1 用 3 个游戏 Incident 做探索性端到端 Pilot；
- G1.1 只用 A-N/B-N/C-N 验证新 Incident 的根因机制深度、Natural Request、对照公平性和 Rubric 区分度；
- F1 用未见的跨行业 Incident 做验证性实验；
- Transition Skeleton、Hybrid View 和 Perturbed ABU 进入独立的 E1 探索模块。

G1 案例不得并入 F1。模型版本、Prompt、MID、护栏界值、功效分析、评分一致性和角色隔离未冻结前，F1 不得运行。

## Reason

只比较 Baseline 与 Full ABU 无法区分：

- ABU 的诊断性内容；
- `BUSINESS.md` 的组织结构；
- 一般领域提醒；
- 单纯增加上下文长度。

加入 Equal-length Basic Domain Notes 可以控制其中一部分替代解释。主要结果分开报告，可以避免一个主观权重掩盖“找对原因但路径低效”或“路径漂亮但业务错误”的情况。

游戏 Pilot 与正式验证分离，可以在不污染验证性样本的情况下发现：

- Prompt 和输出契约是否可执行；
- 分数是否有天花板或地板效应；
- 模型随机性与评分者分歧；
- 条件输入是否泄漏隐藏根因；
- Basic Domain Notes 是否构成公平对照。

Natural Request 提高主要估计与一般需求表达的贴近程度，避免把 Rubric 直接改写为任务说明。只保留三个条件可直接聚焦 ABU 相对 Semantic Layer 和 Basic Domain Notes 的增量，降低样本、多重比较和解释负担。根因机制深度与单线索审计进一步避免模型依靠题面模式匹配形成天花板，但仍要求 Evidence 足以支持可评分的竞争解释，避免把“难”误做成“无从判断”。

## Alternatives

### A. 只比较 Baseline 与 Full ABU

优点是简单、成本低；缺点是正向结果可以完全由更多文本或一般领域知识解释，因此否决。

### B. 第一轮直接做完整因素实验

同时加入 Transition Skeleton、Mechanism、Hybrid View、Perturbed ABU 和多个模型，可以分解更多效应；但样本和多重比较迅速膨胀，对照公平性也尚未解决，因此暂不采用。

### C. 使用单一综合分数

优点是容易排序；缺点是权重难以论证，并可能掩盖安全退化，因此否决用于主要决策。子维度仍可作为诊断数据。

### D. 使用未隔离或未记录的单一 LLM Judge

成本最低，但无法估计评分一致性，也容易受到位置、锚定、同源模型和评分分布偏差影响，因此否决。早期阶段允许两个或以上满足会话隔离、盲法、配置冻结和可复现记录要求的独立 AI Agent 作为主要评分者；不再把人类参与设为 G0/G1 的默认硬门槛。

### E. 完整交叉 A/B/C × Natural/Structured Prompt

可以更完整地估计 Prompt 与上下文交互，但会把实验扩展为需求方不常采用的详细方法指令，并显著增加样本与多重比较成本。当前问题只需要 A-N/B-N/C-N 估计 ABU 增量，因此在 G1.1 和 F1 中否决；若未来研究 Prompt 替代性，应独立预注册。

## Tradeoffs

- 需要独立案例作者、运行者、评分者和裁决者，治理成本上升；
- 使用同一基础模型的多个独立 Agent 可以降低早期人力门槛，但不能提供评分者模型多样性或人类专家有效性证据；
- Pilot 不能贡献正式效应，增加总运行量；
- Equal-length Basic Domain Notes 只能控制“更多文本”的一部分影响，不能完全分离知识内容与表示结构；
- 以 Incident 为推断单位时，增加重复运行不能替代增加独立 Incident；
- G1.1 不分解 Prompt、知识内容、索引和表示结构的独立贡献，这些主张需要未来的独立实验；
- 评分一致性门槛可能暴露构念尚未操作化，并延迟正式实验。

## Evidence and Falsification

本决定建立在 [RN-0002](../../research/RN-0002-properties-of-abu.md)、[RN-0003](../../research/RN-0003-why-transition.md) 的可证伪要求和以下外部方法依据上：

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) 强调测试、评估、验证与确认过程及指标应可重复并有文档记录；
- [OSF preregistration guidance](https://help.osf.io/article/330-welcome-to-registrations) 要求在数据收集前形成带时间戳的只读计划，并透明记录偏离；
- [MT-Bench / Chatbot Arena](https://arxiv.org/abs/2306.05685) 和 [Large Language Models are not Fair Evaluators](https://arxiv.org/abs/2305.17926) 支持把 LLM 评分偏差作为显式风险。

以下结果会否证或削弱本决定：

- Basic Domain Notes 无法在不知道隐藏答案的情况下构造为公平对照；
- 无法构造既有多步机制和合理竞争解释、又能被现有 Evidence 判定的 Incident；
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
- `Analytical_Business_Understanding_Project_Charter_v0.1.md`
- `VISION.md`
- `README.md`

## Unresolved Before Acceptance

- 为 RCC@3、HQI 和 DEE 冻结 MID；
- 为 BEI 和 OWR 冻结非劣效界值；
- 确定主要模型、精确版本、Natural Request、三个实验条件和输出预算；
- 冻结根因机制深度、竞争解释数量、单线索审计、Baseline-only 重复次数和难度阈值；
- 用 Pilot 方差完成聚类功效分析；
- 已创建 12 个评分校准回答并完成首轮独立 AI 评分、一致性统计、必要裁决和锚点讨论；G0 量表门禁可支持探索性 G1，F1 仍需完整冻结 Judge 配置；
- 证明 Equal-length Basic Domain Notes 的 Token、信息量和写作质量控制可审计；
- 指定角色和数据访问隔离方式。

## Follow-up

- [ ] 维护者评审并决定是否接受本记录；
- [x] 创建 [G0 校准材料](../../benchmark/calibration/)（4 个案例、12 个回答；尚未评分）；
- [x] 创建 G1 游戏案例、Business Reality 和条件输入；
- [ ] 在盲态模拟数据上实现并测试分析脚本；
- [x] 冻结 G1 protocol v0.2；
- [ ] G1 后修订并冻结 F1 protocol v1.0。
