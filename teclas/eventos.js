var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

//document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mousemove", moverMouse);
document.addEventListener("mouseup", soltarMouse);

var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');
var x = 100;
var y = 100;

//dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

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

function presionarMouse (event) {
	console.log("presionaste el mouse");
}

function moverMouse (event) {
	console.log("moviste el mouse");
}

function soltarMouse (event) {
	console.log("soltaste el mouse");
}

function dibujarTeclado (evento){
	var colorcito = "blue";
	var movimiento = 1;
	switch (evento.keyCode) {
		case teclas.UP:
			dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;

		case teclas.DOWN:
		dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
		y = y + movimiento;
		break;

		case teclas.LEFT:
		dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
		x = x - movimiento;
		break;

		case teclas.RIGHT:
		dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
		x = x + movimiento;
		break;
	}
}
