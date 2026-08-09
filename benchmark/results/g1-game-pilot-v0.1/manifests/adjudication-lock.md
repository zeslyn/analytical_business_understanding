# G1 Blind Adjudication Lock

**Study ID:** `G1-GAME-PILOT-V0.1`
**Status:** Locked for Independent Blind Adjudication
**Date:** 2026-08-09

## Gate

- [x] both independent Judge score files validated and committed;
- [x] raw inter-Judge reliability computed without condition mapping;
- [x] 21 triggered Answer IDs and exact trigger reasons committed before adjudication;
- [x] Adjudicator packet contains only triggered anonymous Answers, their two original records and permitted case material;
- [x] no raw Run ID, condition document, non-triggered Answer or condition-effect statistic enters the packet;
- [x] output schema fixes original scores, dispute points, resolved mappings, adjudicated RCC and reasons;
- [x] unblinding remains closed until all 21 adjudications are validated and committed.

## Fixed assets

| Asset | SHA-256 |
|---|---|
| Adjudicator instructions | `9d31bf1f600282167f4c7f7b34100bc63cdb7555953159c7982cf2cb11843bc6` |
| Adjudicator packet loader | `0f4d2b3b35e56a22e9e171f3de45f2a59e762fbb7f27a4977aa8fe7996dad401` |
| Adjudication trigger list | `ea274ea0b9e97289ce9aaa49fb34693ce48a7ba851dd663e2f9db9a7af4d0e33` |
| Reliability script | `2c6122b76d707c9d4fa05add5a721c8c6e2b49cffc27f7f4281ce5f1a1809dfa` |
| Reliability report | `97b2dce6e31683cfcfac3426c1ae6e7fc9d3129ac9c6675122c74c91bb8868bb` |
| G1-J01 scores | `2fcb02c809cd302e9a8be630c1edf6bd600662001de8230e8cc5029b9ab3857e` |
| G1-J02 scores | `48aa4cfb665e8ed5b5f3fe665516d678f8e8570041571c9767c4bd4158f45fb1` |

## Packet part hashes

| Part | SHA-256 of emitted packet part |
|---:|---|
| 0 | `e69870aee913b9c5c932455886c8c6f2d02c5384e94f4cd67ef65b8bf233ab35` |
| 1 | `3aaccd31f91d8a4d22d79920d4fb227dab6a461e79f3c9b03f1974e2c7430140` |
| 2 | `1faf801b9f5daa547ee4261feea1847724bbc6320fb2540b5590b24e12013ad4` |
| 3 | `fef2175dfa034389e974e8f33bd2e139bba926659dc13de09b9a03c86ccaaedb` |
| 4 | `c3f26e0a5007e20445ebedda32446a57de03c4dca6663692b9a7601cedcb0327` |
| 5 | `eb0f2099929b1c8e0a5e82fa0421c171421202022e6d81027bf0553abeafa793` |
| 6 | `b7f3b938b58b582c26dc34b9f60bdeeba987ced46864ee966f22216c34d34102` |
| 7 | `833ec2c514617859e8c92146da968b6905ffaaf0e3acd91139b90ca6bc2888c2` |
| 8 | `85bf80c8ef7f2e07d37dad73977939472a9252452fb68c6ce103b080d1476b37` |

- Adjudicator implementation commit: `3315cc5`
- Trigger and reliability commit: `1cc245c325cbfced6c8db4c83c351efc0bc4b23f`
- Adjudicator type: independent blank-context AI Agent
- Provider / model: OpenAI Codex managed runtime; inherited task model; exact build `Not exposed`
- Sampling parameters: platform default; `Not exposed`
- Context order: part 0 (instructions → Rubric) → part 1 (Semantic Layer → Business Reality → three Incidents) → parts 2–8 (21 disputes in three-Answer blocks)
- Tool access: nine controlled packet reads, parts `0`–`8` exactly once in order; `apply_patch` only to the assigned adjudication file; no other reads, tools or network
- Co-origin risk: same provider and inherited model lineage as answer Agents and Judges; operational independence only
- Approval: project maintainer instruction to continue the G1 workflow
- Approval timestamp: at or before `2026-08-09 14:02:05 CST (+0800)`

## Execution decision

`G1-ADJ01` may now be dispatched in a fresh `fork_turns=none` task. Only the 21 committed trigger records may be adjudicated. The condition map and unblinded analysis remain unavailable until the adjudication file and runtime sidecar are validated and committed.
