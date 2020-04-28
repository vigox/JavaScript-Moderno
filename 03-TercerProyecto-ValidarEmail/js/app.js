/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');



/*=============================================>>>>>
= LISTENERS =
===============================================>>>>>*/
eventListeners();

function eventListeners(){
	// Iniciar aplicación y deshabilitar botón de envío
	document.addEventListener('DOMContentLoaded', inicializar);
}


/*=============================================>>>>>
= FUNCIONES =
===============================================>>>>>*/
function inicializar(){
	// Deshabilitar envío
	enviar.disabled = true;
}
