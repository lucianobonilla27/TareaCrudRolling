
const carritoDeCompras = 
    [
        { nombre: "Producto 1", Precio: 1500},
        { nombre: "Producto 2", Precio: 2500},
        { nombre: "Producto 3", Precio: 3500}
    ];

function buscarProductos(carritoDeCompras , nombre) {

    for (let index = 0; index < array.length; index++) {
        if (carritoDeCompras[index].nombre === nombre) {
            console.log("Producto buscado: " + carritoDeCompras[index].nombre + " y su precio es: " + carritoDeCompras[index].precio)
    } else { console.log("No se encontró lo que buscas, bro")
}}}
