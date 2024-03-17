// Equality  with strings
//let name1: string = "alishba";
console.log("testing equality with strings:");
console.log("alishba" == "alishba"); //true
console.log("Alishba" == "Alishba"); //false
// Using the lowerCase function
console.log("Testing with lower Case:");
console.log("Alishba".toLowerCase() == "alishba"); //true
//Numerical test
console.log("Numerical test:");
console.log(9 > 8); //true
console.log(16 < 10); //false
//Test using && and || operators
console.log("tests with && and ||:");
console.log((10 > 5) && (2 < 1)); //false
console.log((12 < 11) || (15 > 10)); //true
//Test whether an item is in array
var fruits = ["apple", "banana", "orange"];
console.log("is 'apple' in fruits? ");
console.log(fruits.includes("apple")); //true
//test whether an item is not ina array
console.log("is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); //true
