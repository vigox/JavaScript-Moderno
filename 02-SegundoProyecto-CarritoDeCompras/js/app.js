/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');

console.log(carrito);
console.log(listaCursos);


/*=============================================>>>>>
= LISTENERS =
===============================================>>>>>*/
carritoEventListeners();

function carritoEventListeners(){
	// Ejecutar al dar click en Agregar Al Carrito
	listaCursos.addEventListener('click', alCarrito);
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
	console.log(cursoAgregado);
}
