import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ButtonCart = ({ product }) => {
  const {
    cart,
    agregarAlCarrito,
    eliminarDelCarrito,
    incrementarProducto,
    decrementarProducto,
  } = useContext(CartContext);

  const item = cart.find((item) => item.id === product.id);
  if (!item)
    return (
      <div>
        <button onClick={() => agregarAlCarrito(product)}>
          Agregar al Carrito
        </button>
      </div>
    );

  return (
    <div>
      <button onClick={() => decrementarProducto(product)}>-</button>

      <p>{item.quantity}</p>

      <button onClick={() => incrementarProducto(product)}>+</button>

      <button onClick={() => eliminarDelCarrito(product)}>
        Eliminar del Carrito
      </button>
    </div>
  );
};

export default ButtonCart;
