import React from "react";

export default function LableElement({ children, lableFor }) {
  return (
    <label htmlFor={lableFor} className="block">
      {children}
    </label>
  );
}
