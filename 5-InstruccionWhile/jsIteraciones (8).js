function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var i=0;
	var numero;
	
	var respuesta='si';
	i=prompt("Ingrese la cantidad de numeros que desea operar");

while(contador<i){
	numero=parseFloat(prompt("Ingrese un numero"));
		if(numero>0){
			positivo=positivo+numero;
		}
		else{
			negativo=negativo*numero;
		}
		contador++;
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN