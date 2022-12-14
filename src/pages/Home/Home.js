import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="lg:flex mt-20">
      <div className="flex items-center justify-center w-full px-6 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-black lg:text-4xl">
            Build Your{" "}
            <span className="text-blue-600 dark:text-blue-400">Career</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-2xl">
            All of these courses will help you reach the pinnacle of your
            profession. Please take the finest of us and dedicate your time.
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <Link
              to="/courses"
              className="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-white uppercase transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Get Started
            </Link>
            <Link
              to="/faq"
              className="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-gray-700 uppercase transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-72 mt-10 lg:mt-0 lg:w-1/2 lg:h-auto">
        <div
          className="w-full h-full bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          }}
        >
          <div className="w-full h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
