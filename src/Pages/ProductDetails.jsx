import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/Product/ProductContext";
import AddToCartBtn from "../components/ui/AddToCartBtn";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CartContext } from "../Context/Cart/CartContext";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { quantity, setQuantity } = useContext(CartContext);

  const { allProducts } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    const findProduct = allProducts.find((p) => p.id == id);
    setSingleProduct(findProduct);
  }, [allProducts, id]);

  // Handle Quantity
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!singleProduct) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-600">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
        {/* Product Image */}
        <div className="flex flex-1 justify-center">
          <img
            src={singleProduct.images[0]}
            alt={singleProduct.title}
            className="w-80 rounded-2xl object-contain shadow-xl md:w-[28rem]"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {singleProduct.title}
          </h2>

          <p className="leading-relaxed text-gray-600">
            {singleProduct.description}
          </p>

          <div className="text-3xl font-bold text-indigo-600">
            ${singleProduct.price}
          </div>

          {/* Quantity + Actions */}
          <div className="flex flex-col gap-6">
            {/* Quantity Box */}
            <div className="flex w-40 items-center justify-center rounded-lg border border-gray-300">
              <button
                onClick={decreaseQty}
                className="rounded-l-lg p-2 transition hover:bg-gray-100"
              >
                <CiCircleMinus size={18} />
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-16 border-x text-center font-semibold text-gray-800"
              />
              <button
                onClick={increaseQty}
                className="rounded-r-lg p-2 transition hover:bg-gray-100"
              >
                <CiCirclePlus size={18} />
              </button>
            </div>

            <AddToCartBtn product={singleProduct} quantity={quantity} />
          </div>

          {/* Extra Info */}
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p>✅ Free shipping on orders above $100</p>
            <p>🚚 Delivery in 3–5 business days</p>
            <p>🔄 7-day easy return & exchange</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
