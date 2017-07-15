function Mostrar()
{

	var contador=0;
	var sexo;
	var hombre=0;
	var mujer=0;
	var edad;
	var edadmayor;
	//declarar contadores y variables 
	
	var respuesta="si";
/* ejemplo de obtencion,validacion y extraccion de informacion
 de esta encuesta se debe informar:
1- cuantas mujeres y cuantos hombres fueron entrevistados
2- la persona de mayor edad
3- el promedio de edad
4- quien ganara las elecciones
5- informar cuantas mujeres mayores de edad hay
6- informar cuantos hombres menores a 30 años hay
7- informar la altura del hombre que menos edad tiene 
8- informar cuantos hombres votaron a otro partido
9- de las mujeres informar cuantas votaron a la oposicion
10- cuantas personas de 50 años votaron
11- cuantas personas de 50 años mujeres votaron
12- cuantas mujeres de 50 años de mas de un metro votaron al gobierno  
*/
	while(respuesta!="no")
	{
		sexo=prompt("ingresar f si es femenino i m si es masculino");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingresar f si es femenino i m si es masculino");
			if(sexo=="m")
			{
			  hombre=hombre+1;
			}
			else
			{
				mujer=mujer+1;
			}

		}

		edad=prompt("ingresar edad");
		edad=parseInt(edad);

		while(edad<0 || edad>100 )
		{
			edad=prompt("ingresar edad");
			edad=parseInt(edad);
			if(contador=0)
			{
				edad=edadmayor;

			}
			else
			{
				if(edad>edadmayor)
				{
					edadmayor=edad;
				}
			}

		}







		respuesta=prompt("desea continuar?");


	
	}




}//FIN DE LA FUNCIÓN