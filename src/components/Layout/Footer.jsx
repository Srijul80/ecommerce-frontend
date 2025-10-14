import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">E-Shop</h2>
          <p className="text-gray-400">
            Your one-stop shop for amazing products at the best prices.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                All Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Offers
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Get in Touch</h3>
          <p className="text-gray-400">support@eshop.com</p>
          <p className="text-gray-400">+1 (555) 123-4567</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-white">
              🌐
            </a>
            <a href="#" className="hover:text-white">
              🐦
            </a>
            <a href="#" className="hover:text-white">
              📘
            </a>
            <a href="#" className="hover:text-white">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Demo E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
