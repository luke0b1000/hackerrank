/*
https://www.hackerrank.com/challenges/bon-appetit/problem
Success! Just solved Bon Appétit on @HackerRank. Can you complete the challenge? http://hr.gs/14ck #programming
*/
function bonAppetit(didntEat, bill, annaCharge) {
    // sum up the bill subtracting what anna didn'teat
    const sum = bill.reduce((accumulator, element, index) => {
        if (index !== didntEat) accumulator += element;
        return accumulator;
    }, 0);
    // divide by 2
    let billSplit = sum / 2;
    // annaCharge subtract above
    let difference = annaCharge - billSplit;
    return difference ? difference : 'Bon Appetit';
}

module.exports = bonAppetit;
