import React, { useState } from "react";
import NavLogo from "./NavLogo";
import Navlinks from "./Navlinks";
import NavButtons from "./NavButtons";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const NavMain = () => {
  const [menu, setmenu] = useState(false);
  const handleToggleMenu = () => {
    setmenu(!menu);
  };
  return (
    <nav className="mx-auto flex h-15 w-full max-w-[1536px] items-center justify-between bg-white px-2 py-2">
      <NavLogo />
      <div className={`${menu ? "block" : "hidden"} md:block`}>
        <Navlinks setmenu={setmenu} menu={menu} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <NavButtons />
        {menu ? (
          <RxCross1
            size={24}
            onClick={handleToggleMenu}
            className="md:hidden"
          />
        ) : (
          <RxHamburgerMenu
            className="md:hidden"
            size={24}
            onClick={handleToggleMenu}
          />
        )}
      </div>
    </nav>
  );
};

export default NavMain;
