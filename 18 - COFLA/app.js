'use strict'

const materiasHTML = document.querySelector('.materias');

const materias = [{
        nombre: 'Mates 1',
        nota: 5
    },
    {
        nombre: 'Física 1',
        nota: 6
    },
    {
        nombre: 'Logica 1',
        nota: 7
    },
    {
        nombre: 'Programación 1',
        nota: 8
    },
    {
        nombre: 'Calculo 1',
        nota: 2
    },
    {
        nombre: 'BBDD 1',
        nota: 9
    },
    {
        nombre: 'POO 1',
        nota: 6
    },
    {
        nombre: 'Mates 3',
        nota: 5
    },
];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        let materia = materias[id];
        if (materia === undefined) reject('La materia no existe');
        else setTimeout(() => resolve(materia), Math.random() * 2000);
    });
}

const devolverMaterias = async () => {
    let materia = [];
    for (let i in materias) {
        materia[i] = await obtenerMateria(i);
        console.log(materia[i]);
        let newHTMLCode = `
        <div class="materias">
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
    </div>
        `;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias()