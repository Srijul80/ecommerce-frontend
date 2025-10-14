import { Link } from "react-router-dom";
import ViewProduct from "../ui/ViewProduct";

const ProductCard = ({ title, image, rating, price, discount, id }) => {
  return (
    <div className="flex w-72 flex-col rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <Link
        to={`/productDetails/${id}`}
        className="relative flex justify-center overflow-hidden rounded-t-xl bg-gray-100 p-4"
      >
        <img
          src={image}
          alt={title}
          className="h-48 w-48 object-contain transition-transform duration-300 hover:scale-110"
        />

        {discount && (
          <span className="absolute top-2 left-2 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow">
            {discount}% OFF
          </span>
        )}
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-indigo-600">${price}</p>
          <span
            className={`text-sm font-semibold ${
              rating == null
                ? "text-gray-500"
                : rating >= 4
                  ? "text-green-600"
                  : rating >= 3
                    ? "text-yellow-500"
                    : rating >= 2
                      ? "text-orange-500"
                      : "text-red-500"
            }`}
          >
            ⭐ {rating ?? "N/A"}
          </span>
        </div>
      </div>

      {/* View Product*/}
      <div className="border-t p-4">
        <ViewProduct id={id} />
      </div>
    </div>
  );
};

export default ProductCard;
