# G0-C02 — Maintenance Work-order Delay

**Classification:** Calibration Material

**Status:** Synthetic — Excluded from Benchmark

**Related Glossary:** [GLOSSARY.md](../../../GLOSSARY.md)

## Incident

工业设备维护平台的紧急工单按时完成率从 88% 降至 63%。下降始于备件目录重编码上线后的第二天，主要集中在压缩机类工单。

## Semantic Layer

- `work_order_created`、`technician_assigned`、`technician_accepted`、`technician_arrived`、`part_scanned`、`work_order_completed`；
- SLA：创建后 8 小时内完成；
- 可用维度：设备家族、故障码、技术员、服务区域、仓库、部件 SKU、目录版本；
- 工单完成时间拆分为等待接单、路程、现场处理和等待部件。

## Available Evidence

1. 等待接单和路程时间稳定；
2. 压缩机工单的现场处理时间与等待部件时间上升；
3. 两个仓库的 `part_scan_rejected` 从 2% 上升到 31%；
4. 仓库实物盘点显示常用替换件库存充足；
5. 目录重编码把旧兼容组拆成新 SKU，但部分设备—部件兼容映射未迁移；
6. 技术员人数、排班、工单量和故障严重度构成稳定；
7. 可查询部件扫描、兼容映射、人工放行和工单阶段时间。

## Business Reality

目录迁移遗漏部分压缩机型号与替换件的兼容映射。系统把实际可用的部件判定为不兼容，技术员等待人工放行，导致工单超时。

### Acceptable cause set

- 目录重编码遗漏设备—部件兼容映射；
- 机制等价表述：错误的兼容性校验拒绝可用部件并增加人工放行等待。

### Partial mechanisms

- “备件扫描问题”；
- “目录迁移问题”，但没有解释如何增加完成时间。

### Incorrect alternatives

- 技术员短缺；
- 路线优化退化；
- 工单量激增；
- 压缩机故障变得更严重。
