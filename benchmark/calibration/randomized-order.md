# G0 Calibration Randomized Order

**Status:** Frozen for Initial Independent Scoring

**Version:** 0.1

**Date:** 2026-08-08

**Seed:** `G0-v0.1-20260808`

**Canonical order SHA-256:** `d1e776d63556283548f819e91acedefe06caf7eba4aea5d5db52ace17359e6a6`

> 本文件只冻结初次独立评分的展示顺序，不披露参考分。两名评分者可以使用相同顺序；不得在相邻答案间做成对比较或共享评分。

## Method

对每个 Answer ID 计算 `SHA-256(seed + ":" + Answer ID)`，按十六进制摘要升序排列。Canonical order hash 对下方 Answer ID 逐行连接并在末尾保留一个换行后计算。

## Order

1. G0-A006
2. G0-A007
3. G0-A010
4. G0-A008
5. G0-A002
6. G0-A009
7. G0-A003
8. G0-A001
9. G0-A004
10. G0-A011
11. G0-A005
12. G0-A012

评分时通过 [manifest.md](./manifest.md) 打开每个 Answer 对应的 Judge Packet。不要打开 [answer-key.md](./answer-key.md)，直到两名评分者的原始记录和哈希均已保存。
