import { useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import styles from "./PageProduct.module.css";
import ButtonCart from "../../components/buttonCart/ButtonCart";

const PageProduct = () => {
  const { id } = useParams();
  const { products, isLoading } = useContext(ProductContext);

  if (isLoading) return <h1>Cargando producto...</h1>;

  const product = products.find((product) => product.id === Number(id));

  if (!product) return <h1>Producto no encontrado</h1>;

  return (
    <article>
      <section className={styles.section_product}>
        <img
          src={product.images[0]}
          alt={`Product Image ${product.title}`}
          className={styles.image_product}
        />
        <div className={styles.div_info_product}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span>${product.price}</span>

          <ButtonCart product={product} key={product.id} />
        </div>
      </section>
    </article>
  );
};

export default PageProduct;
