function divideAndremainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndremainder(10, 3));
console.log(divideAndremainder(9, 2));
