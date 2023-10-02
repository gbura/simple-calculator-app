let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let result = ''

buttons.forEach(el => {
	el.addEventListener('click', e => {
		if (e.target.innerText == '=') {
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
