function mostrar()
{
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if (edad <13 || edad>17) {
		alert("Persona NO adolescente");
	}
}

/* otra manera de calcularlo
if (!(edad <13 && edad>17)){
	alert("No es adolescente");
}