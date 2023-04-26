import React from "react";

export default function SelectElement({
  id,
  name,
  placeholder,
  selectRef,
  children,
  onChangeHandler,
  disabledIndicator,
}) {
  const notAllowedCursor = disabledIndicator
    ? `hover:cursor-not-allowed border-red-600`
    : `border-blue-400`;
  return (
    <select
      id={id}
      name={name}
      placeholder={placeholder}
      ref={selectRef}
      className={`px-3 py-2 w-full rounded-lg focus:outline-none border-2  focus:ring-[1px] focus:ring-blue-500 ${notAllowedCursor}`}
      onChange={onChangeHandler}
      disabled={disabledIndicator}
    >
      {children}
    </select>
  );
}
