function Mostrar()
{
  var importe;
  var iva;
  var total;

  importe = prompt("ingresar importe");
  importe = parseInt(importe);
  iva = importe*0.21;
  total = importe+iva;
  document.getElementById('importeFinal').value=total;
}
