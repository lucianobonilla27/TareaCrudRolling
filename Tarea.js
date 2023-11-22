// ● Filtrar productos que coincidan con una palabra, parte de ella
// o una letra
// ● Eliminar producto del carrito

// function filtrar(params) {
    
// }


// ● Listar los productos del carrito

const carritoDeCompras = [
    { Nombre: "Producto 1", Precio: 1500},
    { Nombre: "Producto 2", Precio: 2500},
    { Nombre: "Producto 3", Precio: 3500}
];

function mostrarProductosDelCarrito() {
    for (let index = 0; index < carritoDeCompras.length; index++) {
        console.log(carritoDeCompras[index].Nombre)
        console.log(carritoDeCompras[index].Precio)    
    }       
}
// console.log(`${Producto.Nombre}` + "Precio: " + `${Producto.Precio}`)