const shapes = document.querySelectorAll('svg.shape')

shapes.forEach((shape) => {
	shape.addEventListener('click', () => {
		const currentFill = shape.getAttribute('fill')

		if (currentFill === '#fff') shape.setAttribute('fill', '#000')
		else shape.setAttribute('fill', '#fff')
	})
})
