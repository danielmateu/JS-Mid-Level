'use strict'

const obtenerOtraInformacion = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        },Math.random()*1000)
    })
}

const mostrarData = async () => {
    let data1 = await obtenerOtraInformacion('1: Dani');
    let data2 = await obtenerOtraInformacion('2: Silvia');
    let data3 = await obtenerOtraInformacion('3: Nuk');
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();

obtenerOtraInformacion('1: Dani').then(resultado => console.log(resultado));

obtenerOtraInformacion('2: Silvia').then(resultado => console.log(resultado));

obtenerOtraInformacion('3: Nuk').then(resultado => console.log(resultado));