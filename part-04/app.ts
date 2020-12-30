// not only does ts infer that num1 is a number, it also knows that num1 must equal 12.9
// even though we used let instead of const, num1 cannot be reassigned
// note the assignment with `:` instead of `=`
// this is a numeric literal, we have assigned 12.9 as the type, num1 is the value
// e.g. let variable1: 12.9;

// union types with the `|` allows multiple types

// Combinable is a type alias we define that uses union types to allow multiple types
// Output is a type alias we define that uses union types combined with string literals
// passing anything other than what we have defined here, ts would throw error

type Combinable = number | string;
type Output = "alert" | "console-log";

// a function to either concat strings, or add numbers together, depending on what type we pass in
function combine(
  input1: number | string, // example of using union types, without using the Combinable type alias
  input2: Combinable,
  output: Output
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    // ts would throw error without toString() because it know input1 and input2 could be either number or string
    result = input1.toString() + input2.toString();
  }
  if (output === "alert") {
    window.alert(result);
  } else if (output === "console-log") {
    console.log(result);
  }
}

combine("Apples", "oranges", "alert");

combine(192, 8, "console-log");
