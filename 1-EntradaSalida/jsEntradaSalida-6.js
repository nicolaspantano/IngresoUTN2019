/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{ var x ;
 var y;
 var z;
 //Se puede hacer de cualquiera de las dos formas. La mas recomendable es la de x
x = parseInt(document.getElementById("numeroUno").value);
y = document.getElementById("numeroDos").value;
y = parseInt(y);
z = y + x;
alert(z);





}

