function mostrar()
{
	var estacionIngresada;
	var destino;

	estacionIngresada =txtIdEstacion.value;
	destino= txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
		break;

		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
		break;

		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
			}
		break;

		default:
			alert("Se viaja");
	}

}//FIN DE LA FUNCIÓN