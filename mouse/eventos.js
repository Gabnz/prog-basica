document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mouseup", soltarMouse);

var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');
var x = 100;
var y = 100;
var estado = false;
var colorLinea = "green";

dibujarLinea("blue", 0, 0, cuadrito.width, 0, papel);
dibujarLinea("blue", cuadrito.width, 0, cuadrito.width, cuadrito.height, papel);
dibujarLinea("blue", cuadrito.width, cuadrito.height, 0, cuadrito.height, papel);
dibujarLinea("blue", 0, cuadrito.height, 0, 0, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  //empieza el camino
  lienzo.beginPath();
  //establece el estilo de la raya
  lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  //traza la raya
  lienzo.stroke();
  //finaliza el camino
  lienzo.closePath();
}

function presionarMouse (evento) {
  estado = true;
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarMouse (evento) {
	if(estado){
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

function soltarMouse (evento) {
  estado = false;
  x = evento.layerX;
  y = evento.layerY;
}
