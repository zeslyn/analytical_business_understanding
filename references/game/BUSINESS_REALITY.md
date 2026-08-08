# Skybound Guilds — G1 Hidden Business Reality

**Classification:** Restricted G1 Scoring Material
**Status:** Draft v0.1 — Do Not Expose to Analysis Runs
**Related Rubric:** [Scoring Rubric](../../benchmark/scoring-rubric.md)

> 本文件记录模拟机制、可接受根因和评分边界。Case author、Judge 和 Adjudicator 可以访问；被测分析 Agent、Condition author 和盲态输出整理者不得访问。

## G1-I01 — First Expedition Activation Drop

### Generating mechanism

客户端 3.4.2 把新手岛的高分辨率视觉资源改为在进入首个标准远征后一次性预加载。Android `<=4GB` 设备在场景载入后 30–120 秒出现内存峰值，被操作系统或客户端终止；教学和匹配服务未受影响。崩溃使玩家无法完成远征和领取成长奖励，从而降低 `core_loop_activation_24h`。

### Acceptable cause set

- **Full:** 3.4.2 新手岛/首远征资源预加载造成低内存 Android 的内存回归或崩溃，并阻断远征完成与奖励领取；
- **Mechanism-equivalent:** 新视觉资源的加载/内存管理回归导致该设备分群在首远征早段崩溃；
- **Partial:** Android 低内存设备的首远征性能或崩溃问题，但没有连接资源变更或激活 Transition。

### Important competitors

- 教学内容或文案问题：教学完成稳定；
- 匹配等待：队列稳定；
- 战斗难度：已完成远征的胜率稳定，且大量退出是崩溃；
- 渠道质量：渠道构成稳定且问题按设备能力集中；
- 埋点丢失：需要保留为较低优先级，因 OS 终止可能漏记崩溃，但服务端未完成远征也同步下降。

### High-value checks

按 `scene × time_since_load × device_memory_band × version` 比较崩溃和非正常会话结束；复现 3.4.1/3.4.2 的峰值内存；对低内存设备禁用或延迟资源预加载并观察远征完成和奖励领取是否恢复。

## G1-I02 — Midgame Week-2 Engagement Drop

### Generating mechanism

`eco-2026.08.01` 的等级区间边界写错：level 15–25 的常规装备升级错误引用了高阶装备成本表，使 quoted soft-currency cost 恰好翻倍。玩家仍登录并发起远征，但无法完成预期升级，成长反馈和部分公会贡献目标被阻断，降低跨日参与。

### Acceptable cause set

- **Full:** economy config 的等级映射/成本表错误使 level 15–25 升级软货币报价翻倍，导致升级失败、成长停滞并减少后续参与；
- **Mechanism-equivalent:** 该配置版本错误应用高阶升级价格或倍率到 level 15–25；
- **Partial:** 升级成本异常或软货币不足造成成长受阻，但没有识别配置映射错误。

### Important competitors

- 玩家赚取软货币减少：失败前余额稳定，报价翻倍；
- 远征难度或性能：开始、完成、崩溃和延迟稳定；
- 活动自然回落：同期没有大型活动结束且只影响特定等级；
- 公会功能故障：公会贡献下降是成长停滞的下游表现，不是独立生成机制；
- 商店礼包变化：与软货币升级报价和非付费玩家的失败不相符。

### High-value checks

比较新旧 config 对各等级和物品类型的报价查表结果；核对 level-band 边界及实际扣款；在受影响 cohort 回滚成本映射并观察升级成功、次日回访和公会贡献是否恢复。

## G1-I03 — First-purchase Completion Drop

### Generating mechanism

`pay-2026.08.04` 升级回调库时，只为巴西 iOS 本地钱包使用了错误的签名 canonicalization 顺序。支付供应商已经授权，但服务端把合法回调判为无效，订单不能进入 confirmed 和 fulfilled。商品价值、价格、风控和发货服务没有变化。

### Acceptable cause set

- **Full:** 新支付构建的回调签名验证/canonicalization 与巴西 iOS 本地钱包格式不兼容，使已授权订单无法被服务端确认；
- **Mechanism-equivalent:** 该分群的合法供应商回调被新服务端验证逻辑拒绝；
- **Partial:** 授权后、服务端确认前的支付集成故障，但没有指出回调验证。

### Important competitors

- 商品价值或价格：曝光到结算启动稳定；
- 供应商授权失败：授权成功稳定；
- 风控规则：新规则未在巴西启用，错误集中于 callback validation；
- 权益发放故障：确认后的发放稳定；
- 退款问题：撤销与退款稳定。

### High-value checks

对受影响与未受影响支付方式比较原始回调字段和签名 canonicalization；用部署前后库重放已授权回调；修复或回滚验证逻辑后确认 server confirmation 与订单发放恢复。

## Cross-case judging notes

- 不要求回答使用本文原句；按机制等价性评分；
- Evidence 支持的隐藏答案外解释应标记 `candidate-valid-alternative`，不得自动记错；
- 准确根因与低效检查分别由 RCC/HQI 和 DEE 捕获；
- 提到 `BUSINESS.md`、条件代码或推测实验目的不加分，并记录潜在盲法泄漏；
- 三个 Incident 都是合成材料，只支持 G1 可运行性和方差估计。
