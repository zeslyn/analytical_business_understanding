# G1 Runtime Lock

**Classification:** Engineering — Preregistration
**Status:** Draft Lock Candidate v0.1
**Study ID:** `G1-GAME-PILOT-V0.1`
**Last updated:** 2026-08-08

> 在 [pilot-lock.md](./pilot-lock.md) 封存 Git commit 和全部输入哈希前，不得生成分析输出。

## Analysis runtime

| Field | Frozen G1 value |
|---|---|
| Provider / surface | OpenAI Codex Desktop managed runtime |
| Model alias / exact build | Inherited task model；exact build `Not exposed`，运行前记录最高可得平台标识 |
| API / runtime version | `Not exposed`；记录 Codex surface、日期和 canonical task ID |
| Study instructions | [analysis-instructions.md](./analysis-instructions.md)，hash 在 pilot lock 封存 |
| Analysis prompt | [analysis-prompt.md](./analysis-prompt.md)，hash 在 pilot lock 封存 |
| Sampling parameters | Platform default；temperature 和 seed `Not exposed` |
| Visible response budget | 最多 5 个假设、5 个检查，目标不超过 1,200 个中英文词元；硬 Token cap `Not exposed` |
| Context order | Study instructions → condition document（B/C only）→ Semantic Layer → Incident → shared prompt |
| Tool access | 分析会话禁止工具调用和外部检索 |
| Memory | 每次运行新建空白上下文；不得 fork 当前 Case-author 对话 |
| Replicates | 每个 `Incident × condition` 5 次，共 45 次 |
| Retry | 仅技术故障按原配置重试 1 次；拒答、空洞或截断是有效结果 |
| Run window | 锁定提交后开始；45 个回答完成或检测到模型身份/平台行为变化时结束 |

托管运行时未暴露的字段不事后猜填。如果运行时在首个回答前暴露更精确的模型或配置标识，必须先更新并重新封存本文件；若在运行中发生变化，立即停止并记录偏离。

## Condition inputs

| Condition | Ordered analyst-visible documents |
|---|---|
| A — Baseline | `SEMANTIC.md` → assigned Incident → shared prompt |
| B — Equal-length Domain Notes | `DOMAIN_NOTES.md` → `SEMANTIC.md` → assigned Incident → shared prompt |
| C — Full ABU | `BUSINESS.md` → `SEMANTIC.md` → assigned Incident → shared prompt |

文件名和路径不进入模型可见正文。所有输入以正文拼接并用中性分隔符隔开；分析回答不得提及条件代码或输入文件来源。

## Judge runtime

- 两名主要 Judge 使用不同的空白上下文会话，评分同一批 45 个匿名回答；
- Judge 类型在首份评分前冻结为独立 AI Agent；
- Judge 可读取对应 Incident、Semantic Layer、Business Reality、匿名回答、Rubric 和 Judging Form；
- Judge 不可读取 condition map、条件文档、另一 Judge 评分或一致性结果；
- 每名 Judge 的实际 task/session 标识、可得模型标识、指令 hash 和输出 hash 在评分前后记录；
- 相差超过 1 分、根因映射分歧或 `candidate-valid-alternative` 触发独立第三方裁决；
- 同源模型风险必须在结果中披露。

## Role separation

当前主任务负责案例写作和运行编排，因此不得作为分析回答生成会话或主要 Judge。分析运行、Judge 和 Adjudicator 必须是 `fork_turns=none` 的独立空白任务，且只获得角色允许的材料。
