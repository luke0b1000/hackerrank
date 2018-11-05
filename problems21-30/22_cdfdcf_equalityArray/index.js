/*
https://www.hackerrank.com/challenges/equality-in-a-array/problem
Success! Just solved Equalize the Array on @HackerRank. Can you complete the challenge? http://hr.gs/cdfdcf #programming
*/

function equalityArray(myArray) {
    let maxValue = -Infinity;
    let maxIndex;
    let numberTable = {};
    for (let i = 0; i < myArray.length; i++) {
        if (!numberTable[myArray[i]]) numberTable[myArray[i]] = 0;
        ++numberTable[myArray[i]];
        if (numberTable[myArray[i]] > maxValue) {
            maxValue = numberTable[myArray[i]];
            maxIndex = myArray[i];
        }
    }

    return myArray.length - maxValue;
}
module.exports = equalityArray;
