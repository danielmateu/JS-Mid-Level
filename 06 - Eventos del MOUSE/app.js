'use strict'

const titulo = document.querySelector('.title')
const button = document.querySelector('.button');
const contenedor1 = document.querySelector('.contenedor-1');
const contenedor2 = document.querySelector('.contenedor-2');

//*EVENTOS del MOUSE-> 

// click -> Ocurre con un click

button.addEventListener('click',(e)=>{
    alert('Me dió click!')
})

// dbclick -> Ocurre con un doble click

button.addEventListener('dblclick',(e)=>{
    alert('Me dió doble click!')
})

// mouseover -> Ocurre ccuando el puntero se mueve sobre un elemento o sobre uno de sus hijos

contenedor1.addEventListener('mouseover',(e)=>{
    alert('Has entrado en el contenedor 1!')
})

// mouseout -> Ocurre ccuando el puntero se mueve fuera de un elemento o de sus elementos secundarios

button.addEventListener('mouseout',(e)=>{
    alert('Estás fuera del botón...')
})

// contextmenu -> Ocurre con un click en el boton derecho en un elemento para abrir un menú contextual 

titulo.addEventListener('contextmenu',(e)=>{
    alert('Botón derecho?')
})

// mouseenter -> Ocurre ccuando el puntero se mueve sobre un elemento ( Se utiliza especialmente para internet explorer...)

// mouseleave -> ocurre cuando un usuario suelta un botón del mouse sobre un elemento, no deja de ejecutarse hasta que se libera el mouse.

// mousemove -> Ocurre cuando el puntero se mueve mientras está sobre un elemento.

//mousedown -> Ocurre cuando apretamos un boton del mouse sobre un elemento