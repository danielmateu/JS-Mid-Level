'use strict'

//Formulario que contenga nombre, mail y materia a recuperar

//Validar mails y nombres 

//Enviar a servidor de manera pulida 

const nombre = document.getElementById('nombre');
const mail = document.getElementById('mail');
const materia = document.getElementById('materia');
const boton = document.querySelector('.enviar')

const resultado = document.getElementById('resultado')

boton.addEventListener('click',(e)=>{
    e.preventDefault();
    let error = validarCampos();

    if(error[0]){
        resultado.innerHTML = error[1]
        resultado.classList.add('red')
    } else {
        resultado.innerHTML = 'Solicitud enviada correctamente';
        resultado.classList.add('green');
        resultado.classList.remove('red')
    }

})

const validarCampos = () =>{
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = 'El nombre es inválido'
        return error;
    }
    if(mail.value.indexOf('@') == -1 || mail.value.indexOf('.') == -1){
        error[0] = true;
        error[1] = 'El mail no es válido';
        return error;
    }
    if(materia.value.length < 5 || materia.value.length > 40){
        error[0] = true;
        error[1] = 'Introduce un nombre de materia correcto';
        return error;
    }
    error[0] = false;
    return error;
}