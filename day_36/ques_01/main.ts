function leapYear(year: number): boolean {
    return (year % 4 === 0 && year && year % 100 !== 0) || year % 400 === 0;
  }
  
  console.log(leapYear(2000));// true
  console.log(leapYear(1999));// false
  console.log(leapYear(2004));// true
  
  
  