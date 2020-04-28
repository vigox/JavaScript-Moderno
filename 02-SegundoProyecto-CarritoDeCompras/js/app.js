/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/
const carrito = document.querySelector('#carrito');
const listadoCursos = document.querySelector('#lista-cursos');
// Objetivo para agregar los cursos al carrito de compra
const cursosCarrito = document.querySelector('#lista-carrito tbody');

// Boton para vacíar el carrito
const botonVaciar = document.querySelector('#vaciar-carrito');

// console.log(carrito);
// console.log(listadoCursos);


/*=============================================>>>>>
= LISTENERS =
===============================================>>>>>*/
carritoEventListeners();

function carritoEventListeners(){
	// Ejecutar al dar click en Agregar Al Carrito
	listadoCursos.addEventListener('click', alCarrito);

	// Para eliminar un curso del carrito
	carrito.addEventListener('click', quitarCurso);

	// Para vaciar el contenido del carrito
	botonVaciar.addEventListener('click', vaciarCarrito);
}


/*=============================================>>>>>
= FUNCIONES =
===============================================>>>>>*/
/* AÑADIR CURSO AL CARRITO */
// Usar parametro e para usar DELEGATION con e.target.classList y e.preventDefault
function alCarrito(e){
	e.preventDefault();

	// Chequeo de disparador
	// console.log(e.target.classList);

	// Ejecutar si el elemento contiene la clase agregar-carrito
	if(e.target.classList.contains('agregar-carrito')){
		// Seleccionar elemento contenedor, para tener la información que se procesará para la función deseada del sitio
		const cursoAgregado = e.target.parentElement.parentElement;

		// Para verificar que tenemos el Elemento Padre en la jerarquía correcta, y hacer ajustes de ser necesario
		// console.log(cursoAgregado);

		// Pasar información que se obtuvo del curso para su procesamiento en otras areas y/o funciones
		leerDatosCurso(cursoAgregado);
	}
}

/* OBTENER Y PROCESAR DATOS DEL CURSO AL CUAL SE LE DIO CLICK */
function leerDatosCurso(cursoAgregado){
	// Obtener datos relevantes del curso agregado
	const infoCurso = {
		imagen: cursoAgregado.querySelector('img').src,
		titulo: cursoAgregado.querySelector('h4').textContent,
		precio: cursoAgregado.querySelector('.precio span').textContent,
		id: cursoAgregado.querySelector('a').getAttribute('data-id')
	}

	// console.log(cursoAgregado);

	// Información obtenida del curso, lista para usarse
	// console.log(infoCurso);

	// Pasar la información a un formato de HTML
	insertarCarrito(infoCurso);
}

/* PROCESAR LA INFORMACION OBTENIDA DEL CURSO A UN FORMATO HTML QUE CUMPLA CON LA INTERFAZ DEL SITIO */
function insertarCarrito(infoCurso){
	// Crear fila con información para los elementos agregados al carrito
	const row = document.createElement('tr');
	row.innerHTML = `
		<td><img src="${infoCurso.imagen}" width="100"></td>
		<td>${infoCurso.titulo}</td>
		<td>${infoCurso.precio}</td>
		<td>
			<a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
		</td>
	`;

	// console.log(row);
	// Agregar elemento procesado a la lista de elementos en el carrito
	cursosCarrito.appendChild(row);

	// Almacenar los cursos agregados al carrito en Local Storage
	guardarCursoLocalStorage(infoCurso);
}


/* PARA QUITAR CURSO DEL CARRITO DEL DOM */
// El parametro e para seleccionar el elemento que se quiere quitar y hacer DELEGATIOn
function quitarCurso(e){
	e.preventDefault();

	let cursoEliminado;

	if(e.target.classList.contains('borrar-curso')){
		// TRAVERSING
		// console.log(e.target.parentElement.parentElement);

		e.target.parentElement.parentElement.remove();
	}


}

/* PARA VACIAR TODO EL CARRITO */
function vaciarCarrito(){
	// Solución rápida sin optimización
	// cursosCarrito.innerHTML = '';

	// Solución optimizada
	while(cursosCarrito.firstChild){
		cursosCarrito.removeChild(cursosCarrito.firstChild);
	}

	// Para evitar un posible salto al tratar de seguir el enlace
	return false;
}

/* PROCESAR EL CURSO AGREGADO PARA QUE SE ALMACENE LA INFORMACION EN LOCAL STORAGE */
function guardarCursoLocalStorage(infoCurso){
	let memoriaCursos;

	// Obtener la lista de valores de Local Storage para cursos en el carrito
	memoriaCursos = obtenerCursosLocalStorage();

	// Comprobar la comunicion de las funciones
	console.log('success I guess');
	// console.log(infoCurso);

	// Agregar la información del curso agregado a la colección de cursos en el carrito
	memoriaCursos.push(infoCurso);

	// Guardar la información del carrito en Local Storage
	localStorage.setItem( 'carrito de cursos', JSON.stringify(memoriaCursos) );
}

/* COMPROBAR Y LEER INFORMACION EN LOCAL STORAGE */
function obtenerCursosLocalStorage(){
	// Para almacenar la información
	let memoriaCursosLS;

	// Comprobar si existen datos en Local Storage
	if(localStorage.getItem('carrito de cursos') === null ) {
		memoriaCursosLS = [];
	} else {
		memoriaCursosLS = JSON.parse(localStorage.getItem('carrito de cursos'));
	}

	return memoriaCursosLS;
}
