calcularPromedioNotas = function() {
    let caja1, caja2, caja3;
    caja1 = parseFloat(document.getElementById("txt1").value);
    caja2 = parseFloat(document.getElementById("txt2").value);
    caja3 = parseFloat(document.getElementById("txt3").value);
    let promedio = calcularPromedio(caja1, caja2, caja3);
    let promedioRedondeado = promedio.toFixed(2);
    mostrarTexto("lblre", "El promedio es: " + promedioRedondeado);
    let p = parseFloat(promedioRedondeado);
    if (p < 5 && p >= 0) {
        mostrarTexto("lblre", "REPROBADO - Promedio: " + p);
        mostrarImagen("idimg", "reprpbado.gif");
    } else if (p >= 5 && p <= 8) {
        mostrarTexto("lblre", "BUEN TRABAJO - Promedio: " + p);
        mostrarImagen("idimgf", "succes-bro.gif");
    } else if (p > 8 && p <= 10) {
        mostrarTexto("lblre", "EXCELENTE - Promedio: " + p);
        mostrarImagen("idimge", "exelente.gif");
    } else {
        mostrarTexto("lblre", "DATOS INCORRECTOS - Promedio: " + p);
        mostrarImagen("idimgn", "fracaso.gif");
    }

    return promedioRedondeado;
}