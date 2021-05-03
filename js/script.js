function converter() {
	let select1 = document.getElementById('select1').value
	let select2 = document.getElementById('select2').value

	let valor = document.getElementById('valor').value
	let resultado = document.getElementById('resultado')

	console.log(select1)

	if (select1 === 'SELECIONE...' || select2 === 'SELECIONE...') {
		alert('UNIDADE DE MEDIDA PRECISA SER INFORMADA!')

	} else if (valor === '') {
		alert('UM VALOR PRECISA SER INFORMADO!')

	} else {

		if (select1 === '0' && select2 === '1') { // CONVERTER KM EM METROS
			resultado.innerHTML = valor * 1000 + ' METROS'

		} else if (select1 === '0' && select2 === '2') { // CONVERTER KM EM CENTÍMETROS
			resultado.innerHTML = valor * 1000 * 100 + ' CENTÍMETROS'

		} else if (select1 === '0' && select2 === '3') { // CONVERTER KM EM MILÍMETROS
			resultado.innerHTML = valor * 1000 * 100 * 10 + ' MILÍMETROS'

		} else if (select1 === '1' && select2 === '0') { // CONVERTER METROS EM KM
			resultado.innerHTML = valor / 1000 + ' KM'

		} else if (select1 === '1' && select2 === '2') { // CONVERTER METROS EM CENTÍMETROS
			resultado.innerHTML = valor * 100 + ' CENTÍMETROS'

		} else if (select1 === '1' && select2 === '3') { // CONVERTER METROS EM MILÍMETROS
			resultado.innerHTML = valor * 1000 + ' MILÍMETROS'

		} else if (select1 === '2' && select2 === '0') { // CONVERTER CENTÍMETROS EM KM
			resultado.innerHTML = valor / 100 / 1000 + ' KM'

		} else if (select1 === '2' && select2 === '1') { // CONVERTER CENTÍMETROS EM METROS
			resultado.innerHTML = valor / 100 + ' METROS'

		} else if (select1 === '2' && select2 === '3') { // CONVERTER CENTÍMETROS EM MILÍMETROS
			resultado.innerHTML = valor * 10 + ' MILÍMETROS'

		} else if (select1 === '3' && select2 === '0') { // CONVERTER MILÍMETROS EM KM
			resultado.innerHTML = valor / 1000 / 1000 + ' KM'

		} else if (select1 === '3' && select2 === '1') { // CONVERTER MILÍMETROS EM METROS
			resultado.innerHTML = valor / 1000 + ' METROS'

		} else if (select1 === '3' && select2 === '2') { // CONVERTER MILÍMETROS EM CENTÍMETROS
			resultado.innerHTML = valor / 10 + ' CENTÍMETROS'

		}
	}
}