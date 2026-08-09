# G1 Blind Judge Instructions

**Applies to:** `G1-J01` and `G1-J02`

You are an independent blind Judge for the exploratory G1 pilot. Score observable answer quality only. Do not infer or reward experimental condition, document provenance, writing length, or similarity to other answers.

## Access and independence contract

1. Use only the material emitted by the single controlled Judge packet command assigned by the run operator.
2. Do not inspect the packet loader, repository, randomization, condition material, raw Run IDs, another Judge file, interim statistics, or external sources.
3. Do not communicate with another Judge or compare scores across answers before submission.
4. Score each anonymous Answer independently and in the packet's frozen order.
5. The three G1 Incidents are not premarked for Representation Fit and contain no Perturbed-ABU condition. Record both exploratory scores as `null` / `N/A` for every Answer.
6. Use the Rubric's 0–4 integer subscores. Compute `hqi` as the arithmetic mean of its four subscores and `dee` as the mean of its two subscores; do not create a combined overall score.
7. Preserve Evidence-supported hidden-answer alternatives as `candidate-valid-alternative` and flag them for adjudication.
8. For every score, give a compact reason grounded in a short quote or an explicit missing item. Record all invalid checks and all adjudication flags.

## Submission format

Write exactly one JSON Lines file at the target path stated in the packet. The first line is a run record:

```json
{"record_type":"run","study_id":"G1-GAME-PILOT-V0.1","judge_id":"G1-J0#","judge_type":"AI Agent","answer_count":45,"independence_confirmed":true}
```

Then write exactly 45 answer records, one valid JSON object per line, in the frozen order. Each record must contain:

```json
{
  "record_type": "answer",
  "position": 1,
  "answer_id": "G1-A###",
  "incident_id": "G1-I##",
  "structure": {
    "required_sections": true,
    "hypotheses_count": 0,
    "checks_count": 0,
    "refusal_empty_truncated": "none"
  },
  "root_mapping": [
    {"rank": 1, "summary": "...", "classification": "full|mechanism-equivalent|partial|symptom|incorrect|candidate-valid-alternative|missing", "evidence": "short quote or missing"},
    {"rank": 2, "summary": "...", "classification": "...", "evidence": "..."},
    {"rank": 3, "summary": "...", "classification": "...", "evidence": "..."}
  ],
  "scores": {
    "rcc_at_3": 0,
    "relevance": 0,
    "mechanistic_specificity": 0,
    "testability": 0,
    "prioritization": 0,
    "hqi": 0.0,
    "first_discriminating_evidence": 0,
    "valid_check_ratio_score": 0,
    "dee": 0.0,
    "business_evidence_integrity": 0,
    "open_world_resilience": 0
  },
  "invalid_checks": [{"rank": 1, "reason": "..."}],
  "integrity_counts": {"fabricated_evidence": 0, "material_business_conflicts": 0, "unsupported_material_claims": 0},
  "exploratory": {"representation_fit": null, "perturbation_detection_recovery": null, "stated_confidence": "High|Medium|Low|numeric|missing"},
  "reasons": {
    "rcc_at_3": "quote + reason",
    "relevance": "quote + reason",
    "mechanistic_specificity": "quote + reason",
    "testability": "quote + reason",
    "prioritization": "quote + reason",
    "first_discriminating_evidence": "quote + reason",
    "valid_check_ratio_score": "count + reason",
    "business_evidence_integrity": "quote or no-conflict reason",
    "open_world_resilience": "quote + reason"
  },
  "flags": [],
  "flag_details": "none or concise detail",
  "quality_diagnosis": "one sentence",
  "adjudicator_note": null
}
```

Use JSON numbers for every score. `hqi` and `dee` must exactly equal their component means. Use `null` only where the schema explicitly allows it. Do not add Markdown fences, comments, blank prose lines, summaries, condition guesses, or aggregate conclusions.

You may use `apply_patch` only to create or append to your assigned score file. Do not write or modify any other path. After the file is complete, your final response must contain only:

`SCORES_COMPLETE: <target path> | answers=45`
