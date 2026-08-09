# G1 Blind Adjudication Report

**Study ID:** `G1-GAME-PILOT-V0.1`  
**Status:** Complete; eligible for unblinding after this report and its source files are committed  
**Scope:** 21 preregistered anonymous Answer triggers; no condition mapping used

## Technical summary

Independent Adjudicator `G1-ADJ01` completed all 21 required blind decisions. Nineteen Answers carried a `candidate-valid-alternative` flag; all 19 candidates were rejected because they were either already covered by the acceptable mechanism, represented only an adjacent partial mechanism, or lacked affirmative Evidence. The remaining two triggers concerned whether a third-ranked hypothesis was mechanism-equivalent or partial; both were adjudicated as mechanism-equivalent, producing RCC@3 = 3.

No protocol flag was raised. The adjudication changes no unanimous RCC result: 17 records remain `4`, two remain `2`, and the two `3/2` Judge disagreements resolve to `3`.

## Decision ledger

| Answer | J01 RCC | J02 RCC | Adjudicated RCC | Candidate disposition | Resolution |
|---|---:|---:|---:|---|---|
| G1-A007 | 4 | 4 | 4 | Rejected | rank 2 is mechanism-equivalent; rank 3 lacks supporting Evidence |
| G1-A008 | 4 | 4 | 4 | Rejected | adjacent order/idempotency paths are not supported alternatives |
| G1-A009 | 3 | 2 | 3 | None | rank 3 configuration mapping is mechanism-equivalent |
| G1-A011 | 3 | 2 | 3 | None | rank 3 configuration application is mechanism-equivalent |
| G1-A012 | 4 | 4 | 4 | Rejected | association and async paths are unsupported adjacent mechanisms |
| G1-A015 | 4 | 4 | 4 | Rejected | client/config interaction lacks cross-slice Evidence |
| G1-A016 | 4 | 4 | 4 | Rejected | validation configuration is mechanism-equivalent; order path is partial |
| G1-A022 | 4 | 4 | 4 | Rejected | validation configuration is mechanism-equivalent; state path is partial |
| G1-A023 | 4 | 4 | 4 | Rejected | narrow compatibility and delivery paths lack affirmative Evidence |
| G1-A026 | 4 | 4 | 4 | Rejected | configuration route is covered; provider change is unsupported |
| G1-A027 | 4 | 4 | 4 | Rejected | validation variant is covered; adjacent path lacks Evidence |
| G1-A030 | 4 | 4 | 4 | Rejected | configuration route is covered; provider change is unsupported |
| G1-A031 | 4 | 4 | 4 | Rejected | validation configuration is covered; provider change is unsupported |
| G1-A033 | 4 | 4 | 4 | Rejected | route/config is mechanism-equivalent; idempotency path is partial |
| G1-A034 | 4 | 4 | 4 | Rejected | client/config interaction lacks cross-slice Evidence |
| G1-A035 | 4 | 4 | 4 | Rejected | callback timing and provider-change candidates lack Evidence |
| G1-A037 | 2 | 2 | 2 | Rejected | cohort composition is not supported by observed Evidence |
| G1-A039 | 4 | 4 | 4 | Rejected | route/config is mechanism-equivalent; provider change is unsupported |
| G1-A040 | 4 | 4 | 4 | Rejected | combination incompatibility is covered; provider change is unsupported |
| G1-A043 | 2 | 2 | 2 | Rejected | player/item composition is an unverified aggregate possibility |
| G1-A044 | 4 | 4 | 4 | Rejected | route/config is mechanism-equivalent; order mapping is partial |

## Method and validation

- Trigger set and reasons were generated from the two committed Judge files before adjudication.
- The Adjudicator received only the 21 anonymous disputes, shared case materials and scoring rules in a fixed nine-part sequence.
- Validation confirmed one run record, exactly 21 decisions in frozen order, exact reproduction of both original RCC values, allowed root-mapping labels, valid 0–4 adjudicated RCC values, and absence of Run IDs or condition labels.
- Source: [G1-ADJ01.jsonl](./G1-ADJ01.jsonl); runtime record: [G1-ADJ01.runtime.md](./G1-ADJ01.runtime.md).

## Limitations and next gate

The Adjudicator shares the same provider and inherited model lineage as the answer Agents and Judges. The result demonstrates operationally independent blind execution, not model diversity or human-expert validity. Tables are used instead of charts because the purpose of this artifact is exact decision audit, not pattern discovery.

After the adjudication source, runtime sidecar and this report are committed, the preregistered unblinded descriptive analysis may begin. No confirmatory inference is authorized for G1.
