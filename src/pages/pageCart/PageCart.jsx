import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CardProduct from "../../components/cardProduct/CardProduct";
import styles from "./PageCart.module.css";
import { Link } from "react-router";
import CartItem from "../../components/cartItem/CartItem";

const PageCart = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);

  const totalPrice = parseFloat(
    cart
      .reduce((acc, item) => {
        if (item.inSale.offer) {
          const priceOffer =
            item.price - item.price * (item.inSale.discountPercentage / 100);
          return acc + priceOffer * item.quantity;
        }
        return acc + item.price * item.quantity;
      }, 0)
      .toFixed(2),
  );

  const evaluarPrice = (item) => {
    if (item.inSale.offer) {
      const price =
        item.price - item.price * (item.inSale.discountPercentage / 100);
      return parseFloat(price.toFixed(2));
    }
    return parseFloat(item.price.toFixed(2));
  };

  if (cart.length === 0) {
    return (
      <section className={styles.cartPage}>
        <h1 className={styles.pageTitle}>Mi carrito</h1>
        <section className={styles.zonaCompra}>
          <article className={styles.emptyCart}>
            <div>
              <h2>El carrito se encuentra vacío</h2>
              <p>Agregá productos desde el catálogo para comenzar tu compra.</p>
            </div>
          </article>

          <aside className={styles.asideCompra}>
            <h2 className={styles.asideTitle}>Resumen de compra</h2>
            <section className={styles.resumenCompra}>
              <h3>Cantidad de productos: 0</h3>
              <h4 className={styles.total}>Total a pagar: $0.00</h4>
              <button className={styles.checkoutButton} disabled>
                Continuar compra
              </button>
            </section>
          </aside>
        </section>
      </section>
    );
  }

  return (
    <section className={styles.cartPage}>
      <h1 className={styles.pageTitle}>Mi carrito</h1>

      <section className={styles.zonaCompra}>
        <article className={styles.productList}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </article>

        <aside className={styles.asideCompra}>
          <h2 className={styles.asideTitle}>Resumen de compra</h2>
          <section className={styles.resumenCompra}>
            <h3>
              Cantidad de unidades:{" "}
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </h3>

            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title}: ${evaluarPrice(item)} x {item.quantity}
                </li>
              ))}
            </ul>

            <h4 className={styles.total}>
              Total a pagar: ${totalPrice.toFixed(2)}
            </h4>

            <Link to="/cart/purchase-form">
              <button className={styles.checkoutButton}>
                Continuar compra
              </button>
            </Link>
          </section>
        </aside>
      </section>

      <button className={styles.clearButton} onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </section>
  );
};

export default PageCart;
