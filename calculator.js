// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultiply = document.getElementById('buttonMultiply');
// var buttonDevide = document.getElementById('buttonDevide');
// var buttonExponentiation = document.getElementById('buttonExponentiation')

// var operationButtons = [buttonPlus, buttonMinus, buttonDevide, buttonMultiply, buttonExponentiation];

var operationButtons = document.getElementsByClassName("operation-button");
var input3 = document.getElementById("equals");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function makeOperation(operationCode) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);
  if (operationCode === "+") {
    var result = number1 + number2;
  } else if (operationCode === "-") {
    var result = number1 - number2;
  } else if (operationCode === "*") {
    var result = number1 * number2;
  } else if (operationCode === "/") {
    var result = number1 / number2;
  } else if (operationCode === "^") {
    var result = number1 ** number2;
  } else {
    window.alert("operation is unkwown");
  }
  //window.alert(result);
  document.querySelector("#equals").value = result;
}

function onOperationBattonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
}
for (var i = 0; i < operationButtons.length; i++) {
  var button = operationButtons[i];
  button.addEventListener("click", onOperationBattonClick);
}
document.querySelector("#equals").disabled = true;

// function getNumber1() {                          Не знаю как но оно работает
//     return Number(input1.value);
// }
// function getNumber2() {
//     return Number(input2.value);
// }

// function onButtonPlusClick() {                  Можно и так
//     makeOperation('+');
// }

// function onButtonMinusClick() {
//     makeOperation('-');
// }

// function onButtonMultiplyClick() {
//     makeOperation('*');
// }

// function onButtonDevideClick() {
//     makeOperation('/');
// }
// function onButtonExponentiation(){
//     makeOperation('**');
// }

//МОЖНО ПИСАТЬ ТАК

// function onButtonPlusClick() {
//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     var summ = number1 + number2;
//     window.alert(summ);

// }

// function onButtonMinusClick() {
//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     var minus = number1 - number2;
//     window.alert(minus);
// }

// function onButtonMultiplyClick() {
//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     var multiply = number1 * number2;
//     window.alert(multiply);
// }

// function onButtonDevideClick() {
//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     var devide = number1 / number2;
//     window.alert(devide);
// }

// buttonPlus.addEventListener('click', onButtonPlusClick);
// buttonMinus.addEventListener('click', onButtonMinusClick);
// buttonMultiply.addEventListener('click', onButtonMultiplyClick);
// buttonDevide.addEventListener('click', onButtonDevideClick);
