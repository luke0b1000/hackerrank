/*
https://www.hackerrank.com/challenges/cats-and-a-mouse/
Success! Just solved Cats and a Mouse on @HackerRank. Can you complete the challenge? http://hr.gs/39y9 #programming
*/

function catAndMouse(a, b, m) {
    let distanceA = Math.abs(m - a);
    let distanceB = Math.abs(m - b);
    let winner;
    if (distanceA < distanceB) {
        winner = 'Cat A';
    } else if (distanceB < distanceA) {
        winner = 'Cat B';
    } else {
        winner = 'Mouse C';
    }
    return winner;
}
module.exports = catAndMouse;
