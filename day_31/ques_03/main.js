function replaceBananawithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Orange", "Banana", "strawberry"];
replaceBananawithMango(fruits);
console.log(fruits);
