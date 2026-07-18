# Vision

**Classification:** Vision  
**Status:** Provisional  
**Source:** [Project Charter v0.1](./Analytical_Business_Understanding_Project_Charter_v0.1.md)  
**Related Glossary:** [GLOSSARY.md](./GLOSSARY.md)

## North Star

> 让 AI 更好地完成企业分析。

## Problem

现代分析系统能够采集和存储数据、定义指标、生成报表，并支持自然语言查数，但解释业务现象仍高度依赖资深分析师。

这种差异通常表现为：

- 能否快速定位可能发生变化的业务环节；
- 能否提出高质量、可验证的业务假设；
- 能否优先检查高价值证据；
- 能否避免无效的数据穷举；
- 能否把数据变化解释为可信的业务变化。

## Research Object

本项目的研究对象是 Analytical Business Understanding（ABU），而不是模型、Prompt 或 Agent 编排。

ABU 关注分析推理所必需的业务知识，以及这些知识能否以人和 AI 都能理解的方式显式表达。

## Core Hypothesis

**Hypothesis**

> 如果 ABU 可以被显式表示，AI 就有可能比仅依赖数据语义时更接近资深分析师的分析方式。

预期作用机制是：

```text
显式 ABU
  → 理解有分析意义的业务状态与变化
  → 生成更合理的假设
  → 缩小验证空间
  → 改善分析效率和结论质量
```

## Guiding Principles

1. Enterprise analytics should reason about business before data.
2. Data is evidence, not the business itself.
3. Analytical business understanding should be explicit.
4. Meaningful business change is the current priority for representation research.
5. Definition drift is expected.
6. The protocol standardizes expression, not business definitions.
7. AI is an important consumer, but analytics is the domain.
8. Research comes before engineering.

第 4 条关于业务变化和 Transition 的具体表达仍是工作假设，不视为已验证事实。

## Phase 1 Mission

> 定义并验证 ABU 是否可以成为一个独立、合理且有效的分析知识表示层。

第一阶段结束时，项目应能够回答：

- ABU 是否具有清晰、可辩护、可操作的定义？
- ABU 与相邻知识层的边界是否可以稳定判断？
- Transition 是否提供了足够的分析解释力？
- `BUSINESS.md` 是否能一致地表达所需知识？
- 在受控条件下，`BUSINESS.md` 是否改善 AI 的分析表现？
- 哪些失败模式、反例和未解决问题仍然存在？
