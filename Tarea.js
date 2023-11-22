// ● Filtrar productos que coincidan con una palabra, parte de ella
// o una letra
// ● Eliminar producto del carrito


const carritoDeCompras = [
    { nombre: "Procuto 1", precio: 1500},
    { nombre: "Producto 2", precio: 2500},
    { nombre: "Producto 3", precio: 3500}
];

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
  
 
  