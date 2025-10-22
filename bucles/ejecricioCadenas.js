ejecutarPrueba1 = function(){
    let mensaje;
    mensaje=recuperarTexto("txtcadena");
    recorrerCadena(mensaje);
}
recorrerCadena = function (cadena) {
    let caracter;

    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion)
    }
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion)

    }

}
invertirCadena = function(cadena) {
    let resultado = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        let letra = cadena.charAt(i);
        resultado = resultado + letra;
    }
    return resultado;
}

function ejecutarPrueba2() {
    let mensaje;
    mensaje = recuperarTexto("txtcadena"); 
    let cadenaInvertida = invertirCadena(mensaje);
    document.getElementById("lblresultado").innerHTML = cadenaInvertida;
}