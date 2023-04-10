import Link from "next/link";
import React from "react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-2 px-10 py-10 my-10 rounded-xl shadow-2xl lg:min-w-[500px]">
        <form>
          <h1 className="mb-10 font-blold text-4xl lg:text-6xl">Sign Up</h1>
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
            />
          </div>

          <div>
            <label
              htmlFor="confirm_password"
              className="block text-lg lg:text-2xl font-semibold"
            >
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              placeholder="re-type password"
              className="border-2 rounded-lg px-3 py-2 my-4 focus:outline-none focus:ring-1 ring-blue-400 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="contact_number"
              className="block text-lg lg:text-2xl font-semibold"
            >
              Contact Number
            </label>
            <input
              id="contact_number"
              name="contact_number"
              type="number"
              placeholder="contact number"
              className="border-2 rounded-lg px-3 py-2 my-4 focus:outline-none focus:ring-1 ring-blue-400 w-full"
            />
          </div>

          <div className="flex justify-between items-center mt-5">
            <span className="text-sm">
              Already Member?{" "}
              <Link className="text-blue-600 " href={`/login`}>
                Login
              </Link>
            </span>
            <button
              type="submit"
              className="ml-5 bg-blue-500 rounded-lg text-white px-3 py-2 hover:bg-blue-600"
            >
              Sign UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
