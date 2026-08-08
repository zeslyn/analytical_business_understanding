# G1-I02 — Midgame Week-2 Engagement Drop

**Classification:** Research — Analyst-visible Incident
**Status:** Draft v0.1
**Observation window:** 2026-07-06 to 2026-08-06
**Change point:** Economy config `eco-2026.08.01` activated on 2026-08-01 00:00 UTC

## Incident

等级 15–25 的新玩家 `engaged_week2_rate` 从此前四个 cohort 的 **36.4%** 降至 **27.9%**。其他等级段变化均小于 1.5 个百分点。同期没有大型内容或活动结束。

## Available evidence

| Evidence | Before | After | Notes |
|---|---:|---:|---|
| Day 8–14 accounts with any valid session | 61.2% | 60.5% | 基本稳定 |
| Standard expedition starts per active account | 4.8 | 4.7 | 稳定 |
| Standard expedition completion rate | 81.0% | 80.6% | 稳定 |
| Upgrade attempts per active account | 2.7 | 3.1 | 上升 |
| `upgrade_success_rate`, level 15–25 | 73.5% | 41.2% | 明显下降 |
| Upgrade failures: `insufficient_soft_currency` | 18.1% | 52.6% | 仅在 level 15–25 集中 |
| Median soft-currency balance before first failed attempt | 1,240 | 1,255 | 稳定 |
| Median quoted upgrade cost, level 15–25 | 920 | 1,840 | 翻倍 |
| Guild contribution among level 15–25 active accounts | 34.0% | 24.8% | 同期下降 |
| Crash-free sessions / median latency | stable | stable | 无平台集中 |

配置发布还调整了高等级装备回收价格、两个活动礼包和部分地区商店展示。没有玩家调查或客服归因可用。

## Task

依据提供的上下文形成当前诊断、最多 5 个有序假设和最多 5 个有序下一步检查。检查必须说明可区分的解释及正反结果如何更新判断。
