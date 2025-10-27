import React, { useContext, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../Context/Cart/CartContext";

const AddToCartBtn = ({ product, quantity, setQuantity }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const handleAddToCart = () => {
    const newItem = { product, quantity };

    // Check if product already exists
    const exists = cartItems.some(
      (item) => item.product.id === newItem.product.id,
    );

    if (exists) {
      alert("Already added to cart");
      return;
    }

    const updateCart = [...cartItems, newItem];
    setCartItems(updateCart);
    console.log("Saving to localStorage:", updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    setQuantity(1);

    alert("added to cart");
  };

  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition duration-300 hover:bg-indigo-700 hover:shadow-md active:scale-95"
      onClick={handleAddToCart}
    >
      <AiOutlineShoppingCart className="text-lg" />
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCartBtn;
