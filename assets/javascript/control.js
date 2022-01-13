/*flujo es el orden en el que se va ejecutanco las declaraciones que escribimos y se ejecutan de arriba hacia abajo  */

let miVariable = 10 ;
console.log(miVariable);


/*estructuras de control de flujo  */

let edad= 17 ;
let tienesIne=true;


if(edad >= 18 && tienesIne === true ){
    console.log('puedes entrar')
} else{
    console.log('no puedes entrar')
}

/*nos permite modificar el flujo de lectura de declaraci[on de variable  */

/* if(edad >= 18 || tienesIne === true ){
    console.log('puedes entrar')
} else{
    console.log('no puedes entrar')
} */

/*
EJERCICIO
buenos dias 6-11
buenas tardes 12-18
buenas noches 19-23
dejamedormir 0-5 
*/


/*OPERADOR TERNARIO 

(CONDICIóN A EVALUAR ) se ejecuta si es verdadero : se ejecuta si es falso

*/
/* 
se puede utilizar de esta manera 
let edad1 =17;
(edad1 >= 18)? console.log('mayor de edad'): console.log('menor de edad') ;  o como en el siguiente ejemplo*/


/* let pregunta = (edad1 >= 18)
    ? 'mayor de edad'
    : 'menor de edad' ;
console.log(pregunta); */
/* let edad1 = 17;

let preguntaEdad = `tengo ${edad1} años y soy ${(edad1 >+18) ? 'Mayor ' : 'menor  '} de edad`;

console.log(preguntarEdad); */


/*
Domingo - 0
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6
  */
/////////////////////////////////////////////////////////////////////////
/* 
todo esto esta bien escrito pero se puede simplificar con un switch

let dia;
if(dia === 0){
    console.log('domingo')
}else if(dia === 1){
    console.log('lunes');
}else if (dia === 2 ){
    console.log('martes');
}else if (dia === 3 ){
    console.log('miercoles');
}else if (dia === 4 ){
    console.log('jueves');
}else if (dia === 5 ){
    console.log('viernes');
}else if (dia === 6 ){
    console.log('sábado');
}else {
    console.log('ese no es un día');
} */


//switch case

/*switch (variable a evaluar ){
    case valor:
        -codigo a ejecutar
    break;
    case valor :
        -codigo a ejecutar
     break;
    default:
        codigo a ejecutar si sale de las condiciones 
    break;
}*/

let dia = 5;
switch(dia){
    case 0:
        console.log("Domingo");
    break;
    case 1: 
        console.log('Lunes');
    break;
    case 2: 
        console.log('Martes');
    break;
    case 3: 
        console.log('Miércoles');
    break;
    case 4: 
        console.log('Jueves');
    break;
    case 5: 
        console.log('Viernes');
    break;
    case 6: 
        console.log('Sábado');
    break;
    default:
        console.log('No es un día valido')
    break;

}

let cuponDescuento = 'oro';
let descuento;

switch(cuponDescuento){
    case 'bronce':
        descuento =5;
    break;
    case 'plata':
        descuento = 10;
    break;
    case 'oro':
        descuento = 15;
    break;
    default:
        console.log('cupon erróneo');
    break;
}

console.log(descuento);
