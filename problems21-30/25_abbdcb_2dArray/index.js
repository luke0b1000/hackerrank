/*
https://www.hackerrank.com/challenges/2d-array/problem
Success! Just solved 2D Array - DS on @HackerRank. Can you complete the challenge? http://hr.gs/abbdcb  #programming
*/
function calculateHourGlass(myArray, xPoint, yPoint) {
    let sum =
        myArray[xPoint][yPoint] +
        myArray[xPoint][yPoint + 1] +
        myArray[xPoint][yPoint + 2] +
        myArray[xPoint + 1][yPoint + 1] +
        myArray[xPoint + 2][yPoint] +
        myArray[xPoint + 2][yPoint + 1] +
        myArray[xPoint + 2][yPoint + 2];
    return sum;
}

function hourglassSum(myArray) {
    let max = -Infinity;
    for (let row = 0; row < 4; row++) {
        for (let column = 0; column < 4; column++) {
            if (max < calculateHourGlass(myArray, row, column))
                max = calculateHourGlass(myArray, row, column);
        }
    }
    return max;
}

module.exports = hourglassSum;
