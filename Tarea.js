
const carritoDeCompras = [];
// agregarProductoAlCarrito(carritoDeCompras, { nombre: "Producto 1", precio: 1500 });
// agregarProductoAlCarrito(carritoDeCompras, { nombre: "Producto 2", precio: 2500 });
// agregarProductoAlCarrito(carritoDeCompras, { nombre: "Producto 3", precio: 3500 });

const agregarProductoAlCarrito = (carrito, producto) => {
  carrito.push(producto);
  console.log(`${producto.nombre} ha sido agregado al carrito.`);
};

// Función para eliminar un producto del carrito por nombre
function eliminarProducto(carrito, nombre) {
  const indice = carrito.findIndex(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

  if (indice !== -1) {
    const productoEliminado = carrito.splice(indice, 1);
    console.log(`${nombre} eliminado del carrito.`);
  } else {
    console.log(`${nombre} no encontrado en el carrito.`);
  }
}

// Función para filtrar productos por palabra, parte de ella o una letra
function filtrarProductos(carrito, filtro) {
  const productosFiltrados = carrito.filter(producto => 
    producto.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  if (productosFiltrados.length === 0) {
    console.log('No se encontraron productos que coincidan con el filtro.');
  } else {
    console.log('Productos que coinciden con el filtro:');
    productosFiltrados.forEach(producto => {
      console.log(`${producto.nombre} - Precio: ${producto.precio}`);
    });
  }
}

// Función para mostrar productos del carrito
function mostrarProductosDelCarrito() {
  for (let index = 0; index < carritoDeCompras.length; index++) {
    console.log(carritoDeCompras[index].nombre);
    console.log(carritoDeCompras[index].precio);
  }       
}

function buscarProductos(carritoDeCompras,nombre) {

    for (let index = 0; index < carritoDeCompras.length; index++) {
        if (carritoDeCompras[index].nombre === nombre) {
            console.log("Producto buscado: " + carritoDeCompras[index].nombre + " y su precio es: " + carritoDeCompras[index].precio)
            return
    } else { console.log("No se encontró lo que buscas, bro")
    return
}}}