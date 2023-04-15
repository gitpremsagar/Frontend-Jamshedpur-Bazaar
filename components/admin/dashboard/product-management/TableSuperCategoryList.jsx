import React from "react";
import PrimaryButton from "@/components/UI/PrimaryButton";
import TableRow from "./TableRow";

export default function TableSuperCategoryList({ topCategories }) {
  function deleteClickHandler(categoryType, categoryID, categoryName) {
    console.log(
      "Delete Clicked! cat type = ",
      categoryType,
      " cat ID = ",
      categoryID
    );
    const userAnswer = confirm(
      `Are you sure you want to delete "${categoryName}" Top-Category`
    );
    if (userAnswer) console.log("Deleting!");
  }
  let colorChanger = false; //this variable is used to give alternating colour to rows of table
  return (
    <div>
      <div className="flex flex-col border-2 my-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="">
              <table className="min-w-full text-left text-sm font-light ">
                <thead className="border-b bg-white font-medium ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Top Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Parent
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Editing Optionss
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topCategories.map((topCategory, key) => {
                    colorChanger = !colorChanger;
                    return (
                      <TableRow
                        key={key}
                        index={topCategory.top_category_id}
                        catName={topCategory.top_category_name}
                        colorChanger={colorChanger}
                        onDeleteClickHandler={deleteClickHandler}
                        catType="top-category"
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
