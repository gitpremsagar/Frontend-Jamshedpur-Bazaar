import React from "react";

export default function SelectElement({
  id,
  name,
  placeholder,
  selectRef,
  children,
}) {
  return (
    <select
      id={id}
      name={name}
      placeholder={placeholder}
      ref={selectRef}
      className="px-3 py-2 rounded-lg focus:outline-none border-2 border-blue-400 focus:ring-[1px] focus:ring-blue-500"
    >
      {children}
    </select>
  );
}
