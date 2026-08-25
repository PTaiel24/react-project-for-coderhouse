import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    setCart((cartActual) => {
      return [
        ...cartActual,
        {
          id: product.id,
          title: product.title,
          description: product.description,
          images: [...product.images],
          price: product.price,
          discount: 5,
          quantity: 1,
        },
      ];
    });
  };

  const eliminarDelCarrito = (product) => {
    setCart((cartActual) => {
      return cartActual.filter((item) => item.id !== product.id);
    });
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const incrementarProducto = (product) => {
    setCart((cartActual) => {
      return cartActual.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  };

  const decrementarProducto = (product) => {
    setCart((cartActual) => {
      return cartActual
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const value = {
    cart,
    agregarAlCarrito,
    eliminarDelCarrito,
    incrementarProducto,
    decrementarProducto,
    vaciarCarrito,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
