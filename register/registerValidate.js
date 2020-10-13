const registerForm = document.getElementById('register-form')
const pwd = document.getElementById('password')
const cfirmedPwd = document.getElementById('confirmed-pwd')
let cfirmedPwdErr = document.querySelector('.confirmed-pwd-error')

registerForm.addEventListener('submit', e => {
  cfirmedPwd.innerText = ''
  let errors = {}

  if (pwd.value !== cfirmedPwd.value) {
    errors.cfirmedPwd = 'Password must be equivalent.'
  }

  if (!isEmpty(errors)) {
    e.preventDefault()
    cfirmedPwdErr.innerText = errors.cfirmedPwd
  }
})

function isEmpty(obj) {
  return Object.keys(obj).length === 0
}
