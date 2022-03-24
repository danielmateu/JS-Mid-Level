'use strict'

const getInfo = async()=>{

    let resultado = await axios('informacion.txt');
    let aprobados = resultado.data.aprobados;
    let suspendidos = resultado.data.suspendidos;

    let div = document.createElement('div');
    div.innerHTML = `
    Aprobados: ${aprobados}<br>
    Suspendidos: ${suspendidos}<br>
    `;

    document.body.appendChild(div)
}

document.querySelector('.get-info').addEventListener('click',getInfo);



