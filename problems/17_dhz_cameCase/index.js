/*
https://www.hackerrank.com/challenges/camelcase/problem
Success! Just solved CamelCase on @HackerRank. Can you complete the challenge? http://hr.gs/dhz  #programming
*/
function camelCase(myString) {
    // start the counter at 1
    let counter = 1;
    let stringArray = Array.from(myString);
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === stringArray[i].toUpperCase()) {
            counter++;
        }
    }
    return counter;
}
module.exports = camelCase;
