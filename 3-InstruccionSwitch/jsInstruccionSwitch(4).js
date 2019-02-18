function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;
// NO SE USA Ñ PARA NOMBRAR VARIABLES
switch(mesDelAnio){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("Este mes tiene 31 dias");
        break;
    
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviemre":
        alert("Este mes tiene 30 dias");
        break;
    
    case "Febrero":
        alert("Este mes tiene 28 dias");
        break;
    
}
	
	



}//FIN DE LA FUNCIÓN