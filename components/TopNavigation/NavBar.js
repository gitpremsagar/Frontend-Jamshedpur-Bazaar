import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    // NavBar container
    <div className="flex justify-between bg-blue-500 items-center p-4 text-white font-bold">
      {/*Brandname*/}
      <div>
        <Link href={`/`}>Jamshedpur Bazaar</Link>
      </div>

      <div>
      
      </div>

      {/*Navigation menu*/}
      <div>
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
    </div>
  );
}
