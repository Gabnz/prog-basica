var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro =new Pakiman("Tocinauro", 120, 40);

var coleccion = [];

coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

for (var p of coleccion)
{
  p.mostrar();
}

for (var x in coleccion[0])
{
  console.log(x);
}
