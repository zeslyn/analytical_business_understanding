# DR-0003 — G1 Game Pilot Launch Design

**Status:** Accepted
**Date:** 2026-08-08
**Classification:** Research / Engineering
**Owners:** Project maintainer
**Related Open Questions:** OQ-0002, OQ-0006, OQ-0007, OQ-0008, OQ-0022, OQ-0025, OQ-0028, OQ-0029, OQ-0030
**Related Protocol:** [benchmark/protocol.md](../../benchmark/protocol.md)
**G1 Package:** [benchmark/g1](../../benchmark/g1/)

## Proposed decision

启动 `G1-GAME-PILOT-V0.1`，使用虚构游戏 Skybound Guilds 的 3 个 Incident、A/B/C 三个核心条件和每个 `Incident × condition` 5 次独立运行，共 45 个分析输出。

G1 只用于端到端可运行性、泄漏检查、量表分布和方差估计。G1 Incident、回答和评分永久排除在 F1 验证性效应之外。

条件映射以 Protocol v0.2 为准：

1. A — `SEMANTIC.md + INCIDENT.md`；
2. B — `DOMAIN_NOTES.md + SEMANTIC.md + INCIDENT.md`；
3. C — `BUSINESS.md + SEMANTIC.md + INCIDENT.md`。

## Reason

G0 已证明当前 Rubric 能被两个独立评分者稳定应用，并完成必要裁决。下一项证据需求是验证整个实验链条是否能在较低成本的单行业案例中运行，包括输入隔离、随机化、匿名化、评分、裁决和盲态分析。

三个 Incident 分别使用客户端性能、成长经济和支付执行机制，避免只用一种根因结构检验 ABU。Full ABU 与普通 Domain Notes 分开，可以初步观察增益来自诊断性业务知识还是额外游戏背景。

## Source reconciliation

RN-0002 的早期示例把 B 标为 ABU、C 标为 Domain Notes；Protocol v0.2 和 DR-0002 的较新预注册设计使用 B=Domain Notes、C=Full ABU。本记录采用后者并要求所有 G1 manifest 使用同一映射。RN-0002 后续修订时应消除该命名冲突。

DR-0001 同时要求在游戏试验前建立 RFC 草案，又要求 RFC 根据游戏试验修订。G1 因此使用直接来自 RN-0001、RN-0003 和 RN-0004 的 provisional authoring profile；它只生成 RFC 证据，不把当前 `BUSINESS.md` 格式提升为 Accepted BUP 规范。

## Alternatives

### A. 直接进入五行业 F1

拒绝。当前没有 Pilot 方差、MID、非劣效界值或完整泄漏审计，正式效应不可解释。

### B. 只运行 Baseline 与 Full ABU

拒绝。缺少等长 Domain Notes 时，任何差异都可能来自额外文本或一般领域知识。

### C. 在 G1 同时加入 Transition Skeleton、Perturbed ABU 和多个模型

暂不采用。额外条件会把运行量和解释空间扩大到当前 Pilot 无法支持的程度；这些保留给独立 E1。

## Tradeoffs

- 所有案例都是同一作者链条生成的合成材料，存在同源模式和构造效度限制；
- 托管运行时可能不暴露精确模型 build、temperature 或 seed，必须记录为 G1 限制；
- 三个 Incident 只能估计粗略方差和发现流程问题，不能支持功效充分性或跨行业外推；
- 公开仓库中的 Business Reality 依赖会话级访问隔离，不构成密码学保密；
- 以较低成本换取在 F1 前发现输入不公平、盲法失败和评分不可执行问题。

## Impacted documents

- `references/game/*`
- `benchmark/g1/*`
- `benchmark/results/g1-game-pilot-v0.1/*`
- `benchmark/protocol.md`
- `benchmark/README.md`
- `OPEN_QUESTIONS.md`
- `research/RN-0002-properties-of-abu.md`

## Evidence and falsification

以下任一情况要求停止、修订或重新锁定 G1：

- Domain Notes 与 Full ABU 无法在篇幅和写作质量上形成公平对照；
- Incident 或条件文档泄露隐藏根因；
- 分析会话无法保持无状态和访问隔离；
- 输出格式无法被当前 Rubric 稳定评分；
- 评分者能从回答稳定识别条件；
- 运行中模型或平台行为发生不可控变化。

## Follow-up

- [x] 维护者通过 2026-08-08 的“启动 G1”指令接受本记录；
- [x] 完成输入审计与 lock manifest；
- [x] 生成 45 个独立分析输出；
- [x] 完成双重盲评、可靠性与必要裁决；
- [x] 完成[探索性揭盲分析](../../benchmark/results/g1-game-pilot-v0.1/analysis/pilot-report.md)并关闭 G1 执行；
- [ ] 用 G1 方差和缺陷修订 F1 preregistration；
- [x] 修订 RN-0002 的条件字母命名冲突。
