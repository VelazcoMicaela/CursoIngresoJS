function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			alert("Frio");
			break;

		default:
			alert("Calor");
	}
}//FIN DE LA FUNCIÓN