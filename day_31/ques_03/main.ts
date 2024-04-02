function replaceBananawithMango(fruits: string[]): void{
    const index  = fruits.indexOf("Banana"); // finds index f banana
    if(index !== -1) fruits[index] = "Mango";// replaces "Banana" with "Mango"
}

const fruits: string[]= ["Apple", "Orange", "Banana", "strawberry"];
replaceBananawithMango(fruits);
console.log(fruits);// outputs [ 'Apple', 'Orange', 'Mango', 'strawberry' ]

