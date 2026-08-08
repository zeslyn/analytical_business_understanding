# Reference Cases

**Classification:** Engineering / Research Evidence
**Status:** Game Pilot In Progress
**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)

参考案例同时承担两个任务：

1. 检查 BUP 能否表达不同业务结构；
2. 为有无 `BUSINESS.md` 的对照实验提供材料。

## 行业顺序

1. [game](./game/) — 第一条端到端 Running Example；
2. [ecommerce](./ecommerce/)；
3. [delivery](./delivery/)；
4. [saas](./saas/)；
5. [advertising](./advertising/)。

只有游戏案例通过完整性、泄漏和可评分性检查后，才扩展其他行业。

## 每个案例的计划结构

```text
BUSINESS.md
DOMAIN_NOTES.md
SEMANTIC.md
incidents/
BUSINESS_REALITY.md
README.md
```

游戏案例已进入 [G1 launch preparation](../benchmark/g1/)；其他四个行业仍保持 Planned。

## 防止自证循环

- `BUSINESS.md` 只描述跨 Incident 稳定的业务规律；
- Incident 不直接包含预设根因；
- `BUSINESS_REALITY.md` 对分析参与者保持隐藏；
- 生成、分析和评分角色应尽可能隔离；
- 案例必须包含能够区分竞争性假设的证据；
- 案例完成后不得针对单次结果修改评分标准。
