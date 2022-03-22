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
    console.log(res,msg);
}

const definirMensaje = (pr) =>{
    let resultado = parseInt(notaAlumno.value)
    if (isNaN(resultado)) {
        return 'Qué haces? Introduce un número'
    } else {
        switch (pr) {
            case 1:
                resultado = 'Fatal...';
                break;
            case 2:
                resultado = 'Muy mal...';
                break;
                
            case 3:
                resultado = 'Meh......';
                break;
                
            case 4:
                resultado = 'Casi... Pero No!';
                break;

            case 5:
                resultado = 'Suficiente!';
                break;

            case 6:
                resultado = 'Bien!';
                break;

            case 7:
                resultado = 'Notable!';
                break;

            case 8:
                resultado = 'Perfecto!';
                break;

            case 9:
                resultado = 'Excelente!';
                break;

            case 10:
                resultado = 'Matricula de honor!';
                break;


            default:
                resultado = null;
                break;
        }
        return resultado;
    }
}

const verificarAprobado = (nota1,nota2,prevRes) =>{
    const media = (nota1 + nota2 + prevRes)/3;
    if(media >=7){
        return `<b style='color:green'>'APROBADO!'</b>`;
    }
    return `<b style="color:red">'SUSPENDIDO...'</b>`
}