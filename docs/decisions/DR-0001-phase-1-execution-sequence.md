# DR-0001 — Phase 1 Execution Sequence and Evidence Gates

**Status:** Accepted  
**Date:** 2026-07-18  
**Classification:** Research / Engineering  
**Owners:** Project maintainer  
**Related Open Questions:** OQ-0005, OQ-0006, OQ-0007  
**Related Glossary:** [GLOSSARY.md](../../GLOSSARY.md)

## Decision

第一阶段采用以下执行顺序：

1. 建立仓库治理、provisional Glossary 和 Open Questions；
2. 按 RN-0001 → RN-0004 → RN-0002 → RN-0003 建立理论最小闭环；
3. 在案例生成和正式实验前创建评测协议与评分量表的预注册版本；
4. 起草 RFC-0000 至 RFC-0003；
5. 先完成游戏单行业端到端试验；
6. 根据游戏试验修订 Research Notes、Glossary 和 RFC；
7. 游戏试验通过完整性、泄漏和可评分性门槛后，再扩展另外四个行业；
8. 完成跨行业验证、正式 Benchmark 和研究总结。

`GLOSSARY.md` 在理论和游戏试验完成前保持 `Provisional`，不提前标记为 Frozen。

## Reason

Project Charter 给出了正确的宏观顺序，但按字面先冻结 Glossary、完成全部 RFC、再进行案例验证，存在三类风险：

- 早期定义可能反向限制理论研究；
- 规范可能在没有 Running Example 的情况下过度设计；
- 评分方法可能在看到案例或结果后被调整，削弱实验可信度。

单行业闭环可以用较低成本尽早暴露概念、协议和实验设计问题。

## Alternatives

### A. 完全按照 Charter 的八个步骤线性执行

优点是简单；缺点是反馈出现较晚，RFC 和跨行业材料可能大量返工。

### B. 先生成五行业案例，再归纳理论

优点是案例丰富；缺点是容易让案例生成方式隐式定义 ABU，并扩大自证循环。

### C. 当前决定：理论、规范和游戏案例迭代

在保持 Research Before Engineering 的同时，引入早期经验反馈和明确阶段门槛。

## Tradeoffs

- 会增加早期文档版本和修订次数；
- RFC 在较长时间内保持 Draft；
- 游戏案例的设计需要在理论尚未完全稳定时谨慎进行；
- 换取更早发现错误、更低跨行业返工和更可信的评测流程。

## Evidence and Falsification

当前决定主要基于研究设计风险控制，而不是实验结果。

如果游戏试验证明早期案例无法为理论提供有效反馈，或预注册严重阻碍必要的探索性研究，应重新评审本决定，并明确区分探索性试验与验证性试验。

## Impacted Documents

- `README.md`
- `GLOSSARY.md`
- `OPEN_QUESTIONS.md`
- `research/README.md`
- `rfcs/README.md`
- `references/README.md`
- `benchmark/README.md`

Project Charter v0.1 作为历史来源保持不变。

## Open Questions

- Glossary 的正式冻结标准仍未确定；
- 游戏试验的具体通过门槛仍需在协议中操作化；
- 探索性运行是否允许、如何与正式 Benchmark 隔离尚未决定。

## Follow-up

- [x] 完成 RN-0001 至 RN-0004 的第一轮 Draft，形成理论最小闭环；
- [ ] 填充 Benchmark protocol 和 scoring rubric；
- [ ] 创建 RFC-0000；
- [ ] 在游戏案例启动前评审 OQ-0006 和 OQ-0007。
