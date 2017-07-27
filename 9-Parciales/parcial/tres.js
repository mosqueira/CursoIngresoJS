function Mostrar()
{
var largo;
var ancho;
var perimetro;
var alambre;

largo=document.getElementById('largo').value;
largo=parseInt(largo);
ancho=document.getElementById('ancho').value;
ancho=parseInt(ancho);
perimetro=(largo+ancho)*2;
//perimetro=parseInt(perimetro);
alambre=perimetro*3;
alert("se necesitan: " + alambre + " de alambre");



}
