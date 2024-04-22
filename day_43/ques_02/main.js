var arrow_function = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (previouValue, currValue) { return previouValue * currValue; }, 1);
};
console.log(arrow_function(2, 4, 6));
