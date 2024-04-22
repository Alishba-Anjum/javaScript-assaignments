const arrow_function = (...numbers: number[]) => 
    numbers.reduce((previouValue , currValue) => previouValue * currValue ,1);


console.log(arrow_function(2, 4, 6));
