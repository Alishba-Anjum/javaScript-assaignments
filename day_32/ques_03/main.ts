function calculateSum(numbers: number[]): number {
  return numbers.reduce((res, current) => res + current, 0);
}
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
