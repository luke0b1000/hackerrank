/*
https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
Success! Just solved Designer PDF Viewer on @HackerRank. Can you complete the challenge? http://hr.gs/vnu #programming
*/

function designerPdf(myArray, myString) {
    //transform myString to array
    let myStringArray = Array.from(myString); // ['a', 'b', 'c']
    // set up array of alphabet
    let alphabetString = "abcdefghijklmnopqrstuvwxyz";
    // loop through myStringArray
    let indexStringArray = [];
    for (let i = 0; i < myStringArray.length; i++) {
        indexStringArray.push(alphabetString.indexOf(myStringArray[i]));
    }
    let max = -Infinity;
    for (let i = 0; i < indexStringArray.length; i++) {
        let foundIndex = myArray[indexStringArray[i]];
        if (foundIndex > max) max = foundIndex;
    }
    // get the tallest value of the string
    return max * myString.length;
}
module.exports = designerPdf;
