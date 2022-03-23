'use strict'

//METODO GET

axios('https://reqres.in/api/users').then(res => console.log(res.data));

//METODO post
axios.post('https://reqres.in/api/users',{
    "nombre":"Dani",
    "apellido":"Mateu Pardo"
}).then(res =>console.log(res.data));