import { useState } from "react";
import images from "../assets/images.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="border-1">
      <nav className="flex justify-between">
        <div className="flex items-center m-3 space-x-3">
          <img src={images.logo} alt="" className="w-12 h-auto" />
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-600">
            Tubs
          </h1>
        </div>
        {/* Menu */}
        <button
          className="sm:hidden flex items-center m-3 text-xl"
          onClick={handleMenu}
        >
          <i className="ri-menu-line"></i>
        </button>
        <ul className="hidden justify-around items-center space-x-5 m-3 text-xl sm:flex font-medium text-gray-700">
          <li>
            <a href="">Our Tubs</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-blue-500 p-2 rounded-lg text-white text-base hover:bg-blue-700"
            >
              <i className="ri-login-box-line"></i> Login
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="bg-orange-500 p-2 rounded-lg text-white text-base hover:bg-orange-700"
            >
              <i className="ri-login-box-line"></i> Sign Up
            </Link>
          </li>
        </ul>
        {/* mobile */}
      </nav>

      {isMenu && (
        <ul className="block sm:hidden space-y-2 m-3 text-xl font-medium text-gray-700">
          <li className="bg-white hover:bg-blue-400 hover:text-white p-1">
            Our Tubs
          </li>
          <hr />
          <li className="bg-white hover:bg-blue-400 hover:text-white p-1">
            Home
          </li>
          <hr />
          <li>
            <Link
              to="/login"
              className="bg-blue-500 p-2 rounded-lg text-white text-base hover:bg-blue-700"
            >
              <i className="ri-login-box-line"></i> Login
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/sign-up"
              className="bg-orange-500 p-2 rounded-lg text-white text-base hover:bg-oraange-700"
            >
              <i className="ri-login-box-line"></i> Sign Up
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
