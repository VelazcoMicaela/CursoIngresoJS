/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var primeraVez;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables

	primeraVez=true;
	respuesta=true;

	while (respuesta==true)
	{
		numeroIngresado=prompt("Ingresar numero");
		numeroIngresado=parseInt(numeroIngresado);

		respuesta=confirm("Seguir ingresando numeros?");
	
	
		if (primeraVez) 
		{
			primeraVez=false;
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}
		else
		{
			if (numeroIngresado>numeroMaximo) 
			{
				numeroMaximo=numeroIngresado;
			}
			if (numeroIngresado<numeroMinimo) 
			{
				numeroMinimo=numeroIngresado;
			}
		}
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN