/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 var largo;
 var ancho;
 var radio;
 var total1;
 var total2;

 largo =document.getElementById('Largo').value;
 ancho =document.getElementById('Ancho').value;
 radio =document.getElementById('Radio').value;

 largo =parseInt(largo);
 ancho =parseInt(ancho);
 radio =parseInt(radio);

total1 =(largo + ancho);
total2 =(total1 * 3);

alert(total2);



}
function Circulo () 
{
	
}
function Materiales () 
{
	
}