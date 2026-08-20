import { useParams } from "react-router";

const PageProduct = () => {
  const { id } = useParams();

  return <h1>Producto con id: {id}</h1>;
};

export default PageProduct;
