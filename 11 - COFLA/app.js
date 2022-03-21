'use strict'

//Creamos los datos de la
const alumnos = [{
        nombre: 'Daniel Mateu',
        email: 'daniel@gmail.com',
        materia: 'Fisica 3'
    },
    {
        nombre: 'Silvia Cazorla',
        email: 'Silvia@gmail.com',
        materia: 'Derecho 3'
    },
    {
        nombre: 'Nuk Peluk',
        email: 'Peluk@gmail.com',
        materia: 'Comida 3'
    },
    {
        nombre: 'John Snow',
        email: 'Snow@gmail.com',
        materia: 'Fisica 3'
    },
    {
        nombre: 'Link',
        email: 'link@gmail.com',
        materia: 'Fisica 3'
    },
    {
        nombre: 'Steve Harris',
        email: 'steve@gmail.com',
        materia: 'Fisica 3'
    },
    {
        nombre: 'Johan Sebastian',
        email: 'sebas@gmail.com',
        materia: 'Fisica 3'
    },
    {
        nombre: 'Mike Portnoy',
        email: 'Mike@gmail.com',
        materia: 'Musica 3'
    }
];

const boton = document.querySelector('.boton-confirmar');
const contenedor = document.querySelector('.grid-container');


boton.addEventListener('click', e =>{
    let confirmar = confirm('¿Deseas confirmar?');
    if(confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll('.semana');
    let semanasElegidas = document.querySelectorAll('.semana-elegida');
    for(let elemento in elementos){
        let semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
    }
    }
    
})


for(let alumno in alumnos){
    const datos = alumnos[alumno];
    let nombre = datos.nombre;
    let email = datos.email;
    let materia = datos.materia;
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select name="" class="semana-elegida" class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>
    `;

    contenedor.innerHTML += htmlCode;
}