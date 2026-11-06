# 002 – Number Line Jumps (Kangaroo)

**Platform:** HackerRank · [Problem link](https://www.hackerrank.com/challenges/kangaroo/problem)
**Difficulty:** Easy

## Problem

Two kangaroos stand on a number line and jump in the same direction at the same time.
The first one starts at `x1` and jumps `v1` units each time, the second one starts at
`x2` and jumps `v2` units each time. The first kangaroo always starts behind (`x1 < x2`).

Return `"YES"` if both kangaroos land on the same position after the same number
of jumps, otherwise return `"NO"`.

## My thinking

- After each jump the positions change by `v1` and `v2`, so I can simulate the
  jumps with a `while` loop.
- I knew it should be a `while` loop, but I wasn't sure about the loop condition
  and what should happen inside it.
- The loop runs **while the first kangaroo is behind** and moves both kangaroos one jump.
- When the loop stops, there are only two options: they are on the same spot (`"YES"`),
  or the first one jumped past the second (`"NO"`).
- The tricky part I missed at first: if the first kangaroo is **not faster**
  (`v1 <= v2`), it can never catch up and the loop would never end. This is checked
  before the loop.

**Lesson:** for every `while` loop, ask *"can this loop run forever?"*