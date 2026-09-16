import { useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import styles from "./ProductDetail.module.css";
import ButtonCart from "../../components/buttonCart/ButtonCart";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, isLoading, isError } = useContext(ProductContext);

  if (isLoading) return <p className={styles.status}>Cargando producto...</p>;
  if (isError) return <p className={styles.status}>Error al cargar el producto.</p>;

  const product = products.find((product) => product.id === id);

  if (!product) return <p className={styles.status}>Producto no encontrado.</p>;

  const priceOffer = () => {
    if (product.inSale.offer) {
      const price =
        product.price -
        product.price * (product.inSale.discountPercentage / 100);
      return (
        <div className={styles.priceBox}>
          <del className={styles.oldPrice}>${product.price.toFixed(2)}</del>
          <h2 className={styles.price}>${price.toFixed(2)}</h2>
        </div>
      );
    }
    return (
      <div className={styles.priceBox}>
        <h2 className={styles.price}>${product.price.toFixed(2)}</h2>
      </div>
    );
  };

  return (
    <section className={styles.productPage}>
      <section className={styles.sectionProduct}>
        <img
          src={product.images[0]}
          alt={`Imagen de ${product.title}`}
          className={styles.imageProduct}
        />

        <article className={styles.divInfoProduct}>
          <h1>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          {priceOffer()}
          <ButtonCart product={product} />
        </article>
      </section>
    </section>
  );
};

export default ProductDetail;
