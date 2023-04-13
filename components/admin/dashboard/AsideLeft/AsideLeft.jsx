import Link from "next/link";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function AsideLeft() {
  return (
    <div>
      <nav className="text-yellow-300">
        <ul>
          <li className="px-3 py-2">
            Orders :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>All Orders</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Cancelled Orders</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Delivered Orders</Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-2">
            Customers :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Active Customers</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Blacklisted Customers</Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-2">
            Product Management :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Category Management</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Add New Product</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Edit Product Detail</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Quick Price Editor</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Quick Offers Editor</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Delivered Orders</Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-2">
            Settings :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Branding</Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard`}>Service</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
