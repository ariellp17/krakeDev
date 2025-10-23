
agregarElementos = function (){
    let notas =[]
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

probarAgruegar = function (){
    let notaRecuperada
    notaRecuperada=recuperarInt("txtnota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota ){
    notas.push();
}


let notas = [];


probarAgregar = function() {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}


agregarNota = function(nota) {
    notas.push(nota);
}


function calcularPromedio() {

    let sumaNotas = 0;
    let promedio;
    
    for (let i = 0; i < notas.length; i++) {
        sumaNotas = sumaNotas + notas[i];
    }
    

    promedio = sumaNotas / notas.length;
    
    
    return promedio;
}


function ejecutarPromedio() {

    let resultadoPromedio = calcularPromedio();
    
    document.getElementById("resultado").textContent = resultadoPromedio.toFixed(2);
}