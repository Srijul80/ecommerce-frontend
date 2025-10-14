import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import MainLayout from "../components/Layout/MainLayout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/productDetails/:id", element: <ProductDetails /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
        { path: "/cart", element: <Cart /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
