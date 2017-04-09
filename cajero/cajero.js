class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

var caja = [];
var entregado = [];
var dinero = 0;
var div;
var papeles;
var resultado = document.getElementById("resultado");

caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 20) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero ()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  entregado = [];
  div = 0;
  papeles = 0;

  for(var bi of caja)
  {

    if(dinero > 0)
    {

      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }

  }

  if (dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero que esta roto, no puedo darte esa cantidad";
  }
  else {
    {
      for( var e of entregado)
      {
        if (e.cantidad > 0)
        {
          resultado.innerHTML+= e.cantidad + " billetes de $" + e.valor + "<br />";
        }
      }

    }
  }
}
