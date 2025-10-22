ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtcadena");
    recorrerCadena(mensaje);
}
function ejecutarPrueba2() {
    let mensaje;
    mensaje = recuperarTexto("txtcadena");
    let cadenaInvertida = invertirCadena(mensaje);
    document.getElementById("lblresultado").innerHTML = cadenaInvertida;
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
invertirCadena = function (cadena) {
    let resultado = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        let letra = cadena.charAt(i);
        resultado = resultado + letra;
    }
    return resultado;
}

buscarLetra = function (cadnena, letra) {
    let letra1;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letra1 = cadena.charAt(i);
        if (letra1 == letra) {
            existeLetra = true

        }
    }
    if (existeLetra == true) {
        return true
    } else {
        return false
    }
}

contarMayusculas = function(cadena){
    let letra;
    let contadorMayuscula;
    for(let i =0;i<cadena.length;i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayuscula=contadorMayuscula+1;
        }
    }
    console.log(contadorMayuscula);

}