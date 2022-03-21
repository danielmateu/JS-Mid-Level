'use strict'

const titulo = document.querySelector('.title')
const button = document.querySelector('.button');
const resultado = document.querySelector('.resultado')
const inputPrueba = document.querySelector('.input-prueba');
const contenedor1 = document.querySelector('.contenedor-1');
const contenedor2 = document.querySelector('.contenedor-2');
const imagenPrueba = document.querySelector('.imagen-prueba');

//*Temporizadores -> 

// setTimeOut() -> Recibe una funcion como primer parámetro y el segundo parámetro que recibe, es el tiempo que queremos que pase para que se realice.


const temporizador = setTimeout(() => {
    titulo.style.color = 'blue';
    alert('Hola!')
},2000)

// setInterval() -> Se ejecuta la función cada X segundos

// clearTimeout() -> 

clearTimeout(temporizador)

// clearInterval() -> Para que el intervalo se finalice.


