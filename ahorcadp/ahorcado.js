
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
    } if  (letra.length === 1 && letra >= 'A' && letra <= 'Z') {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
    }
    palabrasecreta = palabra
}

mostrarLetra = function (letra, posicion) {
    let div = ("div 0", "div 1", "div 2", "div 3", "div 4");
    if (posicion >= 0 && posicion <= 4) {
    }
}

validar = function (letra) {
    let letrasEncontradas = 0;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta(i) == letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
}


ingresarLetra = function () {
    let letra = document.getElementById("txtSecreta").value;

    // Validar que sea una letra mayúscula
    if (letra.length === 1 && letra >= 'A' && letra <= 'Z') {
        validar(letra);
    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
    }
}