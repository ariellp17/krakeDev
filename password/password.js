validarPassword = function (password) {
    let errores = "";
    if (password.length < 8) {
        errores += "- La contraseña debe tener al menos 8 caracteres";
    }
    if (password.length > 16) {
        errores += "- La contraseña no debe exceder 16 caracteres";
    }
    let tieneMayuscula = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];
        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
            break;
        }
    }
    if (!tieneMayuscula) {
        errores += "- La contraseña debe contener al menos una letra mayúscula";
    }
    let tieneDigito = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];
        if (caracter >= '0' && caracter <= '9') {
            tieneDigito = true;
            break;
        }
    }
    if (!tieneDigito) {
        errores += "- La contraseña debe contener al menos un dígito";
    }

    let tieneEspecial = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];
        if (caracter == '*' || caracter == '-' || caracter == '_') {
            tieneEspecial = true;
            break;
        }
    }
    if (!tieneEspecial) {
        errores += " La contraseña debe contener al menos uno de estos caracteres especiales: * - _\n";
    }

    return errores;
}

function ejecutarValidacion() {

    let inputPassword = document.getElementById('password');
    let mensajeDiv = document.getElementById('mensaje');
    let password = inputPassword.value;
    let resultado = validarPassword(password);

    // Si el retorno es cadena vacía, mostrar mensaje de Password Correcto
    if (resultado == "") {
        mensajeDiv.className = 'mensaje correcto';
        mensajeDiv.innerHTML = 'Tu contraseña cumple con todos los requisitos de seguridad.';
    }
}