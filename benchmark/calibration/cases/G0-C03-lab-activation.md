# G0-C03 — Enterprise Learning Lab Activation

**Classification:** Calibration Material

**Status:** Synthetic — Excluded from Benchmark

**Related Glossary:** [GLOSSARY.md](../../../GLOSSARY.md)

## Incident

企业学习平台的新学员“完成首个实验室任务”比例从 61% 降至 38%。讲座观看完成率稳定，下降只出现在启用 SSO 组同步的企业账户，并始于目录迁移后一周。

## Semantic Layer

- `course_started`、`lecture_completed`、`lab_launch_requested`、`lab_access_granted`、`lab_task_completed`；
- 激活：注册后 7 天内完成首个实验室任务；
- 可用维度：企业账户、SSO 类型、目录版本、课程、实验室、访问拒绝原因；
- 权限链：企业目录 → entitlement projection → lab authorization。

## Available Evidence

1. 讲座完成与 `lab_launch_requested` 稳定；
2. `lab_access_granted` 在新目录版本账户下降；
3. entitlement job 显示 “success”，但 `group_not_propagated` 拒绝增加；
4. 企业源目录在成员加入后 5 分钟内可看到新组；
5. Lab authorization 在成员加入后 45–60 分钟仍可能返回旧权限；
6. 课程内容、实验室容量和浏览器构成稳定；
7. 可查询源目录时间戳、projection 应用时间、authorization cache 命中和拒绝日志。

## Business Reality

目录迁移后 entitlement projection 仍按小时批量应用，但 job 在写入队列时就标记成功。新成员因此在 45–60 分钟内无法获得 Lab 权限。

### Acceptable cause set

- entitlement projection 延迟应用，但过早报告成功；
- 机制等价表述：目录到 Lab 权限投影存在 45–60 分钟传播延迟。

### Partial mechanisms

- “SSO 权限同步问题”；
- “组成员尚未传播”，但没有区分源目录、projection 和 authorization。

### Known limitation of the key

现有日志还没有完全区分 projection 延迟与 authorization 边缘缓存未失效。Evidence 支持的缓存机制必须标记为 `candidate-valid-alternative` 并进入裁决，不能自动记错。
