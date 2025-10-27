import React, { useContext } from "react";
import { ProductContext } from "../../Context/Product/ProductContext";
import { FiGrid } from "react-icons/fi"; // react-icons

const SidebarCategories = () => {
  const { categories } = useContext(ProductContext);

  return (
    <>
      {/* Category Selector */}
      <div className="px-4">
        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
          <FiGrid /> Categories
        </label>
        <select className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500">
          <option defaultChecked>All Categories</option>
          {categories.map((cat, index) => (
            <option key={index}>{cat}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SidebarCategories;
