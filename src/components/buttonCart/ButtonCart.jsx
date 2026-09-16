import { useContext } from "react";
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

  return (
    <div className={styles.container}>
      {!item && (
        <button
          className={styles.addButton}
          disabled={product.stock === 0 || item?.quantity >= product.stock}
          onClick={() => agregarAlCarrito(product)}
        >
          {product.stock === 0
            ? "Sin stock"
            : item?.quantity >= product.stock
              ? "Stock máximo"
              : "Agregar"}
        </button>
      )}

      {item && (
        <div className={styles.buttonCart}>
          <button
            onClick={() => decrementarProducto(product)}
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => incrementarProducto(product)}
            disabled={item.quantity >= product.stock}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonCart;
