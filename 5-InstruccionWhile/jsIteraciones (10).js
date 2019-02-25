function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta;
	var numero;
	var cantidadnegativos=0;
	var cantidadpositivos=0;
	var sumanegativos=0;
	var sumapositivos=0;
	var cantidadceros=0;
	var cantidadpares=0;
	var promediopositivos;
	var promedionegativos;
	var diferencia;

	do{
		numero=parseInt(prompt("Ingrese un numero"));
			if(numero>0){
				cantidadpositivos++;
				sumapositivos+=numero;
			}
			else if(numero==0){
				cantidadceros++;
				cantidadpositivos++;
			}
			else{
				cantidadnegativos++;
				sumanegativos+=numero;
			}
			if(numero%2==0){
				cantidadpares++;
			}
		respuesta=confirm("Quieres seguir ingresando numeros?");
	}while(respuesta);
	promediopositivos=sumapositivos/cantidadpositivos;
	promedionegativos=sumanegativos/cantidadnegativos;
	diferencia=sumapositivos-sumanegativos;
	document.write("Cantidad de negativos = "+ cantidadnegativos + "<br/>Cantidad de positivos = "+ cantidadpositivos + "<br/>Suma de los positivos = " + sumapositivos + "<br/>Suma de los negativos = " + sumanegativos +  "<br/>Cantidad de ceros = " + cantidadceros +  "<br/>Cantidad de numeros pares = " + cantidadpares + "<br/>Promedio de los negativos = "+ promedionegativos + "<br/>Promedio de los positivos = " + promediopositivos + "<br/>Diferencia = "+ diferencia);




}//FIN DE LA FUNCIÓN