# 004 – Divisible Sum Pairs

**Platform:** HackerRank · [Problem link](https://www.hackerrank.com/challenges/divisible-sum-pairs/problem)
**Difficulty:** Easy

## Problem

Given an array of integers `ar` and a number `k`, count the pairs of indices
`(i, j)` where `i < j` and the sum `ar[i] + ar[j]` is divisible by `k`.

**Example:** `k = 3`, `ar = [1, 3, 2, 6, 1, 2]` → `5` pairs:
`1+2`, `1+2`, `3+6`, `2+1`, `1+2`.

## My thinking

- I need to check every possible pair of elements, so I use two nested loops.
- The outer loop picks the first element, the inner loop picks the second one.
- The inner loop starts from `i + 1`. This guarantees `i < j`, so an element is
  never paired with itself and the same pair is not counted twice.
- For each pair I check if the remainder of the sum divided by `k` is `0`.
- **Trap:** operator precedence. `%` is calculated before `+`, so
  `ar[i] + ar[j] % k` is wrong. The sum must be in brackets:
  `(ar[i] + ar[j]) % k`.

**Pattern:** nested loops with `j = i + 1` to check all pairs.