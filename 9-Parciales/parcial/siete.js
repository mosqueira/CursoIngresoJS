function Mostrar()
{
var contador=0;
var totalnotas=0;
var sexo;
var promedio;
var notabaja;
var varonesnota6=0;
var nota;

	while(contador<3)
	{
		contador++;
		nota=prompt("ingresar nota del alumno "+contador);
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("reingrese un valor entre 0 y 10 para el alumno "+contador);
			nota=parseInt(nota);
		}
		if(contador==1)
		{
			notabaja=nota;
		}
		else
		{
			if(nota<notabaja)
			{
				notabaja=nota;
			}
		}


        sexo=prompt("ingresar sexo del alumno con las letras f o m");  
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("reingrese el sexo del alumno");
		}
		if(nota>=6 && sexo=="m")
		{
			varonesnota6++;

		}


        totalnotas=totalnotas+nota;
        totalnotas=parseInt(totalnotas);
		promedio=totalnotas/contador;

	}
	alert("el promedio de las notas totales es: "+promedio);
	alert("la nota mas baja es: "+notabaja);
	alert("varones con nota mayor o igual a 6: "+varonesnota6);
}
