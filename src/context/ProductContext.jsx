import { createContext } from "react";
import FetchProducts from "../services/FetchProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { products, isLoading, isError } = FetchProducts();

  return (
    <ProductContext.Provider value={{ products, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
};
