import { useState } from "react";
import images from "../assets/images.ts";
import { Link } from "react-router-dom";

const Login = () => {
  const [isPassword, setIsPassword] = useState(false);

  const handlePassword = () => {
    setIsPassword(!isPassword);
  };
  const typeInput = isPassword ? "password" : "text";
  const typeIcon = isPassword ? "ri-lock-unlock-fill" : "ri-lock-password-fill";

  return (
    <div className="bg-blue-950 relative min-h-screen">
      <Link
        to="/"
        className="absolute top-2 left-5 text-white bg-orange-500 rounded-lg p-2 font-bold"
      >
        <i className="ri-arrow-left-double-fill"></i> Home
      </Link>

      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center border-1 justify-center space-y-3 w-80 p-10 rounded-lg border-gray-950 bg-white">
          <h1 className="font-bold text-3xl">Tubs</h1>
          <img src={images.logo} alt="" className="w-20" />
          <form action="" className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border-2 rounded-lg border-gray-300 focus:ring-0 focus:border-gray-300 w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-bold">
                Password
              </label>
              <div className="flex rounded-lg border-gray-300 border-2 items-center p-1 w-full">
                <input
                  type={typeInput}
                  id="password"
                  className="border-none focus:ring-0 focus:border-gray-300"
                />
                <i
                  className={`cursor-pointer ${typeIcon}`}
                  onClick={handlePassword}
                ></i>
              </div>
            </div>
            <button className="block m-auto bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
