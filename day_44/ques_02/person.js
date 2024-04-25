"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = /** @class */ (function () {
    function person(Name) {
        this.Name = Name;
    }
    person.prototype.greet = function () {
        console.log(" Hello , my name is ".concat(this.Name));
    };
    return person;
}());
exports.person = person;
