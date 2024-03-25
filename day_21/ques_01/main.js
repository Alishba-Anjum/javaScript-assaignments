var VehicleTypes;
(function (VehicleTypes) {
    VehicleTypes[VehicleTypes["car"] = 0] = "car";
    VehicleTypes[VehicleTypes["truck"] = 1] = "truck";
    VehicleTypes[VehicleTypes["Motorcycle"] = 2] = "Motorcycle";
    VehicleTypes[VehicleTypes["bus"] = 3] = "bus";
})(VehicleTypes || (VehicleTypes = {}));
console.log(VehicleTypes.car);
console.log(VehicleTypes.truck);
console.log(VehicleTypes.Motorcycle);
console.log(VehicleTypes.bus);
