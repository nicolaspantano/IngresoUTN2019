function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;
	var promedio;

	do{
		acumulador += parseInt(prompt("Ingrese un numero"));
		contador++;
		respuesta= confirm("Quiere seguir agregando numeros");
	}while(respuesta)
promedio=acumulador/contador;

	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value= promedio;

}//FIN DE LA FUNCIÓN