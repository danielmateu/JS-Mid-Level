'use strict'

// fetch('./informacion.txt')
// .then(response =>response.json())
// .then(data => console.log(data));

//Para hacer una peticion POST

let headers = {
    method: 'post',
    body: '{"nombre" : "Daniel","apellidos" : "Mateu Pardo"}',
    headers: {"Content-Type": "application/json"}
}

fetch('https://reqres.in/api/users', headers)
.then(response => response.json())
.then(data => console.log(data));

//Dependiendo del tipo de info que enviemos vamos a tener headers y valor de cabecera distintos 
