import { useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { ProductContext } from "../Context/Product/ProductContext";
import SideBar from "../Features/Sidebar/SideBar";

const Products = () => {
  const { allProducts, search } = useContext(ProductContext);

  console.log(allProducts);
  return (
    <>
      <div className="md:flex">
        <SideBar />

        <div className="flex flex-1 flex-col p-6">
          <main className="flex flex-wrap justify-center gap-4">
            {search === ""
              ? allProducts.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      image={product.images[0]}
                      rating={product.rating}
                      price={product.price}
                      discount={product.discountPercentage}
                    />
                  );
                })
              : allProducts
                  .filter((item) => {
                    return item.title
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  })
                  .map((product) => {
                    return (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.images[0]}
                        rating={product.rating}
                        price={product.price}
                        discount={product.discountPercentage}
                      />
                    );
                  })}
          </main>
        </div>
      </div>
    </>
  );
};

export default Products;
