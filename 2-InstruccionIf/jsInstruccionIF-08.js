function mostrar()
{
	var edad;
	var civil;

	edad= txtIdEdad.value;
	civil= estadoCivil.value;

	if (edad >18 && civil=="Soltero") 
	{
		alert( 'Es soltero y no es menor.');
	}

}