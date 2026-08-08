# G0-C01 — Parking Permit Renewal

**Classification:** Calibration Material

**Status:** Synthetic — Excluded from Benchmark

**Related Glossary:** [GLOSSARY.md](../../../GLOSSARY.md)

## Incident

某城市的线上停车许可续期完成率在 7 月 14 日身份认证服务升级后，从 72% 降至 49%。申请开始量、许可价格、资格规则和支付成功率均未发生变化。

## Semantic Layer

- `renewal_started`：用户开始续期；
- `identity_challenge_started`：进入身份认证；
- `identity_verified`：身份认证成功；
- `payment_completed`：支付并完成续期；
- 可用维度：浏览器家族、操作系统、设备类型、认证服务版本、错误码、日期；
- 完成率：`payment_completed / renewal_started`。

## Available Evidence

1. 下降全部发生在 `identity_challenge_started → identity_verified`；
2. Chrome 和 Edge 的验证率稳定；Safari 17 与 iOS WebView 明显下降；
3. 新旧用户、许可类型和流量来源构成稳定；
4. 页面加载延迟、支付延迟和支付拒绝率稳定；
5. 认证服务升级后出现新的 `challenge_state_missing` 错误码；
6. 可查询认证日志、浏览器/版本分层漏斗和挑战 Cookie 状态；
7. 不可获得用户设备上的完整浏览器调试日志。

## Business Reality

新认证版本把挑战状态保存在默认 `SameSite=Lax` Cookie 中；Safari 17 和 iOS WebView 的跨站回跳没有携带该 Cookie，导致挑战状态丢失。

### Acceptable cause set

- 身份认证升级导致 Safari/iOS 跨站回跳状态 Cookie 丢失；
- 机制等价表述：新认证版本与 Safari/iOS 的 SameSite/Cookie 行为不兼容。

### Partial mechanisms

- “Safari 上的身份认证故障”；
- “回跳状态没有保留”，但未连接 Cookie 或版本变化。

### Incorrect alternatives

- 许可费上涨；
- 申请者质量下降；
- 支付网关故障；
- 页面整体性能下降。
