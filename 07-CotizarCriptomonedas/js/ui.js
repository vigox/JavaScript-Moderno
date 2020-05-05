// Es necesario instanciar clases
// Investigar sobre donde instanciar clases

// Una clase NO LLEVA () después de su nombre
class Interfaz{

	constructor() {
		this.init();
	}

	/*----------- INICIALIZAR -----------*/
	init() {
		this.construirSelects();
	}

	/*----------- POBLAR LISTA DE CRIPTOS -----------*/
	construirSelects() {
		criptoAPI.obtenerCripto()

			.then(criptoMonedas => {

				// console.log(criptoMonedas.criptoMonedas.Data);

				// Navegar por el objeto
				// Object.entries no recorre la informacion
				// Toma la llave del objecto, su valor y los regresa en un arreglo
				// En cierta manera, toma objectos y los convierte en arreglos
				// console.log(Object.entries(criptoMonedas.criptoMonedas.Data));

				// Contenedor de opciones de criptomoneda
				const select = document.querySelector('#criptomoneda');

				// Iterar resultados de la api
				for( const [key, value]  of Object.entries(criptoMonedas.criptoMonedas.Data) ) {
					// console.log(value);

					// Añadir Symbol y nombre como opciones para select <-> option
					const opcion = document.createElement(`option`);

					opcion.value = value.Symbol;
					opcion.appendChild(document.createTextNode(value.CoinName));

					select.appendChild(opcion);
				}
			})
	}


	/*----------- MOSTRAR MENSAJES / ALERTAS -----------*/

	mensajeInterfaz(mensaje, clases) {
		const divMensaje = document.createElement(`div`);
		divMensaje.className = clases;
		divMensaje.appendChild(document.createTextNode(mensaje));

		console.log(divMensaje);

		// Seleccionar contenedor con clase mensajes
		const divContenedor = document.querySelector('.mensajes');
		divContenedor.appendChild(divMensaje);

		// Ocultar mensaje / alerta
		setTimeout(() => {
			document.querySelector('.mensajes div').remove();
		}, 3500);


	}

	/*----------- MOSTRAR COTIZACION -----------*/

	// Se necesitan 3 valores dado al formato que maneja la API
	mostrarResultados(resultados, monedaReal, criptoMoneda) {
		// Pasar valores dinamicamente de Moneda / Cripto, para obtener un objeto más compacto y que se puede navegar más fácil
		
		// console.log(resultados);
		// console.log(resultados[criptoMoneda]);
		console.log(resultados[criptoMoneda][monedaReal])
	}

}
