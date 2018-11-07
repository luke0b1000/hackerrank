/*
https://www.hackerrank.com/challenges/array-left-rotation/problem

*/

function leftRotation(myArray, rotateTimes) {
    for (let i = 0; i < rotateTimes; i++) {
        myArray.push(myArray.shift());
    }
    return myArray;
}
module.exports = leftRotation;
