# G1 Analysis Batch Log

**Study ID:** `G1-GAME-PILOT-V0.1`

## Batch 01

| Field | Value |
|---|---|
| Runs | G1-R001, G1-R002, G1-R003 |
| Canonical tasks | `/root/g1_r001`, `/root/g1_r002`, `/root/g1_r003` |
| Context mode | `fork_turns=none` for all three |
| Input lock commit | `c5502eadd0970ef4902244bf685b0cb2c15724df` |
| Seal record commit before dispatch | `a1bdef7` |
| Dispatch time | Exact timestamp not pre-captured; after `2026-08-08T21:34:49+08:00` |
| Completion checkpoint | `2026-08-08 21:40:19 CST` |
| Result | 3 / 3 complete; no retry |
| Deviation | [G1-D001](../G1-D001-dispatch-timestamp.md) |

每个 Agent 只调用一次受控 packet loader，随后在 final response 中提交正文；Agent 未写入仓库。Run operator 保存原文、生成匿名副本并验证两份 hash 完全一致。

## Batch 02

| Field | Value |
|---|---|
| Runs | G1-R004, G1-R005, G1-R006 |
| Canonical tasks | `/root/g1_r004`, `/root/g1_r005`, `/root/g1_r006` |
| Context mode | `fork_turns=none` for all three |
| Input lock commit | `c5502eadd0970ef4902244bf685b0cb2c15724df` |
| Seal record commit before dispatch | `9ec08a473bf647e5c5a08dceb2f135f9177ede1d` |
| Dispatch timestamp recorded at | `2026-08-08 21:42:45 CST (+0800)` |
| Dispatch time | `2026-08-08 21:42:45 CST (+0800)` |
| Post-spawn checkpoint | `2026-08-08 21:43:28 CST (+0800)`; all three canonical tasks accepted |
| Completion checkpoint | `2026-08-08 21:48:37 CST (+0800)` |
| Result | 3 / 3 complete; no retry |
| Deviation | None |

本批 dispatch timestamp 已在启动 Agent 前落盘；三个 spawn 在该时间戳之后、post-spawn checkpoint 之前被系统接受。

每个 Agent 只调用一次受控 packet loader，随后在 final response 中提交正文；Agent 未写入仓库。Run operator 保存原文、生成匿名副本并验证两份 hash 完全一致。
