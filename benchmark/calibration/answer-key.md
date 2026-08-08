# G0 Calibration Answer Key

**Classification:** Restricted Calibration Material

**Status:** Provisional Reference — Reveal Only After Independent Scores Are Saved

**Version:** 0.1

**Date:** 2026-08-08

**Related Rubric:** [scoring-rubric.md](../scoring-rubric.md)

**Related Manifest:** [manifest.md](./manifest.md)

> 本文件不是“标准答案数据库”。两名评分者提交并保存原始分数前不得查看。参考分只用于揭示后的锚点讨论、识别案例缺陷和决定是否需要修订 Rubric；不得覆盖原始分数，也不得参与一致性统计。

## 1. How to Use This Key

1. 先保存两名评分者的完整原始表和文件哈希；
2. 先计算各子维度的一致性，再打开本文件；
3. 对照参考锚点定位分歧来自回答、案例还是 Rubric；
4. `candidate-valid-alternative` 必须按 Rubric 第 12 节裁决，不得因与隐藏答案不同而自动记错；
5. 若讨论后修改 Rubric，原始分数不回写，改用未讨论的 Holdout Answers 重新校准。

缩写：`Rel` = Relevance，`Mech` = Mechanistic Specificity，`Test` = Testability，`Pri` = Prioritization，`FDE` = First Discriminating Evidence，`VCR` = Valid Check Ratio Score。

## 2. Provisional Reference Anchors

| Answer | RCC@3 | Rel | Mech | Test | Pri | FDE | VCR | BEI | OWR | 关键标记 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| G0-A001 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 完整强锚点 |
| G0-A002 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 4 | 2 | 部分机制；1/3 检查无效 |
| G0-A003 | 0 | 0 | 1 | 1 | 0 | 1 | 2 | 0 | 0 | 虚构 Evidence；1/3 检查无效 |
| G0-A004 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 完整强锚点 |
| G0-A005 | 3 | 2 | 2 | 3 | 0 | 0 | 2 | 2 | 2 | 正确根因排第 3；2/5 检查无效 |
| G0-A006 | 1 | 1 | 0 | 1 | 1 | 0 | 0 | 2 | 2 | 谨慎但低信息；检查均无区分价值 |
| G0-A007 | 4 | 3 | 4 | 4 | 3 | 4 | 4 | 2 | 0 | 主指标高；唯一性与 100% 置信度过度宣称 |
| G0-A008 | 0 | 0 | 1 | 1 | 0 | 1 | 2 | 0 | 0 | 流畅错误；虚构反馈和调查结果 |
| G0-A009 | 3→4* | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | `candidate-valid-alternative`；必须裁决 |
| G0-A010 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | Representation Fit = 4 |
| G0-A011 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 盲从过期先验；2/4 检查无效 |
| G0-A012 | 4 | 3 | 3 | 0 | 2 | 0 | 0 | 4 | 2 | 根因正确但证据路径失败 |

`*` G0-A009 在裁决前按“可接受根因未确认、强竞争解释排第 2”记录 RCC@3 = 3。若裁决者确认 authorization cache 是机制等价或独立可接受根因，则 RCC@3 = 4；无论裁决结果如何，原始标记必须保留。

参考分覆盖情况：RCC@3、四个 HQI 子维度、两个 DEE 子维度、BEI 和 OWR 均至少出现 3 个分值。实际校准是否满足分布要求，以两名评分者的原始评分分布为准。

## 3. Case Rationale

### G0-C01 — Parking Permit Renewal

- **A001:** 首位假设完整连接认证版本、Safari/iOS、跨站回跳和状态 Cookie；首项检查能在 Cookie 丢失与状态参数损坏之间区分，且给出正反更新规则。
- **A002:** “Safari 登录兼容性”只命中部分机制；前两项检查可执行但区分力有限，第三项重新计算已知总完成率，记为无效。通用的“也可能有其他原因”只达到 OWR = 2。
- **A003:** “最近用户访谈表明价格敏感上升”是虚构 Evidence；价格、流量和支付解释也与已知 Evidence 冲突。社区收入不在可用字段且没有获取路径，记为无效；新调查与折扣实验虽低效，仍可能更新价格假设，因此不自动记为无效。

### G0-C02 — Maintenance Work-order Delay

- **A004:** 完整连接目录重编码、缺失兼容映射、扫描拒绝、人工放行和 SLA；检查按映射、仓库版本、缓存和小范围修复逐步区分竞争解释。
- **A005:** 可接受根因出现在第 3，故 RCC@3 = 3；技术员负载和故障严重度已被 Evidence 明确削弱却仍排在前两位，Prioritization = 0。前两项检查重复已知稳定事实，2/5 无效，因此 FDE = 0、VCR = 2。
- **A006:** “运营延迟”“备件问题”只到症状或宽领域层级。第一项检查重复已给出的时长拆分，第二项无明确比较对象或更新规则；两项都不能有效区分主要解释。

### G0-C03 — Enterprise Learning Lab Activation

- **A007:** projection 机制与检查都很强，因此主要维度保持高分；但 Evidence 尚不能排除 authorization cache，答案却宣称“唯一”“完全排除”和“100%”，分别由 BEI 与 OWR 捕获，不应反向把根因命中记错。
- **A008:** 内容复杂度与稳定的讲座、课程和 Lab 请求 Evidence 冲突；“普遍反馈”和“满意度下降 18 个百分点”均为虚构 Evidence。新调查、内容实验和预备练习可执行但不优先，热图不在可用数据中且未提出采集路径，1/4 无效，对应 VCR = 2。
- **A009:** authorization cache 与现有 Evidence 相容，且回答提出能与 projection 延迟区分的时间戳、缓存清除和 TTL 检查。这是裁决流程的正例，不是“偏离隐藏答案”的错误答案。

### G0-C04 — Library Reservation Reminders

- **A010:** 首位假设完整连接本地时间、服务器时区、UTC 写入和晚发时长；时间映射/Process 视图优于单一生命周期 Transition，Representation Fit = 4。答案也正确降低了无版本历史笔记的权重。
- **A011:** 直接用过期先验覆盖稳定的提前期分布、迁移切点和时区集中 Evidence。第一项检查重复已知事实，第三项与主要解释缺少区分关系，2/4 无效；本案例未预标为 P 条件，因此不正式计算 Perturbation Detection，问题由 BEI 与 OWR 记录。
- **A012:** 首位根因正确，不能因后续检查差而降低 RCC@3；但五项检查分别依赖不可得主观动机、重复事实、无关容量、被动等待或供应商自证，FDE 与 VCR 均为 0。

## 4. Expected Discussion Hotspots

揭示后优先讨论以下问题，不要求评分者机械服从参考分：

1. **合理替代解释：** G0-A009 的缓存机制应如何进入可接受根因集合；
2. **少于 3 个假设：** G0-A007 不应仅因只列一个假设自动降 RCC，但遗漏竞争解释可影响 Relevance、Prioritization 和 OWR；
3. **正确性与效率分离：** G0-A012 应保持高 RCC，同时保持低 Testability、FDE 和 VCR；
4. **Evidence Integrity 与 Open-world Resilience 分离：** 事实无虚构但因果过度宣称时，BEI 可部分下降，OWR 可降至 0；
5. **错误假设下的有效检查：** 检查是否有效按可执行性和区分价值判断，不因最终假设错误而自动全部记为无效。

任何热点导致锚点修改时，都应在 [calibration-record-template.md](./calibration-record-template.md) 的 Rubric Revision Log 中记录。
