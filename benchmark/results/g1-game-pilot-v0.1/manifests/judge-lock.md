# G1 Blind Judging Lock

**Study ID:** `G1-GAME-PILOT-V0.1`
**Status:** Relocked for Chunked Blind Judging after G1-D002
**Date:** 2026-08-09

## Gate

- [x] 45 / 45 raw analysis outputs complete;
- [x] 45 / 45 blinded outputs byte-identical to their mapped raw outputs;
- [x] two independent blinded orders contain every Answer ID exactly once;
- [x] Rubric v0.2 and Judging Form v0.2 fixed before the first score;
- [x] every Judge packet part contains only permitted scoring material and no raw Run ID;
- [x] Judge output schema, exploratory applicability and adjudication flags fixed;
- [x] both primary Judges fixed as independent blank-context AI Agents;
- [x] same-provider/model-family common-error risk acknowledged;
- [x] reliability and unblinding remain closed until both score files are sealed.

## Fixed assets

| Asset | SHA-256 |
|---|---|
| Judge instructions | `02174870803bfb5027fafdff2105745f1160d54b81072b39c914454b0561f20f` |
| Judge packet loader | `74c0f9ca63ac69988195f045852d9dfe1a27fd7230c3e9c00c360dd9a11fb271` |
| Scoring Rubric v0.2 | `5047a07cc32bdb5a8ce69963099e09503f7cfc21afa173499e158c7d204949cb` |
| Judging Form v0.2 | `12569e34479908b6c1d05f38f3866f0ee7d1c1aaffa1f470b94f1e29ea0accc2` |
| Shared Semantic Layer | `d4a03aeb8f87227cd907a87a885116d2d0a7f2d50732c5622b5ab62aba5dca5b` |
| Hidden Business Reality | `5e7f9a5c0948bc58ab08e9fc34aece78147f042a55716756b8180028f1d53ebd` |
| Judge packet-part hash manifest | `d1cf6cb7293c85bbb42aa2cc8d600fac7982e00ffb64a000b0806559bfcaa281` |

- Initial single-packet implementation commit: `a633aea`
- Chunked-delivery implementation commit: `c4e926d2b4ad58f47945e927b95ab0f0b15c3efc`
- Analysis-output completion commit: `877a3d99a0d105f0c31a5bf2e37eea76dab5035a`
- Judge type: independent AI Agent
- Provider / model: OpenAI Codex managed runtime; inherited task model; exact build `Not exposed`
- Sampling parameters: platform default; `Not exposed`
- Context order: part 0 (Judge instructions → Rubric) → part 1 (Judging Form → Semantic Layer → Business Reality → three Incidents) → parts 2–10 (45 anonymous Answers in five-Answer blocks preserving the assigned frozen order)
- Tool access: 11 controlled packet-loader calls, parts `0`–`10` exactly once in order; thereafter and between Answer parts, only `apply_patch` writes to the assigned score file; no other reads, tools or network
- Exploratory applicability: Representation Fit `N/A`; Perturbation Detection and Recovery `N/A`
- Output format: one run record plus exactly 45 JSONL answer records
- Approval: project maintainer instruction to continue after 45 / 45 analysis outputs
- Approval timestamp: at or before `2026-08-09 13:28:32 CST (+0800)`

## Execution decision

The first single-packet attempts were discarded before scoring under [G1-D002](../G1-D002-judge-packet-truncation.md). Both Judges may be retried concurrently from fresh blank context using the relocked part sequence. Neither Judge may access a condition document, raw Run ID, another Judge score, reliability statistic or unblinded mapping before independent submission. Reliability computation may begin only after both JSONL files and runtime sidecars pass validation and are committed.
