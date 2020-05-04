/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/
const formulario = document.querySelector('#generar-nombre');

/*=============================================>>>>>
= LISTENERS =
===============================================>>>>>*/
formulario.addEventListener('submit', cargarNombres);

/*=============================================>>>>>
= FUNCIONES =
===============================================>>>>>*/
/*----------- LLamado a Ajax e imprimir resultados -----------*/
function cargarNombres(e){
	e.preventDefault();

	console.log('All according to keikaku');

	// Leer variables
	const origen = document.querySelector('#origen');
	const origenS = origen.options[origen.selectedIndex].value;

	const genero = document.querySelector('#genero');
	const generoS = genero.options[genero.selectedIndex].value;

	const cantidadNombres = document.querySelector('#numero').value;

	// Variable para URL dinamica que será enviada al REST API
	let url = '';
	url += 'https://randomuser.me/api/?';

	// Si hay origen agregarlo a la cadena
	if(origenS !== ''){
		url += `nat=${origenS}&`;
	}

	// Si hay genero agregarlo a la cadena
	if(generoS !== ''){
		url += `gender=${generoS}&`;
	}

	// Si hay cantidad agregarlo a la cadena
	if(cantidadNombres !== ''){
		url += `results=${cantidadNombres}`;
	}

	console.log(origenS);
	console.log(generoS);
	console.log(cantidadNombres);
	console.log(url);
}
