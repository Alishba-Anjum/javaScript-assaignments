function magicbox(Num) {
    return function (Num2) {
        return +Num2 + Num;
    };
}
var addNum = magicbox(11);
console.log(addNum(5));
