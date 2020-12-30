// when declaring an object
// again ts infers the object type, with the key:type pair
// hover over the variable name to see
// could be declared like this, but not a good practice:
// const car: {
//   make: string;
//   model: string;
//   year: number;
// } = {
//   make: "Toyota",
//   model: "Yaris GR",
//   year: 2020
// }
var car = {
    make: "Toyota",
    model: "Yaris GR",
    year: 2020,
    // ts infers that options should be an array containing strings
    options: ["Sat nav", "Air-con"]
};
// declaring a variable whose value is an array of strings
var customers;
console.log(car.model);
for (var _i = 0, _a = car.options; _i < _a.length; _i++) {
    var option = _a[_i];
    console.log(option.toUpperCase());
}
