/*
https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
Success! Just solved Divisible Sum Pairs on @HackerRank. Can you complete the challenge? http://hr.gs/eafefc #programming
*/

function funcDivisible(divisibleNum, myArray) {
    let counter = 0;
    let pair = 2;
    // stoop earlier cause nothing to pair up at last digit
    for (let i = 0; i + 1 /*i+ pair-1*/ < myArray.length; i++) {
        for (let j = i + 1; j < myArray.length; j++) {
            console.log('i', myArray[i], 'j', myArray[j]);
            if ((myArray[i] + myArray[j]) % divisibleNum === 0) counter++;
        }
    }
    return counter;
}
module.exports = funcDivisible;
