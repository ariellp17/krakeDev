let clientes = [
    { cedula: "1223123", nombre: "Juan", edad: 20 },
    { cedula: "1454543", nombre: "Mario", edad: 40 },
    { cedula: "1958854", nombre: "Pepe", edad: 30 }
];

function guardarCambios() {
    let valorCedula = recuperartexto("txtcedula");
    let valorNombre = recuperartexto("txtnombre");
    let valorEdad = recuperarFloat("txtedad");
    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}
function modificarCliente(cliente) {
    let clienteEcontrado = buscarCliente(cliente.cedula);
    if (clienteEcontrado != null) {
        clienteEcontrado.nombre = cliente.nombre;
        clienteEcontrado.edad = cliente.edad;

    }
}
function ejecutarBusqueda() {
    let valorCedula = recuperartexto("txtcedulabusqueda");
    let cliente = buscarCliente(valorCedula);
    if (cliente == null) {
        alert("cliente no encontrado");
    } else {
        mostrararTextoEnCaja("txtcedula ", cliente.cedula);
        mostrararTextoEnCaja("txtnombre ", cliente.nombre);
        mostrararTextoEnCaja("txtedad ", cliente.edad);
    }
}
function crearCliente() {
    let valorCedula = recuperartexto("txtcedula");
    let valorNombre = recuperartexto("txtnombre");
    let valorEdad = recuperarFloat("txtedad");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    agregarCliente(nuevoCliente);

}
function agregarCliente(cliente) {
    let resultado
    resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("cliente arguegado");
    } else {
        alert('Ya existe el cliente con la cedula ' + cliente.cedula);
    }
    clientes.push(cliente);
}
function buscarCliente(cedula) {
    let elementoCilente;
    let clienteEcontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCilente = clientes[i];
        if (elementoCilente.cedula == cedula) {
            clienteEcontrado = elementoCilente;
            break;
        }
    }
    return clienteEcontrado
}
function mostrarClientes() {
    let cmpTabla = document.getElementById("tablacilentes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "<tr>";
    let elementoCilente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCilente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCilente.cedula + "</td>"
            + "<td>" + elementoCilente.nombre + "</td>"
            + "<td>" + elementoCilente.edad + "</td>"
            + "</tr>";

    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

