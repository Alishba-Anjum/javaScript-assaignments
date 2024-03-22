var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var priceSet1 = [2000, 3000, 4000];
var priceSet2 = [2500, 1500, 3500];
var combinePrice = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return (a - b); });
console.log(combinePrice);
