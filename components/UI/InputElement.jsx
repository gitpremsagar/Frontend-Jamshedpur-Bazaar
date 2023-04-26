import React from "react";

export default function InputElement({
  id,
  name,
  placeholder,
  inputRef,
  className,
  type,
}) {
  return (
    <input
      type={type || `text`}
      id={id}
      name={name}
      placeholder={placeholder}
      ref={inputRef}
      className={`px-3 py-2 rounded-lg focus:outline-none border-2 border-blue-400 focus:ring-[1px] focus:ring-blue-500 ${className}`}
    />
  );
}
