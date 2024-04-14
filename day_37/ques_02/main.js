function assignGrades(score) {
    if (score >= 90) {
        return "A*";
    }
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrades(99));
console.log(assignGrades(89));
console.log(assignGrades(71));
console.log(assignGrades(68));
console.log(assignGrades(55));
console.log(assignGrades(41));
