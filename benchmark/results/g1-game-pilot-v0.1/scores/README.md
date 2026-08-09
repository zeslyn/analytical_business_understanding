# G1 Scores

本目录保存两个独立 Judge 的完整原始评分、runtime sidecar、一致性报告和必要裁决。揭盲前不得写入条件代码或条件对比。

**Status:** Reliability and Blind Adjudication Complete; Analysis Unblinded

- `G1-J01.jsonl`：45 个匿名 Answer 的第一份冻结顺序评分；
- `G1-J02.jsonl`：45 个匿名 Answer 的第二份冻结顺序评分；
- `G1-J01.runtime.md`、`G1-J02.runtime.md`：独立会话、输入交付、哈希和同源风险记录；
- `calculate-reliability.mjs`、`reliability-report.md`：可复算的一致性、分布与 Judge 偏移结果；
- `adjudication-triggers.json`：21 个需在揭盲前处理的匿名 Answer；
- `G1-ADJ01.jsonl`、`G1-ADJ01.runtime.md`：21 个盲态裁决和独立运行记录；
- `adjudication-report.md`：匿名裁决汇总和逐项 decision ledger；
- 输入交付偏离与无分数重试见 [G1-D002](../G1-D002-judge-packet-truncation.md)。

两份原始评分、一致性统计和 21 个必要裁决均已完成。只有裁决产物提交封存后才能开始揭盲。
