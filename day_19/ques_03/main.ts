let grades: number[] = [80, 84, 74, 79, 95, 86];

let averageGrade =  grades.reduce((total , grade) =>{
    return total + grade  }) / grades.length;

console.log(averageGrade);
