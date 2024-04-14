function age(age: number): string {
    if (age < 13){
        return "Child";
    }else if( age < 19){
        return "Teenager";
    }else{
        return "Adult";
    }
}

console.log(age(11));// child
console.log(age(15));// teenager
console.log(age(22));// Adult


