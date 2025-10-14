import React from "react";
import NavMain from "./Navbar/NavMain";

const Header = () => {
  return (
    <div className="sticky top-0 z-999 w-full bg-white shadow-2xl">
      <NavMain />
    </div>
  );
};

export default Header;
