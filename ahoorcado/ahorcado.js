// Variables globales
let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;

function esMayuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}

function guardarPalabra() {
    let palabra = document.getElementById("txtSecreta").value;

    // Validar que tenga exactamente 5 caracteres
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
        return;
    }

    // Validar que solo contenga letras mayúsculas
    let todasMayusculas = true;
    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra[i])) {
            todasMayusculas = false;
            break;
        }
    }

    if (!todasMayusculas) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
        return;
    }

    // Si pasa las validaciones, guardar en la variable global
    palabraSecreta = palabra;
    console.log("Palabra guardada:", palabraSecreta);
    alert("Palabra guardada correctamente");
}

function mostrarLetra(letra, posicion) {
    const divs = ['div0', 'div1', 'div2', 'div3', 'div4'];

    if (posicion >= 0 && posicion <= 4) {
        document.getElementById(divs[posicion]).textContent = letra;
    }
}

function validar(letra) {
    let letrasEncontradas = 0;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }

    // Si no encontró ninguna letra
    if (letrasEncontradas === 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    } else {
        coincidencias += letrasEncontradas;
    }
}

function ingresarLetra() {
    // Verificar que se haya guardado una palabra primero
    if (palabraSecreta == "") {
        alert("Primero debe guardar una palabra secreta");
        return;
    }
    
    let letra = document.getElementById("txtLetra").value;
    
    // Verificar que se haya ingresado algo
    if (letra === "") {
        alert("Debe ingresar una letra");
        return;
    }
    
    // Convertir a mayúscula
    letra = letra.toUpperCase();
    
    // Limpiar el input
    document.getElementById("txtLetra").value = "";
    
    // Validar que sea una letra
    let codigo = letra.charCodeAt(0);
    if (letra.length == 1 && codigo >= 65 && codigo <= 90) {
        intentos++;
        validar(letra);
        // Verificar si ha ganado
        if (coincidencias === 5) {
            document.getElementById("ahorcadoImagen").src = "ganador.gif";
            document.getElementById("ahorcadoImagen").style.display = "block";
        }
        // Verificar si ha perdido
        if (intentos === 10) {
            document.getElementById("ahorcadoImagen").src = "gameOver.gif";
            document.getElementById("ahorcadoImagen").style.display = "block";
        }
    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
    }
}

function mostrarAhorcado() {
    if (errores === 1) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_01.png";
    } else if (errores == 2) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_02.png";
    } else if (errores == 3) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_03.png";
    } else if (errores == 4) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_04.png";
    } else if (errores == 5) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_05.png";
    } else if (errores == 6) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_06.png";
    } else if (errores == 7) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_07.png";
    } else if (errores == 8) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_08.png";
    } else if (errores == 9) {
        document.getElementById("ahorcadoImagen").src = "ahorcado_09.png";
    }
}