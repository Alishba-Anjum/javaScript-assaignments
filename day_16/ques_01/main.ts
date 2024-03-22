let laptop = {
     make : "Dell",
     Model : "M4600",
     Year : 2024,
     describe : function() {
        console.log(`This laptop is a ${this.make} ${this.Model} ${this.Year}.`);
        
     }
};
laptop.describe();