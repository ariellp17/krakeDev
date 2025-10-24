let frutas =["pera","mazana","banana"];

function probarBusqueda (){
    let frutaIngresada = recuperarTexto("lblfruta");
    let resultado = buscar(frutaIngresada);
    if(resultado == null){
        alert("No existe la fruta ");
    }else{
        alert(frutaIngresada+" existe en el cesto!!")
    }
}




function buscar ( ){
    let elemento;
    let frutaEcontrada = null;
    for(let  i=0;i<frutas.length;i++){
        elemento=frutas[i];
        if(fruta == elemento){
            frutaEcontrada = elemento;
            break;
        }
    }
    return frutaEcontrada;
}