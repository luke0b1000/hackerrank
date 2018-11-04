/*
https://www.hackerrank.com/challenges/drawing-book
Success! Just solved Drawing Book  on @HackerRank. Can you complete the challenge? http://hr.gs/fadcab #programming
*/
function drawingBook(numOfPages, page) {
    // convert page number to even side
    let evenPage = page;
    if (page % 2 !== 0) evenPage = page - 1;
    // convert the page you want to goto to even side
    let endBookeven = numOfPages;
    if (numOfPages % 2 !== 0) endBookeven = numOfPages - 1;
    // subtract from head 0 to even side
    let startDistance = evenPage - 0;
    //subtract from end to page
    let endDistance = endBookeven - evenPage;
    // get me the shortest
    let shortestDistance = Math.min(startDistance, endDistance);
    // return lowest page divided by 2
    return shortestDistance / 2;
}
module.exports = drawingBook;
