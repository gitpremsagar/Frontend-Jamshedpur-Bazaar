import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TableRow({
  catName,
  parentCatName,
  index,
  colorChanger,
}) {
  return (
    <tr
      className={
        colorChanger ? `border-b bg-neutral-100` : `border-b bg-gray-200`
      }
    >
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
      <td className="whitespace-nowrap px-6 py-4">{catName}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {parentCatName ? parentCatName : "---"}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <EditIcon className=" hover:text-blue-400" />
        <DeleteIcon className="ml-5 hover:text-blue-400" />
      </td>
    </tr>
  );
}
