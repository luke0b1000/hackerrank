/*
https://www.hackerrank.com/challenges/balanced-brackets/

*/

function balancedBrackets(myString) {
    const myArray = Array.from(myString);
    const stack = [];
    const myMap = new Map();
    myMap.set("[", "]");
    myMap.set("{", "}");
    myMap.set("(", ")");
    myMap.set("]", "[");
    myMap.set("}", "{");
    myMap.set(")", "(");
    let currentBracket, openBracket;
    while (myArray.length > 0) {
        currentBracket = String(myArray.shift());
        if (myMap.get(String(currentBracket)) === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(currentBracket);
        }
<<<<<<< HEAD:src/index.js
=======
        if (!swapped) break;
>>>>>>> master:src/hold/_nyChaos/index.js
    }
    console.log(myArray);
    return myArray.length > 0 ? "NO" : "YES";
}
module.exports = balancedBrackets;
