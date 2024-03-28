function swapvalue() {
    var a = 55, b = 99;
    console.log("Before swap a= ".concat(a, " , b = ").concat(b));
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap a= ".concat(a, " , b = ").concat(b));
}
swapvalue();
