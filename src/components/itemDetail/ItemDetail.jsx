import ItemCount from "../itemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {
  const priceOffer = product.inSale.offer
    ? product.price - product.price * (product.inSale.discountPercentage / 100)
    : product.price;

  return (
    <section className={styles.productPage}>
      <section className={styles.sectionProduct}>
        <img
          src={product.images[0]}
          alt={`Imagen de ${product.title}`}
          className={styles.imageProduct}
        />

        <article className={styles.divInfoProduct}>
          <p className={styles.category}>{product.category}</p>
          <h1>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.ratingBrand}>
            <span>★ {product.rating ?? "Sin rating"}</span>
            <span>{product.brand ?? "Sin marca"}</span>
          </div>

          <div className={styles.priceBox}>
            {product.inSale.offer && (
              <del className={styles.oldPrice}>${product.price.toFixed(2)}</del>
            )}
            <div className={styles.finalPriceRow}>
              <h2 className={styles.price}>${priceOffer.toFixed(2)}</h2>
              {product.inSale.offer && (
                <span className={styles.offerLabel}>Oferta</span>
              )}
            </div>
          </div>

          <p className={styles.stock}>
            Stock: <strong>{product.stock}</strong>
          </p>

          <ItemCount product={product} />
        </article>
      </section>
    </section>
  );
};

export default ItemDetail;
