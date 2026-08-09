# Vision

**Classification:** Vision  
**Status:** Provisional  
**Source:** [Project Charter v0.1](./Analytical_Business_Understanding_Project_Charter_v0.1.md)  
**Related Glossary:** [GLOSSARY.md](./GLOSSARY.md)

## North Star

> 让显式 ABU 可验证地改善 LLM 的企业分析表现。

资深分析师帮助项目识别“什么是有价值的业务理解”，但当前阶段不比较 ABU+LLM 与资深分析师的能力水平，也不提出替代分析师的主张。

## Problem

现代分析系统能够采集和存储数据、定义指标、生成报表，并支持自然语言查数，但解释业务现象仍高度依赖资深分析师。

这种差异通常表现为：

- 能否快速定位可能发生变化的业务环节；
- 能否提出高质量、可验证的业务假设；
- 能否优先检查高价值证据；
- 能否避免无效的数据穷举；
- 能否把数据变化解释为可信的业务变化。

## Research Object

本项目的研究对象是 Analytical Business Understanding（ABU），而不是模型、Prompt 或 Agent 编排。模型和 Prompt 只作为验证 ABU 增量价值时必须控制的实验因素；Structured Prompt 仅在小规模消融中作为可能替代 ABU 脚手架的对照。

ABU 关注分析推理所必需的业务知识，以及这些知识能否以人和 AI 都能理解的方式显式表达。

## Core Hypothesis

**Hypothesis**

> 在贴近一般需求表达的 Natural Request 下，当模型、Incident、Evidence、Prompt、工具权限和输出预算相同，获得显式 ABU 的 LLM，将比只获得数据语义或等长普通领域背景的 LLM 产生更好的分析结果。

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

> 定义 ABU，并验证它能否作为独立于 Semantic Layer 的知识层，为 LLM 带来可归因、可重复且不损害业务与证据诚信的分析增量。

第一阶段结束时，项目应能够回答：

- ABU 是否具有清晰、可辩护、可操作的定义？
- ABU 与相邻知识层的边界是否可以稳定判断？
- Transition 是否提供了足够的分析解释力？
- `BUSINESS.md` 是否能一致地表达所需知识？
- 在受控条件下，`BUSINESS.md` 是否改善 LLM 的分析表现？
- 观察到的改善是否超过等长 Domain Notes，而不能只用更多文本或一般背景解释？
- 题目难度是否掩盖了 ABU 的增量？在独立小规模消融中，Structured Prompt 是否能够替代或压缩该增量？
- 哪些失败模式、反例和未解决问题仍然存在？

“ABU+LLM 是否达到资深分析师水平”属于可能的长期扩展，不是 Phase 1 完成标准。
