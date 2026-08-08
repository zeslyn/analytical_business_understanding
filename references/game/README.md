# Game Reference Case — Skybound Guilds

**Classification:** Research / Engineering
**Status:** G1 Pilot Authoring — Inputs Not Yet Locked
**Version:** 0.1
**Last updated:** 2026-08-08
**Related Glossary:** [GLOSSARY.md](../../GLOSSARY.md)

本目录是 Phase 1 的第一个端到端 Reference Case。它使用虚构的免费游玩合作动作 RPG **Skybound Guilds**，检验显式 Analytical Business Understanding（ABU）能否改善 AI 对游戏业务 Incident 的假设排序和证据选择。

## Pilot package

- [BUSINESS.md](./BUSINESS.md)：G1 条件 C 使用的长期稳定 ABU；
- [DOMAIN_NOTES.md](./DOMAIN_NOTES.md)：G1 条件 B 使用的等长普通领域说明；
- [SEMANTIC.md](./SEMANTIC.md)：A、B、C 三个条件共享的数据语义；
- [incidents](./incidents/)：三个分析参与者可见的 Incident；
- [BUSINESS_REALITY.md](./BUSINESS_REALITY.md)：隐藏机制、可接受根因和评分依据，只供 Case author、Judge 和 Adjudicator 使用。

## Conditions

以 [Protocol v0.2](../../benchmark/protocol.md) 和 [DR-0002](../../docs/decisions/DR-0002-benchmark-preregistration-design.md) 为准：

| Code | Analyst-visible input |
|---|---|
| A — Baseline | `SEMANTIC.md + INCIDENT.md` |
| B — Equal-length Domain Notes | `DOMAIN_NOTES.md + SEMANTIC.md + INCIDENT.md` |
| C — Full ABU | `BUSINESS.md + SEMANTIC.md + INCIDENT.md` |

RN-0002 中 B/C 的早期字母顺序与上述定义不同。G1 只使用 Protocol v0.2 的 A/B/C 映射，运行与评分文件不得混用旧顺序。

## Authoring constraints

- `BUSINESS.md` 只包含 Incident 前存在、能跨三个 Incident 复用的业务知识；
- `DOMAIN_NOTES.md` 提供同等篇幅和写作质量的产品背景，但不提供 Observation → Mechanism → Evidence 的诊断连接；
- `SEMANTIC.md` 只定义数据、事件、字段和指标，不规定应优先怀疑什么；
- Incident 提供足够 Evidence，但不直接写出隐藏根因；
- `BUSINESS_REALITY.md` 不得提供给被测分析 Agent；
- 本案例及其输出永不进入 F1。

G1 的运行冻结、随机化和盲化记录位于 [benchmark/g1](../../benchmark/g1/)。
