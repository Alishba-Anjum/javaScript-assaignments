function tShirt(size, color, message) {
    if (size === void 0) { size = "large"; }
    if (color === void 0) { color = "blue"; }
    if (message === void 0) { message = ""; }
    console.log("you have customized a ".concat(size, " ").concat(color, " T_shirt, \n ").concat(message, "."));
}
tShirt();
tShirt("medium", "black", "M size");
tShirt("small", "White", "S size");
tShirt("XL", "brown", "Xl size");
