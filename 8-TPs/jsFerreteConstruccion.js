/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo;
    var ancho;
    var perimetro;
largo=parseFloat(document.getElementById("Largo").value);
ancho=parseFloat(document.getElementById("Ancho").value);
perimetro= (largo*2)+(ancho*2);
alert("Se necesitan "+perimetro*3+"mts de alambre");

}


function Circulo () 
{var radio;
    var perimetro;
    radio=parseFloat(document.getElementById("Radio").value);
    perimetro=2*Math.PI*radio;
    alert("Se necesitan "+(perimetro*3).toFixed(2)+"mts de alambre");

	
}


function Materiales () 
{var largo;
    var ancho;
    var area;
largo=parseFloat(document.getElementById("Largo").value);
ancho=parseFloat(document.getElementById("Ancho").value);
area=largo*ancho;
alert("Se necesitan "+(area*2)+" bolsas de cemento y " + (area*3) + " bolsas de cal");
	
}