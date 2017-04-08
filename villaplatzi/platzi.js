var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

var cantidadVacas = aleatorio (1, 10);

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

var cantidadPollos = aleatorio (3, 15);

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

var cantidadCerdos = aleatorio (5, 9);

function cargarFondo ()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas ()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos ()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos ()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar ()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  var x, y;

  if(vaca.cargaOK)
  {
    for(var v = 0; v < cantidadVacas; v++)
    {
      x = aleatorio(0, 7);
      y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if(pollo.cargaOK)
  {
    for(var p = 0; p < cantidadPollos; p++)
    {
      x = aleatorio(0, 7);
      y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
    }
  }

  if(cerdo.cargaOK)
  {
    for(var c = 0; c < cantidadCerdos; c++)
    {
      x = aleatorio(0, 7);
      y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}

function aleatorio (min, maxi)
{
	var resultado;

	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;

	return resultado;
}
