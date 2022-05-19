function campoRequerido(input) {
    if (input.value == "" || !isNaN(input.value)) {
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
        validarConsulta(document.getElementById('consulta')) ) {
        enviarEmail();
        //alert("Su consulta se envió correctamente");
    } else {
        alert("Ocurrio un error");
    }
}

function enviarEmail() {
    let template_params = {
        from_name: document.getElementById("nombre").value,
        message_html: `Mensaje: ${document.getElementById('consulta').value} - Email: ${document.getElementById('mail').value} - Telefono: ${document.getElementById('telefono').value}`
    };

    let service_id = "default_service";
    let template_id = "template_jrYy64fD";
    emailjs.send(service_id, template_id, template_params).then(function (response) {
        //esta funcion se ejecuta cuando el mail se envio correctamente
        console.log(response);
        document.getElementById('msjEnvio').className = 'alert alert-info my-4';
        document.getElementById('msjEnvio').innerText = 'Su consulta fue enviada correctamente.'

        document.getElementById('formConsulta').reset();
    }, function (error) {
        //esta funcion se ejecuta cuando falla el envio
        console.log(error);
        document.getElementById('msjEnvio').className = 'alert alert-danger my-4';
        document.getElementById('msjEnvio').innerText = 'Ocurrio un error, intentelo de nuevo en unos minutos.'
    }
    )
}