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
