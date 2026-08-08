# Benchmark Judging Form

**Classification:** Research / Engineering

**Status:** Draft — Not Calibrated

**Version:** 0.2

**Related Protocol:** [protocol.md](./protocol.md)

**Related Rubric:** [scoring-rubric.md](./scoring-rubric.md)

**Related Glossary:** [GLOSSARY.md](../GLOSSARY.md)

> 每名评分者为每个匿名 Answer 单独复制一份本表。不得在提交前查看另一名评分者的记录或实验条件。

## 1. Record

| Field | Value |
|---|---|
| Study ID | |
| Incident ID / version | |
| Answer ID | |
| Judge ID | |
| Judge type（Human / AI Agent） | |
| Judge provider / exact model version（AI） | |
| Session / Run ID | |
| Judge system / prompt hash（AI） | |
| Sampling parameters / context order（AI） | |
| Tool access | |
| Known model or author co-origin risk | |
| Rubric version / hash | |
| Started at | |
| Submitted at | |
| Refusal / empty / truncated | |
| Required sections present | |
| Hypotheses counted（max 5） | |
| Checks counted（max 5） | |

## 2. Root-Cause Mapping

| Rank | Hypothesis summary | Acceptable cause / partial mechanism / symptom / incorrect / candidate-valid-alternative | Evidence |
|---:|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**RCC@3（0–4）：**
**Reason and quoted evidence：**

## 3. Hypothesis Quality Index

| Dimension | Score（0–4） | Quoted evidence and reason |
|---|---:|---|
| Relevance | | |
| Mechanistic Specificity | | |
| Testability | | |
| Prioritization | | |

**HQI（mean of four dimensions）：**

## 4. Diagnostic Evidence Efficiency

### Checks

| Rank | Check summary | Valid / invalid | Invalid reason or discriminating value |
|---:|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

| Dimension | Score（0–4） | Quoted evidence and reason |
|---|---:|---|
| First Discriminating Evidence | | |
| Valid Check Ratio Score | | |

**DEE（mean of two dimensions）：**

## 5. Guardrails

| Dimension | Score（0–4） | Quoted evidence and reason |
|---|---:|---|
| Business and Evidence Integrity | | |
| Open-world Resilience | | |

| Count | Value |
|---|---:|
| Fabricated evidence | |
| Material business conflicts | |
| Unsupported material claims | |

## 6. Exploratory Dimensions

| Dimension | Applicable? | Score / value | Evidence and reason |
|---|---|---:|---|
| Representation Fit | | | |
| Perturbation Detection and Recovery | | | |
| Stated Confidence | | | |

## 7. Flags

- [ ] Candidate valid alternative requires adjudication
- [ ] Root-cause equivalence is ambiguous
- [ ] A primary subscore may differ by more than 1 point across judges
- [ ] Invalid-check classification may change DEE by more than 1 point
- [ ] Material business or evidence conflict
- [ ] Possible condition leakage
- [ ] Other protocol issue

**Flag details：**

## 8. Independent Judgment

**One-sentence diagnosis of this answer’s analytical quality：**

**Anything that should be decided by the adjudicator：**

I confirm that I completed this form in an independent session and did not access the condition code, Answer Key, another Judge record, or interim reliability statistics.

- Judge:
- Date:
