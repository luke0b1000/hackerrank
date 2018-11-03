/*
https://www.hackerrank.com/challenges/migratory-birds/problem
Success! Just solved Migratory Birds on @HackerRank. Can you complete the challenge? http://hr.gs/cbcfdd #programming
*/
function migratoryBirds(birdsArray) {
    const birdTable = {};
    // loop through birds array and keep count of how many times you see it
    for (let i = 0; i < birdsArray.length; i++) {
        if (!birdTable[birdsArray[i]]) birdTable[birdsArray[i]] = 0;
        birdTable[birdsArray[i]]++;
    }
    // create a maxCount and maxValue
    let maxCount = 0;
    let maxList = [];
    // create a Object.key and see which is the max count,
    const keys = Object.keys(birdTable); // ['alpha', 'beta']
    for (let i = 0; i < keys.length; i++) {
        if (birdTable[keys[i]] > maxCount) {
            maxCount = birdTable[keys[i]];
            maxList = [];
            maxList.push(keys[i]);
        } else if (birdTable[keys[i]] === maxCount) {
            maxList.push(keys[i]);
        }
    }
    // sort through that array,
    maxList.sort();
    // use array[0]
    return Number(maxList[0]);
}
module.exports = migratoryBirds;
