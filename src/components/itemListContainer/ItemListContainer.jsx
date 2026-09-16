import { useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import ItemList from "../itemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const { category } = useParams();
  const { products, isError, isLoading } = useContext(ProductContext);

  if (isLoading) return <p className={styles.status}>Cargando productos...</p>;
  if (isError) return <p className={styles.status}>Error al cargar los productos.</p>;

  const productsFiltered = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <section className={styles.container}>
      {!category && (
        <header className={styles.featured}>
          <h1>Destacados de hoy</h1>
          <p>Encontrá los mejores productos para tu vida.</p>
        </header>
      )}

      <header className={styles.catalogHeading}>
        <span>{category ? "Categoría" : "Catálogo"}</span>
        <h1>{category || "Todos los productos"}</h1>
      </header>

      {productsFiltered.length === 0 ? (
        <p className={styles.status}>No hay productos en esta categoría.</p>
      ) : (
        <ItemList products={productsFiltered} />
      )}
    </section>
  );
};

export default ItemListContainer;
