function Mostrar()
{
//cantidad=100
var cantidad=10000;
var numero;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var contador7=0;
var contador8=0;
var contador9=0;
var contador10=0;
/*var repetciones = prompt("ingrese el número de repeticiones");*/
	for(contador=0; contador<cantidad; contador++)
	{

	numero = Math.floor((Math.random() * 10) + 1);;	
	//console.log(numero);
		switch(numero)
		{
			case 1:
			  contador1++;
			  break;
			case 2:
			  contador2++;
			  break;
			case 3:
			  contador3++;
			  break;
			case 4:
			  contador4++;
			  break;
			case 5:
			  contador5++;
			  break;
			case 6:
			  contador6++;
			  break;
			case 7:
			  contador7++;
			  break;
			case 8:
			  contador8++;
			  break;
			case 9:
			  contador9++;
			  break;
			case 10:
			  contador10++;
			  break;  



		}

	}
	console.log("contador1: "+ contador1);
	console.log("contador2: "+ contador2);
	console.log("contador3: "+ contador3);
	console.log("contador4: "+ contador4);
	console.log("contador5: "+ contador5);
	console.log("contador6: "+ contador6);
	console.log("contador7: "+ contador7);
	console.log("contador8: "+ contador8);
	console.log("contador9: "+ contador9);
	console.log("contador10: "+ contador10);




}//FIN DE LA FUNCIÓN