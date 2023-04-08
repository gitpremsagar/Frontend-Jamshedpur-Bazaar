import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    // NavBar container
    <div className="flex justify-between bg-blue-500 items-center p-4 text-white font-bold">
      {/*Brandname*/}
      <div className="flex items-center">
        <div className="mr-10 hover:text-black">
          <Link href={`/`}>Jamshedpur Bazaar</Link>
        </div>

        <nav>
          <ul className="flex">
            <li className="nav_li">
              <Link href={`/`}>Grocery</Link>
            </li>
            <li className="nav_li">
              <Link href={`/`}>Vegetables</Link>
            </li>
            <li className="nav_li">
              <Link href={`/`}>Non-Veg</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="min-w-[400px] ">
        <form className="flex">
          <input
            name="searchTerm"
            type="search"
            placeholder="search for product"
            className="font-normal px-2 py-1 rounded focus:outline-none border-2 text-black w-full"
          />
          <button className="bg-blue-600 rounded px-2 hover:bg-blue-700">
            Search
          </button>
        </form>
      </div>

      {/*Navigation menu*/}
      <div>
      <button className="mr-4">Login</button>
      <button>Sign Up</button>
      </div>
    </div>
  );
}
