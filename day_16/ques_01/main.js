var laptop = {
    make: "Dell",
    Model: "M4600",
    Year: 2024,
    describe: function () {
        console.log("This laptop is a ".concat(this.make, " ").concat(this.Model, " ").concat(this.Year, "."));
    }
};
laptop.describe();
