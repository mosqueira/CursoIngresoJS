/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{


	var numUno;	
	var numDos;
//acordarme siempre de llamar la variable antes de hacer la funcion.
	numUno= document.getElementById('numeroUno').value;
	numDos= document.getElementById('numeroDos').value;
//

	numUno=parseInt(numUno);
	numDos=parseInt(numDos);
// la funcion de parseInt permite convertir una palabra en numero, usado siempre para la suma.

	var resultado= numUno+numDos;

	alert(resultado);
}

