import React, { useState } from "react";
import { CartContext } from "./CartContext";

const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
