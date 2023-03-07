import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className=" bg-white border-b sticky top-0 z- 50 shadow-sm">
      <header className="flex max-w-6xl px-4 mx-auto items-center justify-between">
        <div>
          <img
            src="https://seeklogo.com/images/L/library-books-logo-4189717FC3-seeklogo.com.jpg"
            alt="logo"
            className="h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer
               py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                 pathMatchRoute("/") && "text-black border-b-red-500"
               } `}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer
              py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              } `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer
              py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              } `}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
