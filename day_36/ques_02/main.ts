function divisibleByTwoAndThree(Number: number): boolean{
    return (Number % 2 === 0 && Number % 3 === 0);
}

console.log(divisibleByTwoAndThree(6));// true
console.log(divisibleByTwoAndThree(12));// true
console.log(divisibleByTwoAndThree(7));//false

