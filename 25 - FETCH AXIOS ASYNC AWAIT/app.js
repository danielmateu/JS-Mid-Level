'use strict'

const getName = async () =>{
    let peticion = await fetch('informacion.txt');
    let resultado = await peticion.json();

    let div = document.createElement('div');
    let squadName = resultado.squadName;
    div.classList.add('nombre');
    div.innerHTML = squadName;

    document.body.appendChild(div)
    document.querySelector('.nombre').innerHTML = squadName;
};

const getCity = async () =>{
    let peticion = await fetch('informacion.txt');
    let resultado = await peticion.json();

    let div = document.createElement('div');
    let homeTown = resultado.homeTown;
    div.classList.add('localizacion');
    div.innerHTML = homeTown;

    document.body.appendChild(div)
    document.querySelector('.getLocation');
}

const getCreation = async () => {
    let peticion = await fetch('informacion.txt');
    let resultado = await peticion.json();

    let div = document.createElement('div');
    let formed = resultado.formed;
    div.classList.add('creation-year');
    div.innerHTML = formed;

    document.body.appendChild(div);
    document.querySelector('.getCreation');
}

const getSecretBase = async () => {
    let peticion = await fetch('informacion.txt');
    let resultado = await peticion.json();

    let div = document.createElement('div');
    let secretBase = resultado.secretBase;
    div.classList.add('secrete-base');
    div.innerHTML = secretBase;

    document.body.appendChild(div)
    document.querySelector('.getCreation');
}


document.getElementById('getName').addEventListener('click',getName);
document.getElementById('getLocation').addEventListener('click',getCity);
document.getElementById('getCreation').addEventListener('click',getCreation);
document.getElementById('getSecretBase').addEventListener('click',getSecretBase);




