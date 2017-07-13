function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroingresado;

     while(contador<5)
     {
     	contador=contador+1;
     	numeroingresado=prompt("ingrese el " + contador + " º ");
     	numeroingresado=parseInt(numeroingresado);
     	acumulador=acumulador+numeroingresado;


     }

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN