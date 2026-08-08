# G1 Shared Analysis Prompt

**Classification:** Engineering — Shared Run Input
**Status:** Draft Lock Candidate v0.1

分析给定业务 Incident，并严格按以下标题输出：

## 当前诊断

用一段话说明已知现象、最可能发生变化的业务环节，以及当前最重要的不确定性。

## 有序假设

最多 5 项。每项必须包含：

- 假设及业务机制；
- 支持 Evidence；
- 反证、替代解释或缺口；
- 为什么排在当前位置。

## 有序检查

最多 5 项。每项必须包含：

- 可执行检查；
- 它区分哪些候选解释；
- 正结果和负结果分别如何更新判断。

## 表示、证据与未知机制

指出可能的表示不适配、数据限制、业务先验冲突或尚未列出的合理机制；没有时明确写“当前未发现”。

## 结论与置信度

给出当前结论、`Low / Medium / High` 置信度，并说明最可能推翻结论的一项新 Evidence。
