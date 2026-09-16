import CardProduct from "../cardProduct/CardProduct";
import styles from "./ItemList.module.css";

const ItemList = ({ products }) => {
  return (
    <section className={styles.products}>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ItemList;
