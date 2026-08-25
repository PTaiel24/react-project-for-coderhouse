import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ButtonCart.module.css";

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
      <div className={styles.buttonAddToCart}>
        <button onClick={() => agregarAlCarrito(product)}>
          Agregar al Carrito
        </button>
      </div>
    );

  return (
    <>
      <div className={styles.buttonCart}>
        <button onClick={() => decrementarProducto(product)}>-</button>

        <p>{item.quantity}</p>

        <button onClick={() => incrementarProducto(product)}>+</button>
      </div>
      <div className={styles.buttonDelete}>
        <button onClick={() => eliminarDelCarrito(product)}>
          Eliminar del Carrito
        </button>
      </div>
    </>
  );
};

export default ButtonCart;
