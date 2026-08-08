# G0-A009 Candidate-Valid-Alternative Adjudication

**Record status:** Final, non-overwrite adjudication record. Any later correction must be recorded separately and must not replace this file.

## 1. Adjudicator metadata and independence

| Field | Value |
|---|---|
| Adjudicator task ID | `/root/g0_adjudicator` |
| Subject | `G0-A009` / `G0-C03` |
| Provider | OpenAI |
| Model | GPT-5 (Codex agent) |
| Exact model version | Not exposed |
| Session / Run ID | Not exposed |

Parent dispatch states `fork_turns=none`; not independently visible to adjudicator.

This adjudication applies the Case Evidence and rubric's open-world standard. It does not use similarity to a hidden answer as the acceptance criterion.

## 2. Original Judge records

The following entries preserve the two Judges' original RCC@3 value, `candidate-valid-alternative` flag, and relevant reasons verbatim.

### Judge 1 (`judge-1.md`)

> Potential valid alternative | Yes — authorization cache invalidation / TTL; requires adjudication

> **RCC@3: 4 (provisional pending alternative adjudication).** “projection 已应用而缓存仍命中旧值” is a mechanistically specific, evidence-compatible first-ranked alternative, while the known acceptable cause is also covered at rank 2.

> - Candidate-valid-alternative: Yes — authorization cache mechanism
> - Flag details: Candidate-valid-alternative and root-cause-equivalence adjudication required; RCC@3=4 is provisional on accepting the evidence-supported cache mechanism.

### Judge 2 (`judge-2.md`)

> - Candidate-valid-alternative: **Yes — authorization cache 未失效**

> - **RCC@3: 4.** 引用：“Authorization cache 未随成员变化失效”，第一项是 Evidence 支持且 Judge Packet 明确保留的候选有效替代；第二项同时覆盖标准根因，需就替代根因等价性裁决。

> - Flags: **Candidate valid alternative requires adjudication; root-cause equivalence/acceptability requires adjudication.**

Both Judges therefore recorded RCC@3 = 4 and marked the first-ranked authorization-cache explanation as a candidate valid alternative. Judge 1 made the score explicitly provisional; Judge 2 made the equivalence/acceptability decision explicitly subject to adjudication.

## 3. Disputed question

The issue is whether “authorization cache 未随成员变化失效” is sufficiently supported by the Case Evidence to count either (a) as mechanism-equivalent to delayed entitlement projection, or (b) as an independently acceptable root cause.

These are different causal loci. Projection delay means the new entitlement has not yet been applied to the authorization input. Cache invalidation failure means the entitlement may already have been applied, while authorization continues serving an old permission state. They can create the same observed 45–60 minute denial window, but they are not mechanism-equivalent.

## 4. Item-by-item Evidence judgment

1. **Lecture completion and `lab_launch_requested` are stable.** This localizes the failure after content consumption and launch intent. It supports an access/permission-chain explanation but does not distinguish projection delay from an authorization cache.
2. **`lab_access_granted` falls for new-directory accounts.** This links the incident to the directory-to-authorization path and is compatible with both leading mechanisms. It does not by itself identify the cache.
3. **The entitlement job reports success while `group_not_propagated` denials rise.** This establishes a stale or unavailable downstream group state despite reported success. It directly supports projection/reporting delay. It is also compatible with authorization serving stale membership, but the rejection label is not direct proof of cache invalidation failure.
4. **The source directory shows the new group within five minutes.** This weighs against the source directory itself remaining stale and moves the plausible failure locus downstream, where both projection and authorization cache reside.
5. **Lab authorization can still return old permissions after 45–60 minutes.** This directly supports stale state at the authorization boundary. The duration is compatible with a cache TTL, but it is also compatible with an hourly projection batch; therefore it supports the cache candidate without proving or uniquely identifying it.
6. **Course content, lab capacity, and browser composition are stable.** This reduces the credibility of important non-permission alternatives and raises the relative plausibility of both permission-chain mechanisms. It does not distinguish between them.
7. **Source timestamps, projection application time, authorization-cache hits, and denial logs are queryable.** This does not supply the missing cache-hit result, but it makes the proposed cache mechanism testable with available evidence. G0-A009's first check states opposite outcome updates for cache versus projection rather than assuming the result.
8. **The Case's stated limitation says existing logs do not fully distinguish projection delay from authorization edge-cache invalidation.** This confirms that the observed packet leaves both mechanisms viable and requires adjudication for an Evidence-supported cache mechanism. It does not make the mechanisms identical and does not independently prove the cache mechanism.

Taken together, the Evidence is insufficient to establish cache invalidation failure as the actual cause, but it is sufficient to support it as a concrete, non-conflicting, falsifiable alternative root cause. Diagnosis scoring does not require a hypothesis to be proven before it can be a valid Evidence-supported hypothesis. G0-A009 also preserves delayed projection at rank 2 and proposes checks that can separate the two mechanisms.

## 5. Adjudication

**Conclusion: Accept.**

Accept “authorization cache 未随成员变化失效” as an **independently acceptable, Evidence-supported root-cause candidate**, not as a mechanism-equivalent restatement of entitlement projection delay.

**Adjudicated RCC@3: 4.** The first-ranked hypothesis is a specific, testable and Evidence-compatible root-cause mechanism; it does not rely on leakage, it is not contradicted by the packet, and the answer explicitly distinguishes it from the rank-2 acceptable projection mechanism. The rank-2 hypothesis independently covers the Case's listed acceptable cause. The unresolved causal locus is handled through discriminating checks and calibrated uncertainty, not through an unsupported assertion of proof.

There is no material defect in G0-A009 for this flag.

## 6. Required follow-up to scoring materials

- **Acceptable cause set:** Yes, for subsequent scoring of this fixed calibration case, the adjudicated cause set should record “authorization edge-cache invalidation / stale permission TTL” as a case-specific, independently acceptable alternative. It should not be labeled mechanism-equivalent to delayed projection. This record supplies that extension for the present run; the original Case file is not modified by this task.
- **Rubric:** No change required. The rubric already permits Evidence-supported explanations outside the listed answer and correctly routes `candidate-valid-alternative` to adjudication.
- **Case:** No substantive change to Business Reality or Evidence is required. If the Case is versioned or reused after this calibration run, its acceptable-cause annotation should incorporate this adjudication so the same settled issue is not repeatedly treated as unresolved.

## 7. Access declaration and sealing

I did not access, search, or reference `benchmark/calibration/answer-key.md`; any condition code or condition documentation; any other Answer, Case, or reference score; or any material outside the files authorized in the dispatch. I did not communicate with either Judge or any other Agent, and I did not modify either Judge's record, the Rubric, the Protocol, the Case, or any other project file.

The file SHA-256 may be sealed by the parent Agent. No self-referential hash is written here.
