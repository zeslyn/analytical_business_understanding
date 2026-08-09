# G1 Unblinding Log

**Study ID:** `G1-GAME-PILOT-V0.1`  
**Status:** Complete

| Field | Value |
|---|---|
| Prerequisite commit | `f1c61b6422981238a3c163fb447709a8be49e070` |
| Prerequisite commit time | `2026-08-09T14:14:32+08:00` |
| Gate state at commit | Two Judge files, reliability statistics, 21 adjudications, runtime sidecars and blind reports committed |
| First unblinding window | After the prerequisite commit and before checkpoint `2026-08-09 14:20:13 CST (+0800)` |
| Restricted material opened | [randomization.md](../../../g1/randomization.md) |
| Analysis implementation | [analyze-g1.mjs](../analysis/analyze-g1.mjs) |
| Result artifact | [pilot-report.md](../analysis/pilot-report.md) |
| Confirmatory inference | Not run; G1 is exploratory only |
| Post-unblinding exclusion | None |

The exact wall-clock time of the first mapping read was not separately captured; the committed prerequisite and bounded checkpoint establish that no unblinding occurred before the complete blind-adjudication seal. The protocol did not freeze an exact unblinding timestamp as an exclusion criterion.
