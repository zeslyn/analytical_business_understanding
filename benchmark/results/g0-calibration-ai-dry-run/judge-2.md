# G0 Calibration — Judge 2 Independent Raw Scores

- Study: `G0 Calibration AI Dry Run`
- Judge: `Judge 2`
- Rubric: `benchmark/scoring-rubric.md` v0.1
- Rubric SHA-256: `68b162e65e692f24d50caf07e89acd0e0f718391914c16e64e19cd1111de9d9a`
- Scoring date: 2026-08-08
- Order: frozen order in `benchmark/calibration/randomized-order.md`
- Independence statement: independently scored without opening the answer key, condition code, or another judge's output.
- Exploratory applicability convention: Representation Fit is N/A because none of the supplied Judge Packets is explicitly premarked as requiring an alternative view. Perturbation Detection and Recovery is scored only for G0-C04 because its supplied packet contains a `Provided Prior Note` that conflicts with the current evidence.

## 1. G0-A006 — G0-C02

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 2
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 运营流程变慢 | Symptom / overly broad | “运营流程变慢”没有指出扫描、兼容映射或人工放行机制。 |
| 2 | 备件供应不足 | Incorrect | “备件供应不足”与实物库存充足直接冲突。 |
| 3 | 技术员执行不稳定 | Unsupported adjacent explanation | “技术员执行不稳定”没有连接压缩机集中、扫描拒绝或目录版本。 |

- **RCC@3: 0.** 引用：“可能是一般性的运营延迟或备件问题。”前三项没有可接受根因，其中备件不足还与库存证据冲突。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 1 | “备件供应不足”“技术员执行不稳定”与工单场景有表面关系，但忽略目录切点、压缩机集中和扫描拒绝，且一项被库存证据排除。 |
| Mechanistic Specificity | 0 | “运营流程变慢”只是结果重述，没有 Actor、State、Transition 或可产生预测的机制链。 |
| Testability | 1 | “把完成时间拆成……”和访谈是少量可执行内容，但前者重复题面已给出的阶段分解，后者也没有说明什么结果区分三个假设。 |
| Prioritization | 0 | “运营流程变慢；备件供应不足；技术员执行不稳定”没有证据比较，且把被现有证据削弱的解释排在前列。 |

- **HQI: 0.50.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 拆分四段完成时间 | Invalid | Incident 已明确等待接单、路程稳定，现场处理与等待部件上升；此检查只重复已知事实。 |
| 2 | 访谈技术员最近阻碍 | Valid | 明确提出现实获取路径，可能发现人工放行或其他阻碍，虽区分力较弱。 |

- Invalid checks: **1 / 2**.
- **First Discriminating Evidence: 0.** 引用：“先把完成时间拆成等待接单、路程、现场处理和等待部件。”这正是题面已经完成的分解，不能更新候选解释。
- **Valid Check Ratio Score: 1.** 引用：“访谈几名技术员……”仅第二项有效；无效比例为 50%。
- **DEE: 0.50.**

### Guardrails and exploration

- **BEI: 2.** “备件供应不足”实质误用库存证据，且“技术员执行不稳定”缺乏支持；但没有虚构具体数据，整体以可能性措辞呈现。
- Fabricated evidence: **0**
- Material business conflicts: **1**
- Unsupported material claims: **1**
- Most severe issue: “备件供应不足”与“仓库实物盘点显示常用替换件库存充足”冲突。
- **OWR: 2.** “需要更多数据才能继续”承认未知，但只是通用免责声明，没有给出会推翻或切换当前候选的结果条件。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **Missing**（仅称“无法可靠判断”）
- Flags: Material evidence conflict.
- One-sentence judgment: 谨慎措辞没有转化为有效诊断，假设停留在症状或已被证据削弱的宽泛解释。

## 2. G0-A007 — G0-C03

### Structure check

- Required sections present: Yes
- Hypotheses counted: 1
- Checks counted: 3
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | Projection 延迟应用并过早标记成功 | Acceptable cause | 与 Business Reality 的传播延迟和成功状态语义等价。 |

- **RCC@3: 4.** 引用：“entitlement projection 仍按小时批量应用，却在写入队列时提前报告成功”，第一假设完整命中根因机制。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 3 | “造成新成员在 45–60 分钟内没有 Lab 权限”直接解释关键现象，但只有一个假设并错误遗漏题面明确保留的 authorization 层竞争解释。 |
| Mechanistic Specificity | 3 | “按小时批量应用”“写入队列时提前报告成功”形成清楚机制链，但“唯一可能”把未证实因果说成已证实，未正确容纳缓存替代。 |
| Testability | 3 | “如果 projection 已应用但仍拒绝，则需要检查 authorization 层”是明确反证；后两项可执行，但没有同等清楚地区分缓存与 projection。 |
| Prioritization | 2 | 根因排序与主要 Evidence 相符，但“其他原因已被完全排除”没有进行竞争解释、信息价值或成本比较。 |

- **HQI: 2.75.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 对齐源目录、projection 入队/应用、首次授权 | Valid | 可直接区分 projection 未应用与 projection 后 authorization 仍旧拒绝。 |
| 2 | 临时提高 projection 频率 | Valid | 机制扰动可验证传播延迟是否随频率下降。 |
| 3 | 比较新旧目录版本的 lag | Valid | 可验证问题是否随迁移版本出现。 |

- Invalid checks: **0 / 3**.
- **First Discriminating Evidence: 4.** 引用：“如果 projection 已应用但仍拒绝，则需要检查 authorization 层。”该检查低成本、可执行，并明确规定相反结果如何切换层级。
- **Valid Check Ratio Score: 4.** 引用：“对齐……”“临时提高……”“比较新旧……”三项均能改变主要机制的可信度，无无效检查。
- **DEE: 4.00.**

### Guardrails and exploration

- **BEI: 1.** 引用：“其他原因已被完全排除”“日志已经足够证明 projection 是唯一原因。”这些会影响行动的确定性断言与题面保留的 authorization-cache 限制冲突，且结论要求关闭其他调查。
- Fabricated evidence: **0**
- Material business conflicts: **0**
- Unsupported material claims: **3**
- Most severe issue: “立即把 projection 改为实时，并关闭其他根因调查。”把未区分的机制当成唯一已证实原因。
- **OWR: 0.** 引用：“唯一可能的根因”“其他原因已被完全排除”“关闭其他根因调查”，明确封闭了 Evidence 支持的 authorization 未知机制。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **100%**
- Flags: Material evidence-integrity issue; open-world closure.
- One-sentence judgment: 根因和首项证据都很强，但不当的 100% 确定性把题面明确未区分的竞争机制错误关闭。

## 3. G0-A010 — G0-C04

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 4
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 本地时间到 UTC 的调度转换错误 | Acceptable cause | 精确连接迁移、服务器时区解释、UTC 写入和美洲晚发。 |
| 2 | DST 偏移表未更新 | Partial / plausible competitor | 能解释较小偏差，但回答正确指出难以解释 5–8 小时。 |
| 3 | 美洲供应商积压 | Plausible competitor | 可导致晚发，并给出应出现在队列延迟的可区分预测。 |

- **RCC@3: 4.** 引用：“把用户本地 `08:00` 当成服务器时区后再转换为 UTC”，第一假设完整命中根因且不依赖泄漏信息。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 4 | “与迁移切点、时区集中和实际晚发时长一致”，三个假设都直接解释关键 Observation 并覆盖重要竞争解释。 |
| Mechanistic Specificity | 4 | “预约创建 → 调度 → UTC 存储 → 实际发送”连接业务对象、时钟转换、受影响地区和可区分替代机制。 |
| Testability | 4 | “若错误量等于服务器与用户时区差……若固定约 1 小时……”明确给出可执行 Evidence 及正反更新。 |
| Prioritization | 4 | “难以单独解释 5–8 小时延迟”“应在队列延迟……留下证据”把当前 Evidence、解释范围和低成本日志区分结合到排序。 |

- **HQI: 4.00.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 对齐时区、期望时间、调度表达式、UTC、实际发送 | Valid | 一次对齐即可区分完整时区误用与 DST 偏差。 |
| 2 | 新旧调度器跨三个时区测试 | Valid | 可定位转换步骤并做版本反事实。 |
| 3 | 分离 scheduled-at 与 vendor sent | Valid | 可区分调度错误和供应商积压。 |
| 4 | 小范围时区修正并监控 | Valid | 有控制变量的灰度干预验证完整结果链。 |

- Invalid checks: **0 / 4**.
- **First Discriminating Evidence: 4.** 引用：“若错误量等于服务器与用户时区差，支持假设 1；若固定约 1 小时，转向 DST 表。”这是当前可用数据下最高信息价值的首查，并明确结果更新。
- **Valid Check Ratio Score: 4.** 引用：“比较……”“验证……”“分离……”“小范围修正……”四项均可执行且提供增量区分信息。
- **DEE: 4.00.**

### Guardrails and exploration

- **BEI: 4.** 引用：“历史……笔记缺少版本和适用范围，且与当前稳定的提前期分布冲突”，事实均可追溯并清楚区分证据、推断与待区分机制。
- Fabricated evidence: **0**
- Material business conflicts: **0**
- Unsupported material claims: **0**
- Most severe issue: None.
- **OWR: 4.** 引用：“仍需区分完整时区误用、DST 表和供应商队列”，明确模型边界、竞争解释和会导致切换的证据。
- Representation Fit: **N/A**（Judge Packet 未明确预标；回答虽提出 Process/时间映射视图，不据此自行改变适用性）
- **Perturbation Detection and Recovery: 4.** 引用：“历史‘提前期主导’笔记缺少版本和适用范围，且与当前稳定的提前期分布冲突，不能作为封闭先验。”明确定位冲突、降权旧先验并形成证据支持的替代解释。
- Stated confidence: **High**
- Flags: None.
- One-sentence judgment: 完整、可证伪且高效地定位时区转换机制，同时正确处理旧先验和竞争解释。

## 4. G0-A008 — G0-C03

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 4
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 实验说明过于复杂 | Incorrect | 课程内容稳定，且下降发生在 access granted，而非 launch requested。 |
| 2 | 讲座与实验内容不一致 | Incorrect | 讲座完成与 lab launch 均稳定，不解释组传播拒绝。 |
| 3 | 缺少足够练习 | Incorrect | 不解释新目录版本和 `group_not_propagated`。 |

- **RCC@3: 0.** 引用：“课程内容变难、学员失去信心。”三个假设均绕开权限链，且与课程内容稳定、访问授权下降直接冲突。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 0 | 引用：“实验说明过于复杂；讲座与实验内容不一致；新学员缺少足够练习。”这些解释被访问授权和课程稳定 Evidence 排除。 |
| Mechanistic Specificity | 1 | “课程内容变难、学员失去信心”提供了很粗的心理链，但没有连接企业目录、projection、authorization 或拒绝原因。 |
| Testability | 1 | “调查……点击热图……A/B 测试”表面可执行，却主要验证错误的内容方向，且没有结果规则区分三个内容解释与权限故障。 |
| Prioritization | 0 | “应优先重写课程内容，而不是改动权限系统”与 `lab_access_granted` 下降和 `group_not_propagated` 上升明显冲突。 |

- **HQI: 0.50.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 调查未完成实验学员 | Valid | 明确提出新调查路径，结果可能降低或提高内容复杂度解释，虽区分力很低。 |
| 2 | 点击热图 | Invalid | 热图不在可用数据中，未提出埋点获取路径，且点击模式不能区分权限传播机制。 |
| 3 | 重写说明做 A/B | Valid | 干预结果可更新说明复杂度假设，虽不是当前高价值检查。 |
| 4 | 增加预备练习 | Valid | 干预结果可更新练习不足假设。 |

- Invalid checks: **1 / 4**.
- **First Discriminating Evidence: 1.** 引用：“询问最难理解的步骤”，可能对内容假设有用，但基本不能区分当前最重要的权限传播与 authorization 解释。
- **Valid Check Ratio Score: 2.** 一项无效检查，比例为 25%；其余三项能更新各自内容假设但整体方向错误且效率低。
- **DEE: 1.50.**

### Guardrails and exploration

- **BEI: 0.** 引用：“企业用户普遍反馈实验说明不清晰，满意度调查也下降了 18 个百分点。”两项输入中不存在的具体 Evidence 成为核心结论依据，并且内容根因与题面业务证据冲突。
- Fabricated evidence: **2**
- Material business conflicts: **2**
- Unsupported material claims: **1**
- Most severe issue: “`group_not_propagated` 可能是学习者没有完成前置练习导致的权限保护”无输入依据且错误改写权限拒绝语义。
- **OWR: 0.** 引用：“应优先重写课程内容，而不是改动权限系统”，在明确冲突 Evidence 下仍用虚构的内容解释覆盖权限机制。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **High**
- Flags: Fabricated evidence; material business/evidence conflicts.
- One-sentence judgment: 回答依赖虚构调查结果，把明确的权限传播故障错误重写为内容难度问题。

## 5. G0-A002 — G0-C01

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 3
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | Safari 对新登录流程不兼容 | Partial mechanism | 命中浏览器和版本，但没有跨站回跳状态/Cookie 机制。 |
| 2 | 移动端页面登录 Bug | Overbroad adjacent explanation | 可覆盖 iOS WebView，却不能解释 Safari 17 桌面或错误码。 |
| 3 | 新认证服务不稳定 | Overbroad domain label | 与版本切点相关，但无浏览器选择性机制。 |

- **RCC@3: 2.** “Safari 对新登录流程不兼容”命中相邻机制，但缺少 Cookie、SameSite 和跨站回跳这一决定性连接。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 2 | 至少“Safari 对新登录流程不兼容”直接相关，但另两项过宽且未充分解释 Safari 桌面、iOS WebView 和新增错误码的组合。 |
| Mechanistic Specificity | 2 | 指出了认证版本、Safari 和登录阶段，仍未说明状态保存、跨站回跳或 Cookie 丢失的 Transition。 |
| Testability | 2 | 浏览器细分和错误前后日志可执行，但没有明确正反结果如何区分三个宽泛假设，第三项仅重复总体下降。 |
| Prioritization | 2 | 排序大致跟随 Safari 集中证据，但理由没有比较候选机制或验证成本。 |

- **HQI: 2.00.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 按 Safari 小版本和设备拆分 | Valid | 可区分 Safari 广泛兼容问题与只在移动设备发生的问题。 |
| 2 | 查看错误前后认证日志 | Valid | 可定位状态丢失阶段并更新宽泛认证服务假设。 |
| 3 | 重算全站完成率 | Invalid | 只重复 Incident 已知的完成率下降。 |

- Invalid checks: **1 / 3**.
- **First Discriminating Evidence: 2.** 首查能缩小浏览器/设备范围，但没有明确结果更新，且不如直接检查挑战 Cookie 对核心机制有区分力。
- **Valid Check Ratio Score: 2.** 一项无效检查，比例为 33.3%。
- **DEE: 2.00.**

### Guardrails and exploration

- **BEI: 4.** 引用：“大概率”“可能”“暂时不知道”，关键事实均可追溯且被明确标成推断，没有虚构 Evidence 或业务冲突。
- Fabricated evidence: **0**
- Material business conflicts: **0**
- Unsupported material claims: **0**
- Most severe issue: None.
- **OWR: 2.** “也可能有其他原因”承认不确定性，但只是通用开放声明，没有指出哪项反证会推翻 Safari 兼容方向。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **Medium**
- Flags: None.
- One-sentence judgment: 方向正确但只到浏览器兼容性层面，缺少状态 Cookie 机制和高信息价值首查。

## 6. G0-A009 — G0-C03

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 4
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: **Yes — authorization cache 未失效**

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | Authorization cache 未随成员变化失效 | Candidate-valid-alternative | 题面明确称日志尚未区分此机制；它能解释已更新源目录与持续旧权限。 |
| 2 | Projection 按小时应用并提前报告成功 | Acceptable cause | 完整命中 Business Reality。 |
| 3 | 组标识映射不一致 | Plausible competitor | 可解释迁移账户拒绝，并给出应持续而非自动恢复的预测。 |

- **RCC@3: 4.** 引用：“Authorization cache 未随成员变化失效”，第一项是 Evidence 支持且 Judge Packet 明确保留的候选有效替代；第二项同时覆盖标准根因，需就替代根因等价性裁决。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 4 | “Authorization cache 未随成员变化失效”“projection 按小时应用”“组标识映射不一致”三项均直接解释新目录账户的授权拒绝和 45–60 分钟恢复，并覆盖最重要竞争解释。 |
| Mechanistic Specificity | 4 | “projection 已应用而缓存仍命中旧值”精确连接目录、投影、cache key、授权状态和相反预测。 |
| Testability | 4 | “立即恢复支持缓存机制；无变化则降低其优先级”给出可执行扰动和明确正反更新。 |
| Prioritization | 4 | “少量测试成员执行安全的 cache eviction”结合现有证据、区分价值和低成本安全验证，并保留强竞争解释。 |

- **HQI: 4.00.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 对齐目录、projection、cache、首次授权 | Valid | 在同一成员上直接区分 cache 与 projection。 |
| 2 | 安全 cache eviction | Valid | 不改变 projection 的机制隔离实验。 |
| 3 | 比较 TTL 与批处理边界 | Valid | 不同时间聚集给出两机制的相反预测。 |
| 4 | 检查组标识映射 | Valid | 可排除持续性映射错误。 |

- Invalid checks: **0 / 4**.
- **First Discriminating Evidence: 4.** 引用：“若 projection 已应用而缓存仍命中旧值，支持假设 1；若授权在 projection 应用后立即恢复，支持假设 2。”首查直接区分前两项且仅用可查询数据。
- **Valid Check Ratio Score: 4.** 引用：“对少量测试成员执行安全的 cache eviction”“比较自然恢复时间”“检查……组标识映射”；四项检查均可执行、非重复，并能更新至少一个主要假设。
- **DEE: 4.00.**

### Guardrails and exploration

- **BEI: 4.** 引用：“不一定”“符合固定缓存 TTL”“在时间戳对齐前不应……”，把缓存明确表述为可检验推断，没有虚构事实或业务冲突。
- Fabricated evidence: **0**
- Material business conflicts: **0**
- Unsupported material claims: **0**
- Most severe issue: None.
- **OWR: 4.** 引用：“现有 Business Reality 可能没有列全 downstream authorization 机制”，明确模型边界并用时间戳、eviction 和恢复模式规定切换条件。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **Medium-high**
- Flags: **Candidate valid alternative requires adjudication; root-cause equivalence/acceptability requires adjudication.**
- One-sentence judgment: 这是证据支持的开放世界替代解释，诊断设计能高效区分 cache、projection 和映射机制。

## 7. G0-A003 — G0-C01

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 3
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 许可费上涨 | Incorrect | 许可价格明确稳定。 |
| 2 | 暑期活动结束、流量质量下降 | Incorrect | 流量来源构成稳定，且下降局限在身份认证转换。 |
| 3 | 竞争者推出更便宜产品 | Unsupported / incorrect | 无相关 Evidence，不能解释浏览器和认证错误码集中。 |

- **RCC@3: 0.** 引用：“许可费上涨和暑期营销活动结束后低意愿用户增多”，前三项没有可接受根因且核心解释与题面直接冲突。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 0 | “许可费上涨”“流量质量下降”被价格、来源构成和漏斗阶段证据排除，竞争者假设也不能解释 Safari/iOS 集中。 |
| Mechanistic Specificity | 1 | “许可费上涨降低支付意愿”有一个粗略因果链，但没有连接实际发生下降的身份认证状态转换。 |
| Testability | 2 | 问卷和折扣实验可以更新价格敏感假设，但只围绕已被削弱的商业解释，且没有明确预期结果或区分技术机制。 |
| Prioritization | 0 | “认证错误码可能只是……技术噪声”在下降明确位于认证阶段时仍把价格列首位，排序与 Evidence 明显冲突。 |

- **HQI: 0.75.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 比较高低收入社区续期率 | Invalid | 社区/收入不在可用维度，未提出获取路径，且分层无法区分身份 Cookie 故障。 |
| 2 | 对未续期用户发问卷 | Valid | 明确提出新调查路径，可更新价格敏感解释。 |
| 3 | 发折扣券观察恢复 | Valid | 干预可更新价格假设，虽与当前主要证据不匹配且可能受混杂。 |

- Invalid checks: **1 / 3**.
- **First Discriminating Evidence: 1.** 引用：“比较高收入和低收入社区的续期率”，即使获得也主要产生价格相关性，基本不会区分当前主要技术解释。
- **Valid Check Ratio Score: 2.** 一项无效检查，比例为 33.3%；另两项可更新回答自己的价格假设。
- **DEE: 1.50.**

### Guardrails and exploration

- **BEI: 0.** 引用：“最近的用户访谈也表明价格敏感度明显上升。”该 Evidence 未提供；核心又依赖与稳定价格、稳定流量及认证阶段定位冲突的事实断言。
- Fabricated evidence: **1**
- Material business conflicts: **2**
- Unsupported material claims: **2**
- Most severe issue: “许可费上涨”与题面“许可价格……未发生变化”直接冲突，并驱动立即折扣建议。
- **OWR: 0.** 引用：“认证错误码可能只是……技术噪声，不影响价格因素是主要根因”，在明确冲突 Evidence 下封闭地保护错误商业先验。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **High**
- Flags: Fabricated evidence; material business/evidence conflicts.
- One-sentence judgment: 回答以虚构访谈和被题面排除的价格解释覆盖了高度局部化的身份认证故障。

## 8. G0-A001 — G0-C01

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 4
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 新认证版本与 Safari/iOS SameSite Cookie 不兼容 | Acceptable cause | 完整命中跨站回跳挑战状态丢失机制。 |
| 2 | 回跳 URL/状态参数编码错误 | Plausible competitor | 能解释相同阶段，但预测 Cookie 仍存在、参数不可解析。 |
| 3 | 移动会话状态缓存版本不兼容 | Plausible competitor | 能解释部分设备差异，但回答正确指出 Safari 桌面解释较弱。 |

- **RCC@3: 4.** 引用：“Safari 17 和 iOS WebView 在跨站认证回跳时没有带回状态”，第一假设是机制等价的完整根因。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 4 | “同时解释版本切点、浏览器集中和新增 `challenge_state_missing`”，三项都围绕关键状态传递竞争机制。 |
| Mechanistic Specificity | 4 | “改变了挑战状态 Cookie 的行为……跨站认证回跳时没有带回状态”连接版本、对象、Transition、错误码和漏斗结果。 |
| Testability | 4 | “若 Cookie 存在但状态参数不可解析，转向假设 2”给出请求级检查、复现、灰度干预和明确正反更新。 |
| Prioritization | 4 | “同时解释版本切点、浏览器集中和新增错误码”，并用由低成本日志到隔离复现再到灰度修复的顺序比较候选机制。 |

- **HQI: 4.00.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 版本/浏览器错误码与 Cookie 对照 | Valid | 直接区分 Cookie 缺失和状态参数解析问题。 |
| 2 | 新旧版本 Safari 隔离复现 | Valid | 建立版本反事实并观测 Cookie 属性。 |
| 3 | Safari 桌面与 WebView 携带模式 | Valid | 区分浏览器策略和嵌入式会话问题。 |
| 4 | SameSite 灰度修正 | Valid | 机制干预并同时监控其他浏览器。 |

- Invalid checks: **0 / 4**.
- **First Discriminating Evidence: 4.** 引用：“若只在新版本的 Safari/iOS 缺失……若 Cookie 存在但状态参数不可解析，转向假设 2。”它使用现有日志并优先区分前两项。
- **Valid Check Ratio Score: 4.** 引用：“比较……”“复现……”“比较 Safari 桌面与 iOS WebView……”“灰度版本验证……”四项检查均能对主要候选提供非重复的区分信息。
- **DEE: 4.00.**

### Guardrails and exploration

- **BEI: 4.** 引用：“现有 Evidence 还不能完全区分……”，所有关键事实可追溯，推断有清楚限定且不与业务规则冲突。
- Fabricated evidence: **0**
- Material business conflicts: **0**
- Unsupported material claims: **0**
- Most severe issue: None.
- **OWR: 4.** 引用：“如果修正 Cookie 后没有恢复，应重新开放回跳编码和服务端状态缓存解释”，明确给出推翻和切换条件。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **High**
- Flags: None.
- One-sentence judgment: 精确命中 Cookie 回跳状态机制，并以低成本请求级证据和灰度实验保持可证伪性。

## 9. G0-A004 — G0-C02

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 4
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 设备—部件兼容映射迁移不完整 | Acceptable cause | 完整连接库存、扫描拒绝、人工放行和 SLA。 |
| 2 | 仓库新 SKU 主数据不同步 | Plausible competitor | 可造成扫描拒绝，预测按仓库而非设备型号集中。 |
| 3 | 扫描客户端缓存旧目录 | Plausible competitor | 可解释版本相关扫描异常，预测刷新后恢复。 |

- **RCC@3: 4.** 引用：“目录重编码遗漏了部分压缩机型号与替换件的兼容映射”，第一假设完整命中可接受根因。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 4 | “与上线时间、设备家族、扫描拒绝和库存充足同时吻合”，三项都直接解释关键 Observation 并覆盖主数据/缓存竞争机制。 |
| Mechanistic Specificity | 4 | “实物有库存但扫描被拒，技术员等待人工放行，最终推高……”连接 Actor、校验状态和完整延迟机制链。 |
| Testability | 4 | “若拒绝集中在缺失映射……若映射存在但仓库版本落后……”规定可执行连接查询和相反结果更新。 |
| Prioritization | 4 | “与上线时间、设备家族、扫描拒绝和库存充足同时吻合”以当前证据排序，并先做连接查询、再做刷新和小范围修复。 |

- **HQI: 4.00.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 连接拒绝扫描、设备、SKU、映射 | Valid | 直接区分缺失映射和仓库版本落后。 |
| 2 | 仓库版本/同步/同件扫描比较 | Valid | 区分中央映射与仓库同步。 |
| 3 | 客户端刷新前后拒绝率 | Valid | 区分缓存与中央映射。 |
| 4 | 小范围补齐映射并监控 SLA | Valid | 验证扫描拒绝到人工等待再到 SLA 的全链。 |

- Invalid checks: **0 / 4**.
- **First Discriminating Evidence: 4.** 引用：“若拒绝集中在缺失映射且人工放行后可完成……若映射存在但仓库版本落后……”，首查直接区分前两项并验证主链。
- **Valid Check Ratio Score: 4.** 引用：“连接……”“比较……”“检查……”“补齐小范围兼容映射”；四项均可执行、非重复且有明确区分价值。
- **DEE: 4.00.**

### Guardrails and exploration

- **BEI: 4.** 引用：“置信度高但不视为已经因果确认”，关键事实全部来自输入，推断和未知边界清楚。
- Fabricated evidence: **0**
- Material business conflicts: **0**
- Unsupported material claims: **0**
- Most severe issue: None.
- **OWR: 4.** 引用：“若映射补齐不改善等待时间，应重新检查维修流程中的其他瓶颈”，明确给出反证和重新开放机制空间的条件。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **High**
- Flags: None.
- One-sentence judgment: 根因、竞争机制、首查和灰度修复形成完整且审慎的诊断闭环。

## 10. G0-A011 — G0-C04

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 4
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 提前预约天数过长 | Incorrect | 提前预约天数分布稳定，不能解释迁移切点和时区集中。 |
| 2 | 用户临时改变计划 | Unsupported broad explanation | 不解释提醒墙上时间延迟和地区差异。 |
| 3 | 用户需求下降 | Incorrect | 预约量稳定，且变化集中在特定时区。 |

- **RCC@3: 0.** 引用：“本次上升仍应归因于用户提前锁定房间后改变计划”，前三项均未覆盖提醒调度机制，且首项被稳定提前期证据削弱。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 0 | “提前预约天数过长”“需求下降”忽略迁移、时区和晚发 5–8 小时，且分别与稳定分布/稳定预约量冲突。 |
| Mechanistic Specificity | 1 | “提前锁定房间后改变计划”只有粗略行为链，没有连接提醒调度、UTC 转换、打开或 check-in 状态。 |
| Testability | 2 | 提前期分层、调查和政策干预可执行，但没有预期结果，且不能区分当前最重要的时区调度解释。 |
| Prioritization | 0 | “提醒发送时间变化……不需要优先调查”用无版本旧笔记覆盖当前墙上时间和地区集中证据，排序与 Evidence 明显冲突。 |

- **HQI: 0.75.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 按提前期比较未到场率 | Valid | 可检验提前期与 no-show 的关联，尽管不能解释切点。 |
| 2 | 调查未到场用户 | Valid | 提出新调查获取路径，可更新“改变计划”假设。 |
| 3 | 比较不同房间取消率 | Invalid | 取消率总体已稳定，房间分层也不清楚地区分前三项或时区机制。 |
| 4 | 缩短最大提前期 | Valid | 政策干预可更新首假设，但成本高且不是当前优先检查。 |

- Invalid checks: **1 / 4**.
- **First Discriminating Evidence: 1.** 引用：“按提前预约天数比较未到场率”，可能更新旧先验，但基本不能区分提醒时区错误与其他行为解释，也不是当前高价值首查。
- **Valid Check Ratio Score: 2.** 一项无效检查，比例为 25%；其余检查可更新回答自己的行为假设。
- **DEE: 1.50.**

### Guardrails and exploration

- **BEI: 0.** 引用：“提醒发送时间变化与到场没有业务因果关系”，核心结论依赖无版本旧笔记，并与稳定提前期、特定时区集中及 5–8 小时晚发的当前 Evidence 冲突。
- Fabricated evidence: **0**
- Material business conflicts: **2**
- Unsupported material claims: **2**
- Most severe issue: “运营笔记已经总结了稳定规律”把没有版本和适用时区的笔记误当成完备、稳定真相。
- **OWR: 0.** 引用：“提醒发送时间变化……不需要优先调查。运营笔记已经总结了稳定规律。”明确让旧候选覆盖冲突 Evidence。
- Representation Fit: **N/A**
- **Perturbation Detection and Recovery: 0.** 引用：“根据业务笔记……因此本次上升仍应归因于……”完全接受错误先验并用它覆盖当前冲突 Evidence。
- Stated confidence: **High**
- Flags: Material business/evidence conflict; failed perturbed-prior recovery.
- One-sentence judgment: 回答把失去适用范围的旧笔记当成封闭真相，反而排除了当前最具区分力的时区证据。

## 11. G0-A005 — G0-C02

### Structure check

- Required sections present: Yes
- Hypotheses counted: 4（RCC/HQI 仅评分前 3）
- Checks counted: 5
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 技术员排班不足 | Incorrect | 技术员人数和排班稳定。 |
| 2 | 压缩机故障更严重 | Incorrect | 故障严重度构成稳定。 |
| 3 | 目录重编码遗漏兼容映射 | Acceptable cause | 完整说明可用备件被扫描拒绝。 |

- **RCC@3: 3.** 引用：“目录重编码遗漏兼容映射，导致可用备件被扫描拒绝”，前三项中包含完整根因，但只排第 3。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 2 | 第三项直接相关并命中根因，但前两项分别被稳定排班和稳定严重度明确削弱，忽略了最强 Evidence 的优先级。 |
| Mechanistic Specificity | 2 | 第三项给出“映射遗漏 → 可用备件被拒”的部分完整机制，而前两项只有负载/复杂度标签，整体机制质量不完整。 |
| Testability | 2 | 目录版本、映射核对和回滚可执行，但首两查只重复已知稳定事实，多数检查没有明确正反更新。 |
| Prioritization | 0 | 引用：“先从技术员负载开始”，把题面已经排除的排班不足放在首位，并把证据最强的目录机制排第 3。 |

- **HQI: 1.50.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 检查人数、排班、人均工单量 | Invalid | 题面已明确人数、排班和工单量稳定。 |
| 2 | 比较严重度和故障码构成 | Invalid | 题面已明确严重度构成稳定。 |
| 3 | 按版本、型号、仓库比较扫描拒绝 | Valid | 可定位目录/型号/仓库集中。 |
| 4 | 核对库存和兼容映射 | Valid | 可区分真实缺货与错误校验。 |
| 5 | 回滚或补映射并观测 | Valid | 机制干预可验证人工等待和 SLA 链。 |

- Invalid checks: **2 / 5**.
- **First Discriminating Evidence: 0.** 引用：“检查技术员人数、排班和人均工单量是否变化”，只重复明确已知的稳定事实。
- **Valid Check Ratio Score: 2.** 两项无效检查，比例为 40%。
- **DEE: 1.00.**

### Guardrails and exploration

- **BEI: 1.** 引用：“技术员排班不足”“最近的压缩机故障更严重”，两项高优先级假设分别与明确稳定 Evidence 冲突，并实质改变调查顺序；但回答也保留并正确描述目录机制。
- Fabricated evidence: **0**
- Material business conflicts: **2**
- Unsupported material claims: **0**
- Most severe issue: “先从技术员负载开始”要求先重复已被题面排除的调查。
- **OWR: 2.** “目前没有足够证据确定哪一个最重要”承认不确定性并保留多种解释，但没有正确说明现有反证应如何降权前两项。
- Representation Fit: **N/A**
- Perturbation Detection and Recovery: **N/A**
- Stated confidence: **Medium**
- Flags: Material evidence conflicts.
- One-sentence judgment: 正确根因被排在第三，前两项和首两查都重复或违背已有证据，导致诊断效率和排序很差。

## 12. G0-A012 — G0-C04

### Structure check

- Required sections present: Yes
- Hypotheses counted: 3
- Checks counted: 5
- Refusal / empty / truncated: No / No / No
- Candidate-valid-alternative: No

### Root-cause mapping and RCC@3

| Rank | Hypothesis | Mapping | Evidence |
|---:|---|---|---|
| 1 | 本地时间到 UTC 转换错误 | Acceptable cause | 完整命中时区转换根因。 |
| 2 | 夏令时切换错误 | Partial mechanism | 可关联同周切换，但没有连接 5–8 小时偏差。 |
| 3 | 提醒服务迁移造成延迟 | Partial / overly broad | 命中切点，但没有区分调度转换和下游发送。 |

- **RCC@3: 4.** 引用：“根因是提醒服务错误处理用户时区，使美洲用户收到提醒过晚”，第一假设机制等价地命中根因。

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 3 | “本地时间到 UTC 的转换错误”直接解释关键现象，另两项相关但较宽泛、重复，未覆盖清晰可区分的供应商或调度替代。 |
| Mechanistic Specificity | 3 | “错误处理用户时区，使美洲用户收到提醒过晚”连接对象、转换和结果，但没有进一步说明服务器时区解释步骤或三项的相反预测。 |
| Testability | 0 | 引用：“访谈所有……重新计算总体……检查容量……等待……以供应商回答作为确认”，没有一项可执行且能区分前三项机制的检查。 |
| Prioritization | 2 | 首项排序正确，但三项没有 Evidence、影响、区分价值或验证成本比较。 |

- **HQI: 2.00.**

### DEE and check validity

| Rank | Check | Validity | Reason |
|---:|---|---|---|
| 1 | 访谈所有未打开用户 | Invalid | “所有”在当前成本下不现实，主观动机也不能区分 UTC 转换、DST 与服务延迟。 |
| 2 | 重算总体未到场率 | Invalid | 只重复 Incident 已知 Observation。 |
| 3 | 检查房间容量 | Invalid | 房间供给已稳定，且无论结果都不区分三个提醒机制。 |
| 4 | 等待下月自然恢复 | Invalid | 被动等待没有机制预测，也不是合理成本的信息步骤。 |
| 5 | 以供应商回答为确认 | Invalid | 用供应商对待证明结论的自报作为确认，形成循环验证。 |

- Invalid checks: **5 / 5**.
- **First Discriminating Evidence: 0.** 引用：“访谈所有未打开提醒的用户”，成本明显不合理，且主观回答不能区分前三个技术机制。
- **Valid Check Ratio Score: 0.** 引用：“重新计算总体未到场率”“等待下个月数据”“以其回答作为确认”等五项均满足无效检查条件，无效比例 100%。
- **DEE: 0.00.**

### Guardrails and exploration

- **BEI: 4.** 引用：“错误处理用户时区，使美洲用户收到提醒过晚”，核心事实可追溯且没有虚构 Evidence；低质量检查不等同于事实完整性冲突。
- Fabricated evidence: **0**
- Material business conflicts: **0**
- Unsupported material claims: **0**
- Most severe issue: None for BEI; diagnostic checks are scored under DEE.
- **OWR: 2.** “可能还有其他原因”承认不确定性，但只是通用免责声明，没有说明何种证据会推翻当前解释，并称“没有必要展开”。
- Representation Fit: **N/A**
- **Perturbation Detection and Recovery: 3.** 引用：“根因是提醒服务错误处理用户时区”，实际没有接受旧笔记并恢复到 Evidence 支持解释；但没有明确指出旧先验冲突，也没有提出有效恢复检查，故未达到 4。
- Stated confidence: **High**
- Flags: Invalid-check classification materially affects DEE.
- One-sentence judgment: 根因方向正确，但五项检查全部缺乏可执行的机制区分力，开放性也只停留在免责声明。

## 12-answer summary

主要子维度均以单个 0–4 整数记录；HQI 与 DEE 仅分别报告各自均值，不合并为决策总分。

| Order | Answer ID | Case ID | RCC@3 | Rel. | Mech. | Test. | Prior. | HQI | First DE | VCR | DEE | BEI | OWR | Invalid / total | Fab. | Biz conflict | Candidate alt. | Rep. Fit | PDR | Confidence |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---:|---|
| 1 | G0-A006 | G0-C02 | 0 | 1 | 0 | 1 | 0 | 0.50 | 0 | 1 | 0.50 | 2 | 2 | 1/2 | 0 | 1 | No | N/A | N/A | Missing |
| 2 | G0-A007 | G0-C03 | 4 | 3 | 3 | 3 | 2 | 2.75 | 4 | 4 | 4.00 | 1 | 0 | 0/3 | 0 | 0 | No | N/A | N/A | 100% |
| 3 | G0-A010 | G0-C04 | 4 | 4 | 4 | 4 | 4 | 4.00 | 4 | 4 | 4.00 | 4 | 4 | 0/4 | 0 | 0 | No | N/A | 4 | High |
| 4 | G0-A008 | G0-C03 | 0 | 0 | 1 | 1 | 0 | 0.50 | 1 | 2 | 1.50 | 0 | 0 | 1/4 | 2 | 2 | No | N/A | N/A | High |
| 5 | G0-A002 | G0-C01 | 2 | 2 | 2 | 2 | 2 | 2.00 | 2 | 2 | 2.00 | 4 | 2 | 1/3 | 0 | 0 | No | N/A | N/A | Medium |
| 6 | G0-A009 | G0-C03 | 4 | 4 | 4 | 4 | 4 | 4.00 | 4 | 4 | 4.00 | 4 | 4 | 0/4 | 0 | 0 | Yes | N/A | N/A | Medium-high |
| 7 | G0-A003 | G0-C01 | 0 | 0 | 1 | 2 | 0 | 0.75 | 1 | 2 | 1.50 | 0 | 0 | 1/3 | 1 | 2 | No | N/A | N/A | High |
| 8 | G0-A001 | G0-C01 | 4 | 4 | 4 | 4 | 4 | 4.00 | 4 | 4 | 4.00 | 4 | 4 | 0/4 | 0 | 0 | No | N/A | N/A | High |
| 9 | G0-A004 | G0-C02 | 4 | 4 | 4 | 4 | 4 | 4.00 | 4 | 4 | 4.00 | 4 | 4 | 0/4 | 0 | 0 | No | N/A | N/A | High |
| 10 | G0-A011 | G0-C04 | 0 | 0 | 1 | 2 | 0 | 0.75 | 1 | 2 | 1.50 | 0 | 0 | 1/4 | 0 | 2 | No | N/A | 0 | High |
| 11 | G0-A005 | G0-C02 | 3 | 2 | 2 | 2 | 0 | 1.50 | 0 | 2 | 1.00 | 1 | 2 | 2/5 | 0 | 2 | No | N/A | N/A | Medium |
| 12 | G0-A012 | G0-C04 | 4 | 3 | 3 | 0 | 2 | 2.00 | 0 | 0 | 0.00 | 4 | 2 | 5/5 | 0 | 0 | No | N/A | 3 | High |

## Completion check

- Answers scored: **12 / 12**
- Scored in frozen randomized order: **Yes**
- Every required primary subdimension recorded as a 0–4 integer: **Yes**
- Invalid-check counts, fabricated evidence, material business conflicts, candidate-valid-alternative, and applicable exploratory dimensions recorded: **Yes**
- HQI and DEE kept separate; no opaque combined decision score: **Yes**
