function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var flag=0;
	var respuesta;

	do{
		numero=parseInt(prompt("Ingrese un numero"));
			if( numero>=0){
			positivo+=numero;
		}
			else{
			negativo=negativo*numero;
			flag=1;
	}

		respuesta=confirm("Quiere seguir agregando numeros?");


	}while(respuesta);
	


document.getElementById('suma').value=positivo;
if(flag=0){
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN