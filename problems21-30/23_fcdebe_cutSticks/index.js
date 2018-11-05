/*
https://www.hackerrank.com/challenges/cut-the-sticks/problem
Success! Just solved Cut the sticks on @HackerRank. Can you complete the challenge? http://hr.gs/fcdebe #programming
*/

function cutSticks(myArray) {
    // take the first index, create a new array as long as the value > 0 and keep track of how many sticks are cut
    let results = [];
    while (myArray.length !== 0) {
        results.push(myArray.length);
        let newArray = [];
        let counter = 0;
        // sort array
        myArray.sort((a, b) => a - b);
        let lowestValue = myArray[0];
        for (let i = 0; i < myArray.length; i++) {
            let newNum = myArray[i] - lowestValue;
            if (newNum > 0) newArray.push(newNum);
        }
        myArray = newArray;
    }
    return results;
}
module.exports = cutSticks;
