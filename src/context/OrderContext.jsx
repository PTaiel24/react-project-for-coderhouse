import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [newOrder, setNewOrder] = useState({});

  function crearPedido({ buyer, cart, totalPrice }) {
    const nuevoPedido = {
      items: cart,
      totalAmount: totalPrice,
      buyer: buyer,
      status: "pending",
      createdAt: new Date(),
    };
    setNewOrder(nuevoPedido);
  }

  const value = {
    crearPedido,
    newOrder,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
