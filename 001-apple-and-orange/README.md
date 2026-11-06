# 001 – Apple and Orange

**Platform:** HackerRank · [Problem link](https://www.hackerrank.com/challenges/apple-and-orange/problem)
**Difficulty:** Easy

## Problem
A house is located between points `s` and `t`. An apple tree is at `a`
and an orange tree is at `b`. Each fruit falls a distance `d` from its tree
(positive = right, negative = left). Count how many apples and oranges
land on the house.

## My thinking
- The position where a fruit lands is tree position + distance.
- A fruit is on the house if its position is between `s` and `t` (inclusive).
- I check every apple and every orange and count those that fit.