function mostrar()
{
	var nota;

	nota= Math.floor(Math.random()*10)+1;

	if (nota >=9) {
		alert(nota +" EXCELENTE");

	}else if (nota>4) {
		alert(nota +" APROBÓ");

	}else if (nota<4) {
		alert(nota +" Vamos, la proxima se puede");	
	}
	

}