function mostrar()
{
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if (edad >18) {
		alert("Persona mayor de 18 años");
	}
	else if (edad>=13 && edad<=17) {
		alert("Persona adolescente");
	}else{
		alert("Persona menor de edad");
	}
}