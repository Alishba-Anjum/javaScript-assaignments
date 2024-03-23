function flexibleList(key, value) {
    var dynamic_object = {};
    dynamic_object[key] = value;
    return dynamic_object;
}
var userPreference = flexibleList("Name", "Alishba");
var userPreference1 = flexibleList("Name", "Muniba");
var userPreference2 = flexibleList("Name", "Rohaan");
console.log(userPreference);
console.log(userPreference1);
console.log(userPreference2);
