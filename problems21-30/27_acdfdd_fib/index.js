/*
https://www.hackerrank.com/challenges/ctci-fibonacci-numbers
Success! Just solved Recursion: Fibonacci Numbers on @HackerRank. Can you complete the challenge? http://hr.gs/acdfdd  #programming
*/
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
