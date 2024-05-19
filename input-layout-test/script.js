/**
 * Макс длина имя и фамилия 15 символов
 * пароль и подтверждение пароля нужно сделать условие password === currentPassword
 * минимальная длина пароля 8 символов
 * поле почта должна иметь валидный электронный адрес @
 * Кнопка "Отправить" должна быть заблокирована
 * свойством "disabled", пока пользователь не введёт валидные значения
 */

const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#Email')
const currentPassword = document.querySelector('#password')
const confirmPassword = document.querySelector('#password-confirm')
const formBtn = document.querySelector('#form-button')

formBtn.addEventListener('click', (event) => {
	if (currentPassword.value !== confirmPassword.value) {
		alert('Ur password is not correct')
		return
	}

	alert('Ur data is sending...')
	return
	location.reload()
})
