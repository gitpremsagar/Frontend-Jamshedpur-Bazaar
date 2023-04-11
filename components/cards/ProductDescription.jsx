import React from "react";

export default function ProductDescription({description}) {
  return (
    <p className="mt-1 text-[8px] sm:text-sm text-gray-500">
      {description}
    </p>
  );
}
