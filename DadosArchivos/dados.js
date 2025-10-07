jugar=function(){
    let valorAleatorio;
    valorAleatorio=lanzarDado();
    cambiarTexto("lblNumero",valorAleatorio);
    if(valorAleatorio>3){
        console.log("ES MAYOR A 3");
        console.log("GANASTE");
    }else{
        console.log("ES MENOR A 3 ");
        console.log("PERDISTE");
    }
}
lanzarDado=function(){
     let aleatorio;
     let numeroMultipicado;
     let numeroEntero;
     let valorDado;
    aleatorio=Math.random();
    numeroMultipicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultipicado);
    valorDado=numeroEntero+1;
    return valorDado
}