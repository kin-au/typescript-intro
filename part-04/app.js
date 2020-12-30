// not only does ts infer that num1 is a number, it also knows that num1 must equal 12.9
// even though we used let instead of const, num1 cannot be reassigned
// note the assignment with `:` instead of `=`
// this is a numeric literal, we have assigned 12.9 as the type, num1 is the value
var num1;
function combine(input1, // example of using union types, without the type alias of Combinable
input2, output) {
    // a function to either concat strings, or add numbers together
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        // ts would throw error without toString() because it know input1 and input2 could be either number or string
        result = input1.toString() + input2.toString();
    }
    if (output === "alert") {
        window.alert(result);
    }
    else if (output === "console-log") {
        console.log(result);
    }
}
combine("Apples", "oranges", "alert");
// console.log(combinedShoppingList);
combine(192, 8, "console-log");
// console.log(combinedAmounts);
