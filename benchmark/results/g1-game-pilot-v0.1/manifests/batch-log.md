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

## Batch 03

| Field | Value |
|---|---|
| Runs | G1-R007, G1-R008, G1-R009 |
| Canonical tasks | `/root/g1_r007`, `/root/g1_r008`, `/root/g1_r009` |
| Context mode | `fork_turns=none` for all three |
| Input lock commit | `c5502eadd0970ef4902244bf685b0cb2c15724df` |
| Seal record commit before dispatch | `6eed334c952de0baac5417f942f5ffdb1efb97f0` |
| Dispatch timestamp recorded at | `2026-08-08 22:30:45 CST (+0800)` |
| Dispatch time | `2026-08-08 22:30:45 CST (+0800)` |
| Post-spawn checkpoint | `2026-08-08 22:31:55 CST (+0800)`; all three canonical tasks accepted |
| Completion checkpoint | `2026-08-08 22:37:06 CST (+0800)` |
| Result | 3 / 3 complete; no retry |
| Deviation | None |

本批 dispatch timestamp 已在启动 Agent 前落盘；三个 spawn 在该时间戳之后、post-spawn checkpoint 之前被系统接受。

每个 Agent 只调用一次受控 packet loader，随后在 final response 中提交正文；Agent 未写入仓库。Run operator 保存原文、生成匿名副本并验证两份 hash 完全一致。

## Batch 04

| Field | Value |
|---|---|
| Runs | G1-R010, G1-R011, G1-R012 |
| Canonical tasks | `/root/g1_r010`, `/root/g1_r011`, `/root/g1_r012` |
| Context mode | `fork_turns=none` for all three |
| Input lock commit | `c5502eadd0970ef4902244bf685b0cb2c15724df` |
| Seal record commit before dispatch | `082ffe6abec1d15326f99dd06b099fdbd0e8904c` |
| Dispatch timestamp recorded at | `2026-08-08 22:38:16 CST (+0800)` |
| Dispatch time | `2026-08-08 22:38:16 CST (+0800)` |
| Post-spawn checkpoint | `2026-08-08 22:39:13 CST (+0800)`; all three canonical tasks accepted |
| Completion checkpoint | `2026-08-08 22:44:22 CST (+0800)` |
| Result | 3 / 3 complete; no retry |
| Deviation | None |

本批 dispatch timestamp 已在启动 Agent 前落盘；三个 spawn 在该时间戳之后、post-spawn checkpoint 之前被系统接受。

每个 Agent 只调用一次受控 packet loader，随后在 final response 中提交正文；Agent 未写入仓库。Run operator 保存原文、生成匿名副本并验证两份 hash 完全一致。

## Batch 05

| Field | Value |
|---|---|
| Runs | G1-R013, G1-R014, G1-R015 |
| Canonical tasks | `/root/g1_r013`, `/root/g1_r014`, `/root/g1_r015` |
| Context mode | `fork_turns=none` for all three |
| Input lock commit | `c5502eadd0970ef4902244bf685b0cb2c15724df` |
| Seal record commit before dispatch | `d5712ed9a2c47db3824b802d4266cf35dc90f59f` |
| Dispatch timestamp recorded at | `2026-08-08 22:52:59 CST (+0800)` |
| Dispatch time | `2026-08-08 22:52:59 CST (+0800)` |
| Post-spawn checkpoint | `2026-08-08 22:53:45 CST (+0800)`; all three canonical tasks accepted |
| Completion checkpoint | `2026-08-08 22:58:52 CST (+0800)` |
| Result | 3 / 3 complete; no retry |
| Deviation | None |

本批 dispatch timestamp 已在启动 Agent 前落盘；三个 spawn 在该时间戳之后、post-spawn checkpoint 之前被系统接受。

每个 Agent 只调用一次受控 packet loader，随后在 final response 中提交正文；Agent 未写入仓库。Run operator 保存原文、生成匿名副本并验证两份 hash 完全一致。
