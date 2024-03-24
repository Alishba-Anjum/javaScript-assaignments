let score: number[] = [88, 99, 44, 55, 60, 78, 91, 61];
function avgScore(score: number[]): number {
  let total = score.reduce((sum, score) => sum + score, 0);
  return total / score.length;
}
console.log(avgScore(score));
