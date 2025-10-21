
function validarPlaca() {
 
  const placaInput = document.getElementById('inputPlaca').value.trim().toUpperCase();
  

  limpiarMensajes();

  const erroresEstructura = validarEstructura(placaInput);
  
  if (erroresEstructura) {
    
    mostrarResultado(false);
    mostrarErrores(erroresEstructura);
  } else {
    
    mostrarResultado(true);

    const provincia = obtenerProvincia(placaInput);
    if (provincia) {
      mostrarProvincia(provincia);
    } else {
      mostrarProvincia('Provincia incorrecta');
    }
    
    const tipoVehiculo = obtenerTipoVehiculo(placaInput);
    if (tipoVehiculo) {
      mostrarTipoVehiculo(tipoVehiculo);
    } else {
      mostrarTipoVehiculo('Tipo de vehículo incorrecto');
    }
    
    // Obtener día de pico y placa
    const diaPicoYPlaca = obtenerDiaPicoYPlaca(placaInput);
    if (diaPicoYPlaca) {
      mostrarDiaPicoYPlaca(diaPicoYPlaca);
    }
  }
}

 mostrarResultado=function(esValida) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.style.display = 'block';
  
  if (esValida) {
    resultadoDiv.className = 'resultado valido';
    resultadoDiv.innerHTML = '<strong>✓ ESTRUCTURA VÁLIDA</strong>';
  } else {
    resultadoDiv.className = 'resultado invalido';
    resultadoDiv.innerHTML = '<strong>✗ ESTRUCTURA INCORRECTA</strong>';
  }
}


function mostrarErrores(errores) {
  const erroresDiv = document.getElementById('errores');
  erroresDiv.style.display = 'block';
  erroresDiv.innerHTML = `<strong>Errores de validación:</strong><br>${errores}`;
}


function mostrarProvincia(provincia) {
  const provinciaDiv = document.getElementById('provincia');
  provinciaDiv.style.display = 'block';
  provinciaDiv.innerHTML = `<strong>Provincia:</strong> ${provincia}`;
}


function mostrarTipoVehiculo(tipo) {
  const tipoDiv = document.getElementById('tipoVehiculo');
  tipoDiv.style.display = 'block';
  tipoDiv.innerHTML = `<strong>Tipo de vehículo:</strong> ${tipo}`;
}


function mostrarDiaPicoYPlaca(dia) {
  const diaDiv = document.getElementById('diaPicoYPlaca');
  diaDiv.style.display = 'block';
  diaDiv.innerHTML = `<strong>Día de pico y placa:</strong> ${dia}`;
}

function limpiarMensajes() {
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('errores').style.display = 'none';
  document.getElementById('provincia').style.display = 'none';
  document.getElementById('tipoVehiculo').style.display = 'none';
  document.getElementById('diaPicoYPlaca').style.display = 'none';
}

function limpiar() {
  document.getElementById('inputPlaca').value = '';
  limpiarMensajes();
}