/*
https://www.hackerrank.com/challenges/array-left-rotation/problem
Success! Just solved Left Rotation on @HackerRank. Can you complete the challenge? http://hr.gs/ea0 #programming
*/

function leftRotation(myArray, rotateTimes) {
    for (let i = 0; i < rotateTimes; i++) {
        myArray.push(myArray.shift());
    }
    return myArray;
}
module.exports = leftRotation;
