import React from "react";

import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto w-full max-w-[1536px]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
