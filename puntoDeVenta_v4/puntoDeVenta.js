calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;
     nombreProducto = document.getElementById("txtProducto").value;
     precioProducto = parseFloat(document.getElementById("txtPrecio").value);
     cantidad = parseInt(document.getElementById("txtCantidad").value);
     porcentajeDescuento = parseInt(document.getElementById("txtPorcentajeDescuento").value);
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    // 1. Subtotal
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));
    // 2. Descuento
    valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
    // 3. IVA sobre (subtotal - descuento)
    valorIVA = calcularIVA(valorSubtotal - valorDescuento);
    mostrarTexto("lblValorIVA", valorIVA.toFixed(3)); 
    // 4. Total
    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal.toFixed(3));
    let Resumen ="Valor a pagar por: "+cantidad+ " "+ nombreProducto+" con un "+valorDescuento.toFixed(2)+" % de descuento "+" su total es: "+valorTotal.toFixed(2);
        mostrarTexto("lblResumen",Resumen);
}
limpiar = function () {
    
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtCantidad").value = "";
    document.getElementById("txtPorcentajeDescuento").value = "";
    mostrarTexto("lblSubtotal", " ");
    mostrarTexto("lblDescuento", "");
    mostrarTexto("lblValorIVA", "");
    mostrarTexto("lblTotal", " ");
    mostrarTexto("lblResumen", "");
}

