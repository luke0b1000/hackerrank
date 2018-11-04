/*
https://www.hackerrank.com/challenges/electronics-shop/
Success! Just solved Electronics Shop on @HackerRank. Can you complete the challenge? http://hr.gs/3rs0 #programming
*/

function electronicShop(money, keyboard, usb) {
    let maxCost = -1;
    for (let i = 0; i < keyboard.length; i++) {
        for (let j = 0; j < usb.length; j++) {
            let sum = keyboard[i] + usb[j];
            if (sum <= money && sum > maxCost) {
                maxCost = sum;
            }
        }
    }
    return maxCost;
}
module.exports = electronicShop;
