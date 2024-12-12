let firstNubmer = Number(prompt("fisrt number "));
let secondNumber = Number(prompt("second numberr"));
let element = prompt("get operator");
function myCalculatorFunction(x=0, y=0, element='+') {
  if (element === "+") {
    return x + y;
  } else if (element === "-") {
    return x - y;
  } else if (element === "*") {
    return x * y;
  } else if (element === "/") {
    return x / y;
  } 
}

console.log("Cavab", myCalculatorFunction(firstNubmer, secondNumber, element));

