# Benchmark Results

**Status:** G0 Complete / G1 Preregistration Assembly
**Related Glossary:** [GLOSSARY.md](../../GLOSSARY.md)

只有在 [实验协议](../protocol.md) 和 [评分量表](../scoring-rubric.md) 完成对应阶段的冻结后，结果才能写入本目录。G0、G1、F1 和 E1 必须使用不同的 Study ID 和目录，不得合并。

建议结构：

```text
<study-id>/
├── preregistration/   # 冻结协议、量表、Decision Record 和哈希
├── manifests/         # Case、运行、随机化和匿名映射清单
├── inputs/            # 条件输入；隐藏答案与评分可见内容分权存放
├── raw-outputs/       # 完整原始输出
├── blinded-outputs/   # 评分用匿名输出
├── scores/            # 两名评分者原始表、裁决和一致性
├── analysis/          # 冻结脚本、模拟测试和最终输出
└── deviations.md      # 技术失败、补跑、偏离和处理
```

每次运行的必填字段和失败运行规则以 `protocol.md` 第 14、17 节为准。

## Current studies

- [g0-calibration-ai-dry-run](./g0-calibration-ai-dry-run/)：G0 独立评分者校准，已完成并可支持 G1 量表门禁；
- [g1-game-pilot-v0.1](./g1-game-pilot-v0.1/)：G1 游戏 Pilot，正在封存输入和运行配置，尚无分析输出。
