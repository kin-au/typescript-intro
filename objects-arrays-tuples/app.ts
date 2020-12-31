// when declaring an object
// ts could infer the object type, with the key:type pair
// usually would let ts do it's own type inference, which is a better practice
// but the body property is a tuple value, which we need to set explicitly
// hover over the variable name to see
const car: {
  make: string;
  model: string;
  year: number;
  options: string[];
  body: [number, string];
} = {
  make: "Toyota",
  model: "Yaris GR",
  year: 2020,
  // ts infers that options should be an array containing strings
  options: ["Sat nav", "Air-con"],
  // if it wasn't for the explicit type declaration, ts would have inferred this as a normal array of strings
  body: [3, "Hatchback"],
};

// even though our tuple is defined as an array with a number and string, this will not throw error
// push is an exception which is allowed in tuples, so ts will not catch it as an error
car.body.push("blah");
// `car.body = [3, "Hatchback", 10]` would throw an error because cannot have more than 2 array elements
// `car.body[1] = 10` would throw an error because the second array element must be a string

for (const option of car.options) {
  // we can use js string methods here because ts knows that car.options is an array of string values
  // e.g. we would get an error if we tried option.filter();
  console.log(option.toUpperCase());
}
