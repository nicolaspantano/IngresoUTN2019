function Mostrar()
{var numero=parseInt(prompt("Ingrese un numero positivo"));
var contadordivisores=0;
var mensaje="Numeros divisores encontrados:";

while(isNaN(numero)||numero<=0){
    numero=parseInt(prompt("El dato ingresado no es un numero o no es positivo. Ingrese un numero positivo"));
}
 for(var i=1;i<=numero;i++){
     if(numero%i==0){
         contadordivisores++;
         mensaje+=i+", ";

     }
 }
 alert(mensaje + "\nCantidad de numeros divisores encontrados: " + contadordivisores);




}//FIN DE LA FUNCIÓN