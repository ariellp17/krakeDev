
mostrarImagen=function(idComponente,rutaImagen){
    let componente=document.getElementById(idComponente);
    componente.src =rutaImagen

}

mostrarTexto=function(idComponente,nombre){
    let componente=document.getElementById(idComponente);
    componente.innerText=nombre;

}

mostrarTextoEnCaja=function(idComponente,mensjae){
    let componente=document.getElementById(idComponente);
    componente.value=mensjae;

}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt=function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero=parseInt(valorCaja);
   return valorEntero
}

recuperarFloat=function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorfloat=parseFloat(valorCaja);
   return valorfloat
}