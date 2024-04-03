function filterGreaterThanTen(numbers: number[]): number[] {
  return numbers.filter((number) => number > 10);
}
let numbers =[5, 11, 20, 25, 8];
console.log(filterGreaterThanTen(numbers));
