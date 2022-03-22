'use strict'



const objeto = {
    propiedad1 : 'valor 1',
    propiedad2 : 'valor 2',
    propiedad3 : 'valor 3',
    propiedad4 : 'valor 4',
};

const obtenerInformacion = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(objeto)
        },3000)
    })
    
}

// obtenerInformacion().then(resultado => console.log(resultado))

const mostrarResultado = async () =>{
    let resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado()


