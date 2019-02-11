/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var preciouno;
    var preciodos;
    var preciotres;
    var suma;
	preciouno=parseFloat(document.getElementById("PrecioUno").value);
preciodos=parseFloat(document.getElementById("PrecioDos").value);
preciotres=parseFloat(document.getElementById("PrecioTres").value);
suma= preciouno+preciodos+preciotres;
alert("La suma de los precios es: " + suma.toFixed(2));
}


function Promedio () 
{var preciouno;
    var preciodos;
    var preciotres;
	var promedio;
    preciouno=parseFloat(document.getElementById("PrecioUno").value);
preciodos=parseFloat(document.getElementById("PrecioDos").value);
preciotres=parseFloat(document.getElementById("PrecioTres").value);
promedio= (preciouno+preciodos+preciotres)/3;
alert("El promedio de los precios es: "+promedio.toFixed(2));
}


function PrecioFinal () 
{var preciouno;
    var preciodos;
    var preciotres;
	var preciofinal;
    preciouno=parseFloat(document.getElementById("PrecioUno").value);
preciodos=parseFloat(document.getElementById("PrecioDos").value);
preciotres=parseFloat(document.getElementById("PrecioTres").value);
preciofinal= preciouno+preciodos+preciotres;
preciofinal= preciofinal + (preciofinal*0.21);
alert("El precio final +IVA es: "+preciofinal.toFixed(2));
}