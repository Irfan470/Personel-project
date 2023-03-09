import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Irfan",
    email: "amounium7@gmail.com",
  });

  const { name, email } = formData;
  function logout() {
    auth.signOut();
    navigate("/");
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full mb-6
              px-4 py-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            ></input>
            <input
              type="text"
              id="email"
              value={email}
              disabled
              className="w-full mb-6 px-4 py-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            ></input>
            <div className=" flex justify-between whitespace-nowrap text-sm sm: text-lg mb-6">
              <p className="flex items-center">
                Change name?
                <span className="text-red-600 hover:text-red-700 ease-in-out duration-200 ml-1 cursor-pointer ">
                  Edit
                </span>
              </p>
              <p
                onClick={logout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
