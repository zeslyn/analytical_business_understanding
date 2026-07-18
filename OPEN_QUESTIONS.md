# Open Questions

**Status:** Active  
**Classification:** Research  
**Last updated:** 2026-07-19  
**Related Glossary:** [GLOSSARY.md](./GLOSSARY.md)

本文件集中登记第一阶段尚未解决、但会影响理论、协议或实验有效性的问题。问题在获得研究或实验依据后，通过 Decision Record 关闭。

## 优先级

- **P0**：在理论或游戏试验开始前必须明确。
- **P1**：游戏试验期间必须验证。
- **P2**：跨行业扩展前解决或明确接受其限制。

状态：

- **Open**：尚无足够答案；
- **Draft Answer**：Research Note 已提出候选答案，但尚未通过 Decision Record 接受；
- **Closed**：已经通过 Decision Record 关闭。

## 问题清单

| ID | 优先级 | 问题 | 为什么重要 | 预期解决位置 | 状态 |
|---|---|---|---|---|---|
| OQ-0001 | P0 | 如何判定一项知识属于完成分析所必需的“最小”ABU？ | 决定 ABU 的纳入边界，避免 BUSINESS.md 无限膨胀 | RN-0001、RN-0004、RFC-0001 | Draft Answer |
| OQ-0002 | P0 | 什么证据可以支持或否证“Transition 是核心表达单元”？ | 防止把工作假设写成公理 | RN-0003、游戏案例、DR | Draft Answer |
| OQ-0003 | P0 | Transition、Observation、Evidence、Metric 和 Data 是线性链条还是多对多关系？ | 影响概念模型、写作规范和评分方式 | RN-0001、RN-0003、RFC-0001 | Draft Answer |
| OQ-0004 | P0 | 自然语言优先时，BUP 仍必须满足哪些最低信息要求？ | 在表达自由度与可比较、可验证之间取得平衡 | RN-0004、RFC-0002、RFC-0003 | Draft Answer |
| OQ-0005 | P0 | Glossary 何时、按什么标准从 provisional 转为 frozen？ | 避免过早冻结，也避免长期术语漂移 | DR、贡献规范 | Open |
| OQ-0006 | P0 | 如何预注册 Prompt、模型配置、运行次数、随机化和评分量表？ | 防止根据结果反向调整实验方法 | RFC-0005、benchmark/protocol.md | Open |
| OQ-0007 | P0 | 如何隔离案例生成者、分析参与者和评分者，减少自证循环？ | 同源模型可能共享隐含模式或答案线索 | RFC-0004、RFC-0005 | Open |
| OQ-0008 | P1 | ABU 与 Semantic Layer 的操作性边界是什么？ | 防止 BUSINESS.md 重复数据语义或把关键业务知识留在语义层 | RN-0004、游戏案例 | Draft Answer |
| OQ-0009 | P1 | 如何量化“假设质量”“无效排查”和“缩小搜索空间”？ | 决定核心假设能否被可信检验 | RN-0002、scoring-rubric、RFC-0005 | Draft Answer |
| OQ-0010 | P1 | 需要多少次模型运行和多少评分者才能得到稳定结果？ | 单次生成具有随机性，主观评分也可能不一致 | benchmark/protocol.md | Open |
| OQ-0011 | P1 | BUSINESS.md 如何记录定义适用的时间、市场、产品版本和例外？ | Definition Drift 需要可追踪的上下文 | RN-0004、RFC-0002、RFC-0003 | Draft Answer |
| OQ-0012 | P1 | Transition 无法自然表达的业务现象有哪些？ | 反例是判断核心模型边界的必要证据 | RN-0003、五行业案例 | Draft Answer |
| OQ-0013 | P2 | 纯模拟案例可以支持多强的有效性结论？ | 内部一致性不能自动推广到真实企业分析 | RFC-0005、研究总结 | Open |
| OQ-0014 | P2 | 五个行业是否足以覆盖需要验证的业务结构差异？ | 行业数量不等于理论覆盖度 | RFC-0004、研究总结 | Open |
| OQ-0015 | P0 | 如何区分 ABU 内容、BUP 结构和单纯增加上下文长度带来的效果？ | 否则正向结果无法归因于 ABU 或 BUP | RN-0001、RN-0002、RFC-0005、Benchmark | Draft Answer |
| OQ-0016 | P1 | 知识项级消融应以机制、Transition、段落还是其他单位进行？ | 决定“最小性”能否被稳定检验 | RN-0001、RN-0003、RN-0004、RFC-0005 | Draft Answer |
| OQ-0017 | P1 | 多名作者对 Admission Test 的分类一致性应如何评估？ | 边界无法复现时，BUP 难以稳定创作和维护 | RN-0002、RN-0004、RFC-0004、RFC-0005 | Draft Answer |
| OQ-0018 | P1 | Schema portability test 需要多大数据结构差异才能有效检验 ABU 与数据模型的分离？ | 差异过小不能证明可移植，差异过大可能改变业务本身 | RN-0002、RFC-0004、RFC-0005 | Open |
| OQ-0019 | P1 | 模型预训练已包含行业知识时，如何测量显式 ABU 的边际价值？ | 模型先验可能掩盖文档作用或与模拟知识冲突 | RN-0002、RFC-0005 | Open |
| OQ-0020 | P1 | 错误、缺失或过期 ABU 的风险和恢复能力是否应成为完成标准？ | 高效但脆弱的表示可能在真实分析中造成系统性误导 | RN-0002、RFC-0005 | Open |
| OQ-0021 | P1 | 如何审计分析搜索路径而不依赖不可观察的模型内部推理？ | 搜索缩小必须由可复核输出衡量，而不能假设内部过程 | RN-0002、scoring-rubric、RFC-0005 | Open |
| OQ-0022 | P0 | State 是否应互斥，以及多维 State 如何避免组合爆炸和历史信息丢失？ | State 粒度会直接改变 Transition 的数量、解释力和可维护性 | RN-0003、RFC-0001、RFC-0003、游戏案例 | Open |
| OQ-0023 | P0 | Actor 是否可以是订单、账户、库存或市场，多 Actor 变化应由单个 Transition 还是协同关系表达？ | Actor 边界决定 Transition 的所有权，并影响多边业务表达 | RN-0003、RFC-0001、外卖/广告案例 | Open |
| OQ-0024 | P0 | BUP 如何区分 Transition occurrence、rate 和 population stock change，并在何时引用 Process、Journey 或 Stock–Flow？ | 混淆个体变化、速率和存量会把业务模型退化为指标漏斗 | RN-0003、RFC-0002、RFC-0003 | Open |
| OQ-0025 | P1 | Mechanism 应表达多深，才能改善分析又不伪装成已经识别的因果模型？ | 机制过浅没有解释力，过强则会产生伪因果确定性 | RN-0003、RFC-0002、RFC-0003、scoring-rubric | Open |
| OQ-0026 | P1 | Transition Skeleton 对照能否公平隔离 Transition 索引价值，而不是人为削弱它？ | 不公平对照会错误归因 Mechanism 或 Transition 的效果 | RN-0003、RFC-0005、Benchmark | Open |
| OQ-0027 | P1 | 如何在相同 Token、写作质量和知识量下公平比较 Transition、Mechanism 和替代视图？ | 必须区分 ABU 内容、表示结构和补充视图的独立贡献 | RN-0003、RFC-0005、Benchmark | Open |

## 关闭规则

关闭一个 Open Question 时必须：

1. 创建对应 Decision Record；
2. 引用理论论证、案例证据或实验结果；
3. 记录被否决的替代方案；
4. 更新 `GLOSSARY.md` 和所有受影响文档；
5. 如果证据不足，将其转为明确的 Phase 1 Limitation，而不是隐式忽略。
