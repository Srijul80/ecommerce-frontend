import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-9xl font-bold text-indigo-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 md:text-3xl">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-md text-center text-gray-600">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6 flex space-x-4">
        <Link
          to="/"
          className="rounded bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700"
        >
          Go Home
        </Link>
        <Link
          to="/contact"
          className="rounded border border-indigo-600 px-6 py-2 text-indigo-600 transition hover:bg-indigo-50"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
