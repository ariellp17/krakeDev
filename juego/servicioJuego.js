// serviciosJuego.js

function obtenerAleatorio() {
    return Math.floor(Math.random() * 3) + 1;
}

function generarElemento() {
    const num = obtenerAleatorio();
    if (num === 1) {
        return "piedra";
    } else if (num === 2) {
        return "papel";
    } else {
        return "tijera";
    }
}

function determinarGanador(eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 === eleccionJugador2) {
        return 0; // Empate
    }
    
    if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
    ) {
        return 1; // Gana jugador 1
    } else {
        return 2; // Gana jugador 2
    }
}

function generarRuta(nombre) {
    return `./imagenes/${nombre}.png.jpeg`;
}