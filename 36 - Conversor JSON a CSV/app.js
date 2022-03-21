'use strict'

const jsonForm = document.querySelector('#jsonform');
const csvForm  = document.querySelector('#csvform');
const bConvert = document.querySelector('#bconvert');

bConvert.addEventListener('click', () =>{
    convertJSONtoCSV();
})

function convertJSONtoCSV(){
    let json;
    let keys = [];
    let values = [];

    try{
        json = JSON.parse(jsonForm.value);
    }catch(error){
        console.log('Formato JSON incorrecto', error);
        alert('Formato JSON incorrecto');
    }

    if(Array.isArray(json)){
        //Algoritmo
        json.forEach(item =>{
            const nkeys = Object.keys(item);

            if(keys.length === 0){
                keys = [...nkeys]
            }else{
                if(nkeys.length !== keys.length){
                    throw new Error('Number of keys are different');
                }else{
                    console.log('OK!', nkeys);
                }
            }
            const row = keys.map((k)=>{
                return item[k];
            });
            values.push(...row);
        });
        console.log(keys, values);
        values.unshift(keys);
        const text = values.map((v)=>v);
        csvForm.value = text;
    }else {
        alert('No es un arreglo de objetos')
    }
}

