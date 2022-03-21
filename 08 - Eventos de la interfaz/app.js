'use strict'

const titulo = document.querySelector('.title')
const button = document.querySelector('.button');
const resultado = document.querySelector('.resultado')
const inputPrueba = document.querySelector('.input-prueba');
const contenedor1 = document.querySelector('.contenedor-1');
const contenedor2 = document.querySelector('.contenedor-2');
const imagenPrueba = document.querySelector('.imagen-prueba');

//*EVENTOS de la Interfaz -> 

// error -> Ocurre cuando sucede un error de carga durante la carga de un archivo multimedia

imagenPrueba.addEventListener('error',()=>{
    alert('Ha sucedido un error...');
})

// load -> Ocurre cuando un objeto se ha cargado 

addEventListener('load',()=>{
    alert('Web Cargada!')
})

// beforeUnload -> Ocurre antes de que el documento esté a punto de descargarse

window.addEventListener('beforeUnload',()=>{
    console.log('Seguro que quieres ir ahí?')
})



// unload -> Ocurre una vez que se ha descargado una página

// resize -> Ocurre cuando se cambia el tamaño de la vista del documento

// scroll -> Ocurre cuando se desplaza la barra de desplazamiento de un elemento

// select -> Ocurre después de que el usuario seleccione algún texto de input o textarea

inputPrueba.addEventListener('select',(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = inputPrueba.value;
    resultado.innerHTML = textoCompleto.substring(start,end)
})

inputPrueba.addEventListener('keyup',(e)=>{
    console.log(`Letra presionada: ${e.key}`);
    resultado.innerHTML = `Letra presionada: ${e.key}`;
})

