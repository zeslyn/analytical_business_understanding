# G0 Post-run Reference Anchor Discussion

**Status:** Complete — Original Scores Preserved

**Date:** 2026-08-08

**Inputs:** [answer-key.md](../../calibration/answer-key.md), [reliability-report.md](./reliability-report.md), [adjudication-G0-A009.md](./adjudication-G0-A009.md)

> 本文件在独立评分、一致性统计和必要裁决完成后创建。原 Answer Key 和两份 Judge 记录保持原样；以下结论只记录哪些参考锚点应在后续使用时调整。

## 1. Reference Comparison

使用 [compare-reference.mjs](./compare-reference.mjs) 比较两名 Judge 与 provisional Answer Key。G0-A009 按裁决后的 RCC@3 = 4 比较。

- 所有 Judge 2 单元与参考键相差不超过 1 分；
- Judge 1 只有一个超过 1 分的单元：G0-A011 FDE，2 vs provisional reference 0；
- 两名 Judge 之间所有主要子维度差异均不超过 1 分。

## 2. Resolved Case-specific Anchors

以下是后续讨论锚点，不回写首次运行的 provisional key：

| Answer | Dimension | Provisional | Resolved anchor | Reason |
|---|---|---:|---:|---|
| G0-A003 | Testability | 1 | 2 | 检查针对错误解释，但其中两项仍可执行并能更新价格假设；错误根因不自动使 Testability 为 0–1。 |
| G0-A006 | RCC@3 | 1 | 0 | 前三项没有 acceptable cause，且“供应不足”与库存 Evidence 冲突。 |
| G0-A006 | Prioritization | 1 | 0 | 没有 Evidence 排序理由，且优先项与已知 Evidence 冲突。 |
| G0-A006 | VCR | 0 | 1 | 首项重复已知拆分；技术员访谈低信息但仍可执行，故 1/2 无效。 |
| G0-A007 | Prioritization | 3 | 2 | 只有一个候选且宣称其他原因完全排除，没有比较竞争解释或验证成本。 |
| G0-A011 | Testability | 1 | 2 | 检查总体偏弱，但分层、调查和干预仍可执行。 |
| G0-A011 | FDE | 0 | 1 | 按提前天数比较未到场率不是完全重复“提前天数分布稳定”，但对迁移/时区机制区分力很低。 |
| G0-A011 | VCR | 1 | 2 | 四项中分层、调查和干预可更新假设；房间取消率缺少区分关系，约 1/4 无效。 |
| G0-A011 | BEI | 1 | 0 | 核心结论用无版本旧先验覆盖迁移切点、时区集中和晚发 Evidence，构成实质业务冲突。 |

G0-A009 的 cache invalidation 已被裁决为独立可接受根因，RCC@3 = 4；它不是 projection delay 的机制等价改写。

## 3. Rubric Decision

**Rubric change required: No.**

上述差异都能由现有 Relevance、Testability、FDE、VCR、BEI 和 candidate-valid-alternative 规则解决。问题来自首次 provisional Answer Key 对具体回答的应用，而不是构念或评分规则缺失。

因此：

- 不修改两名 Judge 原始分数；
- 不覆盖原 Answer Key；
- 不修改 Rubric 评分定义；
- 本轮不需要因 Rubric 修改而创建 Holdout Set；
- 将这些已解决锚点用于后续评分者培训，但不得作为 Benchmark 表现数据。
