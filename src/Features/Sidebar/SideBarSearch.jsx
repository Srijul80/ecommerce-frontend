import React, { useContext } from "react";
import { FiPackage, FiSearch } from "react-icons/fi"; // react-icons
import { ProductContext } from "../../Context/Product/ProductContext";

const SideBarSearch = () => {
  const { search, setSearch } = useContext(ProductContext);
  return (
    <>
      {/* Search */}
      <div className="px-4">
        <label className="mt-2 mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
          <FiPackage /> Search
        </label>
        <div className="relative w-full">
          <FiSearch
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="search"
            placeholder="Search your product..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default SideBarSearch;
