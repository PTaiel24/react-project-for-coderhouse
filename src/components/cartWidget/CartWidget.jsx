import imgCartWidget from "../../assets/iconos/carrito-de-compras.webp";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  let totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={styles.cartContent}>
      <img
        src={imgCartWidget}
        alt="shopping cart image"
        className={styles.cartIcon}
      />
      {totalQuantity > 0 && (
        <div className={styles.totalQuantity}>{totalQuantity}</div>
      )}
    </div>
  );
};

export default CartWidget;
