function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var i;

	i=prompt("Ingrese la cantida de numeros que desea sumar");
	while(contador<i){
		acumulador+=parseFloat(prompt("Ingrese un numero"))
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN