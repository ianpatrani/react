import React, { useState } from 'react';
import Producto from './components/Producto';
import Carrito from './components/Carrito'

function App() {


  //crear lista de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa', precio: 1000 },
    { id: 2, nombre: 'Remera', precio: 2000 },
    { id: 3, nombre: 'Pantalon', precio: 3000 },
    { id: 4, nombre: 'Campera', precio: 4000 },
  ]);


  //State para el carrito de compras
  const [carrito, agregarProducto] = useState([]);

  return (

    <div className="App">
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

        <Carrito carrito="carrito"/>

    </div>
  );
}

export default App;
