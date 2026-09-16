import ItemCount from "../../components/itemCount/ItemCount";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const calcularPrecio = () => {
    if (item.inSale.offer) {
      return item.price - item.price * (item.inSale.discountPercentage / 100);
    }

    return item.price;
  };

  const precioFinal = calcularPrecio();
  const subtotal = precioFinal * item.quantity;

  return (
    <article className={styles.cartItem}>
      <img
        src={item.images[0]}
        alt={`Imagen de ${item.title}`}
        className={styles.image}
      />

      <div className={styles.info}>
        <h3>{item.title}</h3>

        {item.inSale.offer ? (
          <div>
            <del className={styles.oldPrice}>${item.price.toFixed(2)}</del>
            <h4 className={styles.price}>${precioFinal.toFixed(2)}</h4>
          </div>
        ) : (
          <h4 className={styles.price}>${precioFinal.toFixed(2)}</h4>
        )}

        <p>Cantidad: {item.quantity}</p>
        <p className={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</p>
      </div>

      <div className={styles.actions}>
        <ItemCount product={item} />
      </div>
    </article>
  );
};

export default CartItem;
