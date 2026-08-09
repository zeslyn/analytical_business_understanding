# G1 Scores

本目录保存两个独立 Judge 的完整原始评分、runtime sidecar、一致性报告和必要裁决。揭盲前不得写入条件代码或条件对比。

**Status:** Reliability Complete; 21 Blinded Answers Require Adjudication

- `G1-J01.jsonl`：45 个匿名 Answer 的第一份冻结顺序评分；
- `G1-J02.jsonl`：45 个匿名 Answer 的第二份冻结顺序评分；
- `G1-J01.runtime.md`、`G1-J02.runtime.md`：独立会话、输入交付、哈希和同源风险记录；
- `calculate-reliability.mjs`、`reliability-report.md`：可复算的一致性、分布与 Judge 偏移结果；
- `adjudication-triggers.json`：21 个需在揭盲前处理的匿名 Answer；
- 输入交付偏离与无分数重试见 [G1-D002](../G1-D002-judge-packet-truncation.md)。

只有两份原始评分及 runtime sidecar 提交后，才能计算一致性和裁决触发项；必要裁决完成前不得揭盲。
