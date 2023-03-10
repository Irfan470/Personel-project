import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  });
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
                pathMatchRoute("/sign-in") ||
                (pathMatchRoute("/profile") && "text-black border-b-red-500")
              } `}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
