// Creating an array of favorite fruits
let favoriteFruits: string[] = ['apple', 'banana', 'mango'];

// Function to check if certain fruits are included
function checkFavoriteFruits(fruitsToCheck: string[]): void {
    fruitsToCheck.forEach((fruit) => {
        if (favoriteFruits.includes(fruit)) {
            console.log(`Yes, ${fruit} is one of my favorite fruits!`);
        } else {
            console.log(`No, ${fruit} is not one of my favorite fruits.`);
        }
    });
}

// Fruits to check
let fruitsToCheck: string[] = ['apple', 'orange', 'kiwi'];

// Checking if certain fruits are included
checkFavoriteFruits(fruitsToCheck);
