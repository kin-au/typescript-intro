// the `!` tells ts that it will never yield null (you are sure that this will get an element)
// instead of `!`, we could wrap the button.addEventListener in a check i.e. `if (button) {}` then ts would not error
// the `as HTMLInputElement` lets ts know what type of element this will be
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// don't need to also declare type at variable declaration
// e.g. const printResult: boolean = true
// this is due to type inference, so ts detects the type
// hover over the variable name to see
// ts would throw error if we try to reassign printResult as something other than boolean
let printResult = true;
const resultPhrase = "Result is: ";

function add(
  num1: number,
  num2: number,
  printResult: boolean,
  resultPhrase: string
) {
  const result = num1 + num2;
  if (printResult) {
    console.log(resultPhrase + result);
  } else {
    return num1 + num2;
  }
}

// could wrap this eventlistener in `if (button) {}`, then would not need the `!`
button.addEventListener("click", function () {
  // the + converts value into a number
  add(+input1.value, +input2.value, printResult, resultPhrase);
});
