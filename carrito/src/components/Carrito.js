import React from "react";
import Producto from './Producto';

const Carrito = ({ carrito }) => (
    <div className="carrito">
        <h2> Tu Carrito </h2>

        {carrito.length == 0 ? <p>No hay productos en el carrito</p> : carrito.map(producto => (
            <Producto key={producto.id} producto={producto} />
        ))}
    </div>
)

export default Carrito;