import { useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { products, isError, isLoading } = useContext(ProductContext);

  if (isLoading) return <p className={styles.status}>Cargando producto...</p>;
  if (isError) return <p className={styles.status}>Error al cargar el producto.</p>;

  const product = products.find((product) => product.id === id);

  if (!product) return <p className={styles.status}>Producto no encontrado.</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
