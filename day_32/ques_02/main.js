function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [5, 11, 20, 25, 8];
console.log(filterGreaterThanTen(numbers));
