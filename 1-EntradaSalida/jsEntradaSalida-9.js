/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var importe;
	var resultado;
    var resultado1;

	importe= document.getElementById('sueldo').value;
	importe= parseInt(importe);
	resultado1= importe*1.1;
	resultado1= parseInt(resultado1);

	resultado= document.getElementById('resultado').value=resultado1;

	
    

}
