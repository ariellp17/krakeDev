
esMayuscula = function (caracter) {
    const codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;
}

esDigito = function (caracter) {
    const codigo = caracter.charCodeAt(0);
    return codigo >= 48 && codigo <= 57;
}
esGuion = function (caracter) {
    return caracter === '-';
}