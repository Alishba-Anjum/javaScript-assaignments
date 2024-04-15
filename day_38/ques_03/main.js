var students = new Map();
students.set(1, "Alishba");
students.set(2, "Muniba");
students.set(3, "Rohaan");
students.forEach(function (Name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(Name));
});
