/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;

 	edadIngresada=0;
 	sueldoBruto=0;

 	while(!(edadIngresada>17 && edadIngresada<90))
 	{
 		edadIngresada= prompt("Ingrese edad");
 		edadIngresada=parseInt(edadIngresada);
 	}
 	
 	while(!(sexoIngresado=="F" || sexoIngresado=="M"))
 	{
 		sexoIngresado= prompt("Ingrese sexo");
 	}

 	while(!(estadoCivilIngresado==1||estadoCivilIngresado==2||estadoCivilIngresado==3||estadoCivilIngresado==4))
 	{
 		estadoCivilIngresado=prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	}

 	while(!(sueldoBruto>8000))
 	{
 		sueldoBruto=prompt("Ingrese sueldo bruto mayor a $8000");
 	}

 	while(!(sueldoBruto>8000))
 	{
 		sueldoBruto=prompt("Ingrese sueldo bruto mayor a $8000");
 	}
 	

 	txtIdEdad.value=edadIngresada;
 	txtIdSexo.value=sexoIngresado;
 	txtIdEstadoCivil.value=estadoCivilIngresado;
 	txtIdSueldo.value=sueldoBruto;


 	
 	



}
