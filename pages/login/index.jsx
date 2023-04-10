import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-2 px-10 py-10 rounded-xl shadow-2xl lg:min-w-[500px]">
        <form>
          <h1 className="mb-10 font-blold text-4xl lg:text-6xl">Login</h1>
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
        </form>
      </div>
    </div>
  );
}
