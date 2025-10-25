let personas = [
    {nombre: "Marcos", edad: 18},
    {nombre: "Roberto", edad: 15},
    {nombre: "Kate", edad: 25},
    {nombre: "Diana", edad: 12},
    {nombre: "Benja", edad: 5}
];

function agregarPersona() {
    let nombre = document.getElementById("txtNombre").value;
    let edad = document.getElementById("txtEdad").value;
    let errorNombre = document.getElementById("errorNombre");
    let errorEdad = document.getElementById("errorEdad");
    
    let esValido = true;
    
    // Validar nombre (mínimo 3 caracteres)
    if (nombre.length < 3) {
        errorNombre.classList.add("show");
        esValido = false;
    } else {
        errorNombre.classList.remove("show");
    }
    
    // Validar edad (entero entre 0 y 100)
    let edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum < 0 || edadNum > 100) {
        errorEdad.classList.add("show");
        esValido = false;
    } else {
        errorEdad.classList.remove("show");
    }
    
    // Si pasa todas las validaciones
    if (esValido) {
        let nuevaPersona = {
            nombre: nombre,
            edad: edadNum
        };
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas();
        document.getElementById("txtNombre").value = "";
        document.getElementById("txtEdad").value = "";
    }
}

function mostrarPersonas() {
    let tabla = document.getElementById("bodyTabla");
    tabla.innerHTML = "";
    
    for (let i = 0; i < personas.length; i++) {
        let fila = "<tr>";
        fila += "<td>" + personas[i].edad + "</td>";
        fila += "<td>" + personas[i].nombre + "</td>";
        fila += "</tr>";
        tabla.innerHTML += fila;
    }
}

function encontrarMayor() {
    let personaMayor = personas[0];
    let elementoPersona;
    
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Comparando: " + elementoPersona.nombre + " (" + elementoPersona.edad + ") con " + personaMayor.nombre + " (" + personaMayor.edad + ")");
        
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    
    return personaMayor;
}

function determinarMayor() {
    let mayor = encontrarMayor();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "PERSONA MAYOR: " + mayor.nombre + " - Edad: " + mayor.edad;
    resultado.classList.add("show");
}

function encontrarMenor() {
    let personaMenor = personas[0];
    let elementoPersona;
    
    for (let i = 1; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("Comparando: " + elementoPersona.nombre + " (" + elementoPersona.edad + ") con " + personaMenor.nombre + " (" + personaMenor.edad + ")");
        
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
    }
    
    return personaMenor;
}

function determinarMenor() {
    let menor = encontrarMenor();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "PERSONA MENOR: " + menor.nombre + " - Edad: " + menor.edad;
    resultado.classList.add("show");
}

// Mostrar personas al cargar la página
window.onload = function() {
    mostrarPersonas();
};