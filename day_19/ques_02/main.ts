let mixed_array = [1, "Alishba", false, "muniba", 19, true, 11, "hello"];

let str_array = mixed_array.filter((item) => {
  return typeof item === "string";
});

let num_array = mixed_array.filter((val) => {
  return typeof val === "number";
});

let boolean_array = mixed_array.filter((item) => {
  return typeof item === "boolean";
});

console.log(str_array);
console.log(num_array);
console.log(boolean_array);


