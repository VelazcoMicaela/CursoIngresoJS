function mostrar()
{
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if (edad <13) {
		alert("Persona NO adolescente");
	}else if (edad>17) {
		alert("Persona NO adolescente");
	}
}