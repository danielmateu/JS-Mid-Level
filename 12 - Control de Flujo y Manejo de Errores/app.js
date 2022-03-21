'use strict'

//switch

let key = 'Viernes'

switch (key) {
    case 'Lunes':
    console.log('Mierda, empieza la semana');
        break;

    case 'Martes':
        console.log('El peor día de la semana');
        break;
    case 'Miercoles':
        console.log('Bueno, ya estamos a la mitad');
        break;

    case 'Jueves':
        console.log('Almost friday!');
        break;

    case 'Viernes':
        console.log("It's friday!!!");
        break;
    case 'Sabado':
        console.log('Sábado sabadete');
        break;

    case 'Domingo':
        console.log('Domingo porculero');
        break;

    default:
        console.log('WHAT?');
        break;
}