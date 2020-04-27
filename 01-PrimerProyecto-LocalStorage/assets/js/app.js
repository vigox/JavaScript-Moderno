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
	// Envio de Formulario
	document.querySelector("#formulario").addEventListener('submit', agregarNota);

	// Procesar las notas borradas
	listaNotas.addEventListener('click', borrarNota);
}

/*=============================================>>>>>
= FUNCIONES =
===============================================>>>>>*/

/* AÑADIR NOTA DEL FORMULARIO */
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

	// Añadir nota a Local Storage
	agregarNotaLocalStorage(nota);
}

/* BORRAR NOTA DEL DOM */
function borrarNota(e){
	e.preventDefault();

	// className es ideal en este caso y de esta manear porque solo existe una clase en los elementos
	if (e.target.className === 'borrar-nota') {
		// definir elemento padre del enlace / nota [li]
		e.target.parentElement.remove();
		console.log('Nota Eliminada');
	} else {
		console.log('click en la lista');
	}
}

/* AGREGAR NOTA A LOCAL STORAGE */
function agregarNotaLocalStorage(nota){
	// Para almacenar las notas existentes
	let lasNotas;

	// Agregar valor dentro de Local Storage
	localStorage.setItem('anotaciones', nota);
}
