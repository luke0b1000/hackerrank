/*
https://www.hackerrank.com/challenges/reduced-string/problem
Success! Just solved Super Reduced String on @HackerRank. Can you complete the challenge? http://hr.gs/eccfba #programming
*/
function reducedString(myString) {
    let myArray = Array.from(myString);
    // string goes through while loop
    // starting at index remove adjecent character
    let windowSize = 2;
    let pointerA = 1;
    while (myArray) {
        if (pointerA >= myArray.length) break;
        if (myArray[pointerA - 1] === myArray[pointerA]) {
            myArray.splice(pointerA - 1, 2);
            pointerA = 1;
            continue;
        } else {
            pointerA++;
        }
        // break
    }
    if (myArray.length === 0) return 'Empty String';
    return myArray.join('');
}
module.exports = reducedString;
