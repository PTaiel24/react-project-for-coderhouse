import CardProduct from "../../components/cardProduct/CardProduct";
import FetchProducts from "../../services/FetchProducts";
import styles from "./Home.module.css";

const Home = () => {
  const { products, isLoading, isError } = FetchProducts();

  if (isLoading) return <h1>Cargando productos...</h1>;

  if (isError) return <h1>Error al cargar los productos</h1>;

  return (
    <>
      <h1>Empezando a desarrollar el projecto final de CoderHouse</h1>
      <article className={styles.cardProducts}>
        {products.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
      </article>
    </>
  );
};

export default Home;
