/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosIngresados;
	var centigrados;

	gradosIngresados= txtIdTemperatura.value;

	gradosIngresados= parseInt(gradosIngresados);

	centigrados= (gradosIngresados - 32) / 1.8;

	alert(gradosIngresados + " Fahrenheit son " + centigrados +" centígrados");

}

function CentigradosFahrenheit () 
{
	var gradosIngresados;
	var fahrenheit;

	gradosIngresados= txtIdTemperatura.value;

	gradosIngresados= parseInt(gradosIngresados);

	fahrenheit= (gradosIngresados*1.8) + 32;

	alert(gradosIngresados + " Centígrados son " + fahrenheit +" Fahrenheit");

}
