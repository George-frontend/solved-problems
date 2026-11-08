/**
 * Divisible Sum Pairs (HackerRank)
 *
 * Task: Count the pairs (i, j) where i < j
 * and the sum ar[i] + ar[j] is divisible by k.
 *
 * Example: n = 6, k = 3, ar = [1, 3, 2, 6, 1, 2]
 * Valid pairs: (1+2), (1+2), (3+6), (2+1), (1+2) → result: 5
 *
 * Pattern: nested loops – check all pairs
 * Trap: operator precedence – use (a + b) % k, not a + b % k
 * Time complexity: O(n²)
 *
 * @param {number} n  - length of the array
 * @param {number} k  - the divisor
 * @param {number[]} ar - array of integers
 * @returns {number} number of valid pairs
 */
function divisibleSumPairs(n, k, ar) {

    // Counter for the pairs that meet the condition
    let count = 0;

    // Outer loop: picks the first element of the pair
    for (let i = 0; i < n; i++) {

        // Inner loop: picks the second element.
        // Starts from i + 1, so j is always greater than i.
        // This avoids comparing an element with itself
        // and counting the same pair twice.
        for (let j = i + 1; j < n; j++) {

            // Sum first, then take the remainder.
            // Remainder 0 means the sum is divisible by k.
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }

    return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
// Valid pairs: (1+2), (1+2), (3+6), (2+1), (1+2) → result: 5