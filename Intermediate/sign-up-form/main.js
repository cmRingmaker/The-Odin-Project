const password = document.getElementById('password')
const pwLabel = document.querySelector('label[for="password"]')
const confirmPw = document.getElementById('confirm_password')
const confirmLabel = document.querySelector('label[for="confirm_password"]')
const submitButton = document.getElementById('submit_button')
const errorChecker = document.getElementById('error')
const form = document.getElementById('myform')

// minimum 8 characters, one upper, one lower, one number
let validPW = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
let timeout;

confirmPw.addEventListener('keyup', () => {
  clearTimeout(timeout)
  
  timeout = setTimeout(() => {
    validateConfirmation()
  }, 500)
})

password.addEventListener('keyup', () => {
  clearTimeout(timeout)
  
  timeout = setTimeout(() => {
    validatePassword()
  }, 500)
})

form.addEventListener('submit', (e) => {
  if(password.value !== confirmPw.value) {
    e.preventDefault()
    errorChecker.innerText = 'Passwords do not match!'
  } else if (password.value === confirmPw.value) {
    // since this is an example form with data not going anywhere... replacing the PW in the url because of the get method appending it as plain text
    password.value = '######'
    confirmPw.value = '######'
  }

})

function validatePassword() {
  if(password.value === '') {
    pwLabel.style.color = ''
    return
  }

  (!validPW.test(password.value))
    ? pwLabel.style.color = 'red'
    : pwLabel.style.color = 'green'
}

function validateConfirmation() {
  if(confirmPw.value === '') {
    confirmLabel.style.color = ''
    return
  }

  if(pwLabel.style.color === 'green') {
    (confirmPw.value === password.value)
      ? confirmLabel.style.color = 'green'
      : confirmLabel.style.color = 'red'
  }
}