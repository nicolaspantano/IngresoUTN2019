/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{var cantidad;
    var precio=35;
    var preciofinal;
    var marca;
    var ingresosbrutos;
    marca=document.getElementById("Marca").value;
    cantidad=parseInt(document.getElementById("Cantidad").value);
    preciofinal=cantidad * precio;
    if(cantidad>=6){
            preciofinal=preciofinal/2;
    }
 	else if(cantidad==5 && marca=="ArgentinaLuz"){
            preciofinal=preciofinal-(preciofinal*0.4);
     }
    else if(cantidad==4){
         if(marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
             preciofinal=preciofinal-(preciofinal*0.25);
         }
         else{
             preciofinal=preciofinal-(preciofinal*0.2);
         }
     }
     else if(cantidad==3){
         if(marca=="ArgentinaLuz"){
             preciofinal=preciofinal-(preciofinal*0.15);
         }
         else if(marca=="FelipeLamparas"){
             preciofinal=preciofinal-(preciofinal*0.1);
         }
         else{
             preciofinal=preciofinal-(preciofinal*0.05);
         }

     }
     if(preciofinal>120){
         ingresosbrutos=preciofinal *0.1
         preciofinal=preciofinal+ingresosbrutos;
         document.getElementById("precioDescuento").value=preciofinal;
         alert("Usted pago "+ingresosbrutos + " de IIBB");
     }
     else{
         document.getElementById("precioDescuento").value=preciofinal;
     }
     
}
