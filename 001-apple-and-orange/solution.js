/**
 * Counts how many apples and oranges land on Sam's house
 * and prints the two counts on separate lines.
 *
 * @param {number} s - start point of the house
 * @param {number} t - end point of the house
 * @param {number} a - position of the apple tree
 * @param {number} b - position of the orange tree
 * @param {number[]} apples - distances each apple falls from the tree
 * @param {number[]} oranges - distances each orange falls from the tree
 * @returns {void}
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // The house covers the range [s, t], both ends included
    const isOnHouse = (position) => position >= s && position <= t;

    // Landing position = tree position + fall distance.
    // filter keeps only the fruits that land on the house, length counts them.
    const applesOnHouse = apples.filter((d) => isOnHouse(a + d)).length;
    const orangesOnHouse = oranges.filter((d) => isOnHouse(b + d)).length;

    console.log(`${applesOnHouse}\n${orangesOnHouse}`);
}

// Example (sample input from HackerRank)
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // 1 \n 1