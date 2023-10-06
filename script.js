const inputBox = document.getElementById('inputBox')
const buttons = document.querySelectorAll('button')

const lightbulbDiv = document.querySelector('.theme-color')
const lightbulbIcon = document.querySelector('.fa-lightbulb')
const calculatorBody = document.querySelector('.calculator')

let result = ''

const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operatorsArr = ['%', '/', '*', '+', '-']

// calculator functionality

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
			let value = inputBox.value
			const previousElement = value.charAt(value.length - 1)
			const newElement = e.target.innerText

			if (operatorsArr.includes(previousElement) && operatorsArr.includes(newElement)) {
				let newResult = result.slice(0, -1)
				newResult += newElement
				inputBox.value = newResult
				result = newResult
			} else {
				result += newElement
			}

			inputBox.value = result
		}
	})
})

// changing color

lightbulbDiv.addEventListener('click', () => {
	lightbulbIcon.classList.toggle('active')
	calculatorBody.classList.toggle('active')
})
