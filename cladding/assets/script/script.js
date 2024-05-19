const cells = document.querySelectorAll('.elem__line-elem')
const lineElem = document.querySelector('.line-elem')
const selectedCell = null
/*
 если класс active используется больше одного раза, то тогда у прошлого элемента мы его убираем с помощью classList.remove('.active')
*/

// productsBlock > element'ы чтобы можно было только один выбрать

cells.forEach(function (elem) {
	elem.addEventListener('click', function () {
		// Удаление класса 'active' у всех элементов
		cells.forEach(function (el) {
			el.classList.remove('active')
		})

		// Добавление класса 'active' только к элементу, по которому кликнули
		elem.classList.add('active')
	})
})

// модальное окно

function submitForm() {
	document.getElementById('overlay').style.display = 'block'

	document.getElementById('modal').style.display = 'block'
}

function closeModal() {
	document.getElementById('overlay').style.display = 'none'
	document.getElementById('modal').style.display = 'none'
}

// плавный скролл вниз

const link = document.querySelector('.about')
const aboutUsBlock = document.querySelector('.about-us')
const btnProduct = document.querySelector('.btn-product')
const product = document.querySelector('.product')
const productsBlock = document.querySelector('.products')
const contact = document.querySelector('.contact')
const contactsBlock = document.querySelector('footer')

function listenFunc(elem, itemRelation) {
	elem.addEventListener('click', () => {
		itemRelation.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest', // к ближайшей границе экрана
		})
	})
}

listenFunc(link, aboutUsBlock)
listenFunc(product, productsBlock)
listenFunc(btnProduct, productsBlock)
listenFunc(contact, contactsBlock)
