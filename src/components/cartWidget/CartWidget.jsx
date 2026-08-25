import imgCartWidget from "../../assets/icons/carrito-de-compras.webp";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  let totalQuantity = 0;
  cart.map((qty) => (totalQuantity += qty.quantity));

  return (
    <div className={styles.cartContent}>
      <img
        src={imgCartWidget}
        alt="shopping cart image"
        style={{ width: "32px" }}
      />
      {totalQuantity > 0 && (
        <div className={styles.totalQuantity}>{totalQuantity}</div>
      )}
    </div>
  );
};

export default CartWidget;
