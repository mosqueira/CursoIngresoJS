function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
	while(sexo!="f" && sexo!="m")
	{
		alert("ingreso incorrecto");
		sexo=prompt("ingrese nuevamente f o m");
	}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN