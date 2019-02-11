function Mostrar()
{var edad;
    edad=parseInt(document.getElementById("edad").value);
//tomo la edad  
if(edad<13){
    alert("La persona es un niño");
}
else if(edad>=13 && edad<=17){
    alert("La persona es un adolescente");
}
else{
    alert("La persona es mayor de edad");
}






}//FIN DE LA FUNCIÓN
