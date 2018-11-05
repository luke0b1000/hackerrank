function reverseStr(str) {
    // if the string length becomes zero then we can return
    if (str.length === 1) {
        return str;
    }
    // return the last value of the reverse str, and recurse into the front valueOf
    return str.slice(-1) + reverseStr(str.slice(0, -1));
}

module.exports = reverseStr;
