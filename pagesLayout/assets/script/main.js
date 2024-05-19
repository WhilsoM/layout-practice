const buttons = document.querySelectorAll('.book-card__btn')
const circleSpan = document.querySelector('.circle span')

document.addEventListener('DOMContentLoaded', function () {
	buttons.forEach((button) => {
		button.addEventListener('click', function () {
			// Увеличиваем значение в span
			let currentValue = parseInt(circleSpan.textContent)
			circleSpan.textContent = currentValue + 1

			// Создаем и показываем уведомление
			const notification = document.createElement('div')
			notification.textContent = 'Покупка завершена!'
			notification.style.position = 'fixed'
			notification.style.top = '20px'
			notification.style.right = '20px'
			notification.style.backgroundColor = 'green'
			notification.style.color = 'white'
			notification.style.padding = '10px'
			notification.style.borderRadius = '5px'
			notification.style.zIndex = '1000'

			document.body.appendChild(notification)

			setTimeout(() => {
				document.body.removeChild(notification)
			}, 4000)
		})
	})
})

const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('#popup__btn')
const popupCloseBtn = document.querySelector('.popup__close')

popupBtn.addEventListener('click', () => {
	popup.classList.add('popup__open')
	document.body.style.overflow = 'hidden'

	circleSpan.textContent = '0'
})

popupCloseBtn.addEventListener('click', () => {
	popup.classList.remove('popup__open')
	document.body.style.overflow = 'auto'
})

const popupBtnOk = document.querySelector('#popup__btn-ok')
const popup2 = document.querySelector('.popup-2')
const popup2CloseBtn = document.querySelector('.popup-2__close')

popupBtnOk.addEventListener('click', () => {
	popup2.classList.add('popup__open')
	document.body.style.overflow = 'hidden'
})

popup2CloseBtn.addEventListener('click', () => {
	popup2.classList.remove('popup__open')
	document.body.style.overflow = 'auto'
})

const burgerMenu = document.querySelector('.burger')
const navElem = document.querySelector('nav')

// у body добавить стиль overflow: hidden; , когда человек нажимает на бургер меню

burgerMenu.addEventListener('click', function () {
	document.body.classList.toggle('overflow-hid')
	burgerMenu.classList.toggle('active')
	navElem.classList.toggle('open')
})
