# Evaluation Protocol

**Classification:** Research / Engineering

**Status:** Draft Preregistration — Not Frozen

**Version:** 0.5

**Last updated:** 2026-08-10

**Related Open Questions:** OQ-0006, OQ-0007, OQ-0009, OQ-0010, OQ-0013, OQ-0015, OQ-0019, OQ-0020, OQ-0021, OQ-0026, OQ-0027, OQ-0028, OQ-0029, OQ-0030

**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)

> 本文件是可评审的预注册草案，不是已经完成的预注册。第 18 节所有冻结项、评分校准和对应 Decision Record 未完成前，不得开始会进入正式结论的数据生成。

> v0.3 在 G1 后收缩主张边界：当前唯一主要验证目标是显式 ABU 对 LLM 的增量价值。资深分析师能力对标、人类水平非劣效和替代性主张不属于本协议。

> v0.4 将贴近一般需求表达的 Natural Request 设为唯一主要 Prompt。Structured Prompt 不代表主要使用场景，只在 G1.1 的 A/C 小样本中作为替代方案消融；F1 主要实验不使用 Structured Prompt。

> v0.5 将 G1.1 收缩为 A-N、B-N、C-N 三个 Natural Request 条件，移除 Prompt 与表示消融，并强化 Incident 根因难度和机制深度门禁。当前实验只验证完整 ABU 知识包相对 Baseline 与 Basic Domain Notes 的增量。

## 1. Decision and Claim Boundary

本协议支持的主要决策是：

> 是否有足够证据表明显式 ABU 能在受控条件下为 LLM 带来可归因、可重复且不损害业务与证据诚信的分析增量，从而继续发展 BUP 规范和跨行业验证？

主要可检验主张是：

> 在相同 Incident、Semantic Layer、模型、Prompt、工具权限和输出预算下，获得显式 ABU 的 LLM，比只获得数据语义或等长普通领域背景的 LLM 产生更好的根因覆盖、更高质量的假设和更有效率的证据路径。

本轮实验不直接证明：

- ABU+LLM 达到、非劣于或能够替代资深分析师；
- AI Judge 的判断等同于人类专家或现实业务决策；
- ABU 对真实企业有外部有效性；
- `BUSINESS.md` 是唯一或最佳载体；
- Transition 是唯一或普适的核心表示；
- 模型内部确实执行了某种不可观察的“推理过程”；
- ABU 的效果能够跨所有模型、行业、语言和工具配置推广。

Transition Skeleton、Hybrid View 和 Perturbed ABU 属于次级或探索性模块。它们不能替代主要 ABU 对照，也不能在没有公平表示控制时支持“Transition 本身有效”的结论。

## 2. Research Questions and Hypotheses

### 2.1 Primary questions

- **RQ1 — Incremental value:** Full ABU 相比 Baseline 是否改善主要结果？
- **RQ2 — Specificity:** Full ABU 的改善是否超过相同长度的 Basic Domain Notes，从而不能仅用“更多文本”解释？
- **RQ3 — Safety:** 改善是否没有以业务冲突、证据误用或对既有 ABU 的盲从为代价？

### 2.2 Design-moderation question

- **RQ4 — Design diagnosis:** 题目难度和根因机制深度是否足以避免 Baseline 靠题面线索高概率猜中，同时又允许 Evidence 支持可评分的竞争解释？

### 2.3 Confirmatory hypotheses

- **H1:** Natural Request 下，Full ABU 相比 Baseline 提高 Hypothesis Quality Index。
- **H2:** Natural Request 下，Full ABU 相比 Baseline 提高 Root-Cause Coverage@3。
- **H3:** Natural Request 下，Full ABU 相比 Baseline 提高 Diagnostic Evidence Efficiency。

Natural Request 下 Full ABU 与 Equal-length Basic Domain Notes 的比较是归因门槛：只有通过该门槛，结果才可以解释为“ABU 特异性价值”，否则最多解释为“额外上下文可能有价值”。

### 2.4 Exploratory questions

- Transition Skeleton 是否提供独立于知识量的索引价值？
- Mechanism augmentation 是否优于仅有 Actor、State 和 Transition 的骨架？
- 当 ABU 缺失、过期或错误时，模型能否发现冲突并恢复？
- 结果对模型家族、Incident 难度和行业是否敏感？

探索性结果必须与验证性结果分表报告，不得事后升级为主要假设。

## 3. Staged Evaluation

| 阶段 | 目的 | 案例 | 条件 | 结果用途 |
|---|---|---|---|---|
| G0 — Rubric calibration | 检查输出契约、评分锚点和评分一致性 | 不进入 Benchmark 的通用样例 | 可使用任意构造输出 | 只能修改草案和培训评分者 |
| G1 — Game pilot | 验证端到端可运行性、估计方差、发现泄漏 | 3 个游戏 Incident | A、B、C；每条件每 Incident 5 次 | 已完成；只用于发现 Case、Prompt 和 Rubric 缺陷 |
| G1.1 — Discrimination pilot | 验证具有足够根因深度的新题目和 Natural Request 能否形成可评分区分度 | 不进入 F1 的新 Incident | A-N、B-N、C-N；具体样本量冻结前确定 | 只用于 Case、Prompt、对照公平性和 Rubric 修订 |
| F1 — Cross-industry confirmation | 在 Natural Request 下检验主要假设 | 5 个行业 × 3 个未见 Incident，暂定 15 个 | A-N、B-N、C-N | 正式主要结论 |
| E1 — Representation and safety | 检验表示与错误先验风险 | 冻结前指定的平衡子集 | T、P、H 等探索条件 | 次级或探索性结论 |

G1 和 G1.1 使用过的具体 Incident 与输出不得进入 F1 的验证性样本。F1 Incident 必须在任何正式运行前完成、封存并生成内容哈希。

## 4. Experimental Conditions

### 4.1 Core conditions

| 代码 | 输入 | 目的 |
|---|---|---|
| A — Baseline | `SEMANTIC.md + INCIDENT.md` | 测量只有数据语义和事件证据时的表现 |
| B — Basic Domain Notes Control | `DOMAIN_NOTES.md + SEMANTIC.md + INCIDENT.md` | 控制额外业务文本、上下文长度和一般领域提醒 |
| C — Full ABU | `BUSINESS.md + SEMANTIC.md + INCIDENT.md` | 测量显式分析型业务知识的增量价值 |

三个核心条件在 Natural Request 下共享相同的 Incident、Semantic Layer、分析 Prompt、模型配置、工具权限、输出格式和输出预算，只改变是否以及提供哪一类业务上下文。

### 4.2 Basic Domain Notes construction

`DOMAIN_NOTES.md` 应：

- 与 `BUSINESS.md` 使用相同语言、相近可读性和相近 Token 数；
- 包含一般行业背景、常见术语和不指向该 Incident 答案的业务事实；
- 不包含 Observation → Mechanism → Evidence 的诊断性连接；
- 不包含隐藏根因、答案同义改写或只在 ABU 条件中出现的泄漏线索；
- 在运行前由不知道 Incident 隐藏答案的评审者检查。

长度暂定控制在 Full ABU Token 数的 ±5% 内；最终容差必须在协议冻结前确定。该条件只能控制“更多文本”和一般领域知识，不能完全分离内容质量、组织结构和机制表达的独立贡献。

### 4.3 Primary prompt

G1 显示，详细教授机制、反证、区分性 Evidence 和结论更新方法的 Prompt 可能替代部分 ABU 脚手架，并在简单题目上压缩条件差异。一般需求提出方通常不会这样表达任务，因此 G1.1 和 F1 只使用 Natural Request：

| 代码 | Prompt | 用途 |
|---|---|---|
| N — Natural Request | 用一般需求方可能采用的语言提出分析目标、优先判断和下一步建议；不逐项教授 Rubric 对应的诊断方法 | G1.1 和 F1 的唯一 Prompt |

主要设计固定为 `A-N / B-N / C-N`。Structured Prompt、Business Narrative、Transition Skeleton 和其他表示消融不进入 G1.1 或 F1；若未来需要判断增益来自内容、索引还是表达结构，必须进入独立研究并重新预注册。

### 4.4 Exploratory conditions

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

### 5.2 Difficulty and discrimination gate

G1 表明，Incident Evidence 已接近唯一答案时，Baseline 会出现天花板；隐藏答案又比可观察 Evidence 支持的机制更窄时，所有条件会共同受限。候选 Incident 因此必须同时通过构造审计和 Baseline-only 难度预试。

#### 5.2.1 Root-cause depth requirements

- 初读 Incident 与 Semantic Layer 时，原则上应存在至少 3 类表面合理、能解释主要症状的竞争机制；最终数量门槛在 G1.1 前冻结；
- 隐藏根因不得由题面直接陈述、近义改写或被某一条独有线索唯一指认；回答者必须综合至少两类相互独立的 Evidence；
- 可接受根因必须包含多步机制链，例如“触发或约束变化 → Actor / State / Transition 失效 → 可观察指标或行为变化”，而不是把异常指标换一种说法；
- 正确排序应依赖对业务机制、约束和观测关系的组合判断；竞争解释应共享部分表面症状，并需要不同的区分性检查；
- 必须执行单线索审计：任何一个句子、数字或实体都不应单独泄露答案。移除单条非关键线索后，问题不应立刻变得显然，也不应失去全部可判定性；
- 难度不得来自未披露的实现细节、冷门常识或无从验证的信息。可接受根因粒度必须与现有 Evidence 对齐，并允许机制等价、证据充分的替代解释；
- Full ABU 应提供跨 Incident 可复用的区分性业务知识，但不得包含本次隐藏答案、近义泄漏或只为命中答案而写入的规则。

#### 5.2.2 Baseline-only pretest

候选 Incident 必须在任何 Full ABU 输出生成前，由多个相互独立的 Baseline-only 运行预试，并至少记录 Top-1 根因命中、RCC@3、HQI、DEE、回答间差异和常见竞争解释。纳入规则必须满足：

- Baseline 不在主要指标或根因命中上形成大面积天花板，也不因信息不足形成大面积地板；
- 输出不能主要依靠同一关键词或单一显著线索收敛到隐藏根因；
- Baseline 的回答仍应产生可评分的合理候选和检查，证明题目“困难但可分析”；
- Incident 只能依据 Baseline 难度、机制覆盖、单线索审计和输入质量纳入或排除，不得根据观察到的 `C − A` 或 `C − B` 结果选择。

Baseline 重复次数、天花板/地板、Top-1 命中、分值覆盖和回答相似度阈值，必须在 G1.1 数据生成前通过 Decision Record 冻结。该门禁用于确保测量有效性，不要求在 Pilot 阶段预先观察到 `C > A` 或 `C > B`。

### 5.3 Business Reality and acceptable cause set

每个 Incident 必须有不提供给被测模型的 `BUSINESS_REALITY`，其中包含：

- 生成事件的隐藏机制；
- 可接受根因集合及等价解释；
- 常见但错误的替代解释；
- 支持、反驳和区分各解释的 Evidence；
- 已知数据缺口和可能存在的合理未知机制；
- 判定一个检查是否可执行的可用数据清单。

“命中根因”按机制等价性评分，而不是按关键词匹配。若模型提出隐藏答案之外、但被 Evidence 充分支持的替代解释，评分者必须标记为 `candidate-valid-alternative`，交由独立裁决者判断；不得自动记错。

### 5.4 Exclusion

只允许在揭盲前按下列原因排除 Incident：

- 隐藏真相自相矛盾；
- 条件之间存在答案泄漏或 Evidence 不等价；
- 评分所需信息缺失；
- 运行环境无法复现。

不得因某条件表现异常、效应方向不符合预期或结果“太难解释”而排除。

## 6. Role Separation and Leakage Controls

理想角色为：

1. **Case author:** 创建 Business Reality 和 Incident；
2. **Condition author:** 创建 BUSINESS、Semantic 和 Basic Domain Notes；
3. **Run operator:** 执行冻结的运行清单；
4. **Judges:** 在不知道条件的情况下评分；
5. **Adjudicator:** 处理隐藏真相之外的合理替代解释和重大分歧。

同一角色实体或共享状态的会话不得同时掌握某 Incident 的隐藏答案并对该 Incident 做主要评分。资源不足时，同一人员或同一模型家族可以承担不同阶段，但主要评分必须使用独立会话、时间隔离、匿名文件、哈希封存和独立复核，并将同源限制写入结果。

评分者可以是人类、AI Agent 或两者组合。独立性按信息和运行状态隔离判断，不按评分者类型判断。AI 评分者至少满足：

- 每名评分者使用独立的无状态会话，不继承其他评分者或被测运行的记忆、缓存和中间结果；
- 在提交前看不到 Answer Key、条件代码、另一评分者记录和一致性统计；
- 固定并记录 Judge provider、模型精确版本、system/judge prompt hash、采样参数、上下文顺序和工具权限；如果 G0/G1 的托管运行时不暴露某字段，必须写 `Not exposed`，并记录最高可用平台标识、canonical task/run ID、时间和产物哈希，不得猜填；
- 每次评分运行有独立 Judge ID 和 Session / Run ID；
- 如果评分者与案例、答案或其他评分者使用同源模型，必须记录共同误差和自证循环风险。

两个使用相同基础模型但处于隔离会话的 AI Agent 可以构成操作上的独立评分者，但不构成模型多样性证据；结果必须披露该限制。

泄漏审计至少包括：

- 搜索条件文件中是否出现隐藏根因及其近义表述；
- 比较条件间独有实体、数字、时间和异常模式；
- 检查 Incident 是否沿用了案例作者熟悉的固定模板；
- 检查模型是否通过文件名、条件代码或元数据识别条件；
- 记录案例或评分材料是否由与被测模型同源的模型生成。

## 7. Model, Prompt, and Runtime Controls

以下字段必须在 G1.1 和 F1 各自锁定前填写；G1 列只保留已经完成的历史配置：

| 字段 | G1（已完成） | G1.1 | F1 |
|---|---|---|---|
| Provider / model / exact version | OpenAI Codex managed runtime；inherited task model，exact build `Not exposed` | TBD | TBD |
| API or runtime version | `Not exposed`；记录 surface、日期和 canonical task ID | TBD | TBD |
| System instruction hash | [G1 pilot lock](./g1/pilot-lock.md) 封存 | TBD | TBD |
| Analysis prompt hash | [G1 pilot lock](./g1/pilot-lock.md) 封存 | 只冻结 N 主要 Prompt，TBD | 只冻结 N 主要 Prompt，TBD |
| Temperature / sampling parameters | Platform default；`Not exposed` | TBD | TBD |
| Maximum output tokens | 托管硬上限 `Not exposed`；可见回答冻结为最多 5 个假设、5 个检查和目标 1,200 词元 | TBD | TBD |
| Context ordering | 见 [G1 runtime lock](./g1/runtime-lock.md) | TBD | TBD |
| Tool access and data snapshot | 只允许一次受控本地 packet 读取；禁止其他工具调用和外部检索；共享快照 `sg-analytics-2026-08-07` | TBD | TBD |
| Seed handling, if supported | 模型 seed `Not exposed`；运行顺序使用冻结 SHA-256 seed | TBD | TBD |
| Run window | lock commit 后开始；45 个回答完成或检测到 runtime 变化时结束 | TBD | TBD |

要求：

- 每次运行使用新的无状态会话；
- 条件间不共享记忆、缓存或上一次输出；
- 外部工具要么全部禁用，要么在同一研究的所有条件中使用同一只读快照和相同权限；
- 模型版本漂移时停止运行，保留已完成批次并创建协议偏离记录；
- 主要模型只允许一个冻结版本；第二模型只能作为预先声明的稳健性分析。

## 8. Observable Response Contract

不收集或推断隐藏 Chain-of-Thought。所有条件只提交可观察、可评分的分析报告。

### 8.1 Natural Request — primary

N 使用贴近一般需求方的统一请求，例如：

> 请根据现有信息分析该业务现象的可能原因，给出优先判断和下一步建议。不要虚构未提供的事实；无法确定时请说明不确定性。

具体 Incident 现象可以代入首句，但 A-N、B-N、C-N 的任务文本必须完全一致。N 不逐项规定机制、支持、反证、区分性检查或结果更新，也不把 Rubric 改写成任务清单；这些能力由输出自然呈现，并由 Rubric 评分。三个条件使用相同的最大输出 Token。若回答自然产生超过 5 个候选原因或下一步建议，主要评分只读取各自前 5 个，超出部分保留但不作为格式违规。

## 9. Randomization and Blinding

- 在每个 `Incident × replicate` 内随机化 A-N、B-N、C-N；
- 若支持可复现 Seed，则使用预先生成并封存的随机化表；
- 原始输出先分配不含条件信息的 Answer ID，再进入评分；
- 评分顺序按评分者独立随机化，避免相邻比较形成锚定；
- 评分者看得到 Incident、Semantic Layer、可用 Evidence 和隐藏评分答案，但看不到条件代码和条件文档；
- Prompt 要求输出不提及输入文件名；只移除系统元数据，不改写模型正文；
- 如果模型正文自然暴露了某种知识来源，视为盲法限制，不能人工删除。

揭盲只在独立评分、裁决和一致性统计全部保存后进行。

## 10. Repeated Runs and Sample Size

G1 已按每个 Incident、每个核心条件 5 次完成，用于估计模型随机性、天花板/地板效应和 Incident 内方差。这个数量不是正式效应检验的充分性声明。G1.1 的 Incident 数和重复次数必须根据“恢复区分度”的 Pilot 目的单独冻结，不得沿用 G1 数量或根据期望效应倒推。

F1 的样本量按以下顺序确定：

1. 用通过区分度门禁的 G1.1 或独立校准数据估计 Incident 间和 Incident 内方差；G1 只作为粗略参考；
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

## 12. Independent Judging and Adjudication

- 每个输出至少由 2 名独立评分者评分；
- 评分者可以是人类、AI Agent 或混合组合；G0 和 G1 不预设必须动用人类评分者；
- 评分者先在不进入 Benchmark 的材料上校准；
- 主要维度使用 ordinal Krippendorff’s alpha，并同时报告完全一致率和相差不超过 1 分的一致率；
- 正式评分前的校准目标为 `α ≥ 0.80`；`0.667 ≤ α < 0.80` 只能支持暂定结论，必须修订锚点并重新校准；`α < 0.667` 不得进入正式评分；
- 任一主要子维度相差超过 1 分、根因等价性判断不一致，或出现 `candidate-valid-alternative` 时，由第三名裁决者处理；
- 裁决前保留两份原始评分。相差不超过 1 分时取两者均值；需要裁决时使用裁决值并记录原因。

AI Agent 作为主要或次级评分者时：

- 必须满足第 6 节的信息、会话和运行状态隔离要求；
- 同一阶段的 Judge 类型和组合必须在查看结果前冻结，不能按评分结果临时更换；
- 若采用 Pairwise 比较，必须交换左右位置并报告位置敏感性；
- Judge 模型不得与案例或被测输出生成模型共享未披露的同源关系；
- 使用同一基础模型的多个 Judge 必须报告缺少模型多样性的限制；
- 所有评分分歧都保留，不只报告一致部分。

F1 在冻结前必须明确评分者组合及其可支持的主张边界。协议不把人类参与设为默认硬门槛，但纯 AI 评分不能被表述为“已获得人类判断一致性”或现实专家有效性证据。

## 13. Analysis Plan

### 13.1 Unit and aggregation

- 原始单位：单个 `Incident × condition × replicate` 输出；
- 推断单位：Incident；
- 先在每个 `Incident × condition` 内对重复运行求均值，再计算同一 Incident 内的条件差；
- 行业汇总只作为分层描述，除非冻结的功效分析支持行业交互检验。

### 13.2 Primary contrast

主要对比为 Natural Request 下的 `C-N Full ABU − A-N Baseline`。对 RCC@3、HQI、DEE：

- 报告 Incident 级配对均值差、中位数差和 win/tie/loss；
- 报告按 Incident 聚类、按行业分层的 95% bootstrap 置信区间；
- 使用 Incident 级配对置换检验；
- 对三个主要指标使用 Holm 方法控制 family-wise error rate 为 0.05；
- 同时报告冻结的 MID，不把统计显著性等同于实际重要性。

### 13.3 Specificity gate

仅当主要对比达到推进门槛后，解释 Natural Request 下的 `C-N Full ABU − B-N Basic Domain Notes`：

- 把 RCC@3、HQI、DEE 视为第二个检验族并使用 Holm 校正；
- HQI 或 DEE 至少一个在校正后达到统计门槛，且点估计达到冻结 MID；
- RCC@3 不得出现达到冻结非劣效界值的下降；
- BEI 和 OWR 必须通过护栏。

未通过时，结论写为“额外上下文可能有效，ABU 特异性未证实”，不得写为“ABU 已验证”。

### 13.4 Advancement rule

F1 推进 ABU 独立知识层需要同时满足：

1. C-N 相比 A-N 的三个主要指标中至少两个方向为正，95% CI 不跨 0，且点估计达到各自 MID；
2. 其余主要指标没有达到预先冻结的实质性负向差异；
3. C-N 相比 A-N 和 B-N 均通过 BEI、OWR 非劣效护栏；
4. 通过 13.3 的 ABU 特异性门槛；
5. 没有足以推翻结论的泄漏、评分不一致或协议偏离。

MID、非劣效界值和功效必须在 F1 数据生成前填入，不允许按观察结果设定。

### 13.5 Sensitivity analyses

- 使用中位数替代均值；
- 排除发生技术故障但被允许重试的批次；
- 只使用两名评分者原始均值，不使用裁决值；
- 按 Incident 难度、行业和根因类型分层；
- 比较 Top-1 与 Top-3 根因覆盖；
- 比较不同 Judge 类型、模型家族或独立重复运行的评分；若采用 Pairwise Judge，报告双向位置交换结果。

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

- A-N、B-N、C-N 的 Prompt、模型、工具权限和输出预算等价，条件之间只改变业务上下文；
- 隐藏答案不出现在条件输入；
- Incident 通过机制深度、竞争解释、单线索泄漏和 Baseline-only 难度审计，不因观察到的条件效应被选择；
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
| C-N > A-N 且 C-N > B-N，护栏通过 | 显式 ABU 在当前 Natural Request 任务中有特异性增量价值 | ABU 已对真实企业普遍有效，或 LLM 达到资深分析师水平 |
| C-N > A-N，但 C-N ≈ B-N | 更多上下文可能有帮助 | ABU 内容或 BUP 结构已被验证 |
| C-N ≈ A-N | 当前实现、任务或模型未显示增量价值 | ABU 理论必然无效 |
| C-N 提升 HQI 但伤害 BEI/OWR | 存在效率—安全权衡，需要修订 | 只按平均总分宣布成功 |
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
- 两名评分者的类型、Judge / Session ID、运行配置、原始分数、证据说明和时间；
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
- [x] 主要评分维度完成独立校准并达到一致性门槛；
- [x] 3 个游戏 Incident 和 Business Reality 完成并进入 [G1 seal manifest](./results/g1-game-pilot-v0.1/manifests/input-hashes.sha256)；
- [x] A、B、C 条件通过 G1 长度代理、托管输出 Token 估算、泄漏和可读性审计；若运行时暴露模型原生 Token，首批运行仍需复核；
- [x] 模型可得标识、Prompt、输出预算、运行次数和随机化表已在 [G1 runtime lock](./g1/runtime-lock.md) 与 [pilot lock](./g1/pilot-lock.md) 冻结；
- [x] G1 明确标记为探索性，不与 F1 合并：见 [G1 package](./g1/)。

### 18.2 F1 preregistration lock

- [ ] G1 结果已用于修订，但 G1 Incident 已排除；
- [ ] G1.1 已验证 Case 与 Rubric 的区分度；G1.1 Incident 已排除；
- [ ] 根因机制深度、竞争解释数量、单线索审计和 Baseline-only 难度预试规则已冻结；
- [ ] 天花板/地板、Top-1 命中、分值覆盖、回答相似度阈值和 Incident 纳入规则已冻结；
- [ ] F1 Incident、隐藏答案、条件和哈希清单冻结；
- [ ] RCC@3、HQI、DEE 的 MID 已填写；
- [ ] BEI、OWR 非劣效界值已填写；
- [ ] 聚类功效分析和最终样本量已填写；
- [ ] G1.1 的 N Prompt、A-N/B-N/C-N 三个条件、配置和运行窗口已冻结；
- [ ] F1 的精确模型版本、N 主要 Prompt、配置和运行窗口已填写；
- [ ] 评分者、裁决者和角色隔离已确认；
- [ ] 分析脚本在盲态模拟数据上通过；
- [ ] 偏离模板和结果目录已创建；
- [ ] Decision Record 已 Accepted；
- [ ] 主张边界明确排除资深分析师水平、替代性和人类非劣效结论；
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
