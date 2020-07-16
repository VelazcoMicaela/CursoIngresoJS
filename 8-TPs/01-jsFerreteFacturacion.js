/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num01;
	var num02;
	var num03;
	var resultado;

	num01= txtIdPrecioUno.value;
	num02= txtIdPrecioDos.value;
	num03= txtIdPrecioTres.value;

	num01= parseInt(num01);
	num02= parseInt(num02);
	num03= parseInt(num03);

	resultado= num01 + num02 + num03;

	alert (resultado);
}
function Promedio () 
{
	var num01;
	var num02;
	var num03;
	var resultado;

	num01= txtIdPrecioUno.value;
	num02= txtIdPrecioDos.value;
	num03= txtIdPrecioTres.value;

	num01= parseInt(num01);
	num02= parseInt(num02);
	num03= parseInt(num03);

	resultado= (num01 + num02 + num03) / 3;

	alert (resultado);
}
function PrecioFinal () 
{
	var num01;
	var num02;
	var num03;
	var suma;
	var resultado;

	num01= txtIdPrecioUno.value;
	num02= txtIdPrecioDos.value;
	num03= txtIdPrecioTres.value;

	num01= parseInt(num01);
	num02= parseInt(num02);
	num03= parseInt(num03);

	suma= num01 + num02 + num03;
	resultado= suma *1.21;

	alert (resultado);
}