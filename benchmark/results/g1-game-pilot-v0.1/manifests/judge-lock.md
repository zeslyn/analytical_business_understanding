# G1 Blind Judging Lock

**Study ID:** `G1-GAME-PILOT-V0.1`
**Status:** Locked for Blind Judging
**Date:** 2026-08-09

## Gate

- [x] 45 / 45 raw analysis outputs complete;
- [x] 45 / 45 blinded outputs byte-identical to their mapped raw outputs;
- [x] two independent blinded orders contain every Answer ID exactly once;
- [x] Rubric v0.2 and Judging Form v0.2 fixed before the first score;
- [x] Judge packet contains only permitted scoring material and no raw Run ID;
- [x] Judge output schema, exploratory applicability and adjudication flags fixed;
- [x] both primary Judges fixed as independent blank-context AI Agents;
- [x] same-provider/model-family common-error risk acknowledged;
- [x] reliability and unblinding remain closed until both score files are sealed.

## Fixed assets

| Asset | SHA-256 |
|---|---|
| Judge instructions | `21486cd23637526b0b3b57224efa65974deb3eecd898e46f9ab20385b11695b6` |
| Judge packet loader | `9e2cd2b482b6551b0ac2e629106329ef679f9fd2bb7de7d1f4168bfb52932a02` |
| Scoring Rubric v0.2 | `5047a07cc32bdb5a8ce69963099e09503f7cfc21afa173499e158c7d204949cb` |
| Judging Form v0.2 | `12569e34479908b6c1d05f38f3866f0ee7d1c1aaffa1f470b94f1e29ea0accc2` |
| Shared Semantic Layer | `d4a03aeb8f87227cd907a87a885116d2d0a7f2d50732c5622b5ab62aba5dca5b` |
| Hidden Business Reality | `5e7f9a5c0948bc58ab08e9fc34aece78147f042a55716756b8180028f1d53ebd` |
| G1-J01 complete packet | `344ef81597d2cbfdb451258bf2ce95e3751fa482c5cb77980d0b4a5ce653b30c` |
| G1-J02 complete packet | `e0dc212652be599cba4f539b67d7c0b3faf6a30ba996bd2f92d928109faee80c` |

- Judge packet implementation commit: `a633aea`
- Analysis-output completion commit: `877a3d99a0d105f0c31a5bf2e37eea76dab5035a`
- Judge type: independent AI Agent
- Provider / model: OpenAI Codex managed runtime; inherited task model; exact build `Not exposed`
- Sampling parameters: platform default; `Not exposed`
- Context order: Judge instructions → Rubric → Judging Form → Semantic Layer → Business Reality → three Incidents → 45 anonymous Answers in the assigned frozen order
- Tool access: one controlled packet-loader call; thereafter only `apply_patch` writes to the assigned score file; no other reads, tools or network
- Exploratory applicability: Representation Fit `N/A`; Perturbation Detection and Recovery `N/A`
- Output format: one run record plus exactly 45 JSONL answer records
- Approval: project maintainer instruction to continue after 45 / 45 analysis outputs
- Approval timestamp: at or before `2026-08-09 13:28:32 CST (+0800)`

## Execution decision

Both Judges may now be dispatched concurrently from blank context. Neither Judge may access a condition document, raw Run ID, another Judge score, reliability statistic or unblinded mapping before independent submission. Reliability computation may begin only after both JSONL files and runtime sidecars pass validation and are committed.
