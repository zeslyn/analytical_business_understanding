# G1-D002 — Judge Packet Tool-output Truncation

**Study ID:** `G1-GAME-PILOT-V0.1`
**Deviation ID:** `G1-D002`
**Status:** Resolved Before Scoring / Fresh-session Retry Required
**Discovered at:** 2026-08-09 13:34 CST
**Discovered by:** G1-J01 and G1-J02; confirmed by Run operator
**Before unblinding:** Yes

## Scope

- Affected Judge attempts: `/root/g1_j01`, `/root/g1_j02`
- Affected Answer scores: none; neither attempt wrote a score file
- Conditions: unavailable to both Judges and not involved in the failure

## Expected protocol

Each Judge would receive one complete controlled packet containing the fixed scoring context and all 45 anonymous Answers, then write one independent JSONL score file.

## Actual event

Both controlled commands exited successfully, but the managed tool truncated the approximately 231 KB stdout response. Each Judge detected that most Answers were missing, stopped before scoring and wrote no file. No score, reliability statistic or unblinded mapping was exposed or produced.

## Cause

The packet was valid but exceeded the managed command tool's per-call output-return limit. The pre-dispatch audit checked packet content and total bytes but did not simulate that runtime return cap.

## Potential impact

- Internal validity: None identified for retained scores, because no score was produced by either failed attempt.
- Construct validity: None identified; Rubric, cases, Business Reality, Answers and frozen Judge orders are unchanged.
- Operational comparability: Low residual risk from replacing one delivery call with 11 ordered parts. Both Judges receive the same partition boundaries and role instructions, while retaining their distinct frozen Answer orders.

## Disposition

Discard both failed attempts as pre-score delivery failures and preserve their canonical task IDs in the Judge log. Relock the loader and instructions for parts `0`–`10`, hash every emitted part, and retry both Judges in new `fork_turns=none` blank-context tasks. Parts `0` and `1` carry shared material; parts `2`–`10` carry five Answers each. Each part is read exactly once in numeric order, and each five-Answer block is appended before the next part is read.

## Approval

- Approved by: Run operator under the accepted G1 protocol and the maintainer instruction to continue
- Decision Record: [DR-0003](../../../docs/decisions/DR-0003-g1-game-pilot-launch.md)
- Date: 2026-08-09
