import { useState, useEffect } from "react";

const PRODUCT_URL = "https://dummyjson.com/products";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {}, 2000);
        const { products } = data;
        setProducts(products);
        setIsLoading(false);
      })
      .catch((error) => {
        setTimeout(() => {}, 2000);
        setIsError(error);
        setIsLoading(false);
      });
  }, []);

  return { isError, isLoading, products };
};

export default FetchProducts;
