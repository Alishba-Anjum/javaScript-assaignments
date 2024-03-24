var user_profile = (function () {
    var Name = "Alishba";
    var fName = "anjum";
    return {
        displayInfo: function () {
            console.log("Name: ".concat(Name, " , fName: ").concat(fName));
        },
    };
})();
user_profile.displayInfo();
