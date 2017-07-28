function Mostrar()
{
	var numero;
	var cantpares=0;
	var promedio;
	var sumatotal=0;
	var contador=0;
	var maximo;
	var minimo;
	var confirmacion=true;
	

	while(confirmacion==true)
	{
		numero=prompt("ingresar un numero mayor a 0");
		numero=parseInt(numero);
		while(numero<0)
		{
			numero=prompt("error ingresar un numero mayor a 0");
			numero=parseInt(numero);
		}
		if(contador==0)
		{
			maximo=numero;
			minimo=numero;

		}
		else
		{
			if(numero<minimo)
			{
				minimo=numero;

			}
			if(numero>maximo)
			{
				maximo=numero;
			}
		}
		if(numero%2==0)
		{
			cantpares++;

		}
		contador++
		sumatotal=sumatotal+numero;
		promedio=sumatotal/contador;
		confirmacion=confirm("¿desea ingresar otro numero?");



	}

	document.write("el numero maximo es: "+maximo + ", el numero minimo es: "+minimo + ", la cantidad de numeros pares es: "+cantpares + ", el promedio de todos los numeros ingresados es: "+promedio);

	




}
