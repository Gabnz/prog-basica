var z;
var n = 10;

for(var i = 0; i < n; ++i)
{
	z = aleatorio(10, 20);
	document.write(z);

	if(i < n - 1)
	{
		document.write(", ");
	}
}

function aleatorio (min, maxi)
{
	var resultado;

	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;

	return resultado;
}
