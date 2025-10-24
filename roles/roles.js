let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1234567890",nombre:"Pedro",apellido:"Lopez",sueldo:750.0}
];
let roles = [];
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
    mostrarRoles();
    mostrarTotales();
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

buscarPorRol = function() {
    let cedulaBusqueda = recuperarTexto("txtBusquedaCedulaRol");
    let empleadoEncontrado = buscarEmpleado(cedulaBusqueda);
    
    if(empleadoEncontrado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTexto("infoCedula", empleadoEncontrado.cedula);
        mostrarTexto("infoNombre", empleadoEncontrado.nombre + " " + empleadoEncontrado.apellido);
        mostrarTexto("infoSueldo", empleadoEncontrado.sueldo);
    }
}

calcularAporteEmpleado = function(sueldo) {
    let aporte = sueldo * 0.0945;
    return aporte;
}


calcularAporteEmpleador = function(sueldo) {
    let aporte = sueldo * 0.1115;
    return aporte;
}

calcularValorAPagar = function(sueldo, aporteIESS, descuentos) {
    let valorAPagar = sueldo - aporteIESS - descuentos;
    return valorAPagar;
}

calcularRol = function() {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuentos = recuperarFloat("txtDescuentos");
    
    if(isNaN(sueldo) || sueldo <= 0) {
        alert("Primero debe buscar un empleado");
        return;
    }
    if(isNaN(descuentos)) {
        alert("Debe ingresar un valor de descuentos");
        mostrarTexto("lblErrorDescuentos", "Debe ingresar un valor de descuentos");
        return;
    }
    if(descuentos < 0 || descuentos > sueldo) {
        alert("El descuento debe ser un valor válido entre 0 y el sueldo del empleado");
        mostrarTexto("lblErrorDescuentos", "El descuento debe ser un valor válido entre 0 y " + sueldo);
        return;
    }
    mostrarTexto("lblErrorDescuentos", "");
    let aporteIESS = calcularAporteEmpleado(sueldo);
    let valorAPagar = calcularValorAPagar(sueldo, aporteIESS, descuentos);
    mostrarTexto("infoIESS", aporteIESS.toFixed(2));
    mostrarTexto("infoPago", valorAPagar.toFixed(2));
}


buscarRol = function(cedula) {
    let rolEncontrado = null;
    for(let i = 0; i < roles.length; i++) {
        if(roles[i].cedula == cedula) {
            rolEncontrado = roles[i];
            break;
        }
    }
    return rolEncontrado;
}


agregarRol = function(rol) {
    let rolExistente = buscarRol(rol.cedula);
    if(rolExistente == null) {
        roles.push(rol);
        alert("ROL GUARDADO EXITOSAMENTE");
        return true;
    } else {
        alert("YA EXISTE UN ROL PARA LA CEDULA " + rol.cedula);
        return false;
    }
}


guardarRol = function() {
    let cedula = recuperarTextoDiv("infoCedula");
    let nombreCompleto = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");
    let valorAPagar = recuperarFloatDiv("infoPago");
    
    if(cedula == "" || isNaN(sueldo) || sueldo <= 0) {
        alert("Debe buscar un empleado y calcular el rol antes de guardar");
        return;
    }
    
    if(isNaN(aporteEmpleado) || isNaN(valorAPagar)) {
        alert("Debe calcular el rol antes de guardar");
        return;
    }
    let aporteEmpleador = calcularAporteEmpleador(sueldo);
    let nuevoRol = {
        cedula: cedula,
        nombre: nombreCompleto,
        sueldo: sueldo,
        valorAPagar: valorAPagar,
        aporteEmpleado: aporteEmpleado,
        aporteEmpleador: aporteEmpleador
    };
    
    agregarRol(nuevoRol);
}
mostrarRoles = function() {
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";
    for(let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        contenidoTabla += 
            "<tr><td>" + rol.cedula + "</td>" +
            "<td>" + rol.nombre + "</td>" +
            "<td>" + rol.valorAPagar.toFixed(2) + "</td>" +
            "<td>" + rol.aporteEmpleado.toFixed(2) + "</td>" +
            "<td>" + rol.aporteEmpleador.toFixed(2) + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
mostrarTotales = function() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    for(let i = 0; i < roles.length; i++) {
        totalEmpleado += roles[i].aporteEmpleado;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valorAPagar;
    }
    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;
    mostrarTexto("infoTotalPago", totalNomina.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));
}