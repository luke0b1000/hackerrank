/*
https://www.hackerrank.com/challenges/the-hurdle-race/problem
Success! Just solved The Hurdle Race on @HackerRank. Can you complete the challenge? http://hr.gs/2ge7 #programming
*/

function hurdleRace(jumpHeight, hurrdlearray) {
    // find the maxHeight of hurrdle
    let maxHeight = 0;
    for (let i = 0; i < hurrdlearray.length; i++) {
        if (hurrdlearray[i] > maxHeight) maxHeight = hurrdlearray[i];
    }

    return jumpHeight > maxHeight ? 0 : maxHeight - jumpHeight;
}
module.exports = hurdleRace;
