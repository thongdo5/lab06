const deliveryForm = document.getElementById('delivery-form')
const name = document.getElementById('name')
let nameErr = document.querySelector('.name-err')
const address = document.getElementById('address')
let addressErr = document.querySelector('.address-err')

deliveryForm.addEventListener('submit', e => {
  nameErr.innerText = ''
  addressErr.innerText = ''
  let errors = {}

  if (name.value === '' || name.value === null) {
    errors.name = 'Name is required.'
  }

  if (address.value === '' || address.value === null) {
    errors.address = 'Address is required.'
  }

  if (!isEmpty(errors)) {
    e.preventDefault()
    if (errors.name && errors.address) {
      nameErr.innerText = errors.name
      addressErr.innerText = errors.address
    } else if (errors.name && !errors.address) {
      nameErr.innerText = errors.name
    } else {
      addressErr.innerText = errors.address
    }
  }
})

function isEmpty(obj) {
  return Object.keys(obj).length === 0
}
