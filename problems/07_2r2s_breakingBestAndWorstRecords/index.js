/*
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
Success! Just solved Breaking the Records on @HackerRank. Can you complete the challenge? http://hr.gs/2r2s #programming
*/
function breakingBestAndWorst(...myargs) {
    let highScore = myargs[0];
    let lowScore = myargs[0];
    let maxCount = 0;
    let minCount = 0;
    for (let i = 1; i < myargs.length; i++) {
        if (myargs[i] > highScore) {
            highScore = myargs[i];
            maxCount++;
        }
        if (myargs[i] < lowScore) {
            lowScore = myargs[i];
            minCount++;
        }
    }
    return [maxCount, minCount];
}

module.exports = breakingBestAndWorst;
