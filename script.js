let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let result = ''

const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

buttons.forEach(el => {
	el.addEventListener('click', e => {
		if (inputBox.value.length == 0 && !numArr.includes(e.target.innerText)) {
			return
		} else if (e.target.innerText == '=') {
			result = String(eval(result))
			inputBox.value = result
		} else if (e.target.innerText == 'AC') {
			result = ''
			inputBox.value = result
		} else if (e.target.innerText == 'DEL') {
			result = result.slice(0, -1)
			inputBox.value = result
		} else {
			result += e.target.innerText
			inputBox.value = result
		}
	})
})
