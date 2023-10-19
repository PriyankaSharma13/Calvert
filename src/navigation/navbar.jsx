import React from "react";
import logo from "../assets/logo 1.png";
import search from "../assets/search.png";

const NavBar = () => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between mx-auto bg-sky-300  sm:p-2 ">
        <span className="ml-3.5 text-white sm:text-sm md:text-base">
          Call 1-1800-622-3070
        </span>
        <span className="text-white ml-2">
          Free Shipping 20% Off All Products Starts 11/10/1023
        </span>
        <button
          type="button"
          className="py-2 px-5 mb-1  ml-2 text-sm font-medium  rounded-lg border border-gray-200 bg-white-300 dark:text-gray-400 text-white focus:outline-none "
        >
          Log In
        </button>
      </header>

      <nav className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              className="h-10 mr-3  font-semibold  "
              alt="Aop Logo"
            />
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="md:hidden text-gray-500  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                <img src={search} alt="" className="h-5" />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              ></input>
            </div>
          </div>

          {/* hidden md:flex md:space-x-8 md:mt-0 md:border-0  md:bg-white dark:bg-gray-900 dark:border-gray-700 */}
          <ul className=" md:flex   md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="Home" className="hover:text-blue-500 ">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a href="Homeschool" className="hover:text-blue-500 ">
                {" "}
                How to Homeschool
              </a>
            </li>
            <li>
              <a href="Community" className="hover:text-blue-500 ">
                {" "}
                Community
              </a>
            </li>
            <li>
              <a href="Support" className="hover:text-blue-500 ">
                {" "}
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-sky-300 h-1 "></div>
      </nav>
    </>
  );
};

export default NavBar;
