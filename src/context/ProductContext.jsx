import { createContext, useEffect, useState } from "react";
import { FetchProducts } from "../services/FetchProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await FetchProducts();
        setProducts(productsData);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  const value = {
    products,
    isError,
    isLoading,
    setProducts,
    setIsError,
    setIsLoading,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
