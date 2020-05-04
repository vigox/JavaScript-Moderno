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

	// Conectar con AJAX
	const xhr = new XMLHttpRequest();

	// Abrir conexión
	xhr.open('GET', url, true);

	// Datos e impresiones del Template
	xhr.onload = function(){
		if(this.status === 200){
			// console.log(this.responseText);
			// console.log(JSON.parse(this.responseText));

			// Almacenar información con nombres
			const datosNombres = JSON.parse(this.responseText);

			// Variable para almacenar el contenido en HTML
			let contenidoHTML = '<h2>Nombres Generados</h2>';

			// Contenedor en el DOM para la información
			const divHTML = document.querySelector('#resultado');

			//
			contenidoHTML += '<ul class="lista">';

			datosNombres.results.forEach((item) => {
				// console.log(item.name.first);

				contenidoHTML += `
					<li>${item.name.first}</li>
				`;
			});

			contenidoHTML += '</ul>';

			divHTML.innerHTML = contenidoHTML;

			// console.log(url);
			// console.log(datosNombres.results);
		}
	}

	// Enviar Request
	xhr.send();

}
