/*
https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
Success! Just solved Beautiful Days at the Movies on @HackerRank. Can you complete the challenge? http://hr.gs/cfcede #programming
*/
function beautifulDay(num, divisibleNum) {
    let reverseNum = "";
    let stringNum = String(num);
    for (let i = stringNum.length - 1; i >= 0; i--) {
        reverseNum = reverseNum + stringNum[i];
    }
    reverseNum = Number(reverseNum);
    if ((Math.abs(num - reverseNum) / divisibleNum) % 1 === 0) return 1;
    return 0;
}
function daysAtThemovies(startDay, endDay, divisibleNum) {
    let counter = 0;
    for (let i = startDay; i <= endDay; i++) {
        if (beautifulDay(i, divisibleNum)) counter++;
    }
    return counter;
}
module.exports = daysAtThemovies;
