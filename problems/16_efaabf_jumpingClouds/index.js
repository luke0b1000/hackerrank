/*
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
Success! Just solved Jumping on the Clouds on @HackerRank. Can you complete the challenge? http://hr.gs/efaabf #programming
*/
function jumpingClouds(myArray) {
    // set counter = 0
    let counter = 0;
    let index = 0;
    // loop through all elements of myArray using while
    while (index < myArray.length) {
        if (myArray[index + 2] === 0) {
            index = index + 2;
            counter++;
        } else {
            index = index + 1;
            counter++;
        }
    }
    // check index + 2, if it isn't 1, then move index to it.
    return counter - 1;
}
module.exports = jumpingClouds;
