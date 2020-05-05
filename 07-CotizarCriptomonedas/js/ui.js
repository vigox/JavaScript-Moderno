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
		// console.log(resultados[criptoMoneda][monedaReal]);

		// En caso que existan un resultado previo
		const datoAnterior = document.querySelector('#resultado > div');

		if(datoAnterior){
			datoAnterior.remove();
		}

		const datosMoneda = resultados[criptoMoneda][monedaReal];

		// Recortar digitos decimales
		let precioCripto = datosMoneda.PRICE.toFixed(2),
		incremento = datosMoneda.CHANGEPCTDAY.toFixed(5),
		fechaCambio = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');

		const divInfoMoneda = document.querySelector('#resultado');

		// construir template para el DOM
		let datosHTML = `
			<div class="card bg-warning">
				<div class="card-body text-light">
				<h2 class="card-title">Resultado:</h2>
				<p>El precio de ${datosMoneda.FROMSYMBOL} en ${datosMoneda.TOSYMBOL} es $ ${precioCripto}</p>

				<p>Variación del último día: ${incremento}%</p>
				<p>Última actualización: ${fechaCambio}</p>
				</div>
			</div>
		`;

		// Mostrar spinner de cargando resultados
		this.toggleSpinner('block');

		// insertar resultado al DOM
		setTimeout(() => {
			divInfoMoneda.innerHTML = datosHTML;
			this.toggleSpinner('none');
		}, 2500);
	}

	/*----------- MOSTRAR SPINNER / CARGANDO -----------*/
	toggleSpinner(estado) {
		const spinner = document.querySelector('.contenido-spinner');
		spinner.style.display = estado;
	}


}
