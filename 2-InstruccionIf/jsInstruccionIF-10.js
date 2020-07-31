function mostrar()
{
	var numRandom01;
	var numRandom02
	var potenciaCuboNumero01;
	var potenciaCuboNumero02;
	var mensaje1;
	var mensaje2;
	var multiplicacionPares;
	var restaImpares;

	numRandom01= Math.floor(Math.random()*52)+1;
	numRandom02= Math.floor(Math.random()*52)+1;

	potenciaCuboNumero01= Math.pow(numRandom01,3);
	potenciaCuboNumero02= Math.pow(numRandom02,3);

//punto A
	if(numRandom01%2==0 && numRandom02%2==0)
		{
			multiplicacionPares=numRandom01*numRandom02;
			mensaje1= numRandom01 + " * " + numRandom02 + "=" + multiplicacionPares;

		}else{
			restaImpares= numRandom01-numRandom02;
			mensaje1= numRandom01 + " - " + numRandom02 + "=" + restaImpares;	
		}


///Punto C
	if(numRandom01%5==0 && numRandom02%5==0){
		mensaje2=numRandom01+ " al cubo = " + potenciaCuboNumero01 + " " + numRandom02+ " al cubo = " + potenciaCuboNumero02;
	}else
		{
		if (numRandom01%5==0){
			mensaje2=numRandom01+ " al cubo = " + potenciaCuboNumero01;
		}else
			{
			if (numRandom02%5==0) 
				{
				mensaje2=numRandom02+ " al cubo = " + potenciaCuboNumero02;
				}else{
					mensaje2="No hacer nada";
				}
			}
		}

//Punto E
	alert( mensaje1 + "  " + mensaje2);
}





/*	var numRandom01;
	var numRandom02;
	var max;
	var min;
	var multiplicacionPares;
	var restaImpares;
	var potenciaCubonumero01;
	var potenciaCubonumero02;
	var mensaje1;
	var mensaje2;


	max=51;
	min=1;

	numRandom01= Math.floor(Math.random()* (max-min))+min;
	numRandom02= Math.floor(Math.random()* (max-min))+min;

	potenciaCubonumero01= Math.pow(numRandom01 ,3);
	potenciaCubonumero02= Math.pow(numRandom02 ,3);

	if(numRandom01%2==0 && numRandom02%2==0)
	{
		multiplicacionPares=numRandom01*numRandom02;
		mensaje1= numRandom01 + " * " + numRandom02 + "=" + multiplicacionPares;

	}else{
		restaImpares= numRandom01-numRandom02;
		mensaje1= numRandom01 + " - " + numRandom02 + "=" + restaImpares;	
	}
//comienza punto C
	if(numRandom01%5==0)
	{
		mensaje2=numRandom01+" al cubo = " + potenciaCubonumero01;
	}else{
		if (numRandom02%5==0) 
		{
			mensaje2=numRandom02+ " al cubo = " + potenciaCubonumero02;
		}else{
			mensaje2= "No pasa nada";
		}
	}
alert(mensaje1+ "  " + mensaje2);

}
	/*var nota;

	nota= Math.floor(Math.random()*10)+1;

	if (nota >=9) {
		alert(nota +" EXCELENTE");

	}else{
		if (nota>=4) {
			alert(nota +" APROBÓ");

		}else{
			alert(nota +" Vamos, la proxima se puede");	
		}
	}
*/

