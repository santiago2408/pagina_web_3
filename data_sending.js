function enviarDatos() {
	var datos = recogerDatos(); // Obtener los datos de la tabla

	// Construir la URL con los datos como parámetros de consulta
	var urlDestino = "pagina_3_de_envio.html?" + new URLSearchParams(datos).toString();

	// Redirigir al usuario a la página de destino
	window.location.href = urlDestino;
}

function recogerDatos() {
	var datos = {};
	// Obtener los datos de la tabla y guardarlos en el diccionario
	for (var i = 1; i <= 8; i++) {
		var espacio = document.getElementById("espacio" + i).value;
		if espacio != " " {
			datos["espacio" + i] = espacio;
		}
		else {
			alert ("Hay espacios en blanco")
		}

			
	}
	return datos;
}

function prepararDatos() {
	// Obtener los parámetros de la URL
	var parametros = new URLSearchParams(window.location.search);

	// Obtener los valores de los parámetros y mostrarlos en la tabla
	for (var i = 1; i <= 8; i++) {
		var espacio = parametros.get("espacio" + i);
		document.getElementById("espacio" + i).textContent = espacio;
	}
}



function presionBoton(){
	window.onload = prepararDatos();
}           
