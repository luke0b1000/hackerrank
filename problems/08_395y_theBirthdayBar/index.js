/*
https://www.hackerrank.com/challenges/the-birthday-bar/problem
Success! Just solved Birthday Chocolate on @HackerRank. Can you complete the challenge? http://hr.gs/395y #programming
*/
function birthBar(bBar, bDay) {
    let counter = 0;
    const [d, m] = bDay;
    let window_size = m;
    if (bBar.length < m) throw new Error('Length too short');
    // first window
    let window_sum = 0;
    for (let i = 0; i < window_size; i++) {
        window_sum = window_sum + bBar[i];
    }
    if (window_sum === d) counter++;
    // moving the window
    for (let i = window_size; i < bBar.length; i++) {
        window_sum = window_sum + bBar[i] - bBar[i - window_size];
        if (window_sum === d) counter++;
    }
    return counter;
}
module.exports = birthBar;
