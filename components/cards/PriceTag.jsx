import React from "react";
import RupeeSymbol from "../UI/RupeeSymbol";

export default function PriceTag({price}) {
  return (
    <span className="text-xs sm:text-lg font-medium text-gray-900" >
      <RupeeSymbol />
      {price}
    </span>
  );
}
