/*
buenos dias 6-11
buenas tardes 12-18
buenas noches 19-23
dejamedormir 0-5 
*/

let dameLaHora = parseInt(prompt('ingresa tu hora'));

if (dameLaHora >= 6 && dameLaHora <= 11  ){
    console.log('Buenos días.');
} else if (dameLaHora >= 12 && dameLaHora <= 18 ){
    console.log('Buenas tardes.');
} else if (dameLaHora >= 19 && dameLaHora <= 23 ){
    console.log('Buenas Noches.');
} else if(dameLaHora >= 0 && dameLaHora <= 5){
    console.log('Dejame dormir.')
}