/* 

PEDIR AL USUARIO QUE ELIJA UNA OPCION DE PRENDAS
MOSTRAR LISTA DE PRENDAS DE ACUERDO A LA OPCION ELEGIDA
VOLVER A MOSTRAR OPCION DE PRENDAS
UNA VEZ QUE ELIJA FINALIZAR COMPRA : MOSTRAR CANTIDAD DE PRENDAS ELEGIDAS

*/

let opcion = prompt(`ELIJA QUE DESEA LLEVAR
                           REMERAS
                           BUZOS
                           CAMPERAS
                           FINALIZAR COMPRA`)
let fin = "FINALIZAR COMPRA";   
let remeras1= 1;
let buzos2= 1;
let camperas3= 1;

while(opcion != fin)
{
    opcion = prompt(`ELIJA QUE DESEA LLEVAR
                           REMERAS
                           BUZOS
                           CAMPERAS
                           FINALIZAR COMPRA`)
    if(opcion!=="REMERAS" &&
    opcion!=="BUZOS" &&
    opcion!=="CAMPERAS" &&
    opcion!=="FINALIZAR COMPRA")
    {
        alert("LOS CARACTERES QUE HAS INGRESADO NO SON CORRECTOS")
    }
    else if(opcion == "REMERAS")  
    {
       let prendas1= Number(prompt("POR FAVOR INGRESE LA CANTIDAD QUE DESEA LLEVAR"))
       for( i=1; i<=prendas1; i++)
       {
           remeras1=remeras1 + 1;
       }

    }

    else if(opcion == "BUZOS")   
    {
       let prendas2= Number(prompt("POR FAVOR INGRESE LA CANTIDAD QUE DESEA LLEVAR"))
       for( i=1; i<=prendas2; i++)
       {
           buzos2=buzos2 + 1;
       }
  
    }
    else if(opcion == "CAMPERAS")  
    {
        let prendas3= Number(prompt("POR FAVOR INGRESE LA CANTIDAD QUE DESEA LLEVAR"))
       
       for( i=1; i<=prendas3; i++)
       {
            camperas3=camperas3 + 1;
       }

    }

   
    
}

if(opcion == fin)
{
    alert(remeras1 + buzos2 + camperas3)
}

