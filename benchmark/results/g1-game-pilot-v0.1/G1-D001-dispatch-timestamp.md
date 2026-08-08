# G1-D001 — Exact Dispatch Timestamp Not Pre-captured

**Study ID:** `G1-GAME-PILOT-V0.1`
**Deviation ID:** `G1-D001`
**Status:** Resolved for Future Batches / Accepted for Batch 01
**Discovered at:** 2026-08-08 21:40 CST
**Discovered by:** Run operator
**Before unblinding:** Yes

## Scope

- Affected Run IDs: G1-R001, G1-R002, G1-R003
- Incident IDs: G1-I01
- Conditions: all three randomized slots in the first block

## Expected protocol

每个 Run sidecar 保存开始与结束时间。

## Actual event

三个空白 Agent 的 canonical task ID 和共同的提交后 dispatch window 已保存，但 Run operator 在派发前没有单独记录墙钟时间。可确认派发发生在 seal record commit `a1bdef7` 的 `2026-08-08T21:34:49+08:00` 之后，三份结果在 `2026-08-08 21:40:19 CST` 前全部返回；不能事后猜填更精确时间。

## Cause

第一批派发流程先验证了 lock 和 Agent access contract，但没有把 batch dispatch timestamp 作为 spawn 前的强制步骤。

## Potential impact

- Internal validity: Low；三个 Run 同批派发、同一 lock、同一 Incident，且没有版本变化迹象。
- Construct validity: None identified。
- Comparability across conditions: Low；缺口对三个随机 slot 对称，不依赖条件结果。

## Disposition

Keep Batch 01。后续批次必须在 spawn 前先写入 batch dispatch timestamp；不得用估计时间回填本批。

## Approval

- Approved by: Run operator under the accepted G1 protocol
- Decision Record: [DR-0003](../../../docs/decisions/DR-0003-g1-game-pilot-launch.md)
- Date: 2026-08-08
