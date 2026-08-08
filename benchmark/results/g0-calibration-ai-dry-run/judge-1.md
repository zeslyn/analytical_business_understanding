# G0 Calibration — Judge 1 Independent Raw Scores

## Run record

| Field | Value |
|---|---|
| Study ID | G0 calibration AI dry run |
| Judge ID | Judge 1 |
| Rubric | v0.1 / SHA-256 `68b162e65e692f24d50caf07e89acd0e0f718391914c16e64e19cd1111de9d9a` |
| Scoring order | Frozen order in `randomized-order.md` |
| Started at | 2026-08-08 CST |
| Submitted at | 2026-08-08 CST |
| Independence | Completed independently; no condition code, answer key, or other Judge output accessed |

The records below follow the frozen randomized order. HQI and DEE are reported only as their rubric-defined means; no combined decision score is constructed.

## 1. G0-A006 — G0-C02 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A006 / G0-C02 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 2 |
| Refusal / empty / truncated | Soft abstention; non-empty; not truncated |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | 运营流程变慢 | Symptom / overly broad | “运营流程变慢” merely restates delay. |
| 2 | 备件供应不足 | Incorrect | “备件供应不足” conflicts with the packet's sufficient physical inventory. |
| 3 | 技术员执行不稳定 | Incorrect / unsupported | “技术员执行不稳定” is not connected to the scan rejection and mapping evidence. |

**RCC@3: 0.** “可能是一般性的运营延迟或备件问题” contains no acceptable mapping/validation mechanism, and the shortage explanation conflicts with known inventory.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 1 | “运营流程变慢”“备件供应不足”“技术员执行不稳定” has a small amount of domain relevance, but misses the compressor/SKU/mapping pattern and includes an explicitly weakened shortage claim. |
| Mechanistic Specificity | 0 | “运营流程变慢” is a label, with no actor/state/transition linking missing compatibility mapping to rejected scans, manual release, and SLA delay. |
| Testability | 1 | “访谈几名技术员” is executable and could surface blockers, but neither check states discriminating outcomes and the first just repeats a supplied decomposition. |
| Prioritization | 0 | The ordered list gives no reason, and ranks “备件供应不足” despite contrary inventory evidence. |

**HQI: 0.50.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 拆解阶段时间 | Invalid | Repeats supplied evidence that intake/travel are stable while on-site/part wait rose. |
| 2 | 访谈技术员 | Valid | A realistic new acquisition path that could reveal which blocker is encountered, though weakly specified. |

**Invalid checks: 1/2.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 0 | “先把完成时间拆成……” repeats a fact already present in the packet and therefore cannot update the candidate ordering. |
| Valid Check Ratio Score | 1 | Of “拆成等待接单、路程、现场处理和等待部件” and “访谈几名技术员”, the former is invalid; 1/2 gives 50% (>40% and ≤60%). |

**DEE: 0.50.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 2 | “备件供应不足” materially misuses the inventory evidence, while the response otherwise frames claims as possibilities rather than fabricating measurements. |
| OWR | 2 | “信息不足”“需要更多数据” acknowledges uncertainty, but gives only a generic disclaimer and no specific overturn condition. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | Missing | No numerical or categorical confidence supplied. |

- Fabricated evidence: 0
- Material business conflicts: 1
- Unsupported material claims: 2
- Candidate-valid-alternative: No
- Flag details: Material evidence conflict; the invalid classification of the first check affects DEE.
- One-sentence judgment: Cautious but mostly generic abstention that overlooks the packet's direct compatibility-mapping evidence.

## 2. G0-A007 — G0-C03 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A007 / G0-C03 |
| Required sections present | Yes |
| Hypotheses counted | 1 |
| Checks counted | 3 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No; the answer itself suppresses a still-open authorization-layer alternative |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | Projection 延迟应用且提前成功 | Acceptable cause | “仍按小时批量应用，却在写入队列时提前报告成功” matches the mechanism. |
| 2 | — | Missing | No second hypothesis. |
| 3 | — | Missing | No third hypothesis. |

**RCC@3: 4.** The first hypothesis is mechanism-equivalent to the acceptable cause: “延迟应用并过早标记成功”.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 3 | “造成新成员在 45–60 分钟内没有 Lab 权限” directly explains all key observations, but “其他原因已被完全排除” omits the important authorization-cache competitor. |
| Mechanistic Specificity | 4 | “按小时批量应用，却在写入队列时提前报告成功” connects queued write, premature success, hourly application, new member, and the 45–60 minute denial window. |
| Testability | 4 | “如果 projection 已应用但仍拒绝，则需要检查 authorization 层” supplies executable timestamp alignment and explicit outcomes that change the mechanism. |
| Prioritization | 2 | A plausible root is ranked first, but “唯一可能的根因” replaces comparison of candidates, impact, and cost with unsupported certainty. |

**HQI: 3.25.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 对齐目录、projection 与授权时间 | Valid | Separates projection lag from downstream authorization persistence. |
| 2 | 提高 projection 频率 | Valid | A scoped intervention whose success/failure updates the projection mechanism. |
| 3 | 比较新旧目录版本 lag | Valid | Tests whether propagation lag follows the migration version. |

**Invalid checks: 0/3.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 4 | “projection 已应用但仍拒绝，则需要检查 authorization 层” is an executable, high-value first check with both outcome updates stated. |
| Valid Check Ratio Score | 4 | “对齐源目录更新时间、projection 入队/应用时间”和另外两项检查均可执行且会更新判断；0/3 invalid (0%). |

**DEE: 4.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 2 | The core facts are traceable, but “日志已经足够证明…唯一原因” and “关闭其他根因调查” are multiple material unsupported claims that affect action. |
| OWR | 0 | “其他原因已被完全排除”“置信度 100%”“关闭其他根因调查” explicitly treats the current explanation as closed despite a known unresolved layer. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | 100% | Explicit. |

- Fabricated evidence: 0
- Material business conflicts: 0
- Unsupported material claims: 3
- Candidate-valid-alternative: No
- Flag details: Open-world closure and overconfident operational recommendation.
- One-sentence judgment: Mechanistically correct and very testable, but materially overclaims uniqueness and shuts down a live competing mechanism.

## 3. G0-A010 — G0-C04 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A010 / G0-C04 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 4 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | 本地时间到 UTC 调度错误 | Acceptable cause | “把用户本地 `08:00` 当成服务器时区后再转换为 UTC”. |
| 2 | DST 偏移表未更新 | Partial / close alternative | Could cause a smaller time error; answer notes the mismatch to 5–8 hours. |
| 3 | 美洲供应商积压 | Plausible competing alternative | Predicts queue delay rather than erroneous scheduled time. |

**RCC@3: 4.** “本地 `08:00` 当成服务器时区” is the acceptable mechanism and is correctly ranked first.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 4 | “本地时间到 UTC”“夏令时偏移表”“供应商…积压” all directly address migration-timed late reminders and have distinct time signatures. |
| Mechanistic Specificity | 4 | “本地 `08:00`…服务器时区…写入 UTC…晚 5–8 小时” connects the clocks, transformation, affected users, and observations. |
| Testability | 4 | “若错误量等于…时区差…若固定约 1 小时，转向 DST 表” gives executable evidence and explicit positive/negative updates. |
| Prioritization | 4 | “一致”“难以单独解释 5–8 小时”“应在队列延迟…留下证据” ranks candidates by timing, magnitude, competing predictions, and efficient checks. |

**HQI: 4.00.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 对齐时区、期望时间、表达式、UTC、实发 | Valid | Separates full time-zone misuse from DST error by error magnitude. |
| 2 | 新旧调度器多时区测试 | Valid | Locates the conversion step and version regression. |
| 3 | 分离 scheduled-at 与 vendor sent | Valid | Distinguishes scheduler error from vendor backlog. |
| 4 | 小范围修正并监控 | Valid | Validates the full reminder-to-attendance chain while holding lead time stable. |

**Invalid checks: 0/4.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 4 | “错误量等于服务器与用户时区差…固定约 1 小时” is the highest-value low-cost log comparison and states divergent updates. |
| Valid Check Ratio Score | 4 | Checks from “对同一预约比较…” through “小范围修正时区转换” are all executable and discriminating; 0/4 invalid (0%). |

**DEE: 4.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 4 | “历史…笔记缺少版本和适用范围，且与当前稳定的提前期分布冲突” distinguishes packet facts, inference, and uncertainty with no business conflict. |
| OWR | 4 | “仍需区分完整时区误用、DST 表和供应商队列” gives explicit competitors and overturning evidence rather than closing the model. |
| Representation Fit | 4 | “不宜只用单一生命周期 Transition…时间映射/Process 视图” correctly preserves the multiple clocks and mapping steps. |
| Perturbation Detection and Recovery | 4 | “笔记缺少版本和适用范围，且与当前稳定的提前期分布冲突” identifies and downweights the bad prior, then replaces it with testable time-zone mechanisms. |
| Stated Confidence | High | Explicit categorical confidence. |

- Fabricated evidence: 0
- Material business conflicts: 0
- Unsupported material claims: 0
- Candidate-valid-alternative: No
- Flag details: None.
- One-sentence judgment: Complete, discriminating, open-world analysis that correctly handles both the temporal representation and the misleading prior.

## 4. G0-A008 — G0-C03 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A008 / G0-C03 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 4 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | 实验说明复杂 | Incorrect | Does not explain stable launch requests and the drop at access grant. |
| 2 | 讲座与实验不一致 | Incorrect | Lecture completion is stable; no entitlement mechanism. |
| 3 | 缺少练习 | Incorrect | Does not explain `group_not_propagated` or version-specific authorization denial. |

**RCC@3: 0.** “课程内容变难、学员失去信心” has no acceptable root and conflicts with the observed failure at `lab_access_granted`.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 0 | “实验说明过于复杂” ignores the supplied access-denial evidence and moves the explanation to content despite stable lecture and launch behavior. |
| Mechanistic Specificity | 0 | “实验说明过于复杂”“内容不一致”“缺少足够练习” are content labels and never connect directory, entitlement projection, authorization, and group propagation. |
| Testability | 1 | “重写实验说明并做 A/B 测试” is executable and could test its own weak content claim, but the checks largely cannot distinguish the incident's technical candidates. |
| Prioritization | 0 | The answer says “优先重写课程内容” even though the packet localizes the drop before content access and shows propagation denials. |

**HQI: 0.25.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 调查未完成人员 | Valid | New survey path could update the content hypotheses, although it ignores stronger system evidence. |
| 2 | 页面点击热图 | Invalid | Heatmap data is not available and no realistic acquisition plan is given. |
| 3 | 重写说明 A/B | Valid | An intervention that can lower the complex-instructions hypothesis if no effect appears. |
| 4 | 增加练习实验 | Valid | Tests whether preparation changes completion, though downstream and costly. |

**Invalid checks: 1/4.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 1 | “询问最难理解的步骤” may be useful for content diagnosis but barely changes the relative credibility of the authorization/projection mechanisms. |
| Valid Check Ratio Score | 2 | One of four checks is invalid, so the invalid ratio is 25% (>20% and ≤40%). |

**DEE: 1.50.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 0 | The core conclusion relies on fabricated “普遍反馈” and “满意度调查也下降了 18 个百分点”, and reinterprets a technical denial as learner behavior without evidence. |
| OWR | 1 | “可能是…权限保护，不是技术故障” briefly entertains the conflicting signal but bends it into the preferred story and supplies no overturn condition. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | High | Explicit categorical confidence. |

- Fabricated evidence: 2
- Material business conflicts: 1
- Unsupported material claims: 1
- Candidate-valid-alternative: No
- Flag details: Fabricated evidence and material misbinding of `group_not_propagated`.
- One-sentence judgment: A fabricated, incident-irrelevant content narrative that directs action away from the observed authorization failure.

## 5. G0-A002 — G0-C01 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A002 / G0-C01 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 3 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | Safari 与新登录流程不兼容 | Partial mechanism | Correct browser/version area, but no cross-site state/Cookie mechanism. |
| 2 | 移动端登录 Bug | Overly broad / partial | Does not explain Safari desktop or the new missing-state code. |
| 3 | 新认证服务不稳定 | Overly broad | No browser-specific mechanism or prediction. |

**RCC@3: 2.** “认证升级与浏览器兼容性不好” reaches the correct adjacent mechanism but omits the decisive cross-site Cookie/state connection.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 3 | “Safari 对新登录流程不兼容” directly addresses the affected segment, but the other two are broad and do not cover the key `challenge_state_missing` alternatives. |
| Mechanistic Specificity | 2 | The answer identifies browser, mobile device, login process, and new service version, but does not specify what state transition fails or why. |
| Testability | 2 | Safari/version breakdown and log inspection are executable, but “判断错误发生在哪一步” does not state outcome-dependent updates and the third check is redundant. |
| Prioritization | 2 | The ordering is directionally reasonable, but provides no explicit comparison of likelihood, impact, information value, or cost. |

**HQI: 2.25.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | Safari 小版本与设备分层 | Valid | Narrows affected combinations, though not the exact state mechanism. |
| 2 | 查看 missing-state 前后日志 | Valid | Can locate the failing step and update compatibility mechanisms. |
| 3 | 重算全站完成率 | Invalid | Repeats an incident observation and does not change relative hypotheses. |

**Invalid checks: 1/3.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 2 | “按 Safari 小版本和设备类型拆分” can narrow scope but does not clearly distinguish the top two overlapping hypotheses. |
| Valid Check Ratio Score | 2 | One of three checks is invalid, so the invalid ratio is 33.3% (>20% and ≤40%). |

**DEE: 2.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 4 | “大概率”“可能”“暂时不知道” correctly marks inference and uncertainty; no key claim contradicts or invents packet evidence. |
| OWR | 2 | “也可能有其他原因” acknowledges openness, but does not state what specific evidence would overturn the Safari compatibility view. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | Medium | Explicit categorical confidence. |

- Fabricated evidence: 0
- Material business conflicts: 0
- Unsupported material claims: 0
- Candidate-valid-alternative: No
- Flag details: None.
- One-sentence judgment: Directionally useful partial localization, but it stops before the state/Cookie mechanism and includes a redundant metric check.

## 6. G0-A009 — G0-C03 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A009 / G0-C03 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 4 |
| Refusal / empty / truncated | None |
| Potential valid alternative | Yes — authorization cache invalidation / TTL; requires adjudication |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | Authorization cache 未失效 | Candidate-valid-alternative | Packet evidence permits a downstream cache mechanism and does not fully distinguish it. |
| 2 | Projection 延迟且过早成功 | Acceptable cause | Exact supplied mechanism, ranked second. |
| 3 | 组标识映射不一致 | Plausible competing alternative | Predicts persistent rather than one-hour recovery. |

**RCC@3: 4 (provisional pending alternative adjudication).** “projection 已应用而缓存仍命中旧值” is a mechanistically specific, evidence-compatible first-ranked alternative, while the known acceptable cause is also covered at rank 2.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 4 | “Authorization cache 未…失效”“projection 按小时应用”“组标识映射不一致” all explain the directory-to-authorization discrepancy and make distinct duration predictions. |
| Mechanistic Specificity | 4 | “源目录已更新、授权仍返回旧权限以及近似固定延迟” connects the layers, object state, cache behavior, and observation without claiming proof. |
| Testability | 4 | “若 projection 已应用而缓存仍命中旧值…若授权在 projection 应用后立即恢复…” gives executable, bidirectional differentiating evidence. |
| Prioritization | 4 | “符合固定缓存 TTL” ranks by the fixed-delay pattern, “保留 projection 延迟为强竞争解释”, and chooses safe timestamp/eviction checks with high information value. |

**HQI: 4.00.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 对齐源目录、projection、cache 与授权 | Valid | Directly distinguishes the two leading mechanisms. |
| 2 | 安全 cache eviction | Valid | Manipulates cache without changing projection and has a clear counterfactual. |
| 3 | TTL 边界与批处理时点 | Valid | Competing temporal signatures update rank 1 versus rank 2. |
| 4 | 检查组标识映射 | Valid | Rules in/out the persistent mapping alternative. |

**Invalid checks: 0/4.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 4 | The first check aligns every available layer and explicitly distinguishes “缓存仍命中旧值” from recovery immediately after projection. |
| Valid Check Ratio Score | 4 | “对齐…cache key/命中”, “安全的 cache eviction”, TTL comparison, and mapping check all update a major hypothesis; 0/4 invalid (0%). |

**DEE: 4.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 4 | “符合固定缓存 TTL” is clearly framed as an inference; all key facts and proposed fields trace to the packet and no rule is contradicted. |
| OWR | 4 | “现有 Business Reality 可能没有列全…不应把现有答案集当作完备真相” is paired with concrete falsifiers for both cache and projection. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | Medium-high | Explicit categorical confidence. |

- Fabricated evidence: 0
- Material business conflicts: 0
- Unsupported material claims: 0
- Candidate-valid-alternative: Yes — authorization cache mechanism
- Flag details: Candidate-valid-alternative and root-cause-equivalence adjudication required; RCC@3=4 is provisional on accepting the evidence-supported cache mechanism.
- One-sentence judgment: High-quality open-world diagnosis that makes the unresolved cache-versus-projection distinction directly testable.

## 7. G0-A003 — G0-C01 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A003 / G0-C01 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 3 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | 许可费上涨 | Incorrect | Price is explicitly stable. |
| 2 | 活动结束导致流量质量下降 | Incorrect | Traffic-source and user composition are stable. |
| 3 | 更便宜的竞争产品 | Unsupported / incorrect | Does not explain localization to identity verification and Safari/iOS. |

**RCC@3: 0.** “许可费上涨”和“流量质量下降” directly contradict supplied evidence; no top-three hypothesis reaches the authentication mechanism.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 0 | “许可费上涨”“流量质量下降”“更便宜的停车产品” all ignore that the entire drop occurs at identity verification and only on Safari/iOS. |
| Mechanistic Specificity | 1 | “许可费上涨降低支付意愿” at least states a causal chain, but it predicts a payment/demand pattern contradicted by the incident and does not generate the observed browser-specific failure. |
| Testability | 2 | Survey and discount checks are executable and could test price sensitivity, but they do not distinguish the supplied technical candidates and expected outcomes are under-specified. |
| Prioritization | 0 | Ranking price and traffic first “不影响价格因素是主要根因” is directly at odds with stable price/composition and stage-localized evidence. |

**HQI: 0.75.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 按社区收入比较 | Invalid | Community income is not available, no acquisition path is proposed, and it cannot distinguish the authentication candidates. |
| 2 | 未续期用户问卷 | Valid | Explicit new survey path that can lower/raise the answer's price hypothesis. |
| 3 | 折扣券实验 | Valid | A causal test of price sensitivity, although poorly matched to the localized failure. |

**Invalid checks: 1/3.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 0 | “比较高收入和低收入社区” needs unavailable data and does not discriminate the leading evidence-supported explanations. |
| Valid Check Ratio Score | 2 | One of three checks is invalid, so the invalid ratio is 33.3% (>20% and ≤40%). |

**DEE: 1.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 0 | “最近的用户访谈” is fabricated evidence, while “许可费上涨” and “流量质量下降” directly contradict stable price and composition. |
| OWR | 0 | “认证错误码可能只是…技术噪声，不影响价格因素” dismisses explicit conflicting evidence and keeps a closed high-confidence conclusion. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | High | Explicit categorical confidence. |

- Fabricated evidence: 1
- Material business conflicts: 2
- Unsupported material claims: 1
- Candidate-valid-alternative: No
- Flag details: Fabricated interview evidence; multiple direct packet conflicts; harmful immediate pricing recommendation.
- One-sentence judgment: Evidence-conflicting demand narrative built around a fabricated interview and unrelated to the localized authentication failure.

## 8. G0-A001 — G0-C01 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A001 / G0-C01 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 4 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | SameSite Cookie 不兼容 | Acceptable cause | Exact cross-site state-loss mechanism. |
| 2 | 回跳 URL / 状态参数编码 | Plausible competitor | Same failure stage with different request evidence. |
| 3 | 移动会话状态缓存不兼容 | Plausible competitor | Explains device/version pattern less completely. |

**RCC@3: 4.** “Safari 17 和 iOS WebView 在跨站认证回跳时没有带回状态” is mechanism-equivalent to the acceptable root and ranks first.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 4 | “SameSite Cookie”“状态参数被…错误编码”“状态缓存…不兼容” all explain the version/browser/verification-stage pattern and cover the important state-carriage alternatives. |
| Mechanistic Specificity | 4 | “SameSite Cookie…跨站认证回跳…`identity_verified` 前失败” connects system change, browser behavior, state, transition, and observation. |
| Testability | 4 | “Cookie 存在但状态参数不可解析，转向假设 2” states executable evidence and explicit outcome-dependent ranking changes. |
| Prioritization | 4 | “同时解释版本切点、浏览器集中和新增 `challenge_state_missing`” ranks by evidence fit, while “对 Safari 桌面端的解释较弱” explicitly lowers rank 3 before low-cost log checks. |

**HQI: 4.00.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 比较 missing-state 与 Cookie | Valid | Directly separates missing Cookie from malformed state parameter. |
| 2 | 新旧版本 Safari 复现 | Valid | Establishes browser/version regression and records both competing artifacts. |
| 3 | Safari 桌面与 WebView 对照 | Valid | Updates browser-policy versus embedded-session explanations. |
| 4 | SameSite 灰度修复 | Valid | Causal intervention with other-browser guardrail. |

**Invalid checks: 0/4.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 4 | “缺少挑战 Cookie…Cookie 存在但状态参数不可解析” is executable from available logs and cleanly distinguishes the top two. |
| Valid Check Ratio Score | 4 | Checks beginning “按认证版本和浏览器比较” and ending with the “灰度版本” all change a major hypothesis; 0/4 invalid (0%). |

**DEE: 4.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 4 | “当前…置信度为高，但需要…验证” cleanly separates strong inference from causal confirmation and uses only available fields. |
| OWR | 4 | “如果修正 Cookie 后没有恢复，应重新开放…” specifies a clear overturn condition and named alternatives. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | High | Explicit categorical confidence. |

- Fabricated evidence: 0
- Material business conflicts: 0
- Unsupported material claims: 0
- Candidate-valid-alternative: No
- Flag details: None.
- One-sentence judgment: Complete mechanism, efficient discrimination, and appropriately conditional high confidence.

## 9. G0-A004 — G0-C02 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A004 / G0-C02 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 4 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | 兼容映射迁移不完整 | Acceptable cause | Exact mapping omission mechanism. |
| 2 | 仓库主数据版本不同步 | Plausible competitor | Predicts warehouse rather than model concentration. |
| 3 | 客户端缓存旧目录 | Plausible competitor | Predicts refresh-sensitive scan rejection. |

**RCC@3: 4.** “遗漏…兼容映射，导致实物有库存但扫描被拒…等待人工放行” is the complete acceptable mechanism and is ranked first.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 4 | “兼容映射迁移不完整”“主数据版本不同步”“客户端缓存旧目录” all directly explain the cutover, rejected scans, and increased waiting with separable patterns. |
| Mechanistic Specificity | 4 | “实物有库存但扫描被拒，技术员等待人工放行，最终推高…时间” connects incomplete mapping, available part, rejection, manual release, stage times, and SLA failure. |
| Testability | 4 | “映射存在但仓库版本落后，转向假设 2” provides executable joins and explicit outcomes across each competitor. |
| Prioritization | 4 | “与上线时间、设备家族、扫描拒绝和库存充足同时吻合” justifies rank 1, while ranks 2–3 include their weaker predictions and checks escalate progressively. |

**HQI: 4.00.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 拒绝扫描连接映射状态 | Valid | Separates missing central mapping from warehouse version lag. |
| 2 | 仓库版本/同步对照 | Valid | Tests warehouse-local versus central mechanism. |
| 3 | 客户端刷新前后对照 | Valid | Directly tests cache alternative. |
| 4 | 小范围补映射 | Valid | Validates the full rejection-to-wait-to-SLA chain. |

**Invalid checks: 0/4.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 4 | “拒绝集中在缺失映射…若映射存在但仓库版本落后” is available, low-cost, and explicitly distinguishes the top two. |
| Valid Check Ratio Score | 4 | “连接到设备型号…兼容映射状态”, warehouse comparison, refresh test, and scoped mapping repair all update candidates; 0/4 invalid (0%). |

**DEE: 4.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 4 | The answer traces all facts to supplied evidence and says “不视为已经因果确认”, with no fabricated evidence or business conflict. |
| OWR | 4 | “若映射补齐不改善等待时间，应重新检查…其他瓶颈” gives a concrete falsifier and recovery path. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | High | Explicit categorical confidence. |

- Fabricated evidence: 0
- Material business conflicts: 0
- Unsupported material claims: 0
- Candidate-valid-alternative: No
- Flag details: None.
- One-sentence judgment: Full causal chain with well-ranked alternatives and efficient, outcome-sensitive tests.

## 10. G0-A011 — G0-C04 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A011 / G0-C04 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 4 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | 提前预约天数过长 | Incorrect | Lead-time distribution is explicitly stable. |
| 2 | 用户临时改变计划 | Unsupported / overly broad | Does not explain time-zone concentration or late reminders. |
| 3 | 房间需求下降 | Incorrect | Reservation volume and room supply are stable. |

**RCC@3: 0.** “仍应归因于用户提前锁定房间后改变计划” contains no acceptable scheduling mechanism and relies on a factor whose distribution is stable.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 0 | “提前预约天数过长”“用户临时改变计划”“房间需求下降” ignore the migration/time-zone/5–8-hour pattern and include stable lead time and demand as causes. |
| Mechanistic Specificity | 1 | “提前锁定房间后改变计划” gives a minimal behavioral chain, but it cannot predict the affected time zones or observed wall-clock delay. |
| Testability | 2 | Lead-time comparison, survey, and policy intervention are executable, but do not distinguish the evidence-supported scheduler/DST candidates and provide no outcome updates. |
| Prioritization | 0 | “提醒发送时间变化…不需要优先调查” explicitly ranks away from the strongest localized evidence and treats an unscoped note as dispositive. |

**HQI: 0.75.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 按提前期比较未到场率 | Valid | Can test whether lead time still stratifies no-show risk, though it does not distinguish top technical candidates. |
| 2 | 调查未到场用户 | Valid | A realistic new acquisition path for the broad plan-change hypothesis. |
| 3 | 比较房间取消率 | Invalid | Cancellation is already stable and room-level cancellation does not update the ranked explanations. |
| 4 | 缩短最大提前期 | Valid | A causal policy test of the first hypothesis, though high-cost and poorly justified. |

**Invalid checks: 1/4.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 2 | “按提前预约天数比较未到场率” can narrow the lead-time story, but cannot distinguish the two leading evidence-supported scheduling mechanisms. |
| Valid Check Ratio Score | 2 | One of four checks is invalid, so the invalid ratio is 25% (>20% and ≤40%). |

**DEE: 2.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 0 | “本次上升仍应归因于…提前锁定” conflicts with stable lead-time distribution, and “提醒发送时间变化与到场没有业务因果关系” dismisses the supplied geographic timing evidence. |
| OWR | 0 | “运营笔记已经总结了稳定规律” treats an unversioned, unscoped note as complete truth and prohibits investigation of contradictory evidence. |
| Representation Fit | 0 | “仍应归因于用户提前锁定房间后改变计划” reduces the incident to one behavioral factor and loses scheduler, user time zone, UTC storage, DST, and actual-send sequence. |
| Perturbation Detection and Recovery | 0 | “运营笔记已经总结了稳定规律” fully accepts the conflicting prior, does not lower its weight, and proposes no recovery check for reminder timing. |
| Stated Confidence | High | Explicit categorical confidence. |

- Fabricated evidence: 0
- Material business conflicts: 2
- Unsupported material claims: 1
- Candidate-valid-alternative: No
- Flag details: Material prior/evidence conflict; complete perturbation-detection failure; harmful lead-time policy recommendation.
- One-sentence judgment: The response is captured by the stale prior and actively discards the strongest migration and time-zone evidence.

## 11. G0-A005 — G0-C02 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A005 / G0-C02 |
| Required sections present | Yes |
| Hypotheses counted | 4 (only ranks 1–3 used for RCC/HQI) |
| Checks counted | 5 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | 技术员排班不足 | Incorrect | Technician count and schedules are stable. |
| 2 | 压缩机故障更严重 | Incorrect | Severity composition is stable. |
| 3 | 目录重编码遗漏兼容映射 | Acceptable cause | Correctly connects usable part to scan rejection. |

**RCC@3: 3.** “目录重编码遗漏兼容映射，导致可用备件被扫描拒绝” is the acceptable cause, but it is ranked third behind two explicitly weakened alternatives.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 2 | The third hypothesis directly explains the incident, but the first two ignore stable staffing and severity and therefore miss the key evidence ordering. |
| Mechanistic Specificity | 3 | “目录重编码遗漏兼容映射，导致可用备件被扫描拒绝” states the exact core mechanism, but omits the manual-release-to-stage-time link and is diluted by two wrong top ranks. |
| Testability | 3 | “回滚目录或补齐映射，观察人工放行等待与 SLA 是否恢复” is strong and executable, but the answer mostly omits explicit negative-result updates and spends its first two checks on known facts. |
| Prioritization | 0 | “先从技术员负载开始” directly conflicts with stable technician staffing, while the evidence-supported mapping mechanism is placed third. |

**HQI: 2.00.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 检查人员/排班/负载 | Invalid | Repeats supplied stable staffing, schedule, and workload evidence. |
| 2 | 比较严重度/故障码 | Invalid | Repeats supplied stable severity composition. |
| 3 | 分层扫描拒绝 | Valid | Narrows the catalog/version/model/warehouse mechanism. |
| 4 | 核对库存与映射 | Valid | Distinguishes real shortage from false compatibility rejection. |
| 5 | 回滚/补映射并监控 | Valid | Tests the full causal effect on manual wait and SLA. |

**Invalid checks: 2/5.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 0 | “检查技术员人数、排班和人均工单量是否变化” merely rechecks an explicitly stable fact. |
| Valid Check Ratio Score | 2 | Two of five checks are invalid, so the invalid ratio is 40% (>20% and ≤40%). |

**DEE: 1.00.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 2 | “技术员排班不足” and “故障更严重” materially misuse stable staffing and severity evidence, although the mapping hypothesis and later checks are factually grounded. |
| OWR | 2 | “没有足够证据确定哪一个最重要” acknowledges uncertainty, but gives no clear falsification/update rule and fails to react correctly to evidence already in the packet. |
| Representation Fit | N/A | Case not marked as requiring an alternative representation. |
| Perturbation Detection and Recovery | N/A | No perturbed-prior condition in this packet. |
| Stated Confidence | Medium | Explicit categorical confidence. |

- Fabricated evidence: 0
- Material business conflicts: 2
- Unsupported material claims: 0
- Candidate-valid-alternative: No
- Flag details: Evidence-conflicting ranking; two redundant checks materially lower DEE.
- One-sentence judgment: It contains the exact root and useful later tests, but places them behind two alternatives already contradicted by the packet.

## 12. G0-A012 — G0-C04 v0.1

### Structure check

| Field | Value |
|---|---|
| Answer ID / Case ID | G0-A012 / G0-C04 |
| Required sections present | Yes |
| Hypotheses counted | 3 |
| Checks counted | 5 |
| Refusal / empty / truncated | None |
| Potential valid alternative | No |

### Root-cause mapping and RCC@3

| Rank | Hypothesis summary | Mapping | Evidence |
|---:|---|---|---|
| 1 | 本地时间到 UTC 转换错误 | Acceptable cause | Correct time-zone conversion mechanism. |
| 2 | DST 切换错误 | Partial / mechanism-equivalent possibility | Could cause location-specific late reminders. |
| 3 | 提醒迁移造成延迟 | Partial / broad | Correct change area but not a discriminating mechanism. |

**RCC@3: 4.** “提醒服务错误处理用户时区，使美洲用户收到提醒过晚” is an acceptable mechanism and is ranked first.

### HQI

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| Relevance | 3 | “本地时间到 UTC”“夏令时切换”“迁移造成延迟” are all incident-relevant, but substantially overlap and omit a distinct queue-delay competitor and the 5–8-hour comparison. |
| Mechanistic Specificity | 3 | “错误处理用户时区，使美洲用户收到提醒过晚” links actor, transformation, segment, and observation, but does not specify the server-time/UTC step or distinguish DST. |
| Testability | 1 | The answer proposes activity, but “访谈所有”“重新计算”“等待”“以其回答作为确认” gives little executable, discriminating technical evidence and no result-dependent ranking updates. |
| Prioritization | 2 | The correct mechanism is first, but no evidence-based comparison or check cost is supplied and the three hypotheses overlap. |

**HQI: 2.25.**

### DEE and check validity

| Rank | Check summary | Validity | Reason / discriminating value |
|---:|---|---|---|
| 1 | 访谈所有未打开用户 | Invalid | Exhaustive interviews are not realistic and cannot distinguish time-zone conversion, DST, and service delay. |
| 2 | 重算总体未到场率 | Invalid | Repeats the incident observation. |
| 3 | 检查房间容量 | Invalid | Room supply is already stable and unrelated to the ranked reminder mechanisms. |
| 4 | 等待下月数据 | Invalid | Passive waiting supplies no mechanism-specific prediction or comparison. |
| 5 | 以供应商回答确认 | Invalid | A vendor assertion is not independent evidence and the question does not specify observable falsifiers. |

**Invalid checks: 5/5.**

| Dimension | Score | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | 1 | “访谈所有未打开提醒的用户” might weakly address whether late reminders mattered, but is unrealistic and cannot change the relative credibility of the top technical candidates. |
| Valid Check Ratio Score | 0 | “访谈所有”“重新计算”“检查房间容量”“等待下个月”“以其回答作为确认” are all invalid; 5/5 gives 100%. |

**DEE: 0.50.**

### Guardrails, exploratory dimensions, and flags

| Dimension | Score / value | Quoted evidence and reason |
|---|---:|---|
| BEI | 3 | “根因是…” is grounded in packet evidence and has no fabricated fact or business conflict, but “目前没有必要展开” overstates closure despite lacking valid confirmation checks. |
| OWR | 1 | “可能还有其他原因，但目前没有必要展开” contains minimal openness but no overturn condition and explicitly declines further alternative analysis. |
| Representation Fit | 1 | “错误处理用户时区” notices a key representation issue, but the checks do not connect local time, scheduler interpretation, UTC storage, and actual send time. |
| Perturbation Detection and Recovery | 3 | “根因是提醒服务错误处理用户时区” rejects the misleading lead-time direction and recovers the evidence-supported mechanism, but never explicitly identifies the prior conflict or proposes a valid recovery test. |
| Stated Confidence | High | Explicit categorical confidence. |

- Fabricated evidence: 0
- Material business conflicts: 0
- Unsupported material claims: 1
- Candidate-valid-alternative: No
- Flag details: All checks invalid; invalid-check classification is material to DEE.
- One-sentence judgment: The diagnosis is correct, but the proposed evidence plan is almost entirely non-discriminating or redundant.

## Summary table (12 answers, frozen order)

All primary and guardrail subscores below are single integers on the 0–4 scale. RF and PDR are exploratory; `N/A` means not applicable. HQI and DEE are rubric-defined means only.

| # | Answer | Case | RCC@3 | Rel | Mech | Test | Prior | HQI | FDE | VCR | DEE | BEI | OWR | RF | PDR | Invalid | Fab. | Conflicts | CVA |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | G0-A006 | G0-C02 | 0 | 1 | 0 | 1 | 0 | 0.50 | 0 | 1 | 0.50 | 2 | 2 | N/A | N/A | 1/2 | 0 | 1 | No |
| 2 | G0-A007 | G0-C03 | 4 | 3 | 4 | 4 | 2 | 3.25 | 4 | 4 | 4.00 | 2 | 0 | N/A | N/A | 0/3 | 0 | 0 | No |
| 3 | G0-A010 | G0-C04 | 4 | 4 | 4 | 4 | 4 | 4.00 | 4 | 4 | 4.00 | 4 | 4 | 4 | 4 | 0/4 | 0 | 0 | No |
| 4 | G0-A008 | G0-C03 | 0 | 0 | 0 | 1 | 0 | 0.25 | 1 | 2 | 1.50 | 0 | 1 | N/A | N/A | 1/4 | 2 | 1 | No |
| 5 | G0-A002 | G0-C01 | 2 | 3 | 2 | 2 | 2 | 2.25 | 2 | 2 | 2.00 | 4 | 2 | N/A | N/A | 1/3 | 0 | 0 | No |
| 6 | G0-A009 | G0-C03 | 4 | 4 | 4 | 4 | 4 | 4.00 | 4 | 4 | 4.00 | 4 | 4 | N/A | N/A | 0/4 | 0 | 0 | Yes |
| 7 | G0-A003 | G0-C01 | 0 | 0 | 1 | 2 | 0 | 0.75 | 0 | 2 | 1.00 | 0 | 0 | N/A | N/A | 1/3 | 1 | 2 | No |
| 8 | G0-A001 | G0-C01 | 4 | 4 | 4 | 4 | 4 | 4.00 | 4 | 4 | 4.00 | 4 | 4 | N/A | N/A | 0/4 | 0 | 0 | No |
| 9 | G0-A004 | G0-C02 | 4 | 4 | 4 | 4 | 4 | 4.00 | 4 | 4 | 4.00 | 4 | 4 | N/A | N/A | 0/4 | 0 | 0 | No |
| 10 | G0-A011 | G0-C04 | 0 | 0 | 1 | 2 | 0 | 0.75 | 2 | 2 | 2.00 | 0 | 0 | 0 | 0 | 1/4 | 0 | 2 | No |
| 11 | G0-A005 | G0-C02 | 3 | 2 | 3 | 3 | 0 | 2.00 | 0 | 2 | 1.00 | 2 | 2 | N/A | N/A | 2/5 | 0 | 2 | No |
| 12 | G0-A012 | G0-C04 | 4 | 3 | 3 | 1 | 2 | 2.25 | 1 | 0 | 0.50 | 3 | 1 | 1 | 3 | 5/5 | 0 | 0 | No |

Judge 1 confirms that all 12 Answer records were scored independently in frozen order and that the answer key and other Judge outputs were not accessed.
