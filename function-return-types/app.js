"use strict";
// we can define a function type (note `:` instead of `=`)
// tells ts that `add` must be a fn that takes two args (both numbers) with a return value of type number
var addNum;
// ts would infer that this fn returns a value of number type, from both inputs being numbers
// here we could specify that the return value type is a number
// there is no need to do this - just let ts do it's job in type inference
// if we set it to `string`, ts would throw an error
addNum = function (num1, num2) {
    return num1 + num2;
};
// the return type inferred by ts is void (a type not available in js)
// it means that this function does not have a return statement
// can explicitly state here that the return type is void, indicates that function intentionally does not return anything
function clgResult(num) {
    console.log("Result is: " + num);
}
// trying to assign clgResult fn to add, ts will throw error
// because it does not adhere to the function type defined on line 3
// add = clgResult;
clgResult(addNum(3, 9));
