import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [myCart, setMyCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setMyCart((prevCart) => [...prevCart, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const resetCart = () => {
    setMyCart([]);
    setTotal(0);
  };

  const contextValue = {
    myCart,
    total,
    addToCart,
    resetCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};