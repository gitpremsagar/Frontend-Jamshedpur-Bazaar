import Link from "next/link";
import React from "react";

export default function AsideLeft() {
  return (
    <div className="">
      <nav className="text-yellow-300">
        <ul>
          <li className="px-3 py-2 hover:bg-gray-800 rounded">
            <Link href={`/admin/dashboard`}>Report</Link>
          </li>
          <li className="px-3 py-2">
            Orders :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard/orders/all-orders`}>
                  All Orders
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard/orders/pending-orders`}>
                  Pending Orders
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard/orders/delivered-orders`}>
                  Delivered Orders
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard/orders/cancelled-orders`}>
                  Cancelled Orders
                </Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-2">
            Categories Management :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link
                  href={`/admin/dashboard/product-management/top-categories-management`}
                >
                  Top Categories
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link
                  href={`/admin/dashboard/product-management/categories-management`}
                >
                  Categories
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link
                  href={`/admin/dashboard/product-management/sub-categories-management`}
                >
                  Sub-Categories
                </Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-2">
            Product Management :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link
                  href={`/admin/dashboard/product-management/add-new-product`}
                >
                  Add New Product
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link
                  href={`/admin/dashboard/product-management/edit-product-detail`}
                >
                  Edit Product Detail
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link
                  href={`/admin/dashboard/product-management/quick-price-editor`}
                >
                  Quick Price Editor
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link
                  href={`/admin/dashboard/product-management/quick-offers-editor`}
                >
                  Quick Offers Editor
                </Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-2">
            Customers :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard/customers/active-customers`}>
                  Active Customers
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard/customers/deactivated-customers`}>
                  Deactivated Customers
                </Link>
              </li>
            </ul>
          </li>

          <li className="px-3 py-2">
            Settings :
            <ul className="text-white">
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard/settings/branding`}>
                  Branding
                </Link>
              </li>
              <li className="px-3 py-2 hover:bg-gray-800 rounded-lg">
                <Link href={`/admin/dashboard/settings/service`}>Service</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
