'use strict'

let request;

if(window.XMLHttpRequest) request = new XMLHttpRequest();
else request = new ActiveXObject("Microsoft.XMLHTTP");

request.addEventListener('load', ()=>{
    let respuesta;
    if(request.status === 200 || request.status === 201) respuesta = request.response;
    else respuesta = 'No se ha encontrado el recurso';
    console.log(JSON.parse(respuesta));
})

request.open('post', 'https://reqres.in/api/users?page=2');

request.setRequestHeader('Content-Type', 'application/json; charset=utf8');

request.send(JSON.stringify({
    'nombre':'Dani',
    'trabajo':'Web Developer'
}));