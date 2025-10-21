let puntosUsuario = 0;
let puntosComputador = 0;

function jugar(seleccionado) {
    // 1. Generar elemento del computador
    const eleccionComputador = generarElemento();
    
    // 2. Mostrar imagen del computador
    const rutaComputador = generarRuta(eleccionComputador);
    document.getElementById("imagenComputador").src = rutaComputador;
    
    // 3. Determinar ganador
    const resultado = determinarGanador(seleccionado, eleccionComputador);
    
    // Actualizar puntajes
    if (resultado === 1) {
        puntosUsuario++;
        document.getElementById("resultado").textContent = "GANASTE LA PARTIDA!!";
    } else if (resultado === 2) {
        puntosComputador++;
        document.getElementById("resultado").textContent = "PERDISTE LA PARTIDA!!";
    } else {
        document.getElementById("resultado").textContent = "EMPATE";
    }
    
    // Mostrar puntajes actualizados
    document.getElementById("puntosUsuario").textContent = `Usuario: ${puntosUsuario}`;
    document.getElementById("puntosComputador").textContent = `Computador: ${puntosComputador}`;
}