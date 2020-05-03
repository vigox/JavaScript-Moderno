/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/
const presupuestoUsuario = prompt('¿cuál es tu presupuesto semanal?');
let cantidadPresupuesto;
const formularioAgregarGasto = document.querySelector('#agregar-gasto');

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
	// Procesar presupuesto obtenido
	insertarPresupuesto(cantidadBase){
		console.log(cantidadBase);
		console.log('As expected');

		const presupuestoHTML = document.querySelector('span#total');

		const restanteHTML = document.querySelector('span#restante');

		// Insertar valores al HTML
		presupuestoHTML.innerHTML = `${cantidadBase}`;
		restanteHTML.innerHTML = `${cantidadBase}`;
	}

	// Procesar mensajes en la interfaz (HTML)
	imprimirMensaje(contenidoMensaje, tipoMensaje) {
		// contenedor del mensaje
		const divMensaje = document.createElement('div');
		divMensaje.classList.add('text-center', 'alert');

		// Evaluar que tipo de mensaje se recibe
		if( tipoMensaje === 'error' ) {
			divMensaje.classList.add('alert-danger');
		} else {
			divMensaje.classList.add('alert-success');
		}

		divMensaje.appendChild( document.createTextNode( contenidoMensaje ) );

		// Insertar mensaje en el DOM
		document.querySelector('.primario').insertBefore(divMensaje, formularioAgregarGasto);

		// Ocultar mensaje después de un tiempo y resetear formulario
		setTimeout( function() {
			document.querySelector('.primario .alert').remove();

			formularioAgregarGasto.reset();

		}, 2500 );

	}

	// Insertar gastos al HTML
	agregarGastoListado( nombreGasto, cantidadGasto ) {
		const listadoGastos = document.querySelector('#gastos ul');

		// Crear li / elemento para el gasto en el HTML
		const elementoGasto = document.createElement('li');
		elementoGasto.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

		// Insertar el gasto
		elementoGasto.innerHTML = `
			${nombreGasto}
			<span class="badge badge-primary badge-pill">$ ${cantidadGasto}</span>
		`;

		listadoGastos.appendChild(elementoGasto);
	}

	// Contenedor de Presupuesto Restante en Interfaz
	presupuestoRestanteUI(cantidadGasto){
		const valorRestante = document.querySelector('#restante');

		// Leer valor de presupuestoRestante()
		const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidadGasto);

		console.log(presupuestoRestanteUsuario);

		// Actualizar información de presupesto en el HTML
		valorRestante.innerHTML = `${presupuestoRestanteUsuario}`;
	}
}

/*=============================================>>>>>
= EVENT LISTENERS =
===============================================>>>>>*/

/**
** VERIFICAR QUE SE INTRODUZCA UN PRESUPUESTO Y SEA VALIDO
**/
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

/**
** EVENT LISTENER PARA ENVIO DE FORMULARIO
**/
formularioAgregarGasto.addEventListener('submit', function(e){
	e.preventDefault();

	// Leer información del formulario de gastos
	const nombreGasto = document.querySelector('#gasto').value;
	const cantidadGasto = document.querySelector('#cantidad').value;

	// Instanciar la interfaz para llevar el registro de gastos y actualizacion del presupuesto
	const ui = new Interfaz();

	// Comprobar que los gastos no estén vacíos
	if( nombreGasto === '' || cantidadGasto === '' ) {
		console.log("I'm sorry Dave, I'm afraid I can't do that");

		// Parametros: Contenido de Mensaje y Tipo de Mensaje
		ui.imprimirMensaje('Ocurrió un error', 'error');

	} else {
		console.log('Dizque enviado');

		// Insertar gasto al HTML
		ui.imprimirMensaje('Gasto agregado', 'correcto');

		ui.agregarGastoListado(nombreGasto, cantidadGasto);

		ui.presupuestoRestanteUI(cantidadGasto);
	}

});
