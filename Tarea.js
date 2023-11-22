const carritoDeCompras = [];

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

