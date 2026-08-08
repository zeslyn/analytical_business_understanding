# G0 Calibration Run Record

**Status:** Template — Copy Per Run

**Calibration set version:** 0.1

**Related Manifest:** [manifest.md](./manifest.md)

**Related Order:** [randomized-order.md](./randomized-order.md)

**Related Rubric:** [scoring-rubric.md](../scoring-rubric.md)

> 将本文件复制到受控结果目录后填写。原始评分、统计结果和裁决记录必须保留；不得在揭示 Answer Key 后覆盖原始分数。

## 1. Run Identity

- Run ID:
- Run owner:
- Start time / timezone:
- Independent scoring complete time / timezone:
- Answer Key reveal time / timezone:
- Calibration set Git commit / hash:
- Rubric version / SHA-256:
- Judging form version / SHA-256:
- Randomization seed: `G0-v0.1-20260808`
- Canonical order SHA-256: `d1e776d63556283548f819e91acedefe06caf7eba4aea5d5db52ace17359e6a6`

## 2. Role Separation

| Role | Type | Anonymous / Session ID | Runtime / config hash | Access before reveal | Conflict or limitation |
|---|---|---|---|---|---|
| Run operator | Human / AI |  |  |  |  |
| Judge 1 | Human / AI |  |  | Case, Answer, Rubric only |  |
| Judge 2 | Human / AI |  |  | Case, Answer, Rubric only |  |
| Adjudicator | Human / AI |  |  | Case, Answer, Rubric; no condition code |  |

## 3. Raw Score Artifacts

| Artifact | Path / object ID | SHA-256 | Saved before reveal? |
|---|---|---|---|
| Judge 1 scores |  |  |  |
| Judge 2 scores |  |  |  |
| Statistics input |  |  |  |
| Adjudication record |  |  |  |

## 4. Distribution and Reliability

对 RCC@3、四个 HQI 子维度、两个 DEE 子维度、BEI 和 OWR 分别填写。`Distinct levels` 使用两名评分者原始分数的并集。

| Dimension | N answers | Distinct levels | Ordinal alpha | Exact agreement | Within-1 agreement | Gate result |
|---|---:|---|---:|---:|---:|---|
| RCC@3 |  |  |  |  |  |  |
| Relevance |  |  |  |  |  |  |
| Mechanistic Specificity |  |  |  |  |  |  |
| Testability |  |  |  |  |  |  |
| Prioritization |  |  |  |  |  |  |
| First Discriminating Evidence |  |  |  |  |  |  |
| Valid Check Ratio Score |  |  |  |  |  |  |
| Business and Evidence Integrity |  |  |  |  |  |  |
| Open-world Resilience |  |  |  |  |  |  |

Gate interpretation：每个主要子维度目标 `α ≥ 0.80`；`0.667 ≤ α < 0.80` 仅为暂定；`α < 0.667` 停止。每个子维度还应覆盖至少 3 个分值；分布退化时不得只依据 alpha 点估计放行。

## 5. Disagreements and Adjudication

| Answer | Dimension | Judge 1 | Judge 2 | Quoted evidence | Issue type | Adjudicated value | Rationale |
|---|---|---:|---:|---|---|---:|---|
|  |  |  |  |  |  |  |  |

Issue type 可使用：`difference-over-1`、`root-equivalence`、`candidate-valid-alternative`、`valid-check-ratio`、`business-conflict`。

## 6. Answer Key Discussion

- Answer Key opened only after raw scores and initial statistics were saved: Yes / No
- Material defects found:
- Anchor ambiguities found:
- Differences that reflect legitimate judgment rather than error:
- G0-A009 disposition:

## 7. Rubric Revision Log

| Change ID | Trigger | Section changed | Before | After | Effect on construct | New holdout required? |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  | Yes / No |

## 8. Gate Decision

- [ ] Raw scores preserved and hashed;
- [ ] Every primary subdimension covers at least 3 score levels;
- [ ] Reliability statistics completed;
- [ ] Required adjudications completed;
- [ ] Rubric unchanged, or all changes documented;
- [ ] Unseen Holdout Set prepared if Rubric changed;
- [ ] Every primary subdimension reached `α ≥ 0.80` on an eligible set;
- [ ] G1 lock recommendation recorded.

**Decision:** Stop / Revise and recalibrate / Tentative only / Eligible for G1 lock

**Rationale:**

**Approved by / date:**
