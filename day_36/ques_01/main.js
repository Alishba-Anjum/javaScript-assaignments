function leapYear(year) {
    return (year % 4 === 0 && year && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2000));
console.log(leapYear(1999));
console.log(leapYear(2004));
