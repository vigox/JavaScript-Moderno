class API {
	constructor(apikey){
		this.apikey = apikey;
	}

	/*----------- Obtener todas las Criptomonedas -----------*/
	async obtenerCripto() {
		const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

		// fetch() a la API
		const obtenerCriptoURL = await fetch(url);

		// Respuesta en JSON
		const criptoMonedas = await obtenerCriptoURL.json();

		// console.log(criptoMonedas);

		return {
			criptoMonedas
		}
	}

	/*----------- Obtener Valores de Criptomoneda -----------*/

	async obtenerValores(monedaReal, criptoMoneda) {
		// URL de REST API
		const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${monedaReal}&api_key=${this.apikey}`;

		// Consultar en REST API
		const urlConvertir = await fetch(url);

		const resultados = await urlConvertir.json();

		return {
			resultados
		}
	}
}
