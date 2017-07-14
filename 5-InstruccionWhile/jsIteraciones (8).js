function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta=='si')
	{
		numero=prompt("ingresar numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo=numero+positivo;
		}
		else
		{
			negativo=numero*negativo;
		}
		respuesta=prompt("Ponerle si para continuar");

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN