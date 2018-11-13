/*
https://www.hackerrank.com/challenges/minimum-swaps-2
Success! Just solved Minimum Swaps 2 on @HackerRank. Can you complete the challenge? http://hr.gs/3apgt #programming
*/
function minSwap(myArray) {
    let counter = 0;
    let i = 0;
    while (i < myArray.length) {
        if (myArray[i] !== i + 1) {
            let valueOfSource = myArray[i];
            let valueOfDestination = myArray[valueOfSource - 1];
            [myArray[i], myArray[valueOfSource - 1]] = [
                valueOfDestination,
                valueOfSource
            ];
            counter++;
        } else {
            i++;
        }
    }
    return counter;
}
module.exports = minSwap;
