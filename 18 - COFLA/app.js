'use strict'

const materiasHTML = document.querySelector('.materias');

const materias = [
    {
        nombre : 'Mates 1',
        nota : 5
    },
    {
        nombre : 'Física 1',
        nota : 6
    },
    {
        nombre : 'Logica 1',
        nota : 7
    },
    {
        nombre : 'Programación 1',
        nota : 8
    },
    {
        nombre : 'Calculo 1',
        nota : 2
    },
    {
        nombre : 'BBDD 1',
        nota : 9
    },
    {
        nombre : 'POO 1',
        nota : 6
    },
    {
        nombre : 'Mates 1',
        nota : 5
    },
];

const obtenerMateria = (id) =>{
    return new Promise((resolve, reject) =>{
        let materia = materias[id];
        if(materia === undefined) reject('La materia no existe');
        else setTimeout(resolve(materia),Math.random()*400);
    });
}

obtenerMateria(4).then(res => console.log(res));

