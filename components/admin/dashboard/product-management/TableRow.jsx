import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TableRow() {
  return (
    <tr className="border-b bg-neutral-100 ">
      <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
      <td className="whitespace-nowrap px-6 py-4">Grocery</td>
      <td className="whitespace-nowrap px-6 py-4">-</td>
      <td className="whitespace-nowrap px-6 py-4">
        <EditIcon className=" hover:text-blue-400" />
        <DeleteIcon className="ml-5 hover:text-blue-400" />
      </td>
    </tr>
  );
}
