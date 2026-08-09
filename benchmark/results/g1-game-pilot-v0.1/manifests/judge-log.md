# G1 Blind Judge Log

**Study ID:** `G1-GAME-PILOT-V0.1`

| Field | Value |
|---|---|
| Judges | G1-J01, G1-J02 |
| Canonical tasks | `/root/g1_j01`, `/root/g1_j02` |
| Judge type | Independent blank-context AI Agents |
| Context mode | `fork_turns=none` for both |
| Judge lock commit | `fcbe21bb4570d5d44942fc717bc8aea4c759bd82` |
| Dispatch timestamp recorded at | `2026-08-09 13:29:33 CST (+0800)` |
| Dispatch time | `2026-08-09 13:29:33 CST (+0800)` |
| Post-spawn checkpoint | `2026-08-09 13:30:25 CST (+0800)`; both canonical tasks accepted |
| Submission checkpoint | `2026-08-09 13:34:01 CST (+0800)`; both attempts stopped before scoring |
| Result | Initial delivery failed symmetrically; no score file written; fresh-session retry pending |
| Reliability status | Closed until both score files are sealed |
| Unblinding status | Closed |
| Deviation | [G1-D002](../G1-D002-judge-packet-truncation.md) |

本次派发时间在启动两个 Judge 前落盘；两个 spawn 在该时间戳之后、post-spawn checkpoint 之前被系统接受。两名 Judge 只能各调用一次受控 packet loader，随后仅可通过 `apply_patch` 写入各自的 JSONL 评分文件；彼此不可读取评分或中间统计。

## Delivery failure and retry decision

| Field | Value |
|---|---|
| Failed tasks | `/root/g1_j01`, `/root/g1_j02` |
| Failure mode | Managed command output truncated the valid approximately 231 KB packet |
| Scores produced | None |
| Files written | None |
| Retained for analysis | No |
| Corrective action | Relock identical scoring content as parts `0`–`10`; retry both Judges in fresh blank-context tasks |
| Retry tasks | Pending |
| Retry dispatch | Pending |
| Retry post-spawn checkpoint | Pending |
| Retry submission checkpoint | Pending |
| Retry result | Pending |

本次调整只改变输入交付分块，不改变 Rubric、Judging Form、Semantic Layer、Business Reality、Incident、匿名答案、Judge 顺序或输出 schema。每个 part 的 stdout SHA-256 已在 [judge-packet-parts.md](./judge-packet-parts.md) 封存。
