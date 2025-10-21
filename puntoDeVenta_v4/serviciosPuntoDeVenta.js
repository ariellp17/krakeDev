calcularValorDescuento = function (monto, porcentajeDescuento) {
    let valordescuento = (monto * porcentajeDescuento) / 100
    return valordescuento
}

calcularIVA = function (monto) {
    let iva = (monto * 12) / 100;
    return iva;
}

calcularSubtotal = function (precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal;
}
calcularTotal = function (subtotal, descuento, iva) {
    let total = subtotal - descuento + iva;
    return total;
}
mostrarTexto = function (idComponente, mensaje) {
    document.getElementById(idComponente).innerText = mensaje;
}
