import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div
      className={
        darkTheme
          ? "p-5 pb-3 flex flex-wrap sm:justify-between justify-center border-b items-center border-gray-700 mb-7"
          : "p-5 pb-3 flex flex-wrap sm:justify-between justify-center border-b items-center border-gray-200 mb-7"
      }
    >
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p
            className={
              darkTheme
                ? "bg-gray-50 text-2xl font-bold text-gray-900 py-1 px-2 rounded"
                : "text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded"
            }
          >
            Google
          </p>
        </Link>
        <button
          type="button"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
          className={
            darkTheme
              ? "text-xl bg-gray-50 text-gray-900 rounded-full px-2 py-1 border hover:shadow-lg"
              : "text-xl bg-white rounded-full px-2 py-1 border hover:shadow-lg"
          }
        >
          {darkTheme ? "💡 Light" : "🌙 Dark"}
        </button>
      </div>
      <Search />
    </div>
  );
};
