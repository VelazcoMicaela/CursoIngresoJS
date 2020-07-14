/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var num01;
	var num02;
	var resultado;

	num01= txtIdLargo.value;
	num02= txtIdAncho.value;

	num01= parseInt(num01);
	num02= parseInt(num02);

	resultado= (num01 * num02) *3;

	alert (resultado);
}
function Circulo () 
{
	var num03;
	var resultado;

	num03= txtIdRadio.value;

	num03= parseInt(num03);

	resultado= (num03 * num03) *3;

	alert (resultado);
}
function Materiales () 
{
	
}