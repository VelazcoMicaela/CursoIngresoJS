/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var claveCorrecta;
	var contador=3;

	claveCorrecta="utn750";

	claveIngresada= prompt("ingrese la clave");
	
	while(claveIngresada!=claveCorrecta && contador>0)
	{
		claveIngresada=prompt("Clave incorrecta le quedan "+ contador);
		contador=contador-1;
	}
	
}//FIN DE LA FUNCIÓN
