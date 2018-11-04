/*
https://www.hackerrank.com/challenges/counting-valleys/problem
Success! Just solved Counting Valleys on @HackerRank. Can you complete the challenge? http://hr.gs/3rtx #programming
*/

function countingValleys(mystring) {
    // conver the string to array
    const myHike = Array.from(mystring);
    // set level = 0 , as this is the start
    let level = 0;
    // set valleyCounter = 0
    let valleyCounter = 0;
    // set inValley = false; if value is ever true, then increment valleyCounter
    let inValley = false;
    // loop through the array
    let value;
    for (let i = 0; i < myHike.length; i++) {
        if (myHike[i] === 'U') {
            value = 1;
        } else {
            value = -1;
        }
        level += value;
        if (level < 0 && inValley === false) {
            inValley = true;
            valleyCounter++;
        } else if (level === 0) {
            inValley = false;
        }
    }
    // as looping through the elements, set the level and test the level,
    // if level below 0 and inValley === false, set inValley to true, valleyCounter++

    return valleyCounter;
}
module.exports = countingValleys;
