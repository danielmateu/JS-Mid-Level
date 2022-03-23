'use strict'

let request;

if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject('Microsoft.XMLHTTP');
}

request.addEventListener('load',()=>{
    //La validación la podemos hacer nosotros
    let respuesta = ''
    if(request.status === 200)  respuesta = request.response;
    else respuesta = 'No se ha encontrado el recurso...';
    console.log(JSON.parse(respuesta).members);
})

request.open('GET','./informacion.txt');

request.send();

//console.log(request);

//Ahora se suele usar Fetch... xD