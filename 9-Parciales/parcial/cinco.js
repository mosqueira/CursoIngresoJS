function Mostrar()
{
var dia;
dia=prompt("ingresar un dia de la semana");
	switch(dia)
	{
	case "lunes":
	case "martes":
	case "miercoles":
	case "jueves":
	case "viernes":
	alert("a trabajar");
	break;
	case "sabado":
	case "domingo":
	alert("es finde semana");
	break;
	}
}
