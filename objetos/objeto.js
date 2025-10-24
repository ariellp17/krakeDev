function probarAtributos() {
    let persona = {
        nombre: "pedro",
        apellido: "morales",
        edad: 23,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
         console.log("no esta vivo");
    }else{
        console.log("esta vivo");
    }
}
function crearProducto() {
    let producto1 = {
        nombre: "Laptop HP",
        precio: 899.99,
        stock: 15
    };
    let producto2 = {
        nombre: "Mouse Logitech",
        precio: 25.50,
        stock: 50
    };
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}
function modificarAtributos (){
    let cuenta={
        numero:"5233233232",
        saldo : 0.0 
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

function crearCliente (){
    let cliente ={
        cedula:"1789891313",
        nombre:"Juan"
    }
    let cliente1={};
    cliente1.nombre="Romeo";
    cliente1.apellido="lopez"
    cliente1.ceduela="175656895 "
}

function provarIncremnetoSaldo(){
    let cuenta={
        nuemro:"23432",saldo:34.0
    }
    incremnetarsaldo(cuenta,100);
    console.log(cuenta.saldo);
}

function probarDeterminarMayot (){
    let per1={nombre:"ariel",edad:35}
    let per2={nombre:"roger",edad:25}
    let mayor;
    mayor=determinarMayor(per1,per2);
    if(mayor != null){
      console.log("El mayor es :" +mayor.nombre);
        
    }
}

function incremnetarsaldo(cuenta,monto ){
    cuenta.saldo+=monto 

}

function determinarMayor (persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }

}