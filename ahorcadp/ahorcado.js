
esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true
    } else {
        return false
    }
}

guradarPalabra = function () {
    let palabrasecreta = "";
    palabrasecreta = document.getElementById("txtSecreta");
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras ");
    } if (![A - Z].test(palabra)) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
    }
    palabrasecreta = palabra
}

