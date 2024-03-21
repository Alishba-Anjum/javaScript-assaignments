var magicians = ["Alishba", "Hooor", "Muniba", "Riya"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_greatmagicians(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magicians) {
        greatMagicians.push("".concat(magicians, " the great"));
    });
    return greatMagicians;
}
var greatMagicians = make_greatmagicians(magicians.slice());
console.log("orignal magicians");
show_magicians(magicians);
console.log("Great magicians");
show_magicians(greatMagicians);
