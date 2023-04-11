import Link from "next/link";
import React from "react";

export default function ProductHeading({name}) {
  return (
    <h3 className="text-[10px] sm:text-lg font-medium text-blue-500 hover:underline ">
      <Link href={`/products/product-detail`}>{name}</Link>
    </h3>
  );
}
