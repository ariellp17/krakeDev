saludar=function(){
    let nombre = recuperartexto("txtn");
    let apellido = recuperartexto("txta");
    let edad =recuperarInt("txte");
    let altura =recuperarFloat("txtA");
    let mensajeBienvenido="Bienvenido :" + nombre+" "+apellido;
    mostrararTexto("lblbr",mensajeBienvenido);
    mostrarImagen("lblI","./imagenes/saludo.gif");
    mostrararTextoEnCaja("txtn","");
}

