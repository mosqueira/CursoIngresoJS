function Mostrar()
{
	var importe;
	var minimo;
	var maximo;
	var dia=0;

		while(dia<24)
		{
			dia++;
			importe=prompt("ingresar el importe del dia: "+dia);
			importe=parseInt(importe);
			if(dia==1)
			{
				minimo=importe;
				maximo=importe;

			}
			while(importe<=0)
			{
				importe=prompt("reingrese el importe del dia: "+dia);
				importe=parseInt(importe);

			}
			if(importe>maximo)
			{
					maximo=importe;

			}
			if(importe<minimo)
			{
				minimo=importe;

			}

		}
alert("el importe maximo es: "+maximo);
alert("el importe minimo es: "+minimo);
	
}
