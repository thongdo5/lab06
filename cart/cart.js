function handleClick() {
  let counter = 0
  return function (operator, target) {
    let quantity = document.getElementById(target)

    if (operator === 'decrement') {
      if (counter > 0) {
        counter--
        quantity.innerText = counter
      }
    } else {
      counter++
      quantity.innerText = counter
    }
  }
}

let bookCount = handleClick()
let rulerCount = handleClick()
