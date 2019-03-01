function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

 
while(repeticiones<=0||isNaN(repeticiones)){
    repeticiones = parseInt(prompt("El dato ingresado es incorrecto. Reingrese el número de repeticiones"));
}

for(i=0;i<repeticiones;i++){
   alert("HOLA UTN FRA");
}

}//FIN DE LA FUNCIÓN