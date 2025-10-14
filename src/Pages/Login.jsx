import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logged in");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl transition duration-300 hover:scale-[1.02]">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Welcome Back 👋
        </h2>

        <div className="mb-4">
          <label
            htmlFor="userName"
            className="mb-1 block text-sm font-semibold text-gray-600"
          >
            Email
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your email"
            className="w-full rounded-lg border-2 border-gray-200 p-2 transition outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="userPass"
            className="mb-1 block text-sm font-semibold text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="userPass"
            placeholder="Enter your password"
            className="w-full rounded-lg border-2 border-gray-200 p-2 transition outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="mb-3 w-full rounded-full bg-indigo-600 px-5 py-2 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Login
        </button>

        <button
          onClick={handleSignUp}
          className="w-full rounded-full border-2 border-indigo-600 px-5 py-2 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white active:scale-95"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span
            className="cursor-pointer font-semibold text-indigo-600 hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
