var button = document.querySelector("button");
// the `!` tells ts that it will never yield null (you are sure that this will get an element)
// the `as HTMLInputElement` lets ts know what type of element this will be
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // the + converts value into a number
    console.log(add(+input1.value, +input2.value));
});
