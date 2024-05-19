// slider with blackbox
const colorTable = document.getElementById('color-table')
const cells = colorTable.getElementsByTagName('td')
const dotContainer = document.getElementById('dot-container')
const selectedCell = 0

for (let i = 0; i < cells.length; i++) {
	cells[i].style.display = 'none'
}

cells[selectedCell].style.display = 'block'

for (let i = 0; i < cells.length; i++) {
	let dot = document.createElement('span')
	dot.innerHTML = '&#9679;'
	dot.setAttribute('onclick', 'gotoSlide(' + i + ')')
	dotContainer.appendChild(dot)
}

dots[selectedCell].className = 'active'

function gotoSlide(slide) {
	cells[selectedCell].style.display = 'none'
	selectedCell = slide
	cells[selectedCell].style.display = 'block'

	for (let i = 0; i < cells.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '')
	}

	dots[selectedCell].className += ' active'
}

for (let i = 0; i < cells.length; i++) {
	let dot = document.createElement('span')
	dot.innerHTML = '&#9679;'
	dot.setAttribute('onclick', 'gotoSlide(' + i + ')')
	dot.setAttribute('id', 'dot' + i)
	dotContainer.appendChild(dot)
}

// и после кода функции gotoSlide(slide)
function updateDots() {
	for (let i = 0; i < cells.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '')
	}

	dots[selectedCell].className += ' active'
}

updateDots()

// let slideIndex = 1
// const arrowRight = document.querySelector('arrow-right')
// const arrowLeft = document.querySelector('arrow-left')

// showArrowRight(slideIndex)

// function plusArrowRight(n) {
// 	showArrowRight((slideIndex += n))
// }

// function currentSlide(n) {
// 	showArrowRight((slideIndex = n))
// }

// function showArrowRight(n) {
// 	let i
// 	if (n > arrowRight.length) {
// 		slideIndex = 1
// 	}
// 	if (n < 1) {
// 		slideIndex = arrowRight.length
// 	}
// 	for (i = 0; i < arrowRight.length; i++) {
// 		arrowRight[i].style.display = 'none'
// 	}
// 	for (i = 0; i < arrowLeft.length; i++) {
// 		arrowLeft[i].className = arrowLeft[i].className.replace(' active', '')
// 	}
// 	arrowRight[slideIndex - 1].style.display = 'block'
// 	arrowLeft[slideIndex - 1].className += ' active'
// }
