'use strict'



const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', ()=>{
//     console.log(request.readyState);
//     Estados del ready state 
//     1. Se creó correctamente
//     2. La solicitud se envió correctamente
//     3. Se está procesando 
//     4. La respuesta ha sido recibida y es posible continuar procesandola.

//     Antes se hacia así. Ahora usamos 'load'
    
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.response);
//         status 404 -> No se encontró
//         status 200 -> Si todo sale bien
//     }
// })

request.addEventListener('load',()=>{
    //La validación la podemos hacer nosotros
    let respuesta = ''
    if(request.status === 200)  respuesta = request.response;
    else respuesta = 'No se ha encontrado el recurso...'
    console.log(respuesta);
})

request.open('GET','./informacion.txt');

request.send();

//console.log(request);

//Ahora se suele usar Fetch... xD