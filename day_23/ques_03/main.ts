function divideAndremainder(
  dividend: number,
  divisor: number):
  {quotient: number,
  remainder: number
   } {
  let quotient = Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  return { quotient, remainder };
}

console.log(divideAndremainder(10, 3));
console.log(divideAndremainder(9, 2));

