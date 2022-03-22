'use strict'

class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ['Dani',],
    ['Silvia', '@SIlvia88'],
    ['Nuk', '@Nuk12'],
    ['Camilo Neso', '@milo'],
    ['Armando Fiestas', '@fiesto'],
    ['John Snow', '@coco'],
];

const personas = [];

for (let i in data) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id) => {
    return new Promise((resolve, reject) => {
        if(personas[id] == undefined) reject('No se ha encontrado a la persona.');
        else resolve(personas[id])
    })
}

const obtenerInstagram = (id) => {
    return new Promise((resolve, reject) => {
        if(personas[id].instagram == undefined) reject('No se ha encontrado el instagram.');
        else resolve(personas[id].instagram)
    })
}

let id =parseInt(prompt('introduce un id'));
obtenerPersona(id).then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(id)
}).then((instagram)=>{
    console.log(instagram);
}).catch((err) => {
    console.log(err);
})

// let nombre = 'Pedro';

// const promesa = new Promise((resolve, reject) => {
//     if(nombre !== 'pedro') reject('Lo siento pero el nombre no es Pedro');
//     else resolve(nombre)
// })

// //Para acceder al valor dentro de la promesa, usaremos then()

// promesa.then((resultado) => {
//     console.log(resultado);
//     //Para manejar el error, usaremos el catch
// }).catch((e)=>{
//     console.log(e);
// });



