function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("NO es un numero. Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
		}

		contador=contador+1;
		acumulador=acumulador+numeroIngresado;

	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN