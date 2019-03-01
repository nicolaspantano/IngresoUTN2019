function Mostrar()
{var numero=parseInt(prompt("Ingrese un numero positivo"));
var flag=0;
while(isNaN(numero)||numero<=0){
    numero=parseInt(prompt("El dato ingresado no es un numero o no es positivo. Ingrese un numero positivo"));
}
for(i=2;i<=numero;i++){
    if(numero%i==0 && numero!=i){
        flag=1;
    }
    
}

if(flag==1){
    alert("El numero no es primo");
}
else{
    alert("El numero es primo");
}

}//FIN DE LA FUNCIÓN