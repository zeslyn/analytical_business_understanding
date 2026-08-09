# G1 Game Pilot — Exploratory Unblinded Report

**Study ID:** `G1-GAME-PILOT-V0.1`  
**Status:** Complete — operational pilot passed; metric and Case design revision required before F1  
**Date:** 2026-08-09  
**Claim boundary:** Exploratory single-domain synthetic evidence; not a confirmatory ABU effect estimate

## Technical summary

G1 completed the full preregistered workflow: 3 synthetic game Incidents × 3 conditions × 5 independent runs, two blind Judges, reliability analysis, 21 triggered adjudications and condition unblinding. The workflow is executable and the blind artifacts are auditable.

The observed scores do **not** show an exploratory incremental benefit from Full ABU. At the Incident level, Full ABU minus Baseline was `−0.200` for RCC@3, `−0.008` for HQI and `0.000` for DEE; Full ABU minus equal-length Domain Notes was `−0.067`, `−0.025` and `+0.017`. These tiny or negative descriptive differences do not satisfy a specificity pattern, and G1 has no frozen MID or inferential power for advancement claims.

The more important result is a measurement warning. I01 and I03 were already near RCC ceiling under Baseline, while I02 required a narrow configuration-mapping mechanism that none of the conditions reliably surfaced. HQI/DEE components also showed Judge anchor shifts or ceiling effects, and both guardrails were `4` on all 45 Answers. G1 therefore supports redesigning the Cases and Rubric before F1; it does not establish that ABU has no value.

## Gate decisions

| Gate | Result | Evidence-backed interpretation |
|---|---|---|
| End-to-end operability | Pass | 45/45 outputs, two blind score sets, reliability, adjudication and unblinding completed |
| Output contract | Pass | 45/45 required heading sets; no refusal, empty or truncated output |
| Blinding diagnostics | Pass with stated limits | No explicit condition/file markers in answer bodies; same-model lineage remains a shared-bias risk |
| Primary metric readiness | Fail for F1 | Only RCC is reliably discriminating; HQI/DEE components need anchor revision |
| Guardrail readiness | Fail for F1 | BEI and OWR are complete ceilings and cannot establish non-inferiority |
| Exploratory Full ABU increment | Not observed | C is approximately equal to or below A/B on the three primary metrics |
| F1 launch | Closed | Revise and recalibrate Cases, Rubric and Judge design first |

## Key results

Condition values are the unweighted mean of three `Incident × condition` replicate means. The parenthesized value is the between-Incident SD, not an inferential standard error.

| Condition | RCC@3 | HQI | DEE | BEI | OWR |
|---|---:|---:|---:|---:|---:|
| A — Baseline | 3.467 (0.924) | 3.750 (0.265) | 3.717 (0.029) | 4.000 (0.000) | 4.000 (0.000) |
| B — Domain Notes | 3.333 (1.155) | 3.767 (0.252) | 3.700 (0.050) | 4.000 (0.000) | 4.000 (0.000) |
| C — Full ABU | 3.267 (1.102) | 3.742 (0.227) | 3.717 (0.058) | 4.000 (0.000) | 4.000 (0.000) |

Exact paired tables are used instead of a chart because there are only three Incidents and several saturated 0–4 scales; a chart would imply more precision and distributional support than G1 provides.

### Incident × condition means

Values are mean (SD) across five runs.

| Incident | Condition | RCC@3 | HQI | DEE |
|---|---|---:|---:|---:|
| I01 — Activation | A | 4.000 (0.000) | 3.850 (0.205) | 3.750 (0.000) |
| I01 — Activation | B | 4.000 (0.000) | 3.800 (0.190) | 3.750 (0.000) |
| I01 — Activation | C | 3.800 (0.447) | 3.775 (0.137) | 3.750 (0.000) |
| I02 — Engagement | A | 2.400 (0.548) | 3.450 (0.069) | 3.700 (0.274) |
| I02 — Engagement | B | 2.000 (0.000) | 3.500 (0.000) | 3.700 (0.274) |
| I02 — Engagement | C | 2.000 (0.000) | 3.500 (0.000) | 3.750 (0.250) |
| I03 — Purchase | A | 4.000 (0.000) | 3.950 (0.069) | 3.700 (0.112) |
| I03 — Purchase | B | 4.000 (0.000) | 4.000 (0.000) | 3.650 (0.137) |
| I03 — Purchase | C | 4.000 (0.000) | 3.950 (0.069) | 3.650 (0.379) |

### Preregistered descriptive contrasts

| Contrast | Metric | I01 | I02 | I03 | Mean | Median | W/T/L |
|---|---|---:|---:|---:|---:|---:|---:|
| C − A | RCC@3 | −0.200 | −0.400 | 0.000 | −0.200 | −0.200 | 0/1/2 |
| C − A | HQI | −0.075 | +0.050 | 0.000 | −0.008 | 0.000 | 1/1/1 |
| C − A | DEE | 0.000 | +0.050 | −0.050 | 0.000 | 0.000 | 1/1/1 |
| C − B | RCC@3 | −0.200 | 0.000 | 0.000 | −0.067 | 0.000 | 0/2/1 |
| C − B | HQI | −0.025 | 0.000 | −0.050 | −0.025 | −0.025 | 0/1/2 |
| C − B | DEE | 0.000 | +0.050 | 0.000 | +0.017 | 0.000 | 1/2/0 |

No bootstrap interval, permutation test or Holm decision was run: the accepted G1 design explicitly limits this Pilot to exploratory operability and variance estimation, and three Incidents cannot support the F1 advancement rule.

## Variance, ceilings and Case discrimination

| Metric | Mean within-cell variance A | B | C | Main diagnostic |
|---|---:|---:|---:|---|
| RCC@3 | 0.1000 | 0.0000 | 0.0667 | Incident differences dominate; I01/I03 saturate while I02 stays low |
| HQI | 0.0172 | 0.0120 | 0.0078 | Very narrow range near the top of the scale |
| DEE | 0.0292 | 0.0313 | 0.0687 | Some run variation, but small condition contrasts |
| BEI | 0.0000 | 0.0000 | 0.0000 | 45/45 at ceiling |
| OWR | 0.0000 | 0.0000 | 0.0000 | 45/45 at ceiling |

RCC@3 used three levels (`2, 3, 4`) but 29/45 final scores were `4`. HQI had 17/45 exact ceiling values; BEI and OWR had 45/45. The design therefore cannot use the guardrails to demonstrate absence of harm—only that no Judge recorded harm under the current anchors.

The Case pattern explains much of the weak discrimination:

- I01 and I03 provide strong Incident evidence that lets Baseline recover the mechanism, leaving little headroom for stable ABU knowledge.
- I02's hidden full answer requires a specific level-boundary/high-tier cost-table mapping. The Full ABU document contains general progression and evidence-selection knowledge, but not that Incident-specific mapping; all three conditions mostly identify the visible cost increase rather than the narrower generating mechanism.
- This combination tests whether the model can solve obvious or narrowly keyed mechanisms more than whether ABU supplies incremental diagnostic knowledge.

## Scoring reliability and sensitivity

RCC@3 was stable (`ordinal α = 0.988`; 43/45 exact). Relevance, Prioritization and First Discriminating Evidence showed Judge anchor shifts or below-gate alpha; Testability, Valid Check Ratio, BEI and OWR were degenerate ceilings. HQI and DEE condition differences must therefore be treated as low-information descriptive diagnostics, even though they are arithmetically reproducible.

Using only the two raw Judge means and ignoring all adjudicated RCC values changes `C − A` RCC from `−0.200` to `−0.133`; `C − B` remains `−0.067`. The direction and decision do not change. G1-D001 affects all three first-block conditions symmetrically and G1-D002 retained no failed-attempt score, so neither produces a condition-specific exclusion sensitivity set.

## Execution and leakage diagnostics

- 45/45 answer bodies contain every required section; 0 refusals, empty outputs or truncations;
- all 45 bodies have unique SHA-256 values; no exact duplicate replicate bodies;
- no answer body contains explicit `Condition A/B/C`, `BUSINESS.md`, `DOMAIN_NOTES`, `Full ABU` or equivalent frozen markers;
- mean answer length is 1,684 code points for A, 1,685 for B and 1,652 for C;
- 6 A, 6 B and 7 C Answers carried a Judge adjudication flag; all 21 triggers were resolved before unblinding;
- no invalid check or material integrity count was recorded.

These checks do not prove that a Judge could never infer a condition from prose style. They show no explicit marker or gross output-length imbalance in the frozen artifacts.

## Scope, data and method

- Unit: one `Incident × condition × replicate` answer; 45 answers total.
- Inference unit for design diagnostics: Incident; 3 synthetic game Incidents.
- Conditions: A Baseline, B equal-length Domain Notes, C Full ABU.
- Primary outcomes: RCC@3, HQI and DEE, reported separately; guardrails: BEI and OWR.
- Scoring: triggered RCC uses the independent adjudication value; all other values use the two-Judge mean. Untriggered scores also use the two-Judge mean.
- Aggregation: five replicate scores first averaged within each `Incident × condition`; condition summaries and contrasts then use the three Incident means.
- Reproduction: run `node benchmark/results/g1-game-pilot-v0.1/analysis/analyze-g1.mjs` from the repository root.

## Limitations and robustness boundary

- Three synthetic Incidents from one game cannot estimate cross-industry validity or a stable effect distribution.
- Answers, Cases, Judges and Adjudicator share an OpenAI Codex provider/model lineage. Session isolation gives operational independence, not model diversity or human-expert validity.
- Exact model build, temperature and model seed were not exposed.
- The same authoring chain created the synthetic Cases and knowledge documents, increasing shared-pattern and construct-validity risk.
- No MID, guardrail non-inferiority margin or F1 power design is frozen; none may be selected from these observed condition effects.
- Absolute scoring did not estimate Judge self-consistency or pairwise position sensitivity.
- G1-D001 and G1-D002 were recorded before unblinding and do not justify post-hoc output exclusion.

## Recommended next work

1. Keep F1 data generation closed. Treat G1 as a successful workflow Pilot and an unsuccessful metric-readiness check.
2. Redesign calibration and Pilot Cases to create genuine diagnostic ambiguity: Baseline should retain multiple plausible mechanisms, while Full ABU supplies reusable discriminating knowledge without encoding the Incident answer.
3. Revise Relevance, Prioritization and First Discriminating Evidence anchors; add deliberately weaker and unsafe outputs so Testability, Valid Check Ratio, BEI and OWR can leave the ceiling.
4. Clarify `candidate-valid-alternative`: require affirmative Evidence for a hidden-set alternative, not mere plausibility or an unexcluded competitor.
5. Recalibrate with repeated or more diverse Judges before F1; add a self-consistency or position-sensitivity design if pairwise scoring is introduced.
6. Set MID and guardrail margins from decision consequences and expert judgment, then simulate power with substantially more independent Incidents. Use G1 variance only as a rough input, never the observed G1 effect as the target.

## Further questions

- What ABU knowledge can be withheld from the Incident while remaining reusable and genuinely discriminating?
- Should RCC reward correct mechanism level separately from correct visible failure stage, especially when the hidden key is narrower than the available Evidence?
- How many hard negative and unsafe answers are needed to validate BEI/OWR anchors before they are used as guardrails?
- Would a two-stage design—root selection followed by evidence-plan scoring—separate Case solvability from ABU-enabled diagnostic efficiency more cleanly?

## Source notes

Primary sources are the frozen [randomization map](../../../g1/randomization.md), [Judge and adjudication artifacts](../scores/), [reliability report](../scores/reliability-report.md), [deviation register](../deviations.md) and the reproducible [analysis script](./analyze-g1.mjs). This repository-native Markdown report is the canonical artifact so every conclusion remains versioned beside its source evidence.
