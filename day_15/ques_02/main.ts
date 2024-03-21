function sandwich(...items:string[]) {
    console.log(`Making a Sandwich with ${items.join(',')}.`);
} 
sandwich("chicken" , "cheese", "ketchup");
sandwich("lettuce" , "tomato", "mayo");