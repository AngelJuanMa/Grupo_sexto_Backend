'use strict'

function home(req, res) {
	const pattern = /[.'*+?^${}()<>|[\]\\]/g
	let isNegative = false;
	let isUndefined = false;

	let request = [req.body.metros, req.body.ambientes, req.body.baños, req.body.cocheras]
		.map(n => parseFloat(n))
		.map(n => {
			if (n < 0) isNegative = true
			else if (n !== n) isUndefined = true
		})

	if (isNegative) {
		return res.status(400).send({
			message: 'números negativos no estan permitidos'
		});
	} else if (isUndefined) {
		return res.status(400).send({
			message: 'Debe completar todos los campos, siendo solo números'
		});
	} else if (pattern.test(req.body.partidos) === true) {
		return res.status(400).send({
			message: 'Caracteres especiales no estan permitidos'
		});
	}
	
	res.status(200).send({
		message: 12345
	});
}

module.exports = {
	home
}