import React, { useContext, useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { CartContext } from "../Context/Cart/CartContext";

const Cart = () => {
  const { setCartItems } = useContext(CartContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCartData(storedCart);
      setCartItems(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCartItems(cartData);
  }, [cartData]);

  const totalPrice = cartData.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const clearCart = () => {
    setCartData([]);
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const updateQty = (id, amount) => {
    const updatedCart = cartData.map((item) =>
      item.product.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item,
    );
    setCartData(updatedCart);
  };

  const deleteItem = (id) => {
    const updated = cartData.filter((item) => item.product.id !== id);
    setCartData(updated);
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Shopping Cart</h1>

      {cartData.length === 0 ? (
        <div className="mt-10 text-center text-lg font-medium text-gray-600">
          Your cart is empty — start shopping!
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-200 text-xs font-semibold tracking-wide text-gray-700 uppercase">
                <tr>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {cartData.map((item) => (
                  <tr key={item.product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {item.product.title}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-700">
                      ${item.product.price * item.quantity}
                    </td>

                    <td className="px-6 py-4">
                      <img
                        src={item.product.images?.[0]}
                        alt={item.product.title}
                        className="h-20 w-20 rounded object-cover shadow-sm"
                      />
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex w-36 items-center justify-center rounded border bg-white shadow-sm">
                        <button
                          onClick={() => updateQty(item.product.id, -1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <CiCircleMinus size={22} />
                        </button>
                        <input
                          readOnly
                          value={item.quantity}
                          className="w-12 border-x text-center text-lg font-semibold"
                        />
                        <button
                          onClick={() => updateQty(item.product.id, 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <CiCirclePlus size={22} />
                        </button>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => deleteItem(item.product.id)}
                        className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Price & controls */}
          <div className="mt-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </h2>

            <button
              onClick={clearCart}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
