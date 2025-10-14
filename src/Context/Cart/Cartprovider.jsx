import React, { useState } from "react";
import { CartContext } from "./CartContext";

const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, setQuantity, quantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
