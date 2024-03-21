function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Sandwich with ".concat(items.join(','), "."));
}
sandwich("chicken", "cheese", "ketchup");
sandwich("lettuce", "tomato", "mayo");
