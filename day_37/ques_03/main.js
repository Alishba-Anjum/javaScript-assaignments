function age(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age < 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(age(11));
console.log(age(15));
console.log(age(22));
