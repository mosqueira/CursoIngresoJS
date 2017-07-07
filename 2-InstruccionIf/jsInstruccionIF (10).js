function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var x; 
	x =Math.floor((Math.random() * 10) + 1);

    if(x>=9)
    {
    	alert("Excelente Su nota es: " + x);
    }
    else
    {
    	if(x>=4 && x<9)
    	{
    		alert("Aprobo Su nota es: " + x);
    	}
    	else
    	{
    		alert("Vamos la proxima se puede: " + x);
    	}
    }
	

}//FIN DE LA FUNCIÓN