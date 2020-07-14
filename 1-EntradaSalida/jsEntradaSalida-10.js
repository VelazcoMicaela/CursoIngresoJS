/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num01;
	var descuento;
	var resultado;

	num01= txtIdImporte.value;

	num01= parseInt(num01);

	descuento= (25 * num01) / 100;
	resultado= num01 - descuento;

	txtIdResultado.value= resultado;
}
