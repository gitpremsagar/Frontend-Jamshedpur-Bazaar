import { BACKEND_API_FOR_ADMIN } from "@/service/envVars";
import axios from "axios";
import React, { useRef } from "react";
import Cookies from "js-cookie";

export default function AdminLoginPage() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const setJWTCookie = (jwt) => {
    Cookies.set("token", jwt, { path: "/", session: true });
  };

  async function handleAdminLoginFormSubmission(e) {
    e.preventDefault();
    try {
      const response = await axios.post(BACKEND_API_FOR_ADMIN, {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });

      setJWTCookie(response.headers["x-auth-token"]);
      //console.log(Cookies.get("token"));
      window.location.replace("/admin/dashboard");
    } catch (error) {
      alert("Some error occured while logging in!");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-2 px-10 py-10 rounded-xl shadow-2xl lg:min-w-[500px]">
        <form onSubmit={handleAdminLoginFormSubmission}>
          <h1 className="mb-10 font-blold text-4xl lg:text-6xl">Admin Login</h1>
          <div>
            <label
              htmlFor="email"
              className="block text-lg lg:text-2xl font-semibold"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              className="border-2 rounded-lg px-3 py-2 my-4 focus:outline-none focus:ring-1 ring-blue-400 w-full"
              type="email"
              placeholder="e-mail"
              ref={emailInputRef}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg lg:text-2xl font-semibold"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              className="border-2 rounded-lg px-3 py-2 my-4 focus:outline-none focus:ring-1 ring-blue-400 w-full"
              ref={passwordInputRef}
            />
          </div>

          <div>
            <button
              className=" bg-blue-500 hover:bg-blue-600 rounded-lg px-3 py-2 text-white font-semibold"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
