/*
https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

*/
function ctciBubbleSort(myArray) {
    let swapCounter = 0;
    for (let i = myArray.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (myArray[j] > myArray[j + 1]) {
                //swapping
                swapCounter++;
                [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
            }
        }
    }
    return [swapCounter, myArray[0], myArray[myArray.length - 1]];
}
module.exports = ctciBubbleSort;
