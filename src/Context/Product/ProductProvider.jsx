import { useEffect, useState } from "react";
import Loader from "../../components/ui/Loader";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(1000);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    // const apiUrl = import.meta.env.VITE_API_URL;
    const apiUrl = "https://dummyjson.com/products?limit=0";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data.products, "Data Fetched Successfully");
      setAllProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log("Error is ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (allProducts?.length) {
      // unique categories
      const filterCategory = allProducts.map((p) => p.category);
      const uniqueCategory = [...new Set(filterCategory)];
      setCategory(uniqueCategory);

      //  unique brands
      const filterBrands = allProducts.map((p) => p?.brand).filter(Boolean);
      const uniqueBrands = [...new Set(filterBrands)];
      setBrands(uniqueBrands);
    }
  }, [allProducts]);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        loading,
        categories,
        brands,
        search,
        setSearch,
        setPriceRange,
        priceRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
