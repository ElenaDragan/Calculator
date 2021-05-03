let digit7 = document.querySelector('#digit7');
let digit8 = document.querySelector('#digit8');
let digit9 = document.querySelector('#digit9');
let digit4 = document.querySelector('#digit4');
let digit5 = document.querySelector('#digit5');
let digit6 = document.querySelector('#digit6');
let digit1 = document.querySelector('#digit1');
let digit2 = document.querySelector('#digit2');
let digit3 = document.querySelector('#digit3');

let multiply = document.querySelector('#multiply');
let subtract = document.querySelector('#subtract');
let add = document.querySelector('#add');
let equals = document.querySelector('#equals');
let result = document.querySelector('.result');
let clear = document.querySelector('#clear');


let firstNumber = 0;
let secondNumber = 0;

let startBuildingSecondNumber = false;

let operation = '';


function buildNumber(numberReceived) {
  if (startBuildingSecondNumber === false) {
   
    firstNumber = firstNumber * 10 + numberReceived;
    
    result.innerHTML = firstNumber;
  } else {
   
    secondNumber = secondNumber * 10 + numberReceived;
    result.innerHTML = secondNumber;
  }
}


function handleMultiplyClick() {
  startBuildingSecondNumber = true;
  operation = 'multiply';
  result.innerHTML = '*';
}

function handleSubtractClick() {
  startBuildingSecondNumber = true;
  operation = 'subtract';
  result.innerHTML = '-';
}

function handleAddClick() {
  startBuildingSecondNumber = true;
  operation = 'add';
  result.innerHTML = '+';
}

function handleClearClick() {
  firstNumber = '';
  secondNumber = '';
  startBuildingSecondNumber = false;
  operation = '';
  result.innerHTML = '';
}

function handleEqualsClick() {

  if (operation === 'multiply') {
    let operationResult = firstNumber * secondNumber;
    result.innerHTML = operationResult;
  }
  else if (operation === 'subtract') {
    let operationResult = firstNumber - secondNumber;
    result.innerHTML = operationResult;
  }
  else if (operation === 'add') {
    let operationResult = firstNumber + secondNumber;
    result.innerHTML = operationResult;
  }

  else if (operation === 'clear') {
    let operationResult = firstNumber + secondNumber;
    result.innerHTML = operationResult;
  }


  firstNumber = '';
  secondNumber = '';
  startBuildingSecondNumber = false;
  operation = '';
}


digit7.addEventListener('click', function() {
  buildNumber(7);
});
digit8.addEventListener('click', function () {
  buildNumber(8);
});
digit9.addEventListener('click', function () {
  buildNumber(9);
});
digit4.addEventListener('click', function() {
  buildNumber(4);
});
digit5.addEventListener('click', function () {
  buildNumber(5);
});
digit6.addEventListener('click', function () {
  buildNumber(6);
});
digit1.addEventListener('click', function() {
  buildNumber(1);
});
digit2.addEventListener('click', function () {
  buildNumber(2);
});
digit3.addEventListener('click', function () {
  buildNumber(3);
});

multiply.addEventListener('click', handleMultiplyClick);

subtract.addEventListener('click', handleSubtractClick);

add.addEventListener('click', handleAddClick);

equals.addEventListener('click', handleEqualsClick);

clear.addEventListener('click', handleClearClick);
