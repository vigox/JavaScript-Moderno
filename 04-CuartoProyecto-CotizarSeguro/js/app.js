/*=============================================>>>>>
= CONSTRUCTOR DE COTIZADOR =
===============================================>>>>>*/
function Seguro(){

}

/**
** GENERAR LAS OPCIONES DE AÑOS
**/

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
