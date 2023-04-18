import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TableRow({
  catName,
  parentCatName,
  categoryID,
  arrayIndex,
  colorChanger,
  onDeleteClickHandler,
  onEditClickHandler,
  catType,
}) {
  const serialNumber = parseInt(arrayIndex) + 1;
  function triggerDelete() {
    onDeleteClickHandler(catType, categoryID, catName, arrayIndex);
  }

  function triggerEdit() {
    onEditClickHandler(catType, categoryID, catName, arrayIndex);
  }
  return (
    <tr
      className={
        colorChanger
          ? `border-b bg-neutral-100 hover:bg-gray-700 hover:text-white`
          : `border-b bg-gray-200 hover:bg-gray-700 hover:text-white`
      }
    >
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        {serialNumber}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{catName}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {parentCatName ? parentCatName : "---"}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span onClick={triggerEdit}>
          <EditIcon className=" hover:text-blue-400" />
        </span>

        <button onClick={triggerDelete}>
          <DeleteIcon className="ml-5 hover:text-red-500" />
        </button>
      </td>
    </tr>
  );
}
