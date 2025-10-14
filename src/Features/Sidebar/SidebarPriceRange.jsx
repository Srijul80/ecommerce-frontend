import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";
const SidebarPriceRange = () => {
  const [price, setPrice] = useState(1000);
  return (
    <>
      {/* Price Filter */}
      <div className="px-4">
        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
          <FiDollarSign /> Price (up to ${price})
        </label>
        <input
          type="range"
          min="0"
          max="5000"
          step="50"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-indigo-500"
        />
      </div>
    </>
  );
};

export default SidebarPriceRange;
