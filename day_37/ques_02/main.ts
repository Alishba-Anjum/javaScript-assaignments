function assignGrades(score: number): string{
    if(score >= 90){
        return "A*";
    }else if(score >= 80){
        return "A";
    }else if(score >= 70){
        return "B"
    }else if(score >= 60){
        return "C";
    }else if(score >= 50){
        return "D"
    }else{
        return "F"
    }
}

console.log(assignGrades(99));// A*
console.log(assignGrades(89));// A
console.log(assignGrades(71));// B
console.log(assignGrades(68));// C
console.log(assignGrades(55));// D
console.log(assignGrades(41));// F


