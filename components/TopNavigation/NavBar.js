import Link from "next/link";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import NavMenu from "./NavMenu";

export default function NavBar() {
  return (
    // NavBar container
    <div className="sm:flex justify-between bg-blue-500 items-center p-4 text-white font-bold hidden">
      {/*Brandname*/}
      <div className="flex items-center">
        <div className="mr-10 hover:text-black">
          <Link href={`/`}>Jamshedpur Bazaar</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className=" lg:max-w-[700px] lg:min-w-[500px] w-full">
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
        <button className="mr-4">
          <FavoriteIcon />
        </button>
        <button className="mr-4">
          <ShoppingCartIcon />
        </button>
        <Link href={`/login`}>
          <button className="mr-4">Login</button>
        </Link>
        <Link href={`/signup`}>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
