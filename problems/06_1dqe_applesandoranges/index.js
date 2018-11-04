/*
https://www.hackerrank.com/challenges/apple-and-orange/problem
Success! Just solved Apple and Orange on @HackerRank. Can you complete the challenge? http://hr.gs/1dqe #programming
*/
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //calculate distance for apple + a
    const appleFinal = apples.map(element => element + a);
    // calculate distance for orange + b
    const orangeFinal = oranges.map(element => element + b);
    // loop through final apple and count how many are between s and t
    let appleCount = appleFinal.reduce((accumulator, element) => {
        if (element <= t && element >= s) accumulator += 1;
        return accumulator;
    }, 0);
    // loop through final orange and count how many are between s and t
    let orangeCount = orangeFinal.reduce((accumulator, element) => {
        if (element <= t && element >= s) accumulator += 1;
        return accumulator;
    }, 0);
    return [appleCount, orangeCount];
}

module.exports = countApplesAndOranges;
