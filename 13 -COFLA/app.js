'use strict'

//switch

// let key = 'Lunes'

// switch (key) {
//     case 'Lunes':
//     console.log('Mierda, empieza la semana');
//     alert('Monday!')
//         break;

//     case 'Martes':
//         console.log('El peor día de la semana');
//         break;
//     case 'Miercoles':
//         console.log('Bueno, ya estamos a la mitad');
//         break;

//     case 'Jueves':
//         console.log('Almost friday!');
//         break;

//     case 'Viernes':
//         console.log("It's friday!!!");
//         break;
//     case 'Sabado':
//         console.log('Sábado sabadete');
//         break;

//     case 'Domingo':
//         console.log('Domingo porculero');
//         break;

//     default:
//         console.log('WHAT?');
//         break;
// }

// Try... Catch

//Sintaxis:

try {
    aasdasdasdasdasda
} catch (error) {
    console.log('Ocurrió un error de referencia'); //Evitamos que se muestre el error

}

const pruebaTry = () => {
    try {
        return 'Cero es mayor';

    } catch (e) {
        return 'No es cierto';
    } finally {
        return 'Esto es así';
    }
}

console.log(pruebaTry());

const pruebaConThrow = () => {
    try {
        throw {
            error: 'Nombre del Error',
            info: 'Información del error'
        }
    } catch (e) {
        console.log(e.error);
    } finally {

    }
}

pruebaConThrow()

