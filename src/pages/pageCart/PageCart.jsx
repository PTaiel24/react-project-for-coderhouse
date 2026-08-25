import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CardProduct from "../../components/cardProduct/CardProduct";
import styles from "./PageCart.module.css";
import ButtonCart from "../../components/buttonCart/ButtonCart";

const PageCart = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);
  let totalQuantity = 0;
  cart.map((item) => {
    totalQuantity += item.quantity;
  });

  let totalPrice = 0;
  cart.map((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <section className={styles.zona_compra}>
      <h1>Zona de compra</h1>
      <article>
        {cart.map((item) => {
          return (
            <CardProduct key={item.id} product={item}>
              <ButtonCart product={item} />
            </CardProduct>
          );
        })}
        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      </article>
      <aside className={styles.asideCompra}>
        <section>
          <h2>Pagar Productos</h2>
        </section>
        <section className={styles.resumenCompra}>
          <h3>Cantidad de productos: {cart.length}</h3>
          <ul>
            {cart.map((item) => {
              return (
                <li key={item.id}>
                  {item.title}: {item.quantity * item.price}
                </li>
              );
            })}
          </ul>

          <h4>Total a pagar: {totalPrice}</h4>
          <button>Continuar Compra</button>
        </section>
      </aside>
    </section>
  );
};

export default PageCart;
