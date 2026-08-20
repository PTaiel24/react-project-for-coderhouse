import { Link } from "react-router";
import styles from "./CardProduct.module.css";

const CardProduct = ({ product }) => {
  return (
    <section className={styles.cardProduct}>
      <img src={product.images[0]} alt={`Product image ${product.title}`} />
      <span>{product.title}</span>

      <Link to={`/product/${product.id}`}>
        <button>Ver Producto</button>
      </Link>
    </section>
  );
};

export default CardProduct;
