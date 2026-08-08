# G1-I03 — First-purchase Completion Drop

**Classification:** Research — Analyst-visible Incident
**Status:** Draft v0.1
**Observation window:** 2026-07-20 to 2026-08-07
**Change point:** Payment service build `pay-2026.08.04` deployed on 2026-08-04 09:00 UTC

## Incident

`first_purchase_conversion_7d` 从 **4.7%** 降至 **3.4%**。商品曝光量、价格目录和合格注册账户数量稳定。下降主要来自巴西 iOS 玩家。

## Available evidence

| Evidence | Before | After | Notes |
|---|---:|---:|---|
| Offer view → checkout start | 12.8% | 12.7% | 总体稳定 |
| Checkout completion — global cards | 84.2% | 83.9% | 稳定 |
| Checkout completion — Brazil Android local wallet | 78.0% | 77.4% | 稳定 |
| Checkout completion — Brazil iOS local wallet | 79.1% | 31.6% | 明显下降 |
| Provider authorization success — affected segment | 82.0% | 81.5% | 供应商侧稳定 |
| Server order confirmation — authorized affected orders | 96.4% | 38.7% | 明显下降 |
| `payment_result.error_family=callback_validation` | 1.8% | 54.9% | 受影响分群集中 |
| Entitlement fulfillment after confirmed order | 99.6% | 99.5% | 稳定 |
| Refund / immediate reversal | 2.1% | 2.0% | 稳定 |

支付服务发布同时升级了回调处理库、日志采样和一个未在巴西启用的风控规则。Incident 未提供供应商原始回调内容或服务端代码差异。

## Task

依据提供的上下文形成当前诊断、最多 5 个有序假设和最多 5 个有序下一步检查。检查必须说明可区分的解释及正反结果如何更新判断。
