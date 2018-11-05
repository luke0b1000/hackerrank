/*
https://www.hackerrank.com/challenges/utopian-tree/problem
Success! Just solved Utopian Tree on @HackerRank. Can you complete the challenge? http://hr.gs/eau #programming
*/
function utopianTree(n) {
    // start the treeHeight at 1;
    let treeHeight = 1;
    // let the period or i = 0
    // loop til reach n
    // if n is even then double it, else +1
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            treeHeight++;
        } else {
            treeHeight = 2 * treeHeight;
        }
    }
    return treeHeight;
}
module.exports = utopianTree;
