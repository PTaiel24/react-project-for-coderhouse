import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CardProduct from "../../components/cardProduct/CardProduct";
import styles from "./PageCart.module.css";
import ButtonCart from "../../components/buttonCart/ButtonCart";

const PageCart = () => {
  const { cart } = useContext(CartContext);

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
      </article>
      <aside>
        <h2>Pagar productos</h2>
      </aside>
    </section>
  );
};

export default PageCart;
