'use strict'

//Serializacion y Deserialización -> Un JSON esta serializado cuando el JSON es una cadena de texto de

const objeto ={"variable1":"nombre1", "variable2":"nombre2"} ;
console.log(typeof objeto);


//Siempre debemos mandar los datos a un servidor o recibimos de forma SERIALIZADA!
const objetoSerializado = JSON.stringify(objeto);
console.log(typeof objetoSerializado);

//Para trabajar con los datos, debemos deserializarlo

const objetoDeserializado = JSON.parse(objetoSerializado);
console.log(typeof objetoDeserializado);

