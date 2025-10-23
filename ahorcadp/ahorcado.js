
esMayuscula = function (caracter) {
    let  codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90){
        return true
    }else{
        return false
    }
}
