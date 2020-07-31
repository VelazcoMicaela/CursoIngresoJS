function mostrar()
{
	var estacionIngresada;
	var destino;
	var precioFinal;
	var estadia;

	destino= txtIdDestino.value;
	estacionIngresada =txtIdEstacion.value;

	estadia= 15000;

	switch (estacionIngresada)
	{
	//comienza casos de Invierno:
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
					precioFinal= estadia * 1.2;
					alert(precioFinal);
					break;

				case "Cataratas":
				case "Cordoba":
					precioFinal= estadia * 0.9;
					alert(precioFinal);
					break;

				case "Mar del plata":
					precioFinal= estadia * 0.8;
					alert(precioFinal);
			}
		break;

	//comienza casos de Verano
		case "Verano":
			switch(destino)
			{ 
				case "Bariloche":
					precioFinal= estadia * 0.8;
					alert(precioFinal);
					break;

				case "Cordoba":
				case "Cataratas":
					precioFinal= estadia * 1.1;
					alert(precioFinal);
					break;

				case "Mar del plata":
					precioFinal= estadia * 1.2;
					alert(precioFinal);
			}
		break;

	//comienza otoño
		case "Otoño":
		case "Primavera":
			switch(destino)
			{ 
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
			 		precioFinal= estadia * 1.1;
					alert(precioFinal);
					break;

				case "Cordoba":
				 	alert(estadia);
			}
	}
}//FIN DE LA FUNCIÓN