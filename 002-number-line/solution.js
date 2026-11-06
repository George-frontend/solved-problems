/**
 * Checks whether two kangaroos jumping in the same direction
 * will land at the same position after the same number of jumps.
 *
 * @param {number} x1 - starting position of the first kangaroo
 * @param {number} v1 - jump distance of the first kangaroo
 * @param {number} x2 - starting position of the second kangaroo
 * @param {number} v2 - jump distance of the second kangaroo
 * @returns {string} "YES" if they meet, otherwise "NO"
 */
function kangaroo(x1, v1, x2, v2) {
    // The first kangaroo starts behind (x1 < x2).
    // If it is not faster, it can never catch up.
    // This check also prevents an infinite loop.
    if (v1 <= v2) return "NO";

    let position1 = x1;
    let position2 = x2;

    // Simulate the jumps while the first kangaroo is still behind
    while (position1 < position2) {
        position1 += v1;
        position2 += v2;
    }

    // Either they landed on the same spot, or the first one jumped past the second
    return position1 === position2? "YES" : "NO";
}

// Examples (sample inputs from HackerRank)
console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO
console.log(kangaroo(0, 3, 1, 1)); // NO (the first one jumps past the second)