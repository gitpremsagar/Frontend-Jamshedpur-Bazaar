import React from "react";
import TableRow from "./TableRow";
import PrimaryButton from "@/components/UI/PrimaryButton";

export default function TableCategoryList({ categories }) {
  function deleteClickHandler(categoryType, categoryID, categoryName) {
    console.log(
      "Delete Clicked! cat type = ",
      categoryType,
      " cat ID = ",
      categoryID
    );
    const userAnswer = confirm(
      `Are you sure you want to delete "${categoryName}" Category`
    );
    if (userAnswer) console.log("Deleting!");
  }
  let colorChanger = false;
  return (
    <div>
      <div className="flex flex-col border-2 my-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Parent Top Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, key) => {
                    colorChanger = !colorChanger;
                    return (
                      <TableRow
                        catName={category.category_name}
                        key={key}
                        categoryID={category.category_id}
                        arrayIndex={key}
                        parentCatName={category.parent_top_category_name}
                        colorChanger={colorChanger}
                        onDeleteClickHandler={deleteClickHandler}
                        catType="category"
                      />
                    );
                  })}
                </tbody>
              </table>
              <PrimaryButton className={`float-right`}>
                Add More Items
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
