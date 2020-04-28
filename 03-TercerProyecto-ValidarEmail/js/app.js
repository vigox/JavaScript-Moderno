/*=============================================>>>>>
= VARIABLES =
===============================================>>>>>*/
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const resetear = document.querySelector('#resetBtn');
let todoListo = false;



/*=============================================>>>>>
= LISTENERS =
===============================================>>>>>*/
eventListeners();

function eventListeners(){
	// Iniciar aplicación y deshabilitar botón de envío
	document.addEventListener('DOMContentLoaded', inicializar);

	// Validar los campos del formulario
	email.addEventListener('blur', validarCampo);
	asunto.addEventListener('blur', validarCampo);
	mensaje.addEventListener('blur', validarCampo);

	// Hacer la simulación de envío de email
	enviar.addEventListener('click', simularEmail);

	// Resetear datos del formulario
	resetear.addEventListener('click', formularioReset);
}


/*=============================================>>>>>
= FUNCIONES =
===============================================>>>>>*/
/* OPERACIONES NECESARIAS AL CARGARSE EL DOCUMENTO */
function inicializar(){
	// Deshabilitar envío
	enviar.disabled = true;
}

/* VALIDAR QUE LOS CAMPOS NO ESTÉN VACÍOS */
function validarCampo(e){
	let errores;
	errores = document.querySelectorAll('.error');
	console.log(errores.length);
	// Validar longitud del texto en el campo y que no esté vacío
	validarLongitud(this);

	// Para resaltar errores que se hallan presentado
	errores = document.querySelectorAll('.error');
	console.log(errores.length);

	// Validar contenido de email
	if(this.type === 'email'){
		validarEmail(this);
	}

	// Validar que todos los campos tenga información
	if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' && errores.length === 0){
		// Validar que no hallan quedado errores flotando
		console.log('All Clear');
		enviar.disabled = false;

	} else {
		console.log('you have pending matters');
		enviar.disabled = true;
		errores = document.querySelectorAll('.error');
	}

}

/* COMPROBAR QUE LOS CAMPOS CONTENGA INFORMACION */
function validarLongitud(campo){
	// Comprobar que el campo no esté vacío
	if(campo.value.length > 0){
		campo.style.borderBottomColor = 'green';

		// quita errores que se puedan haber agregado
		campo.classList.remove('error');

	} else {
		campo.style.borderBottomColor = 'firebrick';

		// agrega clase de error para efectuar lógica
		campo.classList.add('error');
		enviar.disabled = true;
	}
}

/* COMPROBAR QUE EL CONTENIDO DEL EMAIL SEA VALIDO */
function validarEmail(correo){
	const longitudEmail = correo.value;
	const ledood = longitudEmail.indexOf('@');
	if( longitudEmail.indexOf('@') !== -1 ) {
		console.log(ledood);
		correo.style.borderBottomColor = 'green';

		// quita errores que se puedan haber agregado
		correo.classList.remove('error');
	} else {
		console.log("I'm sorry Dave, I'm afraid I can't do that");

		correo.style.borderBottomColor = 'firebrick';

		// agrega clase de error para efectuar lógica
		correo.classList.add('error');
		enviar.disabled = true;
	}
}

/* SIMULACION DE ENVIO DE EMAIL */
function simularEmail(e){
	// Mostrar Spinner al presionar el botón
	const spinner = document.querySelector('#spinner');
	spinner.style.display = 'block';
	const loaders = document.querySelector('#loaders');

	// Definir imagen de envío de email
	const emailPic = document.createElement('img');
	emailPic.src = 'img/mail.gif';
	emailPic.style.display = 'block';

	// Mostrar imagen email tras un breve periodo de tiempo
	setTimeout( () => {
		spinner.style.display = 'none';
		loaders.appendChild(emailPic);

		// Quitar imagen de elemento enviado
		setTimeout( () => {
			emailPic.remove();
			formularioReset(e);
		}, 3500);

	}, 2500);

	e.preventDefault();
}

/* PARA RESETEAR EL FORMULARIO */
function formularioReset(e){
	e.preventDefault();
	formulario.reset();
}
