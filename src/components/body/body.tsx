import React from "react";
import HomeSection from "./sections/home-section";
import About from "./sections/about";

const Body = () => {
  return (
    <main className="w-full mx-auto py-8 space-y-16 w-full">
      {/* Home Section */}
      <section
        id="home"
        className="h-screen"
      >
        <HomeSection/>
      </section>

      {/* About Section */}
       <About/>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-100 dark:bg-gray-900 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          My Work
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Items */}
          <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Project 1
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              A brief description of the project goes here.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Project 2
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              A brief description of the project goes here.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Project 3
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              A brief description of the project goes here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white dark:bg-gray-800 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <form className="mt-8 max-w-lg mx-auto space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Body;
