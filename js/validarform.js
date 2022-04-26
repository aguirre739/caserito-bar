function campoRequerido(input) {
    if (input.value == "") {
        //si esta vacio
        input.className = "form-control is-invalid";
        return false;
    } else {
        //tiene datos
        input.className = "form-control is-valid";
        return true;
    }
}

function validarMail(input) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarTelefono(input) {
    let quitarEspacio = / /;
    if (input.value != "" && !isNaN(input.value) && !quitarEspacio.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarConsulta(texto) {
    if (texto.value != "" && texto.value.length >= 10) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}

function validarGeneral(event) {
    event.preventDefault();//evita que recargue la pagina
    console.log("dentro de validar general" + event);

    if (campoRequerido(document.getElementById('nombre')) &&
        validarMail(document.getElementById('mail')) &&
        validarTelefono(document.getElementById('telefono')) &&
        validarConsulta(document.getElementById('consulta')) &&
        validarCheck()) {
        enviarEmail();
        //alert("su consulta se envió correctamente");
    } else {
        alert("ocurrio un error");
    }
}