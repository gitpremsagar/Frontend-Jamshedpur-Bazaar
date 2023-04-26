import React from "react";

export default function TextareaElement({
  id,
  name,
  placeholder,
  textareaRef,
  className,
}) {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      ref={textareaRef}
      className={`px-3 py-2 rounded-lg focus:outline-none border-2 border-blue-400 focus:ring-[1px] focus:ring-blue-500 ${className}`}
      rows={8}
    />
  );
}
