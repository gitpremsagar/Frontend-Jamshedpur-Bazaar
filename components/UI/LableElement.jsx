import React from "react";

export default function LableElement({ children, lableFor }) {
  return (
    <label
      htmlFor={lableFor}
      className="block font-semibold mb-2 text-gray-800"
    >
      {children}
    </label>
  );
}
