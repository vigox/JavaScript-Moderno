/*=============================================>>>>>
= CLASES INSTANCIADAS DE OTROS ARCHIVOS js =
===============================================>>>>>*/
const criptoAPI = new API(`dbf1b55f2614feb03a4e1ff56d2184ddc14d53604d16cdabc556a5a9d06b1069`);
const ui = new Interfaz();

/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/
const formulario = document.querySelector('#formulario');


/*=============================================>>>>>
= LISTENERS =
===============================================>>>>>*/
formulario.addEventListener('submit', procesarFormulario);


/*=============================================>>>>>
= FUNCIONES / METODOS =
===============================================>>>>>*/
function procesarFormulario(e) {
	e.preventDefault();
	console.log('dood');

	// Moneda real seleccionada
	const moneda = document.querySelector('#moneda');
	const monedaS = moneda.options[moneda.selectedIndex].value;

	// Moneda virtual seleccionada
	const cripto = document.querySelector('#criptomoneda');
	const criptoS = cripto.options[cripto.selectedIndex].value;

	console.log(monedaS, criptoS);

	// Comprobar que moneda y cripto tengan valores
	if(monedaS === '' || criptoS === '') {
		console.log(`I'm sorry Dave, I'm afraid I can't do that`);

		ui.mensajeInterfaz(`I'm sorry Dave, I'm afraid I can't do that`, `alert bg-danger text-center`);
	} else {
		console.log(`All according to keikaku`);
	}
}
