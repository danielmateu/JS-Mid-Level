'use strict'

//*COFLA -> Sistema que nos indique el tipo de pantalla y si está seguro de realizar la compra.

let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

let comprar = confirm(`
El alto de la pantalla es de : ${alto}
El ancho de la pantalla es de : ${ancho}`)

if(comprar){
    alert('Compra realizada!')

}else alert('Compra cancelada');

//* Debemos crear un sistema que nos facilite conocer los datos de la web.

let href = window.location.href;
let path = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `
Protocolo: ${protocol}
href: ${href}
Path: ${path}
Hostname: ${hostname}
`;

alert(html)


