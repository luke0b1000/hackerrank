/*
https://www.hackerrank.com/challenges/sock-merchant/problem
*/
function sockMerchant(sockArray) {
    const sockTable = {};
    // create a table to keep track of all types of sock
    for (let i = 0; i < sockArray.length; i++) {
        if (!sockTable[sockArray[i]]) sockTable[sockArray[i]] = 0;
        sockTable[sockArray[i]]++;
    }

    let sellableSocks = 0;
    // Math.floor each key, getting the total
    const keys = Object.keys(sockTable); // sockTable[keys] = ['alpha', 'beta']
    for (let i = 0; i < keys.length; i++) {
        sellableSocks += Math.floor(sockTable[keys[i]] / 2);
    }
    return sellableSocks;
}
module.exports = sockMerchant;
