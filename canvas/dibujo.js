var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujito');
var lienzo = d.getContext('2d');
var lineas = 30, y = 0, x = 10, l = 0;
var colorcito = "#FAA"

for(l = 0; l < lineas; l+=1){
  y = l * 10;
  x = (l + 1) * 10;
  dibujarLinea(colorcito, 0, y, x, 300);
  dibujarLinea(colorcito, x, 0, 300, y);
}

dibujarLinea(colorcito, 1, 1, 299, 1);
dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 299, 1, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  //empieza el camino
  lienzo.beginPath();
  //establece el estilo de la raya
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  //traza la raya
  lienzo.stroke();
  //finaliza el camino
  lienzo.closePath();
}

function dibujoPorClick(){
	alert("No me toques ahí")
}
