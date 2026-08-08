# Skybound Guilds — Analytical Business Understanding

**Classification:** Product Analysis Reference
**Status:** Provisional v0.1 — Incident-prior
**Business context:** Global free-to-play co-op action RPG; live product family 3.x
**Time scope:** 2026 H2 unless a later version explicitly supersedes this document
**Related Glossary:** [GLOSSARY.md](../../GLOSSARY.md)

> 本文表达长期稳定、与分析推理直接相关的候选 ABU。它不是某次 Incident 的答案，也不保证列举了所有可能机制。

## 1. Analytical overview

Skybound Guilds 通过可持续的合作战斗体验创造玩家价值。早期玩家需要从注册和教学进入第一次完整远征；中期玩家通过装备成长、目标反馈和公会协作形成持续参与；付费主要来自不改变战斗强度的外观、通行证和便利性商品。

分析时应区分三类变化：单个玩家是否完成一次业务 Transition、某个 cohort 完成该 Transition 的比例，以及某个 State 中玩家存量的净变化。周活跃下降不等于某一条 Transition 失败，它可能同时来自激活、维持、流失、回流或 Observation 失真。

## 2. Primary actor and candidate states

主要 Actor 是玩家账户。设备、支付订单、公会和远征实例是相关实体，但不能在没有说明所有权和时间窗口时与玩家 State 混用。

| State | Business meaning | Important boundary |
|---|---|---|
| Registered | 已创建可识别账户 | 不代表理解玩法或具备持续参与意愿 |
| Tutorial Complete | 已完成强制教学 | 不代表已体验可重复的核心循环 |
| Core-loop Activated | 注册 24 小时内完成首个标准远征并领取成长奖励 | 需同时满足战斗完成与奖励反馈 |
| Engaged | 在滚动 7 日内跨至少 3 个自然日游玩，并发生至少一次成长或社交行为 | 单次登录或后台事件不构成参与 |
| Dormant | 连续 14 日没有有效游玩会话 | 可能仍保留账户和付费历史 |
| First-time Payer | 首笔真实货币订单完成且未立即撤销 | 浏览、点击或启动结算都不是完成付费 |

这些 State 是为当前分析任务服务的候选切分，不声称互斥或穷尽玩家体验。

## 3. Stable transitions and mechanisms

### T1 — Registered → Tutorial Complete

常见机制包括教学可理解性、下载与登录连续性、输入和可访问性障碍。教学完成率下降时，应先判断流失发生在哪个步骤，并区分内容理解问题、技术中断和用户构成变化。

### T2 — Tutorial Complete → Core-loop Activated

教学与首次标准远征之间存在一次关键承诺升级：玩家从低风险引导进入完整战斗、匹配、资源加载和奖励领取。教学完成稳定并不能排除激活受损。首次远征的开始、完成、退出、崩溃、等待和奖励领取可以区分体验难度、匹配、客户端性能和奖励反馈等机制。

### T3 — Activated → Engaged

持续参与依赖玩家是否不断获得可理解且可达成的下一目标。成长价格与资源获得节奏、失败后的恢复、内容新鲜度、公会协作和会话成本会改变这一 Transition。登录稳定但成长行为和跨日回访下降时，不能仅用“用户兴趣降低”解释；应寻找阻断目标反馈的具体环节。

### T4 — Engaged → Dormant / Dormant → Engaged

流失和回流是不同 Transition。前者可能来自目标耗尽、反复受阻、社交断裂、性能或外部竞争；后者通常需要新内容、社交邀请或明确回归价值。活动结束后的自然回落应与产品或数据故障分开。

### T5 — Free Player → First-time Payer

首次付费至少包含商品曝光、意图形成、结算启动、支付授权、服务端确认和权益发放。价值或价格问题通常更早影响曝光到结算启动；支付方式、SDK、风控、地区或回调问题通常影响结算启动后的完成。订单完成下降时必须定位漏斗阶段，不能把所有下降都归为“付费意愿”。

## 4. Evidence selection principles

| Analytical question | High-value discriminating evidence | Common low-value shortcut |
|---|---|---|
| 激活下降发生在哪里 | 教学、首战开始、首战完成和奖励领取的条件化漏斗 | 只重算总体激活率 |
| 是内容、匹配还是性能 | 退出阶段、等待、战斗结果、崩溃/延迟与设备或版本交互 | 只看平均会话时长 |
| 持续参与为何下降 | 登录、目标尝试、失败原因、资源余额、成长完成与次日回访的顺序 | 把周活跃下降直接写成“兴趣下降” |
| 是活动回落还是结构性流失 | 活动 cohort、非活动 cohort、内容进度与同生命周期基线 | 只比较活动峰值与活动后均值 |
| 首次付费为何下降 | 曝光→点击→结算→授权→确认→发货分段，并按地区、平台、支付方式和版本交互 | 只看收入或平均价格 |
| 指标是否失真 | 用独立事件或服务端状态交叉验证 Observation | 默认所有事件缺失都代表用户行为 |

优先选择能在竞争解释之间产生不同预测的 Evidence。已由 Incident 明确稳定的量，不应作为第一项重复检查，除非用于验证数据质量。

检查顺序还应考虑信息价值、执行成本和可逆性。能够用现有服务端记录在小时内区分两个主要解释的检查，通常应排在需要新调查或等待下个 cohort 的检查之前；小范围配置回滚或影子重放可以提供机制证据，但必须说明受影响人群、成功判据和失败时的回退。高业务影响不等于高因果确定性，排序时应把两者分开记录。

## 5. Context, drift, and exceptions

- 平台、客户端版本、地区、获取渠道、账户年龄和设备能力会改变机制暴露，但分群相关性本身不证明根因；
- 内容发布、活动日历和价格目录会随版本变化，分析必须确认适用时间；
- 服务端配置可能独立于客户端版本变化，同一版本内仍可能出现切点；
- 付费订单以服务端确认和权益发放为准，客户端成功页面不能单独证明完成；
- 玩家可能跳过非强制内容或跨设备游玩，单设备事件序列可能不完整；
- 未被本文列出的、但由 Evidence 支持的机制必须保留并验证，不能因为不在 ABU 中而自动降级。

## 6. Representation limits

Transition 适合索引玩家生命周期变化，但不是唯一视图。首次付费需要 Process/Funnel 补充；公会协作可能涉及多个 Actor；周活跃存量需要流入/维持/流出分解；客户端与服务端事件顺序可能需要时间线。若 Transition 切分掩盖这些结构，分析者应明确提出替代视图。

## 7. Exclusions

本文不包含单次 Incident 数值、发布故障、隐藏根因、当前运营目标、数据库物理结构或预先决定的分析结论。它提供高质量先验，而不是封闭答案集。
