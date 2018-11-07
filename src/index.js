/*
https://www.hackerrank.com/challenges/new-year-chaos/problem

*/

function nyChaos(myArray) {
    let operation = 0;
    // bubbleSort
    for (let end = myArray.length; end > 0; end--) {
        // counter here , can't be more than 2
        let last;
        let counter = 0;
        for (let j = 0; j < end; j++) {
            if (myArray[j] > myArray[j + 1]) {
                operation++;
                if (last === myArray[j]) {
                    if (counter) {
                        counter++;
                    }
                } else {
                    counter = 1;
                }
                if (counter > 2) return 'Too chaotic';
                last = myArray[j];
                /* Swapp */
                [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
                //swapping here
                /* Swapp */
            }
        }
    }
    return operation;
}
module.exports = nyChaos;
