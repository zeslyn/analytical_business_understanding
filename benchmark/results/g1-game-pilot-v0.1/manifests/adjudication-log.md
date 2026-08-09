# G1 Blind Adjudication Log

**Study ID:** `G1-GAME-PILOT-V0.1`

| Field | Value |
|---|---|
| Adjudicator | G1-ADJ01 |
| Triggered Answers | 21 |
| Canonical task | `/root/g1_adj01` |
| Context mode | `fork_turns=none` |
| Adjudication lock commit | `ca60c9f18f64cd1efe583f7b1f5fb1e3dcbf4c1c` |
| Dispatch timestamp recorded at | `2026-08-09 14:03:12 CST (+0800)` |
| Dispatch time | `2026-08-09 14:03:12 CST (+0800)` |
| Post-spawn checkpoint | `2026-08-09 14:03:56 CST (+0800)`; canonical task accepted |
| Submission checkpoint | `2026-08-09 14:11:22 CST (+0800)` |
| Result | Complete; 21 / 21 records validated |
| Unblinding status | Eligible only after the adjudication source, runtime sidecar and report are committed |
| Deviation | None |

派发时间在启动 Adjudicator 前落盘；spawn 在该时间戳之后、post-spawn checkpoint 之前被系统接受。Adjudicator 按顺序读取 9 个受控 packet part，并仅写入自己的 JSONL 裁决文件。提交文件通过 21 个触发项、原始分数、顺序、取值范围和盲态标记校验；SHA-256 为 `9546270d40f6ad1b5489e37ff4118015bc427e0fcc1718e14843494c49178326`。
