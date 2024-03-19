var magicians = ["Alishba", "Muniba", "Hoor", "Riya"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
great(magicians);
show_magicians(magicians);
