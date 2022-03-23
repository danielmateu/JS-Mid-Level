'use strict'

const header = document.querySelector('.header');
const section = document.querySelector('.section');

//Para empezar, se debe almacenar la URL del JSON que se quiere recuperar en una variable
const requestURL = './superheroes.json';

//Para crear una solicitud, se necesita crear una nueva instancia de objeto de solicitud desde el constructorXMLHttpRequest
const request = new XMLHttpRequest();

//Ahora es necesario abrir una nueva solicitud utilizando el método open(). Esto requiere al menos dos parámetros: 

//*El método HTTP a usar cuando se hace una solicitud en red. En este caso GET es adecuado, dado que sólo se estan recuperando algunos datos simples.

//*La URL a la que se realiza la solicitud 

request.open('GET', requestURL);

//establecemos el responseType a JSON, de esta forma ese XHR sabe que el servidor estará retornando JSON y que esto debería ser convertido en segundo plano en un objeto JavaScript. Entonces se envía la solicitud con el método send():
request.responseType = 'text';
request.send();

//La última parte de esta sección comprende la espera por la respuesta a retornar desde el servidor y luego, manejarla.
request.onload = function(){
    const superheroesText = request.response;

    const superheroes = JSON.parse(superheroesText);

    //console.log(superheroes);
    populateHeader(superheroes);
    showHeroes(superheroes);
}

//se está almacenando la respuesta a la solicitud (disponible en la propiedad response) en una variable llamada superHeroes; esta variable ahora contendrá el objeto JavaScript basado en el JSON. Luego se pasa el objeto como argumento a dos funciones — la primera llenará el <header> con los datos correctos, mientras la segunda creará una tarjeta de información para cada héroe en el equipo y la insertará en <section>.

const populateHeader = (jsonObj) =>{
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.innerHTML =`
    Hometown: ${jsonObj['homeTown']}<br>
    Formed: ${jsonObj['formed']}<br>
    Sacred Base: ${jsonObj['secretBase']}<br>
    `;
    header.appendChild(myPara);
}

const showHeroes = (jsonObj) =>{
    const heroes = jsonObj['members'];
    //console.log(heroes);
    for(let hero in heroes){
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        let secretId = heroes[hero].secretIdentity;
        let age = heroes[hero].age;
        const superPowers = heroes[hero].powers;
        //console.log(superPowers);

        myH2.textContent = heroes[hero].name;
        myPara1.textContent = `Secret Identity: ${secretId}`;
        myPara2.textContent = `Age: ${age}`;
        myPara3.textContent = `Superpowers: ${superPowers}`;

        

        for(let superPower in superPowers){
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[superPower];
            myList.appendChild(listItem);
            //console.log(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        //myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
