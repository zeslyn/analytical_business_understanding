# Benchmark

**Classification:** Research / Engineering  
**Status:** Foundation  
**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)

本目录用于验证增加 `BUSINESS.md` 是否改善 AI 的分析表现。

## 实验条件

**Baseline**

```text
SEMANTIC.md + INCIDENT.md
```

**ABU Condition**

```text
BUSINESS.md + SEMANTIC.md + INCIDENT.md
```

## 候选控制条件

[RN-0002](../research/RN-0002-properties-of-abu.md) 提出两类尚未预注册的候选条件：

- **Equal-length Domain Notes**：控制更多业务文本和上下文长度带来的效果；
- **Perturbed ABU**：用缺失、错误领域或过期知识探索错误先验和恢复能力。

[RN-0003](../research/RN-0003-why-transition.md) 进一步提出表示结构候选条件：

- **Transition Skeleton**：只包含 Actor、State 和 Transition 索引；
- **Mechanism-augmented Transition**：增加机制、约束和区分性 Evidence；
- **Hybrid View**：以 Transition 为索引，并引用最适合的 Process、Journey、Causal Model 或 Stock–Flow 视图。

这些条件只有在 `protocol.md` 完成评审后才能进入正式 Benchmark；探索性运行不得与验证性结果混合，也不能假设所有候选条件都必须进入第一轮正式实验。

## 目录内容

- [protocol.md](./protocol.md)：实验设计、控制变量、随机化和重复运行；
- [scoring-rubric.md](./scoring-rubric.md)：评价维度和评分锚点；
- [results](./results/)：冻结协议后的运行记录和结果。

## 研究原则

- 协议和评分量表必须在正式运行前预注册；
- 两个条件使用相同模型、分析 Prompt 和 Incident；
- 记录模型版本、配置、时间和所有输出；
- 使用多次运行评估生成随机性；
- 评分时隐藏实验条件并随机化答案顺序；
- 报告正向结果、无效结果和负向结果；
- 模拟案例结论不得直接外推为真实企业有效性。
