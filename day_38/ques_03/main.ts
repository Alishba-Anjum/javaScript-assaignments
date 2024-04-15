const students = new Map<number, string>();
students.set(1 , "Alishba");
students.set(2 , "Muniba");
students.set(3 , "Rohaan");

students.forEach((Name, id)=>{
console.log(`Student ID: ${id}, Name: ${Name}`);
});