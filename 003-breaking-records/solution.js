/**
 * Counts how many times a player breaks her season records
 * for most and least points in a game.
 *
 * @param {number[]} scores - points scored in each game, in order
 * @returns {number[]} [times the max record was broken, times the min record was broken]
 */
function breakingRecords(scores) {
    // The first game sets both records, so it is not counted as breaking them
    let min = scores[0];
    let max = scores[0];

    let minCount = 0;
    let maxCount = 0;

    // Start from the second game and compare each score with the current records
    for (let i = 1; i < scores.length; i++) {

        // A record is broken only by a strictly higher score (equal does not count)
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }

        // A record is broken only by a strictly lower score
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }

    return [maxCount, minCount];
}

// Examples (sample inputs from HackerRank)
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));       // [2, 4]
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // [4, 0]