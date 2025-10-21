esProductoValido = function(producto) {
    if (producto == null || producto.trim() == "") {
        mostrarTexto("errorProducto", "CAMPO OBLIGATORIO");
        return false;
    }
    if (producto.length > 10) {
        mostrarTexto("errorProducto", "Máximo 10 caracteres");
        return false;
    }
    mostrarTexto("errorProducto", "");
    return true;
}

esCantidadValida = function(cantidad) {
    if (cantidad == null || cantidad.trim() == "") {
        mostrarTexto("errorCantidad", "CAMPO OBLIGATORIO");
        return false;
    }
    let cantidadNum = parseInt(cantidad);
    if (isNaN(cantidadNum) || cantidadNum < 0 || cantidadNum > 100) {
        mostrarTexto("errorCantidad", "Debe ser un número entre 0 y 100");
        return false;
    }
    mostrarTexto("errorCantidad", "");
    return true;
}

esPrecioValido = function(precio) {
    if (precio == null || precio.trim() == "") {
        mostrarTexto("errorPrecio", "CAMPO OBLIGATORIO");
        return false;
    }
    let precioNum = parseFloat(precio);
    if (isNaN(precioNum) || precioNum < 0 || precioNum > 50) {
        mostrarTexto("errorPrecio", "Debe ser un número entre 0 y 50");
        return false;
    }
    mostrarTexto("errorPrecio", "");
    return true;
}

// Función principal de cálculo
calcularValorTotal = function() {
    // Recuperar los valores de las cajas de texto
    let nombreProducto = document.getElementById("txtProducto").value;
    let precioProducto = document.getElementById("txtPrecio").value;
    let cantidad = document.getElementById("txtCantidad").value;
    
    // Validar todos los campos
    let productoValido = esProductoValido(nombreProducto);
    let cantidadValida = esCantidadValida(cantidad);
    let precioValido = esPrecioValido(precioProducto);
    
    // Solo calcular si todas las validaciones pasan
    if (productoValido && cantidadValida && precioValido) {
        // Convertir a números
        let precioNum = parseFloat(precioProducto);
        let cantidadNum = parseInt(cantidad);
        
        // Calcular subtotal
        let valorSubtotal = calcularSubtotal(precioNum, cantidadNum);
        mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));
        
        // Calcular descuento por volumen
        let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidadNum);
        mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
        
        // Calcular IVA sobre (subtotal - descuento)
        let subtotalConDescuento = valorSubtotal - valorDescuento;
        let valorIVA = calcularIVA(subtotalConDescuento);
        mostrarTexto("lblValorIVA", valorIVA.toFixed(2));
        
        // Calcular total
        let valorTotal = subtotalConDescuento + valorIVA;
        mostrarTexto("lblTotal", valorTotal.toFixed(2));
        
        // Mostrar resumen
        let resumen = "Valor a pagar por: " + cantidadNum + " " + nombreProducto +
            " con descuento de " + valorDescuento.toFixed(2) +
            ". Total a pagar: " + valorTotal.toFixed(2);
        mostrarTexto("lblResumen", resumen);
    }
}

// Función para limpiar campos
limpiar = function() {
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtCantidad").value = "";
    
    mostrarTexto("errorProducto", "");
    mostrarTexto("errorCantidad", "");
    mostrarTexto("errorPrecio", "");
    
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
}