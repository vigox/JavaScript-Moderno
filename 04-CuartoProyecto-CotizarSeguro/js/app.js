/*=============================================>>>>>
= CONSTRUCTORES DE COTIZADOR =
===============================================>>>>>*/
/**
** CONSTRUCTOR PARA SEGURO
**/
function Seguro(marca,periodo,tipo){
	this.marca = marca;
	this.periodo = periodo;
	this.tipo = tipo;
}

/**
** CONSTRUCTOR DE INTERFAZ DE USUARIO
**/
function Interfaz(){

}


/*=============================================>>>>>
= EVENT LISTENERS =
===============================================>>>>>*/
const formulario = document.querySelector('#cotizar-seguro');

formulario.addEventListener('submit', function(e){
	e.preventDefault();

	// Obtener valor seleccionada en Marca [select > option]
	const marca = document.querySelector('#marca');
	const marcaSeleccionada = marca.options[marca.selectedIndex].value;

	console.log(marcaSeleccionada);

	// Obtener valor seleccionada en Año/Modelo [select > option]
	const modelo = document.querySelector('#anio');
	const modeloSeleccionado = modelo.options[modelo.selectedIndex].value;

	console.log(modeloSeleccionado);

	// Obtener valor seleccionada en Tipo Seguro
	const tipoSeguro = document.querySelector('input[name="tipo"]:checked').value;

	console.log(tipoSeguro);

	// Crear instancia de Interfaz
	const interfaz = new Interfaz();

	// Revisar que no existan elementos vacíos
	if( marcaSeleccionada === '' || modeloSeleccionado === '' || tipoSeguro === '' ){
		// Interfaz Imprimiendo un error
		console.log("I'm sorry Dave, I'm afraid I can't do that");
	} else {
		// Instanciar Seguro y mostrar interfaz
		console.log('All according to keikaku');
	}


});


const max = new Date().getFullYear(),
	  min = max - 20;

	console.log(max);
	console.log(min);

/**
** POBLAR AÑOS EN EL SELECT
**/
const selectPeriodos = document.querySelector('#anio');

for(let i = max; i > min; i--){
	// console.log('ledood');
	let option = document.createElement('option');
	option.value = i;
	option.innerHTML = i;
	selectPeriodos.appendChild(option);
}

/**
** POBLAR AÑOS EN EL SELECT
**/
