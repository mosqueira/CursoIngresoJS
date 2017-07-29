
function Mostrar()
{
var numero1;
var numero2;
var numero3;

numero1=prompt("ingrese el primer numero");
numero1=parseInt(numero1);
numero2=prompt("ingrese el segundo numero");
numero2=parseInt(numero2);
numero3=prompt("ingrese el tercer numero");
numero3=parseInt(numero3);

	if(numero1>numero2 && numero1<numero3 || numero1>numero3 && numero1<numero2)

	{

      alert(numero1);

	}
	else
	{


	if(numero2>numero1 && numero2<numero3 || numero2>numero3 && numero2<numero1)
	{
		alert(numero2);
	}
	else
	{
		alert(numero3); 
	}
}
}
