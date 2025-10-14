import React from "react";
import happyCutomers from "../assets/Images/happy-customers.jpg";
import team from "../assets/Images/team1.jpg";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-20 text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">About Us</h1>
        <p className="mx-auto max-w-2xl text-lg opacity-90">
          We’re on a mission to make online shopping simple, fun, and affordable
          — while delivering products you’ll love.
        </p>
      </section>

      {/* Brand Story */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            It all started in 2022 with a small idea: bring unique, high-quality
            products closer to people who value both style and convenience.
          </p>
          <p className="leading-relaxed text-gray-600">
            What began as a passion project has grown into a trusted e-commerce
            brand serving thousands of happy customers around the world.
          </p>
        </div>
        <img
          src={happyCutomers}
          alt="Happy customers shopping online"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Core Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold">What We Stand For</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">🌟 Quality First</h3>
              <p className="text-gray-600">
                We hand-pick every product to ensure it meets our standards for
                durability and design.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">🚚 Fast Delivery</h3>
              <p className="text-gray-600">
                Reliable shipping partners help us get your order to your
                doorstep — quickly and safely.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">💬 Customer Care</h3>
              <p className="text-gray-600">
                Our support team is here around the clock to make sure your
                experience is smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Meet the People Behind the Brand
        </h2>
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          {["Alice", "Bob", "Charlie", "Diana"].map((name, i) => (
            <div
              key={i}
              className="rounded-lg bg-white p-6 shadow transition hover:shadow-lg"
            >
              <img
                src={team}
                alt={name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-gray-500">Team Member</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
