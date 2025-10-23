
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}


function generarAleatorios() {
   
    let aleatorios = [];
    
  
    let cantidad = parseInt(document.getElementById("cantidad").value);
    
    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Por favor ingrese un número válido entre 5 y 20");
        return;
    }
    

    for (let i = 0; i < cantidad; i++) {
        
        console.log(i);
        
        
        let numeroAleatorio = generarNumeroAleatorio();
        aleatorios.push(numeroAleatorio);
    }
    
    mostrarResultados(aleatorios);
}

function mostrarResultados(arregloNumeros) {
    let resultado = document.getElementById("resultado");
    
    let tabla = "<table border='1'>";
    tabla += "<tr><th>Índice</th><th>Valor</th></tr>";
    for (let i = 0; i < arregloNumeros.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + i + "</td>";
        tabla += "<td>" + arregloNumeros[i] + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    resultado.innerHTML = tabla;
}