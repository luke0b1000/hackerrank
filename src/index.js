/*
https://www.hackerrank.com/challenges/repeated-string/problem
*/
function repeatedString(mystring, num) {
    function findA(aString, numL) {
        let counter = 0;
        for (let i = 0; i < numL; i++) {
            if (aString[i] === 'a') {
                counter++;
            }
        }
        return counter;
    }
    if (num < mystring.length) {
        return findA(mystring, num);
    }
    // take num / mystring.length
    let multiples = Math.floor(num / mystring.length);
    // take num % mystring.length / if it doesn't equal zero
    let remainder = num % mystring.length;
    // how many a are there in modulus
    let modA = findA(mystring, remainder);
    // how many a in mystring
    let fullA = findA(mystring, mystring.length);
    return modA + fullA * multiples;
}
module.exports = repeatedString;
