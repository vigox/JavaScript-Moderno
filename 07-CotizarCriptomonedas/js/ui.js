// Es necesario instanciar clases
// Investigar sobre donde instanciar clases

// Una clase NO LLEVA () después de su nombre
class Interfaz{

	mensajeInterfaz(mensaje, clases) {
		const divMensaje = document.createElement(`div`);
		divMensaje.className = clases;
		divMensaje.appendChild(document.createTextNode(mensaje));

		console.log(divMensaje);

		// Seleccionar contenedor con clase mensajes
		const divContenedor = document.querySelector('.mensajes');
		divContenedor.appendChild(divMensaje);

		// Ocultar mensaje / alerta
		setTimeout(() => {
			document.querySelector('.mensajes div').remove();
		}, 3500);


	}
}
