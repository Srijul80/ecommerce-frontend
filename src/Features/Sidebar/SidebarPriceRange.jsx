import React, { useContext } from "react";
import { FiDollarSign } from "react-icons/fi";
import { ProductContext } from "../../Context/Product/ProductContext";
const SidebarPriceRange = () => {
  const { priceRange, setPriceRange } = useContext(ProductContext);
  return (
    <>
      {/* Price Filter */}
      <div className="px-4">
        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
          <FiDollarSign /> Price (up to ${priceRange})
        </label>
        <input
          type="range"
          min="0"
          max="5000"
          step="50"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full accent-indigo-500"
        />
      </div>
    </>
  );
};

export default SidebarPriceRange;
