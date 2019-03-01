function Mostrar()
{var numero=parseInt(prompt("Ingrese un numero positivo"));
var contadorpares=0;
var mensaje="Numeros pares encontrados:";

while(isNaN(numero)||numero<=0){
    numero=parseInt(prompt("El dato ingresado no es un numero o no es positivo. Ingrese un numero positivo"));
}
 for(var i=1;i<=numero;i++){
     if(i%2==0){
         contadorpares++;
         mensaje+=i+", ";

     }
 }
 alert(mensaje + "\nCantidad de numeros pares encontrados: " + contadorpares);






}//FIN DE LA FUNCIÓN