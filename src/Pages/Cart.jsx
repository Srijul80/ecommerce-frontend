import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  console.log(cartItems);
  const clearCart = () => {
    setCartItems([]);
  };
  // Handle Quantity
  const increaseQty = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  };

  const decreaseQty = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        return item.product.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    });
  };
  const deleteCartItem = (id) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.product.id !== id;
      });
    });
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
      {cartItems.length == 0 ? (
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
              {cartItems.map((item) => {
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
                        className="rounded-xl border bg-red-500 p-2 text-white"
                        onClick={() => deleteCartItem(item.product.id)}
                      >
                        Delete
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
