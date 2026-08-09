# G1 Game Pilot

**Classification:** Research / Engineering
**Status:** Analysis Complete — 45 / 45 Outputs; Blind Judging Running
**Study ID:** `G1-GAME-PILOT-V0.1`
**Protocol:** [Protocol v0.2](../protocol.md)
**Decision:** [DR-0003](../../docs/decisions/DR-0003-g1-game-pilot-launch.md)

G1 是探索性端到端 Pilot，用于验证 A/B/C 条件是否可运行、评分是否出现天花板或地板效应、条件是否泄漏，以及估计 Incident 内与 Incident 间方差。G1 不检验正式效应，不进入 F1，也不能支持跨行业结论。

## Frozen target design

| Item | G1 target |
|---|---|
| Domain | Skybound Guilds（虚构游戏） |
| Incidents | 3 |
| Core conditions | A Baseline；B Equal-length Domain Notes；C Full ABU |
| Replicates | 每个 `Incident × condition` 5 次 |
| Analysis outputs | 45 |
| Primary outcomes | RCC@3、HQI、DEE，分别报告 |
| Guardrails | BEI、OWR |
| Judges | 2 名独立空白上下文评分者；触发条件下增加独立裁决者 |
| Interpretation | Exploratory only |

## Package

- [analysis-instructions.md](./analysis-instructions.md)：所有分析运行共享的研究指令；
- [analysis-prompt.md](./analysis-prompt.md)：所有条件共享的可观察输出契约；
- [runtime-lock.md](./runtime-lock.md)：模型、上下文、工具、预算和运行窗口；
- [generate-randomization.mjs](./generate-randomization.mjs)：确定性生成运行顺序、Answer ID 和 Judge 顺序；
- [randomization.md](./randomization.md)：受限的条件映射与盲评顺序；
- [build-run-packet.mjs](./build-run-packet.mjs)：按 Run ID 生成不含文件名和条件代码的分析输入包；
- [audit-inputs.mjs](./audit-inputs.mjs)：条件长度、结构、泄漏词和文件完整性审计；
- [pilot-lock.md](./pilot-lock.md)：G1 启动门禁与封存记录；
- [deviation-template.md](./deviation-template.md)：运行故障或协议偏离模板。

案例输入见 [references/game](../../references/game/)。运行产物写入 [results/g1-game-pilot-v0.1](../results/g1-game-pilot-v0.1/)。

## Role and access matrix

| Role | Allowed | Forbidden before submission |
|---|---|---|
| Case author | 全部案例与 Business Reality | 生成被测回答或主要评分 |
| Run operator | Randomization、分析可见输入、原始输出目录 | 修改案例、输出或评分锚点 |
| Analysis run | 分配到的 A/B/C 输入和共享 Prompt | Business Reality、条件代码、其他运行、Answer map |
| Blind formatter | 原始输出和 Answer ID | Business Reality、评分、揭盲结果 |
| Judges | Incident、Semantic Layer、Business Reality、匿名输出、Rubric | 条件代码、条件文档、另一 Judge 分数、一致性统计 |
| Adjudicator | 争议输出、Case、原始分数、裁决规则 | 条件代码和非必要的其他输出 |

所有 AI 角色使用新的空白上下文会话。使用同一基础模型只能构成操作独立性，不构成模型多样性或人类专家有效性证据。

## Launch sequence

1. 完成并审计案例和 A/B/C 输入；
2. 生成并封存随机化、Answer ID 和 Judge 顺序；
3. 记录输入哈希、锁定提交和可得运行标识；
4. 只有 [pilot-lock.md](./pilot-lock.md) 明确写为 `Locked for execution` 后才能生成第一个回答；
5. 运行 45 个无状态分析会话并保存原始输出；
6. 匿名化后由两名独立评分者完成全部评分；
7. 保存一致性、必要裁决和偏离后再揭盲；
8. 只报告 Pilot 可运行性、方差和设计缺陷，并据此修订 F1 协议。

## Authority note

[RN-0002](../../research/RN-0002-properties-of-abu.md) 的早期示例使用 B=ABU、C=Domain Notes；较新的 Protocol v0.2 和 DR-0002 使用 B=Domain Notes、C=Full ABU。G1 以后者为唯一权威映射。
