# G0-C04 — Library Reservation Reminders

**Classification:** Calibration Material

**Status:** Synthetic — Excluded from Benchmark

**Related Glossary:** [GLOSSARY.md](../../../GLOSSARY.md)

## Incident

公共图书馆的自习室预约未到场率从 14% 上升到 27%。预约量、房间供给和取消率稳定，变化始于提醒服务迁移，并与夏令时切换处于同一周。

## Semantic Layer

- `reservation_created`、`reminder_scheduled`、`reminder_sent`、`reminder_opened`、`check_in`、`reservation_cancelled`；
- 未到场：预约开始后 15 分钟仍无 `check_in` 且未取消；
- 可用维度：分馆、用户时区、预约开始时间、提醒模板、服务版本、发送/打开时间；
- 所有服务端时间戳存储为 UTC。

## Provided Prior Note

历史运营笔记称：“未到场主要由提前预约天数过长导致，提醒是否打开通常不改变到场。”该笔记没有版本和适用时区说明。

## Available Evidence

1. 提前预约天数分布和预约时段构成稳定；
2. `reminder_sent` 记录数量稳定，但打开率下降；
3. 未到场上升集中在 UTC−5 和 UTC−8 用户，UTC 与 UTC+1 稳定；
4. 受影响用户收到提醒的墙上时间比预期晚 5–8 小时；
5. 新服务把模板中的 “local 08:00” 按服务器时区解释，再写入 UTC；
6. 可查询调度表达式、用户时区、发送时间和打开时间；
7. 不可获得未打开提醒用户的主观动机，除非开展新的调查。

## Business Reality

提醒迁移中的时区转换错误把用户本地发送时间当成服务器时间，导致美洲时区提醒显著延迟并降低到场。

### Acceptable cause set

- 提醒服务的本地时间/UTC 转换错误；
- 机制等价表述：提醒调度忽略用户时区或错误处理夏令时，导致受影响地区提醒过晚。

### Partial mechanisms

- “提醒服务迁移问题”；
- “夏令时问题”，但未连接调度与发送时点。

### Incorrect alternatives

- 提前预约天数变长；
- 房间供给不足；
- 用户需求突然下降；
- Check-in 埋点全局失效。
