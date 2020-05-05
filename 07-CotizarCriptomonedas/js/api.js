class API {
	constructor(apikey){
		this.apikey = apikey;
	}

	/*----------- Obtener todas las monedas -----------*/
	async obtenerCripto() {
		const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

		// fetch() a la API
		const obtenerCriptoURL = await fetch(url);

		// Respuesta en JSON
		const criptoMonedas = await obtenerCriptoURL.json();

		console.log(criptoMonedas);

		return {
			criptoMonedas
		}
	}
}
