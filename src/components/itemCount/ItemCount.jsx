import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCount.module.css";

const ItemCount = ({ product }) => {
  const {
    cart,
    agregarAlCarrito,
    eliminarDelCarrito,
    incrementarProducto,
    decrementarProducto,
  } = useContext(CartContext);

  const itemProduct = cart.find((item) => item.id === product.id);

  return (
    <div className={styles.container}>
      {!itemProduct && (
        <button
          className={styles.addButton}
          disabled={
            product.stock === 0 || itemProduct?.quantity >= product.stock
          }
          onClick={() => agregarAlCarrito(product)}
        >
          {product.stock === 0
            ? "Sin stock"
            : itemProduct?.quantity >= product.stock
              ? "Stock máximo"
              : "Agregar al Carrito"}
        </button>
      )}

      {itemProduct && (
        <>
          <div className={styles.buttonCart}>
            <button onClick={() => decrementarProducto(product)}>-</button>
            <p>{itemProduct.quantity}</p>
            <button
              onClick={() => incrementarProducto(product)}
              disabled={itemProduct.quantity >= product.stock}
            >
              +
            </button>
          </div>

          <button
            className={styles.buttonDelete}
            onClick={() => eliminarDelCarrito(product)}
          >
            Eliminar del Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default ItemCount;
