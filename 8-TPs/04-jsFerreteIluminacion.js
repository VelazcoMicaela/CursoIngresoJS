/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLampara;
 	var precioBruto;
 	var impuesto;
 	var precioFinal;


 	cantidadLamparas= txtIdCantidad.value;
 	marcaLampara= marcaLamp.value;

 	precioBruto=cantidadLamparas*35

//A
	if (cantidadLamparas>5) 
	{
		precioFinal=precioBruto*0.5;
	}
	else
	{
		//B
		if (cantidadLamparas==5) 
		{
			if (marcaLampara=="ArgentinaLuz") 
			{
				precioFinal=precioBruto*0.6;
			}
			else
			{
				precioFinal=precioBruto*0.7;
			}
		}
	}

	//C
	if (cantidadLamparas==4) 
	{
		if (marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas") 
		{
			precioFinal=precioBruto*0.75;
		}
		else
		{
			precioFinal=precioBruto*0.8;
		}
	}

	//D
	if (cantidadLamparas==3) 
	{
		if (marcaLampara=="ArgentinaLuz") 
		{
			precioFinal=precioBruto*0.85;
		}
		else
		{
			if (marcaLampara=="FelipeLamparas") 
			{
				precioFinal=precioBruto*0.9;
			}
			else
			{
				precioFinal=precioBruto*0.95;
			}
		}
	}

	if (cantidadLamparas<3) 
	{
		precioFinal=precioBruto;
	}

//E
	if (precioFinal>120) 
	{
		impuesto=precioBruto*0.1;
		precioFinal=precioBruto+impuesto;
		alert("IIBB Usted pago "+ impuesto);
	}

txtIdprecioDescuento.value= precioFinal;
}
*/
function CalcularPrecio () 
{
	var cantidadLamparas;
	var marcaLampara;
	var precioFinal;
	var impuesto;
	var mas120;

	cantidadLamparas=txtIdCantidad.value;
	marcaLampara=marcaLamp.value;

	precioBruto=cantidadLamparas*35;

	switch (cantidadLamparas)
	{
		//B
		case 5:
		
			switch (marcaLampara){
				case "ArgentinaLuz":
					precioFinal=precioBruto*0.6;//descuento 40%
					break;
				default:
					precioFinal=precioBruto*0.7;//descuento 30%
			}
		break;

		//C
		case 4:
		
			switch (marcaLampara){
				case "ArgentinaLuz":
				case "FelipeLamparas":
					precioFinal=precioBruto*0.75;//descuento 35%
					break;

				default:
					precioFinal=precioBruto*0.8;//descuento 20%
			}
		break;

		//D
		case 3:
		
			switch (marcaLampara){
				case "ArgentinaLuz":
					precioFinal=precioBruto*0.85;//descuento 15%
					break;
				case "FelipeLamparas":
					precioFinal=precioBruto*0.9;//descuento 10%
					break;
				default:
					precioFinal=precioBruto*0.95;//descuento 15%
			}
		break;

		case 2:
		case 1:
			precioFinal=precioBruto;

		default:
		precioFinal=precioBruto*0.5; //descuento 50%
	}


	mas120=precioFinal>120;

	switch(precioFinal)
	{
	case mas120:
		impuesto=precioBruto*0.1;
		precioFinal=precioBruto+impuesto;
		alert("IIBB Usted pago "+ impuesto);
		txtIdprecioDescuento.value= precioFinal;
		break;

	default:
	txtIdprecioDescuento.value= precioFinal;
	}
}
	//E
	/*if (precioFinal>120) 
	{
		impuesto=precioBruto*0.1;
		precioFinal=precioBruto+impuesto;
		alert("IIBB Usted pago "+ impuesto);
	}
	
	txtIdprecioDescuento.value= precioFinal;*/
	


