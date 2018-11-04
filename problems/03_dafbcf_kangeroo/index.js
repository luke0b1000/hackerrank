/*
https://www.hackerrank.com/challenges/kangaroo/problem
Success! Just solved Kangaroo on @HackerRank. Can you complete the challenge? http://hr.gs/dafbcf #programming
*/
function kangeroo(x1, v1, x2, v2) {
    if (x1 === x2) return 'YES';
    let distanceApart = Infinity;
    let xStart = x1;
    let yStart = x2;
    while (xStart !== yStart && Math.abs(xStart - yStart) < distanceApart) {
        distanceApart = Math.abs(xStart - yStart);
        xStart = xStart + v1;
        yStart = yStart + v2;
        if (xStart === yStart) {
            return 'YES';
        }
    }
    return 'NO';
}

module.exports = kangeroo;
