function ovjProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
ovjProperties({ make: "toyota", model: "Corolla", year: 2022, color: "black" });
