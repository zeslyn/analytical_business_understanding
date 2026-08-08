# Skybound Guilds — Semantic Layer

**Classification:** Engineering — Shared G1 Input
**Status:** Provisional v0.1
**Snapshot:** `sg-analytics-2026-08-07`
**Timezone:** Event timestamps stored in UTC
**Related Glossary:** [GLOSSARY.md](../../GLOSSARY.md)

> 本文定义三个 G1 条件共享的数据语义。它说明字段和指标如何解释，不提供根因排序或诊断规则。

## 1. Primary entities

| Entity | Key | Grain |
|---|---|---|
| Player account | `player_id` | 一个跨设备账户 |
| Device session | `session_id` | 单设备上的一次前台游玩会话 |
| Expedition instance | `expedition_id` | 一次远征尝试 |
| Guild membership | `player_id + guild_id + valid_from` | 一段成员关系 |
| Order | `order_id` | 一次真实货币结算尝试 |
| Release/config | `client_version` / `server_build` / `config_version` | 一次可审计版本 |

## 2. Core events and fields

| Event or record | Required fields | Meaning |
|---|---|---|
| `account_registered` | player, time, region, platform, channel | 账户首次完成注册 |
| `tutorial_step` | player, step_id, status, time, client/device fields | 教学步骤开始或完成 |
| `expedition_started` | player, expedition, mode, difficulty, queue_ms, versions | 已进入远征实例 |
| `expedition_ended` | player, expedition, result, duration, exit_stage | 远征完成、失败或退出 |
| `reward_claimed` | player, source_type, source_id, reward_id, time | 服务端确认奖励领取 |
| `client_crash` | player, session, scene, device_memory_band, version | 客户端非正常退出遥测 |
| `upgrade_attempted` | player, item, level_before, quoted_cost, result_code, config_version | 装备升级尝试及结果 |
| `currency_ledger` | player, currency, delta, reason, balance_after, time | 服务端货币账本变动 |
| `guild_action` | player, guild, action_type, time | 加入、贡献或领取公会奖励 |
| `offer_viewed` | player, offer_id, placement, region, platform, time | 商店商品获得有效曝光 |
| `checkout_started` | player, order, offer, price, currency, payment_method | 玩家进入外部或平台结算 |
| `payment_result` | order, provider, status, error_family, time | 支付机构或平台返回结果 |
| `order_fulfilled` | order, player, entitlement, time | 服务端确认权益发放 |

## 3. Metric definitions

| Metric | Definition |
|---|---|
| `tutorial_completion_24h` | 注册后 24 小时内完成全部强制教学的账户 / 合格注册账户 |
| `first_expedition_start_24h` | 注册后 24 小时内开始标准远征的账户 / 完成教学账户 |
| `core_loop_activation_24h` | 注册后 24 小时内完成首个标准远征且领取对应成长奖励的账户 / 合格注册账户 |
| `crash_free_first_expedition` | 首个标准远征期间没有 `client_crash` 的远征 / 全部首个标准远征 |
| `engaged_week2_rate` | 注册后第 8–14 天跨至少 3 个 UTC 自然日存在有效会话，且有至少一次升级成功或公会贡献的账户 / 到达第 8 天且未封禁账户 |
| `upgrade_success_rate` | `result_code=success` 的升级尝试 / 全部升级尝试 |
| `first_purchase_conversion_7d` | 注册后 7 日内完成首笔 `order_fulfilled` 且 24 小时内未撤销的账户 / 合格注册账户 |
| `checkout_completion_rate` | 最终进入 `order_fulfilled` 的订单 / `checkout_started` 订单 |

“有效会话”要求前台持续至少 120 秒且发生一项服务端确认的游玩行为。机器人、内部测试、作弊封禁和明确的重复注册账户从所有 G1 指标中排除。

## 4. Standard dimensions

- `event_date_utc`、`registration_cohort_date`；
- `region`、`country_group`、`platform`；
- `client_version`、`server_build`、`config_version`；
- `acquisition_channel`、`campaign_id`；
- `device_memory_band`：`<=4GB`、`5-8GB`、`>8GB`；
- `account_age_day`、`player_level_band`；
- `guild_status`、`payer_status`；
- `payment_method_family`、`payment_provider`。

## 5. Data quality and availability

- 注册、账本、奖励和订单状态来自服务端，可用于最终状态确认；
- 客户端崩溃遥测在进程被操作系统直接终止时可能缺失，需结合未正常结束的会话；
- `payment_result.error_family` 是标准化类别，不保证包含供应商原始错误文本；
- 跨设备事件以 `player_id` 合并，但未完成绑定前的匿名设备行为不会回填；
- G1 Incident 只可使用本快照中声明存在的事件和维度；请求其他数据时必须说明新增采集路径，不能假装已经可用。
