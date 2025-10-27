import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLenght] = useState(0);

  // Getting Cart Data from Local Storage
  const getCartItems = () => {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  };

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  useEffect(() => {
    setCartLenght(getCartItems().length);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, cartLength }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
