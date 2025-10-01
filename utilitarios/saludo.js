saludar=function(){
    let nombre = recuperartexto("txtn");
    let apellido = recuperartexto("txta");
}


recuperartexto=function(idComponente){
    let componente ;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;

}