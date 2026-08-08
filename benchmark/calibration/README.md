# G0 Judge Calibration Set

**Classification:** Research / Engineering

**Status:** Initial Set — Not Scored

**Version:** 0.1

**Date:** 2026-08-08

**Related Protocol:** [protocol.md](../protocol.md)

**Related Rubric:** [scoring-rubric.md](../scoring-rubric.md)

**Related Judging Form:** [judging-form.md](../judging-form.md)

**Related Glossary:** [GLOSSARY.md](../../GLOSSARY.md)

> 本目录只用于 G0 评分者校准。案例和回答不得进入 G1、F1 或任何正式效应估计。

## Purpose

本组材料检验评分者能否稳定区分：

- 根因覆盖与一般相关性；
- 机制具体性与术语堆砌；
- 可证伪假设与确认性检查；
- 找对根因与证据路径效率；
- 诚实的不确定性与空洞免责声明；
- 已知答案与 Evidence 支持的合理替代解释；
- 使用业务先验与盲从错误先验。

## Package

- [manifest.md](./manifest.md)：12 个匿名 Answer 与 Case 的映射；
- [cases](./cases/)：4 个 Judge Packet，包含 Incident、Semantic Layer、Evidence 和 Business Reality；
- [answers](./answers/)：12 个待独立评分的匿名回答；
- [randomized-order.md](./randomized-order.md)：初次独立评分的固定展示顺序；
- [answer-key.md](./answer-key.md)：预期锚点与讨论说明，仅在两名评分者提交后打开。
- [calibration-record-template.md](./calibration-record-template.md)：角色、原始文件哈希、一致性、裁决与门禁记录模板。

## Coverage

| Case | 场景 | 主要校准点 | Answers |
|---|---|---|---|
| G0-C01 | 停车许可续期 | 强答案、部分机制、虚构 Evidence | A001–A003 |
| G0-C02 | 设备维护工单 | 正确排序、正确根因低排序、谨慎但低信息回答 | A004–A006 |
| G0-C03 | 企业学习实验室 | 高主指标但低开放性、流畅错误、合理替代解释 | A007–A009 |
| G0-C04 | 图书馆预约提醒 | 表示适配、盲从过期先验、正确根因但无效检查 | A010–A012 |

12 个回答的预期分布覆盖 RCC@3、HQI 四个子维度、DEE 两个子维度、BEI 和 OWR 的至少 3 个不同分值。实际覆盖以两名评分者的原始分数为准，不以 Answer Key 强行修正。

## Calibration Procedure

1. 使用 [randomized-order.md](./randomized-order.md) 中已经冻结的 A001–A012 展示顺序；
2. 每名评分者阅读对应 Case 和匿名 Answer；
3. 每个 Answer 独立复制并填写 [judging-form.md](../judging-form.md)；
4. 提交前不得查看另一名评分者记录或 [answer-key.md](./answer-key.md)；
5. 保存两份原始评分后，计算每个主要子维度的 ordinal Krippendorff’s alpha、完全一致率和相差不超过 1 分的一致率；
6. 按 Rubric 第 12 节处理重大分歧和合理替代解释；
7. 揭示 Answer Key，只用于讨论锚点和案例缺陷，不覆盖原始分数；
8. 如果修改 Rubric，必须创建一组未讨论的新 Holdout Answers 再校准，不能只重评本组并宣布通过。

## Completion Gate

- [x] 4 个非 Benchmark Judge Packets；
- [x] 12 个匿名 Calibration Answers；
- [x] 强、边界、错误、截断/低信息、错误先验和合理替代解释覆盖；
- [x] Answer Key 与裁决提示；
- [x] 可复现的盲评顺序与校准记录模板；
- [ ] 两名评分者独立评分；
- [ ] 一致性统计；
- [ ] 分歧讨论与 Rubric 修订记录；
- [ ] 未讨论 Holdout Set；
- [ ] 主要子维度达到 G1 所需一致性门槛。

## Restrictions

- 不得把 Answer Key 分数作为模型表现数据；
- 不得用本组材料设定 F1 的 MID 或非劣效界值；
- 不得根据评分者已看到的内容生成正式 Incident 的隐藏根因；
- 不得把校准一致性外推为正式评分一致性；
- 不得删除低一致性回答来提高 alpha，除非记录明确的材料缺陷并保留原始结果。
