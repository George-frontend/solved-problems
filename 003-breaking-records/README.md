# 004 – Breaking the Records

**Platform:** HackerRank · [Problem link](https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem)
**Difficulty:** Easy

## Problem

A basketball player keeps track of her points in every game of the season.
The points from the first game set both her record for most points and her
record for least points. After that, a record is broken whenever she scores
strictly more than her current maximum or strictly less than her current minimum.

Given the scores in order, return how many times she broke each record:
`[times max was broken, times min was broken]`.

## My thinking

- I first misunderstood the task: I thought it asks **in which** game she breaks
  her record, but it asks **how many times**.
- Going through the games, I need to remember four things: the current max,
  the current min, and a counter for each of them.
- For every game I compare the score with the current records. If it is
  higher than the max (or lower than the min), I update the record and
  increase the counter.
- An equal score does not break a record, so I use `>` and `<`, not `>=` and `<=`.
- My first version checked `if (i === 0)` inside the loop. I improved it by
  setting both records to `scores[0]` before the loop and starting from `i = 1`.

**Pattern:** start with the first element, then compare it with the rest.
