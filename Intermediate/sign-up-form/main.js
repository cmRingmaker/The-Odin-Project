const password = document.getElementById('password')
const pwlabel = document.querySelector('label[for="password"]')
const confirmpw = document.getElementById('confirm_password')
const confirmlabel = document.querySelector('label[for="confirm_password"]')

// minimum 8 characters, one upper, one lower, one number
let validPW = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

let timeout;

confirmpw.addEventListener('keyup', () => {
  clearTimeout(timeout)
  
  timeout = setTimeout(() => {
    validateConfirmation()
  }, 500)
})

password.addEventListener('keyup', (e) => {
  clearTimeout(timeout)
  
  timeout = setTimeout(() => {
    validatePassword()
  }, 500)
})



function validatePassword() {
  if(password.value === '') {
    pwlabel.style.color = ''
    return
  }

  (!validPW.test(password.value))
    ? pwlabel.style.color = 'red'
    : pwlabel.style.color = 'green'
}

function validateConfirmation() {
  if(confirmpw.value === '') {
    confirmlabel.style.color = ''
    return
  }

  if(pwlabel.style.color === 'green') {
    (confirmpw.value === password.value)
    ? confirmlabel.style.color = 'green'
    : confirmlabel.style.color = 'red'
  }
}