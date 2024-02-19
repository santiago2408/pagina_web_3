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

	var paso = 1
	while (paso != 9){
		var espacio = document.getElementById("espacio" + paso).value;
			
		if (espacio == ""){
			alert("Llena el o los espacios que te faltan por llenar")
		}
		else{
			datos["espacio" + paso] = espacio;
		}

		while(espacio == ""){
			setTimeout(none, 2000);}

		paso+= 1

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

function regresar() {
	// Redirigir al usuario a la página anterior
	window.history.back();
}

function enviarDatosPagina2() {
	
	var urlDestino = "pagina_2_con_estilos_css.html?";

	window.location.href = urlDestino;
}