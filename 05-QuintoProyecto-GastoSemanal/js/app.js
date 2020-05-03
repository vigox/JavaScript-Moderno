/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/
const presupuestoUsuario = prompt('¿cuál es tu presupuesto semanal?');
let cantidadPresupuesto;

// console.log(presupuestoUsuario);
/*=============================================>>>>>
= CLASES =
===============================================>>>>>*/
// Clase de presupuesto
class Presupuesto {
	constructor(presupuesto){
		this.presupuesto = Number(presupuesto);
		this.restante = Number(presupuesto);
	}

	/**
	** METODO PARA RESTAR PRESUPUESTO ACTUAL
	**/
	presupuestoRestante(cantidad = 0){
		return this.restante -= Number(cantidad);
	}
}

/**
** CLASE DE INTERFAZ DE USUARIO
**/
class Interfaz{
	insertarPresupuesto(cantidadBase){
		console.log(cantidadBase);
		console.log('As expected');

		const presupuestoHTML = document.querySelector('span#total');

		const restanteHTML = document.querySelector('span#restante');

		// Insertar valores al HTML
		presupuestoHTML.innerHTML = `${cantidadBase}`;
		restanteHTML.innerHTML = `${cantidadBase}`;
	}
}

/*=============================================>>>>>
= EVENT LISTENERS =
===============================================>>>>>*/
// Verificar que el usuario haya puesto un presupuesto y que no sea un string vacio
if(presupuestoUsuario === null || presupuestoUsuario === '') {
	console.log("I'm sorry Dave, I'm afraid I can't do that");
	window.location.reload();
} else {
	// Instanciar un presupuesto
	cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

	// Instanciar la clase de interfaz
	const ui = new Interfaz();
	ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);

	console.log(cantidadPresupuesto);
	console.log('all according to keikaku');
}
