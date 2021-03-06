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
** PROTOTYPE PARA HACER CALCULO DE SEGURO
**/
	/*Seguro.prototype.cotizarSeguro = function(informacionProporcionada){
		console.log(informacionProporcionada);
	}*/

Seguro.prototype.cotizarSeguro = function(){
	/*
		1 - Americano - 1.15
		2 - Asiatico - 1.05
		3 - Europeo - 1.35
	*/

	// Cantidad resultante del calculo
	let cantidadCalculada;
	// Definir un precio base para la simulación
	const precioBase = 2000;

	switch (this.marca) {
		case '1':
			cantidadCalculada = precioBase * 1.15;
			break;
		case '2':
			cantidadCalculada = precioBase * 1.05;
			break;
		case '3':
			cantidadCalculada = precioBase * 1.35;
			break;
	}

	// Procesar valor en base al modelo / año
	const diferenciaModelo = new Date().getFullYear() - this.periodo;

	console.log(diferenciaModelo);

	// Reducir un 3% adicional por cada año / modelo anterior
	cantidadCalculada -= ( ((diferenciaModelo * 3) * cantidadCalculada) / 100 );

	// Definir valor agregado según tipo de seguro; Basico - 30%, Completo - 50%
	if(this.tipo === 'basico') {
		cantidadCalculada *= 1.30;
	} else {
		cantidadCalculada *= 1.50;
	}

	console.log(cantidadCalculada);

}


/**
** CONSTRUCTOR DE INTERFAZ DE USUARIO
**/
function Interfaz(){
	// Inicializar vacío
}

/**
** PROTOTYPE PARA MOSTRAR MENSAJES EN HTML
**/
Interfaz.prototype.mostrarError = function(mensaje, tipoMensaje){
	const div = document.createElement('div');

	if(tipoMensaje === 'error') {
		// div.classList = 'error';
		div.classList.add('mensaje', 'error');
	} else {
		// div.classList = 'completo';
		div.classList.add('mensaje', 'completo');
	}

	div.innerHTML = `${mensaje}`;

	// Insertar el div con el mensaje / aviso
	formulario.insertBefore(div, document.querySelector('.form-group'));

	// Quitar el mensaje después de un cierto tiempo
	setTimeout(function(){
		document.querySelector('.mensaje').remove();
	}, 3000);
}

/**
** PROTOTYPE PARA MOSTRAR RESULTADO DE COTIZACION
**/
Interfaz.prototype.mostrarResultado = function(seguroSolicitado, cantidadSeguro){
	// Elegir div contenedor para la información
	const mostrarResultado = document.querySelector('#resultado');

	// Mostrar marca seleccionada... aunque quizas hubiera sido mejor tener el value con nombres y no numeros
	let marcaSeleccionada;

	switch (seguroSolicitado.marca) {
		case '1':
				marcaSeleccionada = 'Americano';
			break;
		case '2':
				marcaSeleccionada = 'Asiatico';
			break;
		case '3':
				marcaSeleccionada = 'Europeo';
			break;
	}

	// Crear div para albergar la información proporcionada
	const div = document.createElement('div');

	// Agregar la información proporcionada al div
	div.innerHTML = `
		<p class="header">Resumen:</p>
		<p>Marca: ${marcaSeleccionada}</p>
		<p>Año: ${seguroSolicitado.periodo}</p>
		<p>Tipo de Seguro: ${seguroSolicitado.tipo}</p>
		<p>Total: ${cantidadSeguro}</p>
	`;

	// Agregar animacion de spinner
	const spinner = document.querySelector('#cargando img');
	spinner.style.display = 'block';

	setTimeout(function(){
		spinner.style.display = 'none';
		// Agregear divi con la información al docoumento / HTML
		mostrarResultado.appendChild(div);
	}, 2500);

	// Agregear divi con la información al docoumento / HTML
	// mostrarResultado.appendChild(div);
}

/*=============================================>>>>>
= EVENT LISTENERS =
===============================================>>>>>*/

/**
** LISTENER PARA ENVIO DE FORMULARIO
**/
const formulario = document.querySelector('#cotizar-seguro');

formulario.addEventListener('submit', function(e){
	e.preventDefault();

	// Obtener valor seleccionada en Marca [select > option]
	const marca = document.querySelector('#marca');
	const marcaSeleccionada = marca.options[marca.selectedIndex].value;

	// console.log(marcaSeleccionada);

	// Obtener valor seleccionada en Año/Modelo [select > option]
	const modelo = document.querySelector('#anio');
	const modeloSeleccionado = modelo.options[modelo.selectedIndex].value;

	// console.log(modeloSeleccionado);

	// Obtener valor seleccionada en Tipo Seguro
	const tipoSeguro = document.querySelector('input[name="tipo"]:checked').value;

	// console.log(tipoSeguro);

	// Crear instancia de Interfaz
	const interfaz = new Interfaz();

	// Revisar que no existan elementos vacíos
	if( marcaSeleccionada === '' || modeloSeleccionado === '' || tipoSeguro === '' ){
		// Interfaz Imprimiendo un error
		interfaz.mostrarError('Hacen falta datos, revisa que todos los campos estén llenos e intenta de nuevo', 'error');

		console.log("I'm sorry Dave, I'm afraid I can't do that");

	} else {
		// Limpiar mensajes anteriores
		const resultadosAnteriores = document.querySelector('#resultado div');

		// Comprobar que existan resultados anteriores
		if( resultadosAnteriores != null ) {
			resultadosAnteriores.remove();
		}

		// Instanciar Seguro y mostrar interfaz
		const seguroSolicitado = new Seguro(marcaSeleccionada, modeloSeleccionado, tipoSeguro);

		// Hacer cotización de seguro
			// const cantidadSeguro = seguroSolicitado.cotizarSeguro(seguroSolicitado);
		const cantidadSeguro = seguroSolicitado.cotizarSeguro();

		console.log('All according to keikaku');

		// Mostrar resultado del calculo del seguro
		interfaz.mostrarResultado(seguroSolicitado, cantidadSeguro);

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
