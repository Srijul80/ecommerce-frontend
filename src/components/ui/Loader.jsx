import React from "react";
import "../../Styles/spinner.css";

const Loader = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
