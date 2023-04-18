import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TableRowForEditing({
  catName,
  parentCatName,
  index,
  colorChanger,
  onDeleteClickHandler,
  catType,
}) {
  function triggerDelete() {
    onDeleteClickHandler(catType, index, catName);
  }
  return (
    <tr
      className={
        colorChanger
          ? `border-b bg-neutral-100 hover:bg-gray-700 hover:text-white`
          : `border-b bg-gray-200 hover:bg-gray-700 hover:text-white`
      }
    >
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
      <td className="whitespace-nowrap px-6 py-4">{catName}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {parentCatName ? parentCatName : "---"}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <EditIcon className=" hover:text-blue-400" />
        <button onClick={triggerDelete}>
          <DeleteIcon className="ml-5 hover:text-red-500" />
        </button>
      </td>
    </tr>
  );
}
