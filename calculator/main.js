const clearButton = document.getElementById('#clearBtn')
const deleteButton = document.getElementById('#deleteBtn')
const decimalButton = document.getElementById('#decimalBtn')
const equalsButton = document.getElementById('#equalsBtn')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const previousInput = document.getElementById('#previousInput')
const currentInput = document.getElementById('#currentInput')

function operate(num1, num2, op) {
  switch (op) {
    case '+': num1 + num2;  break;
    case '-': num1 - num2;  break;
    case '*': num1 * num2;  break;
    case '/': num1 / num2;  break;
    case '^': num1 ** num2; break
  }
}