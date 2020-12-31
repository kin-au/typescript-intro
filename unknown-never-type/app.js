"use strict";
// unknown type is stricter than 'any' type
// 'any' type essentially disables all ts type checking
// use for when you're not sure exactly what type will be stored, but know what you will eventually do with the value
// we will just need an extra typeof to check the type
var randomUserInput;
var userName;
randomUserInput = "Kin";
// unknown type (randomUserInput) is not assignable to string type (username)
// we have to wrap this inside a typeof check
// ts will recognise that we're checking it's a string type, and not complain
if (typeof randomUserInput === "string") {
    userName = randomUserInput;
}
// here the return type is never, because the code would never return anything
// return type of void indicates that the code could at some point return something
// but `throw` creates an error and stops the block's script running (you could wrap the invocation of logError in a try/catch to prevent the whole script stopping)
// without explicitly specifying 'never' type, ts would infer the type as 'void'
// specifying 'never' helps signal the code's intentions, meaning better quality of code
var logError = function (message, code) {
    throw { errorMessage: message, errorCode: code };
};
logError("Whoops", 404);
