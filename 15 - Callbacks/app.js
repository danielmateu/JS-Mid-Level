'use strict'

const notaAlumno = document.getElementById('nota-alumno');
const enviarNota = document.getElementById('enviar-nota');

enviarNota.addEventListener('click', () =>{
    let resultado, mensaje;
    try{
        let prevRes = parseInt(notaAlumno.value);
        if(isNaN(prevRes)){
            throw 'Debes introducir un número'
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobado(8,5,prevRes);
    }catch(e){
        resultado = 'Debes introducir un número del 1 al 10';
        mensaje = 'O me quieres hackear?'
    }

    abrirModal(resultado,mensaje);
})

const abrirModal = (res,msg) =>{
    document.querySelector('.resultado').innerHTML = res;
    document.querySelector('.mensaje').innerHTML = msg; 
    let modal = document.querySelector('.modal-bg');
    modal.style.display = 'flex';
    modal.style.animation = 'aparecer 1s forwards';
}

const definirMensaje = (pr) =>{
    let resultado = parseInt(notaAlumno.value)
    if (isNaN(resultado)) {
        return 'Qué haces? Introduce un número'
    } else {
        switch (pr) {
            case 1:
                resultado = 'El examen: Fatal...';
                break;
            case 2:
                resultado = 'El examen: Muy mal...';
                break;
                
            case 3:
                resultado = 'El examen: Meh......';
                break;
                
            case 4:
                resultado = 'El examen: Casi... Pero No!';
                break;

            case 5:
                resultado = 'El examen: Suficiente!';
                break;

            case 6:
                resultado = 'El examen: Bien!';
                break;

            case 7:
                resultado = 'El examen: Notable!';
                break;

            case 8:
                resultado = 'El examen: Perfecto!';
                break;

            case 9:
                resultado = 'El examen: Excelente!';
                break;

            case 10:
                resultado = 'El examen: Matricula de honor!';
                break;


            default:
                resultado = null;
                break;
        }
        return resultado;
    }
}

const verificarAprobado = (nota1,nota2,prevRes) =>{
    const media =((nota1 + nota2 + prevRes)/3).toFixed(2);
    if(media >=7){
        return [`<span class='green'>APROBADO!</span> tienes una media de: ${media}`];
    }
    return [`<span class='red'>SUSPENDIDO...</span> tienes una media de: ${media}`];
}