/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var promedio;
	var numIngresado;
	contador=0;
	acumulador=0;
	respuesta=true;

	while (respuesta==true)
	{
		numIngresado=prompt("Ingrese numeros a sumar");
		numIngresado=parseInt(numIngresado);

		while(isNaN(numIngresado))
		{
			numeroIngresado=prompt("NO es un numero. Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
		}

		acumulador=acumulador+numIngresado;
		respuesta=confirm("¿Quiere seguir ingresando numeros?");
		contador++;
	}
	
	promedio=acumulador/contador;
	promedio= Math.round(promedio);

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN