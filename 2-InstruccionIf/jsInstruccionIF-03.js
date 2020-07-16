function mostrar()
{
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if (edad >= 18) 
	{
		alert("Mayor de edad");
	}
	else{
		alert("Menor de edad");
	}
}