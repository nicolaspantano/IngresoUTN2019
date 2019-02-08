/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{var sueldo;
    var resultado;
    var aumento;
    sueldo=parseFloat(document.getElementById("sueldo").value);
    //parseFloat porque es plata y puede venir con decimal
    aumento=sueldo*0.1
    resultado=(sueldo + aumento);
    document.getElementById("resultado").value = resultado;
    alert("El aumento es de " + aumento.tofixed(2));//to.fixed para mostrar solo 2 decimales



	
}
