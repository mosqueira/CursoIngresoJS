function Mostrar()
{

	var contador=0;
	// declarar variables
	var respuesta='si';
	var nota;
	var notamayor;
	var notamenor;

	while(contador<3)
	{
		nota=prompt("ingresar nota");
		nota=parseInt(nota);
		console.log("vuelta"+contador);
		if(notamayor==null && notamenor==null)
		{
			notamayor=nota;
			notamenor=nota;
		}
	
		
		if(nota>notamayor)
		{
			notamayor=nota;

		}

	  
			
			if(nota<notamayor && nota<notamenor)
			{
				notamenor=nota;

			}
		
			else
			{
				if(nota==notamayor || nota==notamenor)
				{
					notamayor=notamayor;
					notamenor=notamenor;

				}

			}
		contador+=1;

	}	
		
		
		

		
		document.getElementById('maximo').value=notamayor;
		document.getElementById('minimo').value=notamenor;



}//FIN DE LA FUNCIÓN