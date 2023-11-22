const carritoDeCompras = []

const agregarProductoAlCarrito = (carrito, producto) => {
    carrito.push(producto);
    console.log(`${producto.nombre} ha sido agregado al carrito.`);
};
agregarProductoAlCarrito(carritoDeCompras, { nombre: "Producto ", precio: 1500})

