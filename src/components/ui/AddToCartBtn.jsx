import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../Context/Cart/CartContext";

const AddToCartBtn = ({ product, quantity }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {};
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
