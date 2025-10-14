import React from "react";
import { useNavigate } from "react-router";

const ViewProduct = ({ id }) => {
  const navigate = useNavigate();
  const handleViewProduct = () => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition duration-300 hover:bg-indigo-700 hover:shadow-md active:scale-95"
      onClick={handleViewProduct}
    >
      <span>View Product</span>
    </button>
  );
};

export default ViewProduct;
