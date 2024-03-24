var score = [88, 99, 44, 55, 60, 78, 91, 61];
function avgScore(score) {
    var total = score.reduce(function (sum, score) { return sum + score; }, 0);
    return total / score.length;
}
console.log(avgScore(score));
