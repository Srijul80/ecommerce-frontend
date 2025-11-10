import React from "react";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-16 text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto max-w-2xl text-lg opacity-90">
          We’d love to hear from you! Whether you have a question about our
          products, need help with an order, or just want to say hello — we’re
          here for you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-6xl flex-1 grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Send us a message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="w-full rounded border px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. john@example.com"
                className="w-full rounded border px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full rounded border px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded bg-indigo-600 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Our Support Team 🤝
          </h2>
          <p className="leading-relaxed text-gray-600">
            Our friendly team is always happy to help. You can reach us Monday
            to Friday from 9am to 6pm EST, or drop us a message anytime — we
            usually reply within 24 hours.
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-800">📍 Visit Us</h3>
              <p className="text-gray-600">
                123 E-Shop Street, Himachal, India
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">📞 Call Us</h3>
              <p className="text-gray-600">9999999999</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">📧 Email Us</h3>
              <p className="text-gray-600">support@eshop.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
