/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

	alert("Tu resultado es: " + resultado);
}

