import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { CartContext } from "../../../Context/Cart/CartContext";

const NavButtons = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex items-center gap-6">
      {/* Cart Button */}
      <button className="relative rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600">
        <FiShoppingCart size={22} onClick={() => navigate("/cart")} />
        {/* Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
          {cartItems.length}
        </span>
      </button>

      {/* User Button */}
      <button
        className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
        onClick={() => navigate("/login")}
      >
        <FaRegUser size={22} />
      </button>
    </div>
  );
};

export default NavButtons;
