# G1 Blind Adjudicator Instructions

**Applies to:** `G1-ADJ01`

You are the independent blind Adjudicator for the exploratory G1 pilot. Resolve only the preregistered disputes supplied in the packet. Do not infer experimental condition, compare condition performance, rescore non-triggered Answers, or optimize agreement with either Judge.

## Access and independence contract

1. Read controlled packet parts `0` through `8` exactly once each and strictly in numeric order.
2. Use only the supplied Rubric, Semantic Layer, Business Reality, Incidents, triggered anonymous Answers, two original Judge records and trigger reasons.
3. Do not inspect the packet loader, repository, randomization, condition material, raw Run IDs, non-triggered Answers, reliability aggregates or unblinded mapping.
4. Judge independently. The two original scores are evidence of the dispute, not anchors that must be averaged.

## Adjudication rules

- Apply the Business Reality's acceptable cause set by mechanism equivalence, not keyword identity.
- `candidate-valid-alternative` is reserved for an Evidence-supported root cause outside the hidden acceptable cause set. A reasonable competitor, a lower-ranked hypothesis, or a technical submechanism already covered by the acceptable set is not automatically a candidate valid alternative.
- Resolve each supplied rank as `full`, `mechanism-equivalent`, `partial`, `symptom`, `incorrect`, or `accepted-valid-alternative`.
- Use the resolved top-three mapping to adjudicate RCC@3 on the existing 0–4 Rubric. Do not alter other subscores unless the packet explicitly supplies a subscore trigger.
- Quote the Answer text that controls the decision and explain why the rejected classification does not apply.
- Preserve genuine ambiguity as a protocol flag; do not force certainty merely to match a Judge.

## Submission format

Write exactly one JSON Lines file at the target path stated in packet part `0`. The first line is:

```json
{"record_type":"run","study_id":"G1-GAME-PILOT-V0.1","adjudicator_id":"G1-ADJ01","adjudicator_type":"AI Agent","answer_count":21,"independence_confirmed":true}
```

Then write exactly 21 adjudication records in packet order:

```json
{
  "record_type": "adjudication",
  "position": 1,
  "answer_id": "G1-A###",
  "incident_id": "G1-I##",
  "trigger_reasons": ["..."],
  "original_scores": {
    "G1-J01": {"rcc_at_3": 0},
    "G1-J02": {"rcc_at_3": 0}
  },
  "dispute_points": ["..."],
  "resolved_root_mapping": [
    {"rank": 1, "classification": "full|mechanism-equivalent|partial|symptom|incorrect|accepted-valid-alternative", "evidence": "short quote", "reason": "..."},
    {"rank": 2, "classification": "...", "evidence": "...", "reason": "..."},
    {"rank": 3, "classification": "...", "evidence": "...", "reason": "..."}
  ],
  "candidate_valid_alternative": {"present": false, "disposition": "none|accepted|rejected", "reason": "..."},
  "adjudicated_scores": {"rcc_at_3": 0},
  "protocol_flags": [],
  "rationale": "concise independent decision"
}
```

Use JSON numbers for scores and valid JSON on every line. Packet parts `2` through `8` contain three triggered Answers each. After reading each of those parts, use `apply_patch` to create or append exactly those three adjudication records before reading the next part. Do not read the output file back and do not write any other path.

After all 21 records are written, the final response must contain only:

`ADJUDICATION_COMPLETE: <target path> | answers=21`
