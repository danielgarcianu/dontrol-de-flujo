/*Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado
 */

 
let precio = parseInt(prompt('ingresa el precio de tu prenda'));
let cupon = (prompt('ingresa el nombre de tu tu cupón'));
let precioConDescuento;

 switch(cupon){
    case "bronce":
        precioConDescuento =precio * .95;
    break;
    case "plata":
        precioConDescuento = precio *.90;
    break;
    case "oro":
        precioConDescuento = precio * .80;
    break;
    case "platino":
        precioConDescuento = precio * .75
    break;
    default:
        precioConDescuento = console.log('Cupón invalido')




 }
 console.log(`El precio con descuento es: ${precioConDescuento}`);