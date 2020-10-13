const loginForm = document.getElementById('login-form')
const email = document.getElementById('email')
let emailErr = document.querySelector('#login #login-form .email-error')
const pwd = document.getElementById('password')
let pwdErr = document.querySelector('#login #login-form .password-error')

loginForm.addEventListener('submit', e => {
  emailErr.innerText = ''
  pwdErr.innerText = ''

  let errors = {}

  if (email.value === '' || email.value === null) {
    errors.email = 'Email is required.'
  }

  if (pwd.value === '' || pwd.value === null) {
    errors.pwd = 'Password is required.'
  }
  debugger

  if (!isEmpty(errors)) {
    e.preventDefault()
    if (errors.email && errors.pwd) {
      emailErr.innerText = errors.email
      pwdErr.innerText = errors.pwd
    } else if (errors.email && !errors.pwd) {
      emailErr.innerText = errors.email
    } else {
      pwdErr.innerText = errors.pwd
    }
  }
})

function isEmpty(obj) {
  return Object.keys(obj).length === 0
}
