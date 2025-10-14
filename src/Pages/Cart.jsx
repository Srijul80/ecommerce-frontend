import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/Cart/CartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);
  const clearCart = () => {
    setCartItems((cartItems.lenght = 0));
  };
  return (
    <>
      <button
        className="m-2 rounded border-2 bg-blue-500 p-2 text-white hover:bg-blue-600"
        onClick={clearCart}
      >
        Clear cart
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
            <tr>
              <th className="border-b px-6 py-3">ID</th>
              <th className="border-b px-6 py-3">Product</th>
              <th className="border-b px-6 py-3">Price</th>
              <th className="border-b px-6 py-3">Image</th>
              <th className="border-b px-6 py-3">Quantity</th>
              <th className="border-b px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* {cartItems.map((item) => {
              return (
                <tr className="transition hover:bg-gray-50">
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">{item.image[0]}</td>
                  <td className="px-6 py-4">Quantity</td>
                  <button>Delete</button>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
