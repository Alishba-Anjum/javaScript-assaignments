var countries = new Map();
countries.set("USA", "washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokoy");
console.log(countries);
function capitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the map");
    }
}
capitalOfCanada(countries);
