import React from "react";
import { NavLink } from "react-router-dom"; // ✅ use react-router-dom

const Navlinks = ({ menu, setmenu }) => {
  const Links = [
    { link: "Home", path: "/" },
    { link: "Products", path: "/products" },
    { link: "About", path: "/about" },
    { link: "Contact", path: "/contact" },
  ];

  return (
    <div className="absolute top-16 right-0 z-20 flex w-full flex-col items-center gap-4 bg-white py-6 shadow-md md:static md:flex md:flex-row md:justify-center md:bg-transparent md:py-0 md:shadow-none">
      {Links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `group relative px-4 py-2 text-lg font-medium transition-colors duration-300 ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"}`
          }
          onClick={() => setmenu(!menu)}
        >
          {link.link}
          {/* underline animation */}
          <span
            className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-300 ease-out group-hover:scale-x-100`}
          ></span>
        </NavLink>
      ))}
    </div>
  );
};

export default Navlinks;
