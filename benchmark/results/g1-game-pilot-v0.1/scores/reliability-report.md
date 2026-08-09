# G1 Blind-Judge Reliability Report

**Study ID:** `G1-GAME-PILOT-V0.1`
**Status:** Pre-adjudication Reliability Complete; Unblinding Closed
**Date:** 2026-08-09
**Validation assessment:** Needs rubric revision before F1; sufficient to continue G1 blind adjudication

## Technical summary

两名空白上下文 AI Judge 独立完成了同一批 45 个匿名 Answer。所有 9 个主要评分子维度的相差不超过 1 分一致率均为 **100%**，且没有任何子分差异超过 1 分；但这并不代表量表可靠。只有 RCC@3 达到稳定且有一定分布宽度的结果（ordinal Krippendorff's `α = 0.988`）。Relevance、Prioritization 和 First Discriminating Evidence 显示评分者方向性偏移或低于门槛的 alpha；Testability、Valid Check Ratio、BEI 和 OWR 则全部为 4 分，无法检验区分能力。

因此当前 Rubric 在 G1 高质量回答上出现明显天花板和锚点使用差异，**不具备直接进入 F1 的评分可靠性**。共有 21 个 Answer 触发预注册裁决，必须在揭盲前由独立裁决者处理。

## RCC 稳定，但多个质量维度无法形成可靠区分

| Dimension | N | Levels | Ordinal alpha | Exact agreement | Within-1 agreement | >1 differences | Result |
|---|---:|---|---:|---:|---:|---:|---|
| RCC@3 | 45 | 2, 3, 4 | 0.988 | 43/45 (95.6%) | 45/45 (100.0%) | 0 | Target met |
| Relevance | 45 | 3, 4 | -0.328 | 22/45 (48.9%) | 45/45 (100.0%) | 0 | Distribution warning; Judge shift |
| Mechanistic Specificity | 45 | 3, 4 | 0.597 | 36/45 (80.0%) | 45/45 (100.0%) | 0 | Distribution warning; below tentative gate |
| Testability | 45 | 4 | 1.000 | 45/45 (100.0%) | 45/45 (100.0%) | 0 | Degenerate ceiling |
| Prioritization | 45 | 3, 4 | -0.099 | 24/45 (53.3%) | 45/45 (100.0%) | 0 | Distribution warning; Judge shift |
| First Discriminating Evidence | 45 | 2, 3, 4 | -0.077 | 19/45 (42.2%) | 45/45 (100.0%) | 0 | Stop |
| Valid Check Ratio Score | 45 | 4 | 1.000 | 45/45 (100.0%) | 45/45 (100.0%) | 0 | Degenerate ceiling |
| Business and Evidence Integrity | 45 | 4 | 1.000 | 45/45 (100.0%) | 45/45 (100.0%) | 0 | Degenerate ceiling |
| Open-world Resilience | 45 | 4 | 1.000 | 45/45 (100.0%) | 45/45 (100.0%) | 0 | Degenerate ceiling |

Alpha 为 1.000 的四个全满分维度只是完全一致，不能证明它们能区分回答质量。Relevance 与 Prioritization 也只覆盖 3–4 分，alpha 对边际分布差异高度敏感；负值与较低完全一致率共同说明两名 Judge 对“3 与 4 的边界”使用不同。

## Judge 1 对 Relevance 和 Prioritization 系统性更宽松

| Dimension | J01 mean | J02 mean | J01 − J02 | J01 distribution | J02 distribution |
|---|---:|---:|---:|---|---|
| RCC@3 | 3.356 | 3.311 | +0.044 | 2:13; 3:3; 4:29 | 2:15; 3:1; 4:29 |
| Relevance | 4.000 | 3.489 | +0.511 | 4:45 | 3:23; 4:22 |
| Mechanistic Specificity | 3.578 | 3.556 | +0.022 | 3:19; 4:26 | 3:20; 4:25 |
| Testability | 4.000 | 4.000 | 0.000 | 4:45 | 4:45 |
| Prioritization | 3.933 | 3.467 | +0.467 | 3:3; 4:42 | 3:24; 4:21 |
| First Discriminating Evidence | 3.511 | 3.333 | +0.178 | 2:1; 3:20; 4:24 | 2:1; 3:28; 4:16 |
| Valid Check Ratio Score | 4.000 | 4.000 | 0.000 | 4:45 | 4:45 |
| Business and Evidence Integrity | 4.000 | 4.000 | 0.000 | 4:45 | 4:45 |
| Open-world Resilience | 4.000 | 4.000 | 0.000 | 4:45 | 4:45 |

最明显的系统偏移是 J01 把所有回答的 Relevance 评为 4，并把 42/45 的 Prioritization 评为 4；J02 在这两个维度更频繁使用 3。Mechanistic Specificity 的均值和分布则高度接近，说明并非单纯的全局宽严差异。

## 21 个 Answer 必须在揭盲前裁决

裁决触发来自两类规则：两名 Judge 对某个假设是否属于机制等价根因意见不同，或任一 Judge 标记 `candidate-valid-alternative`。没有子分差异超过 1 分，也没有重大业务冲突判断分歧。

触发 Answer 为：G1-A007、G1-A008、G1-A009、G1-A011、G1-A012、G1-A015、G1-A016、G1-A022、G1-A023、G1-A026、G1-A027、G1-A030、G1-A031、G1-A033、G1-A034、G1-A035、G1-A037、G1-A039、G1-A040、G1-A043、G1-A044。机器可读触发原因见 [adjudication-triggers.json](./adjudication-triggers.json)。

## Scope, definitions and method

- 评分单位：45 个匿名 Answer，每个 Answer 有两个独立评分；
- 主要子维度：RCC@3、四个 HQI 子维度、两个 DEE 子维度、BEI、OWR；
- 一致性：逐维度 ordinal Krippendorff's alpha，算法与 G0 使用的项目实现保持一致；
- 辅助统计：完全一致率、相差不超过 1 分一致率、相差超过 1 分单元数、Judge 均值与 0–4 分布；
- 数值门槛：`α ≥ 0.80` 为目标，`0.667 ≤ α < 0.80` 为暂定，`α < 0.667` 为停止；评分并集不足 3 个分值时标记分布警告；
- 可复算命令：`node benchmark/results/g1-game-pilot-v0.1/scores/calculate-reliability.mjs`；
- 原始评分 SHA-256：J01 `2fcb02c809cd302e9a8be630c1edf6bd600662001de8230e8cc5029b9ab3857e`；J02 `48aa4cfb665e8ed5b5f3fe665516d678f8e8570041571c9767c4bd4158f45fb1`。

## Robustness checks and limitations

- 两份文件在比较前已完成并提交；计算没有读取条件映射，也没有修改原始分数。
- 每个 Answer 的冻结顺序、Incident、结构计数、分数范围、HQI/DEE 算术和检查有效率映射均已机械校验。
- 两名 Judge 与答案 Agent 使用同一 provider 和继承模型谱系，只构成操作独立，不构成模型多样性；共同偏差可能导致虚高一致。
- 精确模型 build 和采样参数未暴露，无法检验运行时漂移。
- 单次绝对评分没有重复测量，因此 Judge 自洽率无法估计；本研究也未使用 pairwise A/B 与 B/A 位置翻转，position-flip rate 不适用。不同冻结顺序只降低共享顺序偏差，不能替代专门的位置敏感性实验。
- G1-D002 发生在评分前的 packet 交付阶段；失败会话没有产生分数，保留评分来自重新封印后的新空白会话。

## Decision and next steps

1. 继续盲态流程，仅把 21 个触发 Answer 交给独立裁决者；
2. 裁决完成、产物封存并再次确认无条件信息后，才允许揭盲；
3. G1 结束后修订 Relevance、Prioritization 与 First Discriminating Evidence 的 3/4 锚点，并为 Testability、VCR、BEI、OWR 增加更具区分力的案例或判定规则；
4. F1 前增加 Judge 重复评分或专门的位置敏感性子设计，补足当前无法估计的自洽率和位置效应。

## Further questions

- `candidate-valid-alternative` 是否被 Judge 误用于“合理竞争假设”，而不是隐藏答案之外但 Evidence 支持的新根因？
- First Discriminating Evidence 的低一致性来自“信息价值最高”的判断，还是来自对现实成本和已提供 Evidence 的不同解释？
- 天花板维度应通过更难案例扩展分布，还是先收紧 4 分锚点？
