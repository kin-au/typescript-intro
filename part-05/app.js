// ts would infer that this fn returns a value of number type, from both inputs being numbers
// here we are specifying that the return value type is a number
// note, there is no need to do this - just let ts do it's job in type inference
// if we set it to `string`, ts would throw an error
function add(num1, num2) {
    return num1 + num2;
}
// the return type inferred by ts is void (a type not available in js)
// it means that this function does not have a return statement
// can explicitly state here that the return type is void, indicates that function intentionally does not return anything
function printResult(num) {
    console.log("Result is: " + num);
}
printResult(add(3, 9));
