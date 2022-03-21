'use strict'

const titulo = document.querySelector('.title')
const button = document.querySelector('.button');
const inputPrueba = document.querySelector('.input-prueba');
const contenedor1 = document.querySelector('.contenedor-1');
const contenedor2 = document.querySelector('.contenedor-2');

//*EVENTOS del TECLADO-> 

// keydown -> ocurre cuando una tecla se deja de presionar

inputPrueba.addEventListener('keydown', (e)=>{
    console.log('Tecla presionada');
})

// keyup -> ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.

inputPrueba.addEventListener('keyup', (e) =>{
    console.log('Tecla Soltada');
})

// keypress -> ocurre cuando una tecla se presiona

inputPrueba.addEventListener('keypress', (e)=>{
    console.log('Tecla presionada y Soltada');
})