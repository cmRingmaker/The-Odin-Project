const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const decimalButton = document.getElementById('decimalBtn')
const equalsButton = document.getElementById('equalsBtn')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const upperDisplay = document.getElementById('upperDisplay')
const lowerDisplay = document.getElementById('lowerDisplay')

let firstOperand = ''
let secondOperand = ''
let currentOperation = null

numberButtons.forEach((button) =>{
  button.addEventListener('click', ()=> setCurrentInput(button.textContent))
})

operatorButtons.forEach((button) =>
  button.addEventListener('click', ()=> setCurrentOperation(button.textContent) )
)

equalsButton.addEventListener('click', ()=> equals())
clearButton.addEventListener('click', ()=> clearAll())
deleteButton.addEventListener('click', ()=> deleteOne())

function setCurrentInput(number) {
  if(lowerDisplay.textContent === '0') {
    lowerDisplay.textContent = ''
}
  lowerDisplay.textContent += number
}

function setCurrentOperation(operator) {
  currentOperation = operator
  firstOperand = lowerDisplay.textContent
  upperDisplay.textContent = `${lowerDisplay.textContent} ${operator}`
  lowerDisplay.textContent = ''
}

function equals() {
  upperDisplay.textContent = `${upperDisplay.textContent} ${lowerDisplay.textContent} =`
  secondOperand = lowerDisplay.textContent
  lowerDisplay.textContent = operate(firstOperand, secondOperand, currentOperation)
}

function operate(num1, num2, op) {
  num1 = Number(num1)
  num2 = Number(num2)

  switch (op) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case 'x': return num1 * num2;
    case '÷': return num1 / num2;
    case '^': return num1 ** num2;
    case '%': return num1 % num2;
  }
}

function clearAll() {
  lowerDisplay.textContent = '0'
  upperDisplay.textContent = ''
  currentOperation = null
}

function deleteOne() {
  lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1)
  if(lowerDisplay.textContent.length === 0){
    lowerDisplay.textContent = '0'
  }
}