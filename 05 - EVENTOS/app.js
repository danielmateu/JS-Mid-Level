'use strict'

//*EVENTOS -> EVENTOS Cualquier cambio que ocurre en la página se considera un evento. Los eventos de por si no sirven para nada, debemos asociar un código para ejecutar el evento.

// event handler -> Ya no se utilizan ya que puede provocar muchos errores

const titulo = document.querySelector('.title')
const button = document.querySelector('.button');
const contenedor1 = document.querySelector('.contenedor-1');
const contenedor2 = document.querySelector('.contenedor-2')

// button.onclick = () =>{
//     alert('Hola!')
// }

// Escucha de Eventos -> event listeners


button.addEventListener('click',saludar);

// const saludar = ()=>{ //*NO APLICAN LAS FUNCIONES FLECHA y no acepta parámetros
//     alert('HOLA!')
// }

function saludar(){
    alert('Hola!');
    button.removeEventListener('click',saludar) //Podemos eliminar el evento, una vez ejecutado
}

// El objeto Event -> Lo usamos para obtener el objeto en el cual se ejecutó el evento. Es el unico parámetro que le podemos pasar a los eventos

button.addEventListener('click',(e)=>{
    //console.log(e.target);
    alert('Di click en el botón');
    e.stopPropagation();
})

// Flujo de Eventos o 'event flow' -> Es el orden en el que se van a ejecutar los eventos. Tenemos dos tipos de orden: Event Bubling vs. Event Capturing. 

//El primero viene por defecto. Por defecto se ejecuta del más especifico al menos especifico. Para cambiarlo, como segundo parámetro le debemos dar el valor de true.

titulo.addEventListener('click',(e)=>{
    //console.log(e.target);
    alert('Click en el título!')
    e.stopPropagation()
})

contenedor1.addEventListener('click',()=>{
    //console.log(e.target);
    alert('Di click en el contenedor 1')
},) //Primero se ejecuta este por el segundo parámetro


contenedor2.addEventListener('click',(e)=>{
    //console.log(e.target);
    alert('Di click en el contenedor 2')
    e.stopPropagation();
})

//Para parar la propagación, usamos e.stopPropagation()