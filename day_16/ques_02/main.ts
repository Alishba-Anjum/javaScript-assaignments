let laptop = {
    make : "Dell",
    Model : "M4600",
    Year : 2024,
    describe : function() {
       console.log(`This laptop is a ${this.make} ${this.Model} ${this.Year}.`);
       
    }
};
laptop.describe();

let laptops = [
    {Make : "DEll" , Model : "XPS" , Year : 2023},
    {Make : "Apple" , Model : "MacBook" , Year : 2024},
    {Make : "HP" , Model : "Pavilion" , Year : 2022}
];
let [laptop1 , laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);

