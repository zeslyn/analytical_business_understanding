# G1 Randomization and Blind Mapping

**Classification:** Restricted Run Material
**Status:** Draft Lock Candidate v0.1
**Study ID:** `G1-GAME-PILOT-V0.1`
**Generator:** [generate-randomization.mjs](./generate-randomization.mjs)

> Analysis runs only receive their assigned document bodies. Judges and Adjudicator must not read the restricted run map until all scores, reliability statistics, and required adjudications are saved.

Seed method：所有排序键均为以 `G1-GAME-PILOT-V0.1` 为根标签的 SHA-256。每个 replicate 使用一组三阶 Latin-square 排序，使 A、B、C 在 15 个 `Incident × replicate` block 的三个位置各出现 5 次。

## Position balance

| Condition | Slot 1 | Slot 2 | Slot 3 |
|---|---:|---:|---:|
| A | 5 | 5 | 5 |
| B | 5 | 5 | 5 |
| C | 5 | 5 | 5 |

## Restricted run map

| Run ID | Incident | Replicate | Slot | Condition | Answer ID |
|---|---|---:|---:|---|---|
| G1-R001 | G1-I01 | 1 | 1 | A | G1-A005 |
| G1-R002 | G1-I01 | 1 | 2 | B | G1-A028 |
| G1-R003 | G1-I01 | 1 | 3 | C | G1-A036 |
| G1-R004 | G1-I02 | 1 | 1 | B | G1-A013 |
| G1-R005 | G1-I02 | 1 | 2 | C | G1-A024 |
| G1-R006 | G1-I02 | 1 | 3 | A | G1-A011 |
| G1-R007 | G1-I03 | 1 | 1 | C | G1-A035 |
| G1-R008 | G1-I03 | 1 | 2 | A | G1-A040 |
| G1-R009 | G1-I03 | 1 | 3 | B | G1-A033 |
| G1-R010 | G1-I01 | 2 | 1 | C | G1-A015 |
| G1-R011 | G1-I01 | 2 | 2 | B | G1-A010 |
| G1-R012 | G1-I01 | 2 | 3 | A | G1-A034 |
| G1-R013 | G1-I02 | 2 | 1 | B | G1-A020 |
| G1-R014 | G1-I02 | 2 | 2 | A | G1-A003 |
| G1-R015 | G1-I02 | 2 | 3 | C | G1-A018 |
| G1-R016 | G1-I03 | 2 | 1 | A | G1-A012 |
| G1-R017 | G1-I03 | 2 | 2 | C | G1-A039 |
| G1-R018 | G1-I03 | 2 | 3 | B | G1-A007 |
| G1-R019 | G1-I01 | 3 | 1 | C | G1-A025 |
| G1-R020 | G1-I01 | 3 | 2 | A | G1-A002 |
| G1-R021 | G1-I01 | 3 | 3 | B | G1-A029 |
| G1-R022 | G1-I02 | 3 | 1 | A | G1-A019 |
| G1-R023 | G1-I02 | 3 | 2 | B | G1-A042 |
| G1-R024 | G1-I02 | 3 | 3 | C | G1-A045 |
| G1-R025 | G1-I03 | 3 | 1 | B | G1-A027 |
| G1-R026 | G1-I03 | 3 | 2 | C | G1-A022 |
| G1-R027 | G1-I03 | 3 | 3 | A | G1-A016 |
| G1-R028 | G1-I01 | 4 | 1 | A | G1-A017 |
| G1-R029 | G1-I01 | 4 | 2 | C | G1-A001 |
| G1-R030 | G1-I01 | 4 | 3 | B | G1-A032 |
| G1-R031 | G1-I02 | 4 | 1 | C | G1-A043 |
| G1-R032 | G1-I02 | 4 | 2 | B | G1-A004 |
| G1-R033 | G1-I02 | 4 | 3 | A | G1-A009 |
| G1-R034 | G1-I03 | 4 | 1 | B | G1-A044 |
| G1-R035 | G1-I03 | 4 | 2 | A | G1-A023 |
| G1-R036 | G1-I03 | 4 | 3 | C | G1-A031 |
| G1-R037 | G1-I01 | 5 | 1 | B | G1-A006 |
| G1-R038 | G1-I01 | 5 | 2 | C | G1-A038 |
| G1-R039 | G1-I01 | 5 | 3 | A | G1-A021 |
| G1-R040 | G1-I02 | 5 | 1 | C | G1-A041 |
| G1-R041 | G1-I02 | 5 | 2 | A | G1-A014 |
| G1-R042 | G1-I02 | 5 | 3 | B | G1-A037 |
| G1-R043 | G1-I03 | 5 | 1 | A | G1-A026 |
| G1-R044 | G1-I03 | 5 | 2 | B | G1-A030 |
| G1-R045 | G1-I03 | 5 | 3 | C | G1-A008 |

## Judge 1 blinded order

1. G1-A013
2. G1-A022
3. G1-A018
4. G1-A031
5. G1-A019
6. G1-A037
7. G1-A012
8. G1-A028
9. G1-A045
10. G1-A038
11. G1-A004
12. G1-A039
13. G1-A043
14. G1-A026
15. G1-A001
16. G1-A023
17. G1-A008
18. G1-A020
19. G1-A016
20. G1-A015
21. G1-A010
22. G1-A044
23. G1-A014
24. G1-A040
25. G1-A030
26. G1-A007
27. G1-A011
28. G1-A017
29. G1-A036
30. G1-A024
31. G1-A041
32. G1-A005
33. G1-A032
34. G1-A033
35. G1-A029
36. G1-A034
37. G1-A006
38. G1-A003
39. G1-A027
40. G1-A009
41. G1-A025
42. G1-A035
43. G1-A021
44. G1-A042
45. G1-A002

## Judge 2 blinded order

1. G1-A008
2. G1-A036
3. G1-A002
4. G1-A027
5. G1-A033
6. G1-A015
7. G1-A045
8. G1-A034
9. G1-A040
10. G1-A010
11. G1-A019
12. G1-A026
13. G1-A035
14. G1-A039
15. G1-A020
16. G1-A044
17. G1-A042
18. G1-A013
19. G1-A041
20. G1-A030
21. G1-A011
22. G1-A017
23. G1-A021
24. G1-A043
25. G1-A007
26. G1-A009
27. G1-A001
28. G1-A028
29. G1-A025
30. G1-A016
31. G1-A012
32. G1-A037
33. G1-A022
34. G1-A031
35. G1-A018
36. G1-A003
37. G1-A023
38. G1-A029
39. G1-A032
40. G1-A014
41. G1-A006
42. G1-A005
43. G1-A004
44. G1-A024
45. G1-A038
