import Link from "next/link";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function AsideLeft() {
  return (
    <div>
      <nav className="text-white">
        <ul>
          <li className="px-3 py-2">
            Orders
            <ul>
              <li className="px-3 py-2">
                <Link href={`/admin/dashboard`}>All Orders</Link>
              </li>
              <li className="px-3 py-2">
                <Link href={`/admin/dashboard`}>Cancelled Orders</Link>
              </li>
              <li className="px-3 py-2">
                <Link href={`/admin/dashboard`}>Delivered Orders</Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-2">
            Customers
            <ul>
              <li className="px-3 py-2">
                <Link href={`/admin/dashboard`}>Active Customers</Link>
              </li>
              <li className="px-3 py-2">
                <Link href={`/admin/dashboard`}>Blacklisted Customers</Link>
              </li>
              
            </ul>
          </li>

          <li className="px-3 py-2">
            Product Management
            <ul>
              <li className="px-3 py-2">
                <Link href={`/admin/dashboard`}>All Orders</Link>
              </li>
              <li className="px-3 py-2">
                <Link href={`/admin/dashboard`}>Cancelled Orders</Link>
              </li>
              <li className="px-3 py-2">
                <Link href={`/admin/dashboard`}>Delivered Orders</Link>
              </li>
            </ul>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}
