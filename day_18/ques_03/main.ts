
function flexibleList(key: string, value: string) {
    let dynamic_object = {};
    
    dynamic_object[key] = value;
    return dynamic_object;
}


let userPreference = flexibleList("Name", "Alishba");
let userPreference1 = flexibleList("Name", "Muniba");
let userPreference2 = flexibleList("Name", "Rohaan");




console.log(userPreference);
console.log(userPreference1);
console.log(userPreference2);
