
agregarElementos = function () {
    let notas = []
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
probarAgruegar = function () {
    let notaRecuperada
    notaRecuperada = recuperarInt("txtnota");
    agregarNota(notaRecuperada);
}
agregarNota = function (nota) {
    notas.push();
}
let notas = [];
probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota = function (nota) {
    notas.push(nota);
    mostrarNotas();
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
function generarTabla() {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divtabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr></table>" + "<table><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}

function mostrarNotas() {
    let cmpTabla = document.getElementById("divtabla");
    let contenidoTabla = "<table><tr><th>NOTA</th></tr>";
    let miNota;
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>"

    }
    contenidoTabla +="</table>";
    cmpTabla.innerHTML = contenidoTabla
}