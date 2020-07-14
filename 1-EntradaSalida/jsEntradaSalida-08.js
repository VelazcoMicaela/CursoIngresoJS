/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num01;
	var num02;
	var resultado;

	num01= txtIdNumeroDividendo. value;
	num02= txtIdNumeroDivisor.value;

	num01= parseInt(num01);
	num02= parseInt(num02);

	resultado= num01 % num02;

	alert("El resto es: " + resultado);
}
