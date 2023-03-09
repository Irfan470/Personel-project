import React, { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
export default function SignIp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();
  function onChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      // toast.success("signup successful");
      navigate("/");
    } catch (error) {
      toast.error("something wrong");
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Un </h1>
      <div className="flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 mx-auto ">
          <img
            src="https://images.unsplash.com/photo-1577373644244-ff9935a13a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80"
            alt="keys"
            className="w-[75%] ml-40 rounded-2xl"
          />
        </div>
        <div
          className="w-full md:w-[67%] lg:w-[40%] lg:ml-20
          "
        >
          <form onSubmit={onSubmit}>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white rounded transition  ease-in-out mb-6"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
            ></input>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white rounded transition  ease-in-out mb-6"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            ></input>
            <div className="relative ">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white rounded transition  ease-in-out mb-5"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="password"
              />
              {showPassword ? (
                <BsEyeSlash
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <BsEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign In
                </Link>
              </p>
              <p className="mb-6">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="justify-center w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              SIGN UP
            </button>
            <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 my-4 after:border-t flex after:flex-1 items-center after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
