'use strict'

class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ['Dani', ''],
    ['Silvia', '@SIlvia88'],
    ['Nuk', '@Nuk12'],
    ['Camilo Neso', '@milo'],
];

const personas = [];

for (let i in data) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id, cb) => {
    if (personas[id] == undefined) {
        cb('No se ha encontrado la persona')
    } else {
        cb(null, personas[id], id);
    }

}

const obtenerInstagram = (id, cb) => {
    if (personas[id].instagram == undefined) {
        cb('No se ha encontrado el instagram')
    } else {
        cb(null, personas[id].instagram);
    }
}

obtenerPersona(1, (err, persona, id) => {
    if (err) {
        console.log(err);
    } else {
        console.log(persona.nombre);
        obtenerInstagram(id, (err, instagram) => {
            if (err) {
                console.log(err);
            } else {
                console.log(instagram);
            }
        })
    }
})


