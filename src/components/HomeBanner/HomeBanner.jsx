import React from "react";
import { Link } from "react-router-dom";
import BuyNowBtn from "../ui/BuyNowBtn";

const HomeBanner = ({ image, description, title, id }) => {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-evenly gap-10 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 px-6 md:h-[80vh] md:flex-row">
      {/* Left Section (Text) */}
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center md:w-[50%] md:items-start md:text-left">
        <h1 className="text-4xl leading-tight font-extrabold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-md text-lg text-gray-200">{description}</p>

        <Link to={`/productDetails/${id}`}>
          <BuyNowBtn className="mt-4" />
        </Link>
      </div>

      {/* Right Section (Image) */}
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center overflow-hidden rounded-full bg-white p-6 shadow-xl shadow-indigo-500/30 transition-transform duration-500 ease-in-out hover:scale-105">
          <img
            src={image}
            alt={title}
            className="w-48 object-contain drop-shadow-lg md:w-72 lg:w-96"
          />
          {/* Decorative Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
