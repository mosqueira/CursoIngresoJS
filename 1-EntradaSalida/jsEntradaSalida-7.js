/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
// siempre dentro de cada funcion se ejecuta el codigo correspondiente.
function sumar()
{	
	var uno;	
	var dos;

	uno= document.getElementById('numeroUno').value;
	dos= document.getElementById('numeroDos').value;


	uno=parseInt(uno);
	dos=parseInt(dos);

	var resultado= uno+dos;

	alert("La suma es: " + resultado);
}

function restar()
{
	var uno;
	var dos;

	uno= document.getElementById('numeroUno').value;
	dos= document.getElementById('numeroDos').value;

	var resultado= uno-dos;
	alert("La resta es: " + resultado);
}

function multiplicar()
{ 
	var uno;
	var dos;

	uno= document.getElementById('numeroUno').value;
	dos= document.getElementById('numeroDos').value;

	var resultado= uno*dos;
	alert("La multiplicacion es: " + resultado);
}

function dividir()
{
	var uno;
	var dos;

	uno= document.getElementById('numeroUno').value;
	dos= document.getElementById('numeroDos').value;

	var resultado= uno/dos;
	alert("La division es: " + resultado);
}

