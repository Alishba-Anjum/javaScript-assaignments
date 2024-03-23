var grades = [80, 84, 74, 79, 95, 86];
var averageGrade = grades.reduce(function (total, grade) {
    return total + grade;
}) / grades.length;
console.log(averageGrade);
