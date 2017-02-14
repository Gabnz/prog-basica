var d = document.getElementById('dibujito');
var lienzo = d.getContext('2d');

//empieza el camino
lienzo.beginPath();
//establece el estilo de la raya
lienzo.strokeStyle = 'blue';
lienzo.moveTo(50, 10);
lienzo.lineTo(250, 2);
//traza la raya
lienzo.stroke();
//finaliza el camino
lienzo.closePath();
