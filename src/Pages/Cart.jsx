import React, { useContext, useEffect, useState } from "react";

import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CartContext } from "../Context/Cart/CartContext";

const Cart = () => {
  const { setCartItems } = useContext(CartContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      setCartData(JSON.parse(localStorage.getItem("cart")));
      console.log("cart data is", cartData);
    } else {
      setCartData([]);
    }
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartData([]);
    alert("local storage data clear");
  };
  // Handle Quantity
  const increaseQty = (id) => {
    const updatedCart = cartData.map((item) => {
      if (item.product.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQty = (id) => {
    const updatedCart = cartData.map((item) => {
      if (item.product.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartData(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const deleteCartItem = (id) => {
    const updatedCart = cartData.filter((item) => {
      return item.product.id !== id;
    });
    setCartData(updatedCart);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // const totalPrice = cartItems.reduce((total, item) => {
  //   return total + item.product.price * item.quantity;
  // }, 0);
  return (
    <>
      <button
        className="m-2 rounded border-2 bg-blue-500 p-2 text-white hover:bg-blue-600"
        onClick={clearCart}
      >
        Clear cart
      </button>
      {cartData.length === 0 ? (
        "no items in cart"
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
              <tr>
                <th className="border-b px-6 py-3">Product</th>
                <th className="border-b px-6 py-3">Price</th>
                <th className="border-b px-6 py-3">Image</th>
                <th className="border-b px-6 py-3">Quantity</th>
                <th className="border-b px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cartData.map((item) => {
                return (
                  <tr
                    className="transition hover:bg-gray-50"
                    key={item.product.id}
                  >
                    <td className="px-6 py-4">{item.product.title}</td>
                    <td className="px-6 py-4">
                      {Math.round(item.product.price * item.quantity)}
                    </td>
                    <td className="px-6 py-4">
                      <img
                        src={item.product.images ? item.product.images[0] : ""}
                        alt={item.product.title}
                        className="h-20 w-20 object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex w-40 items-center justify-center rounded-lg border border-gray-300">
                        <button
                          onClick={() => {
                            decreaseQty(item.product.id);
                          }}
                          className="rounded-l-lg p-2 transition hover:bg-gray-100"
                        >
                          <CiCircleMinus size={18} />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          readOnly
                          className="w-16 border-x text-center font-semibold text-gray-800"
                        />
                        <button
                          onClick={() => {
                            increaseQty(item.product.id);
                          }}
                          className="rounded-r-lg p-2 transition hover:bg-gray-100"
                        >
                          <CiCirclePlus size={18} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteCartItem(item.product.id)}
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95"
                      >
                        <span>Remove</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-4 flex justify-end px-6 py-3 text-lg font-semibold">
            Total: $200
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
