
validarEstructura=function (placa) {
    let errores = [];

    // Validar que la placa exista
    if (!placa) {
        return "La placa es requerida";
    }
    // Validar longitud
    const longitud = placa.length;
    if (longitud < 7 || longitud > 8) {
        errores.push("La placa debe tener 7 u 8 caracteres");
    }
    // Validar primer caracter (letra mayúscula)
    if (longitud >= 1 && !esMayuscula(placa[0])) {
        errores.push("El primer caracter debe ser una letra mayúscula");
    }

    // Validar segundo caracter (letra mayúscula)
    if (longitud >= 2 && !esMayuscula(placa[1])) {
        errores.push("El segundo caracter debe ser una letra mayúscula");
    }

    // Validar tercer caracter (letra mayúscula)
    if (longitud >= 3 && !esMayuscula(placa[2])) {
        errores.push("El tercer caracter debe ser una letra mayúscula");
    }

    // Validar cuarto caracter (guión)
    if (longitud >= 4 && !esGuion(placa[3])) {
        errores.push("El cuarto caracter debe ser un guión");
    }

    // Validar quinto caracter (dígito)
    if (longitud >= 5 && !esDigito(placa[4])) {
        errores.push("El quinto caracter debe ser un dígito");
    }

    // Validar sexto caracter (dígito)
    if (longitud >= 6 && !esDigito(placa[5])) {
        errores.push("El sexto caracter debe ser un dígito");
    }

    // Validar séptimo caracter (dígito)
    if (longitud >= 7 && !esDigito(placa[6])) {
        errores.push("El séptimo caracter debe ser un dígito");
    }

    // Validar octavo caracter si existe (dígito)
    if (longitud === 8 && !esDigito(placa[7])) {
        errores.push("El octavo caracter debe ser un dígito");
    }

    // Si hay errores, retornarlos concatenados
    if (errores.length > 0) {
        return errores.join(", ");
    }

    // Si no hay errores, retornar null
    return null;
}
obtenerProvincia=function (placa) {
    if (!placa || placa.length < 1) {
        return null;
    }

    const primeraLetra = placa[0].toUpperCase();

    const provincias = {
        'A': 'Azuay',
        'B': 'Bolívar',
        'U': 'Cañar',
        'C': 'Carchi',
        'X': 'Cotopaxi',
        'H': 'Chimborazo',
        'O': 'El Oro',
        'E': 'Esmeraldas',
        'W': 'Galápagos',
        'G': 'Guayas',
        'I': 'Imbabura',
        'L': 'Loja',
        'R': 'Los Ríos',
        'M': 'Manabí',
        'V': 'Morona Santiago',
        'N': 'Napo',
        'S': 'Pastaza',
        'P': 'Pichincha',
        'K': 'Sucumbíos',
        'Q': 'Orellana',
        'T': 'Tungurahua',
        'Z': 'Zamora Chinchipe',
        'Y': 'Santa Elena',
        'J': 'Santo Domingo de los Tsáchilas'
    };

    return provincias[primeraLetra] || null;
}


obtenerTipoVehiculo=function (placa) {
    if (!placa || placa.length < 2) {
        return null;
    }

    const segundaLetra = placa[1].toUpperCase();

    const tipos = {
        'A': 'Vehículo comercial',
        'B': 'Vehículo de alquiler',
        'C': 'Vehículo de carga',
        'E': 'Vehículo gubernamental',
        'I': 'Vehículo internacional',
        'M': 'Vehículo municipal',
        'O': 'Vehículo oficial',
        'P': 'Vehículo particular',
        'S': 'Vehículo del sector público',
        'U': 'Vehículo de emergencia',
        'V': 'Vehículo de prueba',
        'Z': 'Vehículo de zona franca'
    };

    return tipos[segundaLetra] || null;
}

obtenerDiaPicoYPlaca=function (placa) {
    if (!placa || placa.length < 7) {
        return null;
    }

    const ultimoCaracter = placa[placa.length - 1];

    const diasPicoYPlaca = {
        '1': 'Lunes',
        '2': 'Lunes',
        '3': 'Martes',
        '4': 'Martes',
        '5': 'Miércoles',
        '6': 'Miércoles',
        '7': 'Jueves',
        '8': 'Jueves',
        '9': 'Viernes',
        '0': 'Viernes'
    };

    return diasPicoYPlaca[ultimoCaracter] || null;
}