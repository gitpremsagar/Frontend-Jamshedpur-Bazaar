import React from "react";

export default function PrimaryButton({ onClickHandler, children, className }) {
  return (
    <button
      className={`rounded-lg px-3 py-2 bg-blue-400 text-white m-5 hover:bg-blue-500 ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
