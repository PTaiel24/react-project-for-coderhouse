import { Link } from "react-router";
import styles from "./CardProduct.module.css";
import ButtonCart from "../buttonCart/ButtonCart";

const CardProduct = ({ product }) => {
  const priceOffer = product.inSale.offer
    ? product.price - product.price * (product.inSale.discountPercentage / 100)
    : product.price;

  return (
    <article className={styles.cardProduct}>
      <div className={styles.imageContainer}>
        {product.inSale.offer && (
          <span className={styles.offer}>
            -{product.inSale.discountPercentage.toFixed(2)}%
          </span>
        )}
        <img
          src={product.thumbnail || product.images[0]}
          alt={`Imagen de ${product.title}`}
        />
      </div>

      <div className={styles.category}>{product.category}</div>
      <h2 className={styles.cardTitle}>{product.title}</h2>

      <div className={styles.priceContainer}>
        {product.inSale.offer && (
          <del className={styles.oldPrice}>${product.price.toFixed(2)}</del>
        )}
        <h3 className={styles.price}>${priceOffer.toFixed(2)}</h3>
        <p className={styles.stock}>
          Stock: <strong>{product.stock}</strong>
        </p>
      </div>

      <div className={styles.cardActions}>
        <ButtonCart product={product} />
        <Link to={`/product/${product.id}`} className={styles.detailButton}>
          Ver Producto
        </Link>
      </div>
    </article>
  );
};

export default CardProduct;
