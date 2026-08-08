# G1-I01 — First Expedition Activation Drop

**Classification:** Research — Analyst-visible Incident
**Status:** Draft v0.1
**Observation window:** 2026-07-14 to 2026-08-03
**Change point:** Client 3.4.2 rollout reached 100% on 2026-07-28

## Incident

合格注册账户量保持在每日约 48,000，但 `core_loop_activation_24h` 从发布前 7 日均值 **42.1%** 降至发布后 **33.0%**。下降在发布后两小时内出现，并持续 7 日。

## Available evidence

| Evidence | Before | After | Notes |
|---|---:|---:|---|
| `tutorial_completion_24h` | 79.0% | 78.8% | 无明显变化 |
| `first_expedition_start_24h` | 87.4% | 87.1% | 分母为教学完成人群 |
| First expedition completion — iOS | 72.8% | 72.4% | 稳定 |
| First expedition completion — PC | 75.1% | 74.8% | 稳定 |
| First expedition completion — Android `>4GB` | 72.5% | 71.6% | 小幅变化 |
| First expedition completion — Android `<=4GB` | 71.9% | 48.3% | 明显下降 |
| `crash_free_first_expedition` — Android `<=4GB` | 96.8% | 74.1% | 崩溃集中于场景载入后 2 分钟内 |
| Median matchmaking queue | 18 s | 19 s | 各平台稳定 |
| Acquisition channel mix | — | — | 最大渠道占比变化 < 1.2 pp |
| First-expedition enemy win rate among completed runs | 68.2% | 68.0% | 稳定 |

客户端 3.4.2 同时包含新手岛视觉资源更新、战斗平衡调整和多语言文本更新。Incident 未提供更细的代码变更或内存轨迹。

## Task

依据提供的上下文形成当前诊断、最多 5 个有序假设和最多 5 个有序下一步检查。检查必须说明可区分的解释及正反结果如何更新判断。
