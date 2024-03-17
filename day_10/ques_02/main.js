// Creating an array of favorite fruits
var favoriteFruits = ['apple', 'banana', 'mango'];
// Function to check if certain fruits are included
function checkFavoriteFruits(fruitsToCheck) {
    fruitsToCheck.forEach(function (fruit) {
        if (favoriteFruits.includes(fruit)) {
            console.log("Yes, ".concat(fruit, " is one of my favorite fruits!"));
        }
        else {
            console.log("No, ".concat(fruit, " is not one of my favorite fruits."));
        }
    });
}
// Fruits to check
var fruitsToCheck = ['apple', 'orange', 'kiwi'];
// Checking if certain fruits are included
checkFavoriteFruits(fruitsToCheck);
