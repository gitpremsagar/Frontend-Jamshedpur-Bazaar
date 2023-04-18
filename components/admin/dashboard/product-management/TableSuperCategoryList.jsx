import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/components/UI/PrimaryButton";
import TableRow from "./TableRow";
import axios from "axios";
import { BACKEND_API_FOR_TOP_CATEGORIES } from "@/service/envVars";
import InputElement from "@/components/UI/InputElement";

export default function TableSuperCategoryList({
  topCategories,
  setTopCategories,
}) {
  const topCategoryInputRef = useRef();

  async function handleAddNewTopCategory() {
    try {
      const response = await axios.post(BACKEND_API_FOR_TOP_CATEGORIES, {
        newTopCategory: topCategoryInputRef.current.value,
      });
      // update the local state hook if new top category got inserted into database
      if (response.data.created) {
        setTopCategories([...topCategories, response.data.insertedRow]);
      }
    } catch (error) {
      alert("Some kind of error occured while creating new top-category!");
      console.log(error);
    }
  }

  // calculate length of topCategories array
  const [topCategoriesLength, setTopCategoriesLength] = useState(0);
  useEffect(() => {
    setTopCategoriesLength(topCategories.length);
  }, [topCategories]);

  async function deleteClickHandler(
    categoryType,
    categoryID,
    categoryName,
    arrayIndex
  ) {
    // ask for confirmation before deleting
    const userAnswer = confirm(
      `Are you sure you want to delete "${categoryName}" Top-Category`
    );
    if (userAnswer) {
      //remove top-cateogry from database
      try {
        const response = await axios.delete(
          `${BACKEND_API_FOR_TOP_CATEGORIES}/${categoryID}`
        );
        // console.log(response.data);
      } catch (error) {
        alert("Some error occured!");
        console.log(error);
      }

      // remove top category from local state hook
      setTopCategories((prev) => {
        const topCategoriesCopy = [...prev];
        const filteredCategory = topCategoriesCopy.filter((_, index) => {
          return index !== arrayIndex;
        });
        return filteredCategory;
      });
    }
  }

  function editClickHandler(categoryType, categoryID, categoryName) {
    console.log(
      "Editing Clicked! cat type = ",
      categoryType,
      " cat ID = ",
      categoryID
    );
    //write logic to edit top-category
  }

  let colorChanger = false; //this variable is used to give alternating colour to rows of table
  return (
    <div>
      <div className="flex flex-col border-2 my-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="">
              <table className="min-w-full text-left text-base font-light ">
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
                        categoryID={topCategory.top_category_id}
                        arrayIndex={key}
                        catName={topCategory.top_category_name}
                        colorChanger={colorChanger}
                        onDeleteClickHandler={deleteClickHandler}
                        onEditClickHandler={editClickHandler}
                        catType="top-category"
                      />
                    );
                  })}
                  {/* Add new top category form */}
                  <tr className="bg-blue-300">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {topCategoriesLength + 1}
                    </td>

                    <td colSpan={2}>
                      <label htmlFor="topCategory">
                        New Top Category Name :{" "}
                      </label>
                      <InputElement
                        id="topCategory"
                        name="topCategory"
                        placeholder="Top-Category Name"
                        inputRef={topCategoryInputRef}
                      />
                    </td>
                    <td>
                      <PrimaryButton
                        className={`float-right`}
                        onClickHandler={handleAddNewTopCategory}
                      >
                        Add
                      </PrimaryButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
