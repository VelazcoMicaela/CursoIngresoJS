/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num01;
	var resultado;

	num01= txtIdImporte.value;

	num01= parseInt(num01);

	resultado= 0.75 * num01;

	txtIdResultado.value= resultado;
}
