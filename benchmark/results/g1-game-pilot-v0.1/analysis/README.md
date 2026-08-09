# G1 Analysis

**Status:** Complete — Exploratory Unblinded Analysis

分析在两名 Judge 评分、可靠性统计和必要裁决通过提交 `f1c61b6` 封存后运行。主要产物：

- [pilot-report.md](./pilot-report.md)：G1 揭盲结果、方差、量表缺陷和 F1 前置建议；
- [analyze-g1.mjs](./analyze-g1.mjs)：从冻结映射、Judge 评分和裁决结果复算全部汇总；
- [unblinding-log.md](../manifests/unblinding-log.md)：揭盲门禁和执行窗口。

报告覆盖：

- 每个 `Incident × condition` 的 replicate 均值和分布；
- RCC@3、HQI、DEE、BEI、OWR 的描述性差异；
- Incident 内与 Incident 间方差估计；
- 天花板/地板、格式违规、拒答和泄漏检查；
- 允许进入 F1 设计的修订建议。

G1 未运行确认性显著性推进规则，也不声明 ABU 已验证。当前结果未观察到 Full ABU 的探索性增量，并显示 Case 区分力与评分量表必须在 F1 前修订。
