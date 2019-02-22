function Mostrar()
{

	var numero = parseFloat(prompt("ingrese un número entre 0 y 10."));

	//while(numero>9||numero<0||isNaN(numero)){
	while(!(numero>=0&&numero<=9)){
		numero=parseFloat(prompt("El numero ingresado no esta en el rango correcto. Reingrese un numero entre 0 y 10"));
	}
document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN