# Contributing

本项目当前处于 Research Foundation 阶段。贡献的首要目标是提高研究可解释性、可证伪性和实验可信度。

## 1. 任务分类

每项 Issue、文档或变更必须标记一种主要分类：

- **Vision**：项目长期目标和原则；
- **Research**：定义、性质、边界、理论论证和实验问题；
- **Engineering**：协议、模板、案例、Benchmark 和支持性实现。

若一项工作跨越多个分类，应明确主要分类和受影响分类。

## 2. 论断状态

使用以下标签区分证据强度：

- **Hypothesis**：可以被理论或实验支持、修正或否证；
- **Open Question**：尚未获得足够依据的问题；
- **Draft Decision**：已经提出，但尚未完成评审或验证；
- **Accepted Decision**：已经通过 Decision Record 接受；
- **Frozen Decision**：第一阶段默认不再修改，除非出现强反例。

不得将 Hypothesis 写成已经验证的事实。

## 3. Analytical First 检查

新增概念、文档或功能前，回答：

1. 它是否提升分析推理质量？
2. 它是否帮助生成或验证业务假设？
3. 删除它以后，根因分析能力是否会明显下降？

三个问题均为否时，该内容不进入第一阶段。

## 4. 文档要求

- 首次使用核心术语时链接到 [GLOSSARY.md](./GLOSSARY.md)。
- 术语定义不得在其他文档中悄悄改写。
- Research Note 和 RFC 必须区分论断、证据、反例和开放问题。
- 优先使用游戏案例作为 Running Example。
- 文档状态和分类应写在标题下方。

## 5. Decision Record

以下变化必须创建 Decision Record：

- 修改核心术语；
- 改变 ABU 或 BUP 的边界；
- 接受或否决 Transition 相关核心假设；
- 改变 RFC 结构或规范性要求；
- 改变实验条件、评分方法或完成标准；
- 新增第一阶段交付物或扩大范围。

使用 [DR-0000 template](./docs/decisions/DR-0000-template.md)，并至少记录：

- Decision；
- Reason；
- Alternatives；
- Tradeoffs；
- Impacted Documents。

## 6. 推荐工作流

1. 在 `OPEN_QUESTIONS.md` 中确认要解决的问题；
2. 收集理论、案例或实验依据；
3. 更新 Research Note 或 RFC 草案；
4. 创建或更新 Decision Record；
5. 同步 Glossary 和受影响文档；
6. 检查是否引入未经标记的新假设。

## 7. 第一阶段工程边界

第一阶段不优先开发：

- Agent Runtime；
- Prompt 编排系统；
- Business Reasoning Engine；
- 图数据库或 Transition Graph Engine；
- 可视化编辑器；
- 企业连接器和商业产品。

如需突破边界，必须先创建 Decision Record，说明对研究问题的直接价值和机会成本。

## 8. 提交建议

提交应保持单一研究意图，并在说明中包含：

- Classification；
- 解决的 Open Question 或 RFC；
- 主要论断状态；
- 受影响文档；
- 已完成的检查或实验。

