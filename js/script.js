function converter() {
	let select1 = document.getElementById('select1').value
	let select2 = document.getElementById('select2').value

	let valor = document.getElementById('valor').value

	// CONVERTER METROS EM CENTÍMETROS
	if (select1 === '1' && select2 === '2') {
		let resultado = document.getElementById('resultado')

		resultado.innerHTML = valor * 100 + ' CENTÍMETROS'
	}

	// CONVERTER METROS EM MILÍMETROS
	if (select1 === '1' && select2 === '3') {
		let resultado = document.getElementById('resultado')

		resultado.innerHTML = valor * 1000 + ' MILÍMETROS'
	}

	// CONVERTER CENTÍMETROS EM METROS
	if (select1 === '2' && select2 === '1') {
		let resultado = document.getElementById('resultado')

		resultado.innerHTML = valor / 100 + ' METROS'
	}

	// CONVERTER CENTÍMETROS EM MILÍMETROS
	if (select1 === '2' && select2 === '3') {
		let resultado = document.getElementById('resultado')

		resultado.innerHTML = valor * 10 + ' MILÍMETROS'
	}

	// CONVERTER MILÍMETROS EM METROS
	if (select1 === '3' && select2 === '1') {
		let resultado = document.getElementById('resultado')

		resultado.innerHTML = valor / 1000 + ' METROS'
	}

	// CONVERTER MILÍMETROS EM CENTÍMETROS
	if (select1 === '3' && select2 === '2') {
		let resultado = document.getElementById('resultado')

		resultado.innerHTML = valor / 10 + ' CENTÍMETROS'
	}
}