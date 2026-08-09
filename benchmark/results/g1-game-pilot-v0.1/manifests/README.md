# G1 Manifests

本目录将在锁定时保存输入 SHA-256 manifest，并在运行时保存：

- Run ID、Incident、replicate、执行 slot 和 Answer ID；
- 可得模型/runtime/session 标识；
- 开始/结束时间、状态、重试和 Token 用量；
- 原始输入包和输出 hash；
- 条件映射仅保存在受限 manifest 中。

条件映射的冻结源见 [randomization.md](../../../g1/randomization.md)。

当前输入封存见 [input-hashes.sha256](./input-hashes.sha256)。该 manifest 不包含自身和 `pilot-lock.md`，以避免循环哈希；lock record 通过 Git commit 固定这两个文件。

执行记录包括：

- [batch-log.md](./batch-log.md)：45 个分析 Run 的 15 个冻结 block；
- [judge-log.md](./judge-log.md)：双重盲评、无分数重试与可靠性门禁；
- [adjudication-log.md](./adjudication-log.md)：21 个匿名触发项的独立裁决；
- [unblinding-log.md](./unblinding-log.md)：裁决封存提交后的揭盲窗口和结果入口。
