function Mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=prompt("ingresar primer numero");
	numero1=parseInt(numero1);
	numero2=prompt("ingresar segundo numero");
	numero2=parseInt(numero2);

		if(numero1==numero2)
		{
			resultado=numero1*numero2;

		}
		else
		{
			if(numero1>numero2)
			{
				resultado=numero1-numero2;

			}
			else
			{
				resultado=numero1+numero2;
			}
		}
		document.write(resultado);

}
