mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src= rutaImagen  
}
mostrararTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje
}
mostrararTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje
}

recuperartexto=function(idComponente){
    let componente ;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;

}

recuperarInt=function(idComponente){
    let valorCaja=recuperartexto(idComponente);
    let valorEntero =parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat=function(idComponente){
    let valorCaja=recuperartexto(idComponente);
    let valorFloat  =parseFloat(valorCaja);
    return valorFloat;
}

