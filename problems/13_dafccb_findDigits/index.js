/*
https://www.hackerrank.com/challenges/find-digits/problem
Success! Just solved Find Digits on @HackerRank. Can you complete the challenge? http://hr.gs/dafccb #programming
*/
function findDigits(digit) {
    // set numdividible = 0
    let numDivisible = 0;
    // split the digit up
    let digitArray = Array.from(String(digit));
    // loop through the length of digit and divide
    for (let i = 0; i < digitArray.length; i++) {
        if (digit % Number(digitArray[i]) === 0) {
            numDivisible++;
        }
    }
    // numDivisible++ if %=== 0
    return numDivisible;
}

module.exports = findDigits;
