/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var sumaIngresada;
	var multiplicacionNegativos;
	var multiplicacionIngresada;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;

	while (respuesta==true)
	{
		sumaIngresada=prompt("Ingrese numeros a sumar");
		sumaIngresada=parseInt(sumaIngresada);

		sumaPositivos=sumaPositivos+sumaIngresada;
		
		multiplicacionIngresada=prompt("Ingrese numeros a multiplicar");
		multiplicacionIngresada=parseInt(multiplicacionIngresada);

		multiplicacionNegativos=multiplicacionNegativos*multiplicacionIngresada;
		respuesta=confirm("¿Quiere seguir ingresando numeros?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN