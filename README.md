# Analytical Business Understanding

> 面向企业分析的业务理解研究与开放规范项目。

**当前阶段：** Phase 1 — Research Foundation  
**项目状态：** Foundation / 基础建设  
**规范状态：** 所有术语和设计均为 provisional，除非明确标记为 Frozen Decision

## 项目要解决的问题

资深分析师的优势不仅来自 SQL、统计或工具能力，更来自他们对业务运行规律的理解。本项目研究：

> 企业分析所依赖的业务理解是什么，能否被显式表示，并进一步被 AI 使用？

当前核心研究假设是：

> 如果分析型业务理解可以被显式表示，那么获得这些知识的 AI，可能比只获得数据语义的 AI 生成更合理的业务假设、采用更短的验证路径，并形成更可信的分析结论。

完整背景和第一阶段约束见 [Project Charter](./Analytical_Business_Understanding_Project_Charter_v0.1.md)。

## 核心概念

- **Analytical Business Understanding（ABU）**：正确解释业务现象、生成业务假设、缩小验证范围并完成分析推理所必需的最小业务知识集合。
- **Business Understanding Protocol（BUP）**：表达 ABU 的协议。
- **BUSINESS.md**：BUP 的第一种自然语言参考实现。
- **Transition**：当前候选核心表达单元；它仍是需要研究和实验验证的工作假设。

所有术语以 [GLOSSARY.md](./GLOSSARY.md) 为准。

## 第一阶段使命

定义并验证 ABU 是否可以成为一个独立、合理且有效的分析知识表示层。

第一阶段聚焦：

- ABU 的定义、性质与边界；
- Transition 是否适合作为核心表达单元；
- BUP 和 `BUSINESS.md` 的最小表达要求；
- 五类参考业务和十五个模拟 Incident；
- 有无 `BUSINESS.md` 的受控对照实验。

第一阶段不开发 Agent Runtime、Reasoning Engine、图数据库、可视化编辑器或企业产品。

## 仓库结构

```text
.
├── README.md
├── VISION.md
├── GLOSSARY.md
├── OPEN_QUESTIONS.md
├── CONTRIBUTING.md
├── research/              # Research Notes
├── rfcs/                  # BUP RFC
├── references/            # 五类参考业务
├── benchmark/             # 实验协议、评分量表和结果
└── docs/
    ├── architecture/      # 概念与文档架构
    ├── diagrams/          # 可复用图示
    └── decisions/         # Decision Records
```

## 推荐工作顺序

1. 完成 provisional Glossary 和开放问题登记；
2. 按 RN-0001 → RN-0004 → RN-0002 → RN-0003 的顺序建立理论最小闭环；
3. 在案例生成前预注册实验协议和评分方法；
4. 起草 BUP 与 `BUSINESS.md` 规范；
5. 用游戏案例完成第一次端到端试验；
6. 根据试验结果修订理论和协议；
7. 再扩展到电商、外卖、SaaS 和广告；
8. 完成正式对照实验与第一阶段研究总结。

## 项目治理

- 每项工作必须标记为 **Vision**、**Research** 或 **Engineering**。
- 未验证的观点必须标记为 **Hypothesis**、**Open Question** 或 **Draft Decision**。
- 重要修改必须创建 Decision Record。
- 所有概念文档和规范必须引用 `GLOSSARY.md`。
- 新增内容必须通过 Analytical First 检查。

具体规则见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 暂未决定

- 开源许可证尚未选择，因此当前不创建 `LICENSE`。
- 维护者、评审者和版本发布机制将在后续 Decision Record 中确定。

