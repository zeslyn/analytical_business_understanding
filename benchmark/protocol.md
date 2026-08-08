# Evaluation Protocol

**Classification:** Research / Engineering

**Status:** Draft Preregistration — Not Frozen

**Version:** 0.1

**Last updated:** 2026-08-08

**Related Open Questions:** OQ-0006, OQ-0007, OQ-0009, OQ-0010, OQ-0013, OQ-0015, OQ-0019, OQ-0020, OQ-0021, OQ-0026, OQ-0027, OQ-0028, OQ-0029, OQ-0030

**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)

> 本文件是可评审的预注册草案，不是已经完成的预注册。第 18 节所有冻结项、评分校准和对应 Decision Record 未完成前，不得开始会进入正式结论的数据生成。

## 1. Decision and Claim Boundary

本协议支持的主要决策是：

> 是否有足够证据继续把显式 ABU 作为独立于 Semantic Layer 的分析知识层，并进入 BUP 规范和跨行业验证？

主要可检验主张是：

> 在相同 Incident、Semantic Layer、模型、Prompt、工具权限和输出预算下，获得显式 ABU 的 AI，比只获得数据语义的 AI 产生更好的根因覆盖、更高质量的假设和更有效率的证据路径。

本轮实验不直接证明：

- ABU 对真实企业有外部有效性；
- `BUSINESS.md` 是唯一或最佳载体；
- Transition 是唯一或普适的核心表示；
- 模型内部确实执行了某种不可观察的“推理过程”；
- ABU 的效果能够跨所有模型、行业、语言和工具配置推广。

Transition Skeleton、Hybrid View 和 Perturbed ABU 属于次级或探索性模块。它们不能替代主要 ABU 对照，也不能在没有公平表示控制时支持“Transition 本身有效”的结论。

## 2. Research Questions and Hypotheses

### 2.1 Primary questions

- **RQ1 — Incremental value:** Full ABU 相比 Baseline 是否改善主要结果？
- **RQ2 — Specificity:** Full ABU 的改善是否超过相同长度的普通 Domain Notes，从而不能仅用“更多文本”解释？
- **RQ3 — Safety:** 改善是否没有以业务冲突、证据误用或对既有 ABU 的盲从为代价？

### 2.2 Confirmatory hypotheses

- **H1:** Full ABU 相比 Baseline 提高 Hypothesis Quality Index。
- **H2:** Full ABU 相比 Baseline 提高 Root-Cause Coverage@3。
- **H3:** Full ABU 相比 Baseline 提高 Diagnostic Evidence Efficiency。

Full ABU 与 Equal-length Domain Notes 的比较是归因门槛：只有通过该门槛，结果才可以解释为“ABU 特异性价值”，否则最多解释为“额外上下文可能有价值”。

### 2.3 Exploratory questions

- Transition Skeleton 是否提供独立于知识量的索引价值？
- Mechanism augmentation 是否优于仅有 Actor、State 和 Transition 的骨架？
- 当 ABU 缺失、过期或错误时，模型能否发现冲突并恢复？
- 结果对模型家族、Incident 难度和行业是否敏感？

探索性结果必须与验证性结果分表报告，不得事后升级为主要假设。

## 3. Staged Evaluation

| 阶段 | 目的 | 案例 | 条件 | 结果用途 |
|---|---|---|---|---|
| G0 — Rubric calibration | 检查输出契约、评分锚点和评分一致性 | 不进入 Benchmark 的通用样例 | 可使用任意构造输出 | 只能修改草案和培训评分者 |
| G1 — Game pilot | 验证端到端可运行性、估计方差、发现泄漏 | 3 个游戏 Incident | A、B、C；每条件每 Incident 暂定 5 次 | 仅探索；不得并入正式效应 |
| F1 — Cross-industry confirmation | 检验主要假设 | 5 个行业 × 3 个未见 Incident，暂定 15 个 | A、B、C | 正式主要结论 |
| E1 — Representation and safety | 检验表示与错误先验风险 | 冻结前指定的平衡子集 | T、P、H 等探索条件 | 次级或探索性结论 |

G1 使用过的具体 Incident 和输出不得进入 F1 的验证性样本。F1 Incident 必须在任何正式运行前完成、封存并生成内容哈希。

## 4. Experimental Conditions

### 4.1 Core conditions

| 代码 | 输入 | 目的 |
|---|---|---|
| A — Baseline | `SEMANTIC.md + INCIDENT.md` | 测量只有数据语义和事件证据时的表现 |
| B — Domain Notes Control | `DOMAIN_NOTES.md + SEMANTIC.md + INCIDENT.md` | 控制额外业务文本、上下文长度和一般领域提醒 |
| C — Full ABU | `BUSINESS.md + SEMANTIC.md + INCIDENT.md` | 测量显式分析型业务知识的增量价值 |

三个条件共享相同的 Incident、Semantic Layer、分析 Prompt、模型配置、工具权限、输出格式和输出预算。

### 4.2 Domain Notes construction

`DOMAIN_NOTES.md` 应：

- 与 `BUSINESS.md` 使用相同语言、相近可读性和相近 Token 数；
- 包含一般行业背景、常见术语和不指向该 Incident 答案的业务事实；
- 不包含 Observation → Mechanism → Evidence 的诊断性连接；
- 不包含隐藏根因、答案同义改写或只在 ABU 条件中出现的泄漏线索；
- 在运行前由不知道 Incident 隐藏答案的评审者检查。

长度暂定控制在 Full ABU Token 数的 ±5% 内；最终容差必须在协议冻结前确定。该条件只能控制“更多文本”和一般领域知识，不能完全分离内容质量、组织结构和机制表达的独立贡献。

### 4.3 Exploratory conditions

| 代码 | 条件 | 使用限制 |
|---|---|---|
| T — Transition Skeleton | 只有 Actor、State 和 Transition 索引 | OQ-0026/OQ-0027 未解决前不支持主要表示结论 |
| P — Perturbed ABU | 缺失、错误领域、过期或局部矛盾的 ABU | 只用于安全和恢复能力压力测试 |
| H — Hybrid View | Transition 索引引用 Process、Journey、Causal Model 或 Stock–Flow | 只用于表示适配性探索 |

探索条件必须在查看对应结果前冻结案例子集、扰动方式和评价指标。

## 5. Cases, Sampling, and Hidden Truth

### 5.1 Sampling frame

F1 暂定覆盖电商、外卖、SaaS、游戏和广告，每个行业 3 个 Incident。正式冻结前为每个 Incident 标记：

- 行业与业务模式；
- 主要 Actor 和业务阶段；
- 根因类型与机制深度；
- 数据可观测性；
- 是否需要非 Transition 视图；
- 难度和预期混淆因素；
- 纳入、排除及版本信息。

样本应覆盖不同机制和观测模式，而不是只追求行业数量。

### 5.2 Business Reality and acceptable cause set

每个 Incident 必须有不提供给被测模型的 `BUSINESS_REALITY`，其中包含：

- 生成事件的隐藏机制；
- 可接受根因集合及等价解释；
- 常见但错误的替代解释；
- 支持、反驳和区分各解释的 Evidence；
- 已知数据缺口和可能存在的合理未知机制；
- 判定一个检查是否可执行的可用数据清单。

“命中根因”按机制等价性评分，而不是按关键词匹配。若模型提出隐藏答案之外、但被 Evidence 充分支持的替代解释，评分者必须标记为 `candidate-valid-alternative`，交由独立裁决者判断；不得自动记错。

### 5.3 Exclusion

只允许在揭盲前按下列原因排除 Incident：

- 隐藏真相自相矛盾；
- 条件之间存在答案泄漏或 Evidence 不等价；
- 评分所需信息缺失；
- 运行环境无法复现。

不得因某条件表现异常、效应方向不符合预期或结果“太难解释”而排除。

## 6. Role Separation and Leakage Controls

理想角色为：

1. **Case author:** 创建 Business Reality 和 Incident；
2. **Condition author:** 创建 BUSINESS、Semantic 和 Domain Notes；
3. **Run operator:** 执行冻结的运行清单；
4. **Judges:** 在不知道条件的情况下评分；
5. **Adjudicator:** 处理隐藏真相之外的合理替代解释和重大分歧。

同一人员不得同时知道某 Incident 的隐藏答案并对该 Incident 做主要评分。资源不足时可由同一人员承担不同阶段，但必须使用时间隔离、匿名文件、哈希封存和独立复核，并将该限制写入结果。

泄漏审计至少包括：

- 搜索条件文件中是否出现隐藏根因及其近义表述；
- 比较条件间独有实体、数字、时间和异常模式；
- 检查 Incident 是否沿用了案例作者熟悉的固定模板；
- 检查模型是否通过文件名、条件代码或元数据识别条件；
- 记录案例或评分材料是否由与被测模型同源的模型生成。

## 7. Model, Prompt, and Runtime Controls

以下字段必须在 G1 和 F1 各自锁定前填写：

| 字段 | G1 | F1 |
|---|---|---|
| Provider / model / exact version | TBD | TBD |
| API or runtime version | TBD | TBD |
| System instruction hash | TBD | TBD |
| Analysis prompt hash | TBD | TBD |
| Temperature / sampling parameters | TBD | TBD |
| Maximum output tokens | TBD | TBD |
| Context ordering | TBD | TBD |
| Tool access and data snapshot | TBD | TBD |
| Seed handling, if supported | TBD | TBD |
| Run window | TBD | TBD |

要求：

- 每次运行使用新的无状态会话；
- 条件间不共享记忆、缓存或上一次输出；
- 外部工具要么全部禁用，要么在三个条件中使用同一只读快照和相同权限；
- 模型版本漂移时停止运行，保留已完成批次并创建协议偏离记录；
- 主要模型只允许一个冻结版本；第二模型只能作为预先声明的稳健性分析。

## 8. Observable Response Contract

不收集或推断隐藏 Chain-of-Thought。模型必须提交可审计的分析报告：

1. 一段当前诊断；
2. 最多 5 个按优先级排序的假设；
3. 每个假设的业务机制、支持证据、反证和不确定性；
4. 最多 5 个按顺序排列的下一步检查；
5. 每个检查区分哪些候选解释，以及不同结果将如何更新判断；
6. 可能的 ABU/表示不适配、证据冲突或未知机制；
7. 当前结论和置信度。

三个核心条件使用相同的假设数、检查数和输出 Token 上限。超出上限的内容保留在原始输出中，但超出部分不进入主要评分，并记录格式违规。

## 9. Randomization and Blinding

- 每个 `Incident × replicate` 内随机化 A、B、C 的执行顺序；
- 若支持可复现 Seed，则使用预先生成并封存的随机化表；
- 原始输出先分配不含条件信息的 Answer ID，再进入评分；
- 评分顺序按评分者独立随机化，避免相邻比较形成锚定；
- 评分者看得到 Incident、Semantic Layer、可用 Evidence 和隐藏评分答案，但看不到条件代码和条件文档；
- Prompt 要求输出不提及输入文件名；只移除系统元数据，不改写模型正文；
- 如果模型正文自然暴露了某种知识来源，视为盲法限制，不能人工删除。

揭盲只在独立评分、裁决和一致性统计全部保存后进行。

## 10. Repeated Runs and Sample Size

G1 暂定每个 Incident、每个核心条件运行 5 次，用于估计模型随机性、天花板/地板效应和 Incident 内方差。这个数量不是正式效应检验的充分性声明。

F1 的样本量按以下顺序确定：

1. 用 G1 或独立校准数据估计 Incident 间和 Incident 内方差；
2. 由领域评审根据量表锚点、误判成本和推进决策后果设定每个主要指标的最小实际重要差异（MID），不得按 G1 的条件效应反推；
3. 用按 Incident 聚类的模拟功效分析确定 Incident 数和重复次数；
4. 优先增加独立 Incident，而不是只增加同一 Incident 的重复运行；
5. 通过 Decision Record 记录最终功效假设和样本量。

当前“15 个 Incident × 每条件 5 次”只是规划基线，不是已冻结样本量。未完成上述步骤前，不得启动 F1。

## 11. Outcomes and Metric Hierarchy

完整操作定义见 [scoring-rubric.md](./scoring-rubric.md)。

### 11.1 Primary outcomes

| 指标 | 定义 | 计算 | 解释 |
|---|---|---|---|
| Root-Cause Coverage@3（RCC@3） | 前 3 个假设覆盖可接受根因的程度和排序 | 单项 0–4 | 是否找到正确机制，而非只复述症状 |
| Hypothesis Quality Index（HQI） | 相关性、机制特异性、可证伪性和优先级质量 | 四项 0–4 的等权均值 | 假设是否值得优先验证 |
| Diagnostic Evidence Efficiency（DEE） | 首个区分性 Evidence 的价值和无效检查负担 | 两项 0–4 的等权均值 | 是否用有限证据预算更快缩小搜索 |

三个主要指标分别报告，不合成为单一“总分”。

### 11.2 Guardrails

| 指标 | 风险 | 主要判定 |
|---|---|---|
| Business and Evidence Integrity（BEI） | 虚构 Evidence、错误引用或与业务规则冲突 | Full ABU 不得出现超过冻结非劣效界值的下降 |
| Open-world Resilience（OWR） | 把 ABU 当作完备真相、忽略冲突或未知机制 | Full ABU 不得出现超过冻结非劣效界值的下降 |

### 11.3 Secondary and exploratory diagnostics

- 每个 HQI 和 DEE 子维度；
- Top-1 root-cause match；
- 第一项高价值假设的排名；
- 格式违规、拒答和无效检查数量；
- 置信度与正确性的校准；
- 表示适配性；
- Perturbed ABU 下的冲突发现和恢复；
- 按行业、Incident 难度和模型的异质性。

## 12. Human Judging and Adjudication

- 每个输出至少由 2 名独立评分者评分；
- 评分者先在不进入 Benchmark 的材料上校准；
- 主要维度使用 ordinal Krippendorff’s alpha，并同时报告完全一致率和相差不超过 1 分的一致率；
- 正式评分前的校准目标为 `α ≥ 0.80`；`0.667 ≤ α < 0.80` 只能支持暂定结论，必须修订锚点并重新校准；`α < 0.667` 不得进入正式评分；
- 任一主要子维度相差超过 1 分、根因等价性判断不一致，或出现 `candidate-valid-alternative` 时，由第三名裁决者处理；
- 裁决前保留两份原始评分。相差不超过 1 分时取两者均值；需要裁决时使用裁决值并记录原因。

LLM-as-a-judge 只允许作为次级敏感性分析。若使用：

- 不得替代人类主要评分；
- Pairwise 比较必须交换左右位置并报告位置敏感性；
- Judge 模型不得与案例或被测输出生成模型共享未披露的同源关系；
- 所有人类与模型评分分歧都保留，不只报告一致部分。

## 13. Analysis Plan

### 13.1 Unit and aggregation

- 原始单位：单个 `Incident × condition × replicate` 输出；
- 推断单位：Incident；
- 先在每个 `Incident × condition` 内对重复运行求均值，再计算同一 Incident 内的条件差；
- 行业汇总只作为分层描述，除非冻结的功效分析支持行业交互检验。

### 13.2 Primary contrast

主要对比为 `C Full ABU − A Baseline`。对 RCC@3、HQI、DEE：

- 报告 Incident 级配对均值差、中位数差和 win/tie/loss；
- 报告按 Incident 聚类、按行业分层的 95% bootstrap 置信区间；
- 使用 Incident 级配对置换检验；
- 对三个主要指标使用 Holm 方法控制 family-wise error rate 为 0.05；
- 同时报告冻结的 MID，不把统计显著性等同于实际重要性。

### 13.3 Specificity gate

仅当主要对比达到推进门槛后，解释 `C Full ABU − B Domain Notes`：

- 把 RCC@3、HQI、DEE 视为第二个检验族并使用 Holm 校正；
- HQI 或 DEE 至少一个在校正后达到统计门槛，且点估计达到冻结 MID；
- RCC@3 不得出现达到冻结非劣效界值的下降；
- BEI 和 OWR 必须通过护栏。

未通过时，结论写为“额外上下文可能有效，ABU 特异性未证实”，不得写为“ABU 已验证”。

### 13.4 Advancement rule

F1 推进 ABU 独立知识层需要同时满足：

1. C 相比 A 的三个主要指标中至少两个方向为正，95% CI 不跨 0，且点估计达到各自 MID；
2. 其余主要指标没有达到预先冻结的实质性负向差异；
3. C 相比 A 和 B 均通过 BEI、OWR 非劣效护栏；
4. 通过 13.3 的 ABU 特异性门槛；
5. 没有足以推翻结论的泄漏、评分不一致或协议偏离。

MID、非劣效界值和功效必须在 F1 数据生成前填入，不允许按观察结果设定。

### 13.5 Sensitivity analyses

- 使用中位数替代均值；
- 排除发生技术故障但被允许重试的批次；
- 只使用两名评分者原始均值，不使用裁决值；
- 按 Incident 难度、行业和根因类型分层；
- 比较 Top-1 与 Top-3 根因覆盖；
- 若使用 LLM judge，比较人类评分与双向位置交换后的模型评分。

敏感性分析不改变主要推进规则。

## 14. Failed Runs, Missingness, and Protocol Deviations

### 14.1 Failed runs

- API 超时、服务端错误、输出损坏等技术故障可按原配置重试 1 次；
- 安全拒答、无法判断或空洞回答是有效结果，不得重试到成功；
- 超出输出长度是有效结果并记录截断；
- 每次重试保留原 Run ID、故障类别和新 Run ID；
- 条件间不允许用不同规则补跑。

### 14.2 Deviations

任何偏离都记录：

- 发现时间和发现者；
- 受影响的 Run、Incident 和条件；
- 原协议与实际做法；
- 原因和是否在揭盲前发现；
- 对主要结论的潜在影响；
- 保留、排除、补跑或降级为探索性的处理；
- 批准人和对应 Decision Record。

正式结果必须同时给出按原协议和按偏离处理后的敏感性结果（若可计算）。

## 15. Validity Checks

### 15.1 Internal validity

- Token 长度、Prompt、模型和工具权限等价；
- 隐藏答案不出现在条件输入；
- 运行顺序随机、会话无状态；
- 评分者在揭盲前完成评分；
- 评分一致性达到冻结门槛；
- 结果文件与冻结输入哈希一致。

### 15.2 Construct validity

- RCC@3 不只做关键词匹配；
- HQI 不因文字更长或术语更像规范而自动得分；
- DEE 只基于可观察的检查计划，不声称测量内部推理长度；
- BEI 对“使用更多业务语言但缺乏证据”的回答实施惩罚；
- OWR 允许 Evidence 支持的未知机制，而不把 ABU 当成封闭答案集。

### 15.3 External validity

模拟结果只能支持在冻结任务设置下的机制性证据。推广到真实企业前仍需：

- 真实但脱敏的历史 Incident；
- 不同组织的数据可用性和业务定义漂移；
- 多模型、多语言和工具增强分析；
- 真实分析师对行动价值和维护成本的评价。

## 16. Interpretation Matrix

| 观察结果 | 允许的解释 | 不允许的解释 |
|---|---|---|
| C > A 且 C > B，护栏通过 | 显式 ABU 在当前任务中有特异性增量价值 | ABU 已对真实企业普遍有效 |
| C > A，但 C ≈ B | 更多上下文可能有帮助 | ABU 内容或 BUP 结构已被验证 |
| C ≈ A | 当前实现、任务或模型未显示增量价值 | ABU 理论必然无效 |
| C 提升 HQI 但伤害 BEI/OWR | 存在效率—安全权衡，需要修订 | 只按平均总分宣布成功 |
| T > B 或 H > C（探索性） | 值得设计专门表示实验 | Transition 或 Hybrid View 已被正式证实 |
| P 下无法识别冲突 | 错误先验风险成立 | 正常 C 条件的正向结果足以忽略该风险 |

## 17. Reproducibility Record

每次运行至少保存：

- Protocol、rubric、case、condition 和 prompt 的版本与 SHA-256；
- Case ID、Incident ID、行业和 replicate；
- 真实条件代码与匿名 Answer ID 的受限映射；
- Provider、模型精确版本和完整采样配置；
- 工具权限、数据快照和随机 Seed（若可用）；
- 开始/结束时间、响应状态和 Token 用量；
- 原始输入清单、原始输出和格式校验结果；
- 两名评分者的原始分数、证据说明和时间；
- 一致性、裁决、揭盲和偏离记录。

建议目录：

```text
benchmark/results/<study-id>/
├── preregistration/
├── manifests/
├── inputs/
├── raw-outputs/
├── blinded-outputs/
├── scores/
├── analysis/
└── deviations.md
```

任何包含隐藏答案或条件映射的材料在评分完成前不得放入评分者可访问目录。

## 18. Freeze and Approval Gate

### 18.1 G1 pilot lock

- [x] G0 [评分材料](./calibration/)和 [judging-form.md](./judging-form.md) 完成；
- [ ] 主要评分维度校准达到一致性门槛；
- [ ] 3 个游戏 Incident 和 Business Reality 完成并封存；
- [ ] A、B、C 条件通过 Token、泄漏和可读性审计；
- [ ] 模型、Prompt、输出预算、运行次数和随机化表冻结；
- [ ] G1 明确标记为探索性，不与 F1 合并。

### 18.2 F1 preregistration lock

- [ ] G1 结果已用于修订，但 G1 Incident 已排除；
- [ ] F1 Incident、隐藏答案、条件和哈希清单冻结；
- [ ] RCC@3、HQI、DEE 的 MID 已填写；
- [ ] BEI、OWR 非劣效界值已填写；
- [ ] 聚类功效分析和最终样本量已填写；
- [ ] 精确模型版本、Prompt、配置和运行窗口已填写；
- [ ] 评分者、裁决者和角色隔离已确认；
- [ ] 分析脚本在盲态模拟数据上通过；
- [ ] 偏离模板和结果目录已创建；
- [ ] Decision Record 已 Accepted；
- [ ] 带时间戳、只读的协议版本和 Git commit 已记录。

### 18.3 Approval

- Protocol version:
- Git commit:
- Registration location and timestamp:
- Decision Record:
- Approved by:
- Approval date:

## 19. References

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)：要求测试、评估、验证与确认过程及其指标、方法可重复并有文档记录。
- [OSF Registrations & Preregistrations](https://help.osf.io/article/330-welcome-to-registrations)：区分数据收集前的只读研究计划与后续透明偏离。
- [Krippendorff’s Alpha Reliability](https://www.asc.upenn.edu/krippendorffs-alpha-reliability)：评分数据一致性和 alpha 计算的方法资源。
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685)：提供 LLM 评分与人类偏好比较的经验依据。
- [Large Language Models are not Fair Evaluators](https://arxiv.org/abs/2305.17926)：提示 Pairwise LLM 评分的位置偏差及位置交换校准需要。
