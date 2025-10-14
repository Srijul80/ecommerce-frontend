import React from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    navigate("/"); // after sign up, go to login or home
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl transition duration-300 hover:scale-[1.02]"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Create an Account
        </h2>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="mb-1 block text-sm font-semibold text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="w-full rounded-lg border-2 border-gray-200 p-2 transition outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-semibold text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border-2 border-gray-200 p-2 transition outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-semibold text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border-2 border-gray-200 p-2 transition outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="mb-1 block text-sm font-semibold text-gray-600"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="w-full rounded-lg border-2 border-gray-200 p-2 transition outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="mb-3 w-full rounded-full bg-indigo-600 px-5 py-2 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full rounded-full border-2 border-indigo-600 px-5 py-2 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white active:scale-95"
        >
          Back to Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            className="cursor-pointer font-semibold text-indigo-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
