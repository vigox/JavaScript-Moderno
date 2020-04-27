/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/

const listaNotas = document.querySelector("#lista-notas");

/*=============================================>>>>>
= EVENT LISTENERS =
===============================================>>>>>*/
eventListeners();

// Definir Event Listeners de forma que no sean globales
function eventListeners() {
	document.querySelector("#formulario").addEventListener('submit', agregarNota);
}

/*=============================================>>>>>
= FUNCIONES =
===============================================>>>>>*/

// Añadir nota del formulario
function agregarNota(e) {
	e.preventDefault();
	console.log('Formulario Enviado');

	// Leer valor del textarea
	const nota = document.querySelector('#nota').value;

	// Configurar boton para eliminar nota
	const botonBorrar = document.createElement('a');
	botonBorrar.classList = 'borrar-nota';
	botonBorrar.innerText = 'X';

	// Crear elemento y añadir contenido a la lista
	const nuevaNota = document.createElement('li');
	nuevaNota.innerText = nota;
	// Añadir boton de borrar a la nota
	nuevaNota.appendChild(botonBorrar);
	// Agregar a la lista de notas
	listaNotas.appendChild(nuevaNota);

	console.log(nota);
}
