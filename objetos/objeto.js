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