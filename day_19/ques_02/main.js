var mixed_array = [1, "Alishba", false, "muniba", 19, true, 11, "hello"];
var str_array = mixed_array.filter(function (item) {
    return typeof item === "string";
});
var num_array = mixed_array.filter(function (val) {
    return typeof val === "number";
});
var boolean_array = mixed_array.filter(function (item) {
    return typeof item === "boolean";
});
console.log(str_array);
console.log(num_array);
console.log(boolean_array);
var arr = [1, 2, 3, 4];
var newArr = arr.reduce(function (res, curr) {
    return res + curr;
});
console.log(newArr);
