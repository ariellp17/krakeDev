let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1234567890",nombre:"Pedro",apellido:"Lopez",sueldo:750.0}
]

let esNuevo = false;

mostrarOpcionEmpleado = function() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

mostrarOpcionRol = function() {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function() {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    
    let elementoEmpleado;
    for(let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla += 
            "<tr><td>" + elementoEmpleado.cedula + "</td>" +
            "<td>" + elementoEmpleado.nombre + "</td>" +
            "<td>" + elementoEmpleado.apellido + "</td>" +
            "<td>" + elementoEmpleado.sueldo + "</td>" +
            "</tr>";
    }
    
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

ejecutarNuevo = function() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

buscarEmpleado = function(cedula) {
    let empleadoEncontrado = null;
    let elementoEmpleado;
    for(let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if(elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function(empleado) {
    let empleadoExistente = buscarEmpleado(empleado.cedula);
    if(empleadoExistente == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function() {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    
    let errores = "";
    if(valorCedula.length != 10) {
        errores += "La cédula debe tener exactamente 10 caracteres\n";
        mostrarTexto("lblErrorCedula", "La cédula debe tener exactamente 10 caracteres");
    } else {
        mostrarTexto("lblErrorCedula", "");
    }
    
    if(isNaN(valorCedula)) {
        errores += "La cédula debe contener solo dígitos\n";
        mostrarTexto("lblErrorCedula", "La cédula debe contener solo dígitos");
    }
    if(valorNombre.length < 3) {
        errores += "El nombre debe tener al menos 3 caracteres\n";
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres");
    } else {
        mostrarTexto("lblErrorNombre", "");
    }
    if(valorApellido.length < 3) {
        errores += "El apellido debe tener al menos 3 caracteres\n";
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres");
    } else {
        mostrarTexto("lblErrorApellido", "");
    }
    if(isNaN(valorSueldo) || valorSueldo < 400 || valorSueldo > 5000) {
        errores += "El sueldo debe ser un número entre 400 y 5000\n";
        mostrarTexto("lblErrorSueldo", "El sueldo debe estar entre 400 y 5000");
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }
    if(errores != "") {
        alert(errores);
        return;
    }
    if(esNuevo == true) {
        let nuevoEmpleado = {
            cedula: valorCedula,
            nombre: valorNombre,
            apellido: valorApellido,
            sueldo: valorSueldo
        };
        let resultado = agregarEmpleado(nuevoEmpleado);
        if(resultado == true) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarComponente("txtCedula");
            deshabilitarComponente("txtNombre");
            deshabilitarComponente("txtApellido");
            deshabilitarComponente("txtSueldo");
            deshabilitarComponente("btnGuardar");
            esNuevo = false;
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + valorCedula);
        }
    } else {
        // Modificar empleado existente
        let empleadoEncontrado = buscarEmpleado(valorCedula);
        empleadoEncontrado.nombre = valorNombre;
        empleadoEncontrado.apellido = valorApellido;
        empleadoEncontrado.sueldo = valorSueldo;
        
        alert("EMPLEADO MODIFICADO EXITOSAMENTE");
        mostrarEmpleados();
        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");
    }
}

ejecutarBusqueda = function() {
    let cedulaBusqueda = recuperarTexto("txtBusquedaCedula");
    let empleadoEncontrado = buscarEmpleado(cedulaBusqueda);
    
    if(empleadoEncontrado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");
        habilitarComponente("btnGuardar");
    }
}

limpiar = function() {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
    esNuevo = false;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}