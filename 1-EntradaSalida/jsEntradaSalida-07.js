/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{	
	var num01;
	var num02;
	var resultado;

	num01= txtIdNumeroUno.value;
	num02= txtIdNumeroDos.value;

	num01= parseInt(num01);
	num02= parseInt(num02);

	resultado= num01 + num02;

	alert("La suma es " + resultado);	
}

function restar()
{
	var num01;
	var num02;
	var resultado;

	num01= txtIdNumeroUno.value;
	num02= txtIdNumeroDos.value;

	num01= parseInt(num01);
	num02= parseInt(num02);

	resultado= num01 - num02;

	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	var num01;
	var num02;
	var resultado;

	num01= txtIdNumeroUno.value;
	num02= txtIdNumeroDos.value;

	num01= parseInt(num01);
	num02= parseInt(num02);

	resultado= num01 * num02;

	alert("La multiplicación es " + resultado);

}

function dividir()
{
	var num01;
	var num02;
	var resultado;

	num01= txtIdNumeroUno.value;
	num02= txtIdNumeroDos.value;

	num01= parseInt(num01);
	num02= parseInt(num02);

	resultado= num01 / num02;

	alert("La división es " + resultado);
}