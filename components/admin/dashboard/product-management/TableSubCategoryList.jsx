import React, { useEffect, useRef, useState } from "react";
import TableRow from "./TableRow";
import InputElement from "@/components/UI/InputElement";
import SelectElement from "@/components/UI/SelectElement";
import PrimaryButton from "@/components/UI/PrimaryButton";
import axios from "axios";
import { BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES } from "@/service/envVars";

export default function TableSubCategoryList({
  categories,
  subCategories,
  setsubCategories,
}) {
  // calculate sub-categories array length
  const [subCategoriesArrayLength, setSubCategoriesArrayLength] = useState(0);
  useEffect(() => {
    if (subCategories) setSubCategoriesArrayLength(subCategories.length);
  }, [subCategories]);

  const subCategoryInputRef = useRef();
  const parentCategoriesSelectRef = useRef();

  async function handleAddNewSubCategory() {
    try {
      const response = await axios.post(
        BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
        {
          newSubCategory: subCategoryInputRef.current.value,
          parentCategoryID: parentCategoriesSelectRef.current.value,
        }
      );
      console.log(response);
      if (response.data.created) {
        setsubCategories((prev) => {
          return [...prev, response.data.insertedRow];
        });
      }
    } catch (error) {
      alert("Some error occured while adding new sub category");
      console.log(error);
    }
  }

  async function handleDeleteSubCategory(
    categoryType,
    subCategoryID,
    subCategoryName,
    arrayIndex
  ) {
    const userAnswer = confirm(
      `Do you really want to delete "${subCategoryName}" Sub-Category?`
    );
    // procced to delete if the sub category in the user confirms
    if (userAnswer) {
      try {
        const response = await axios.delete(
          BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES + `/${subCategoryID}`
        );
        // delete the subcategory from local state hook if successfully deleted from database
        if (response.data.deleted) {
          setsubCategories((prev) => {
            return prev.filter((_, index) => index !== arrayIndex);
          });
        }
      } catch (error) {
        alert("Some kind of error occered while deleting the sub-category");
        console.log(error);
      }
    }
  }

  async function handleEditSubCategory() {
    console.log("Edit sub category clicked!");
  }

  let colorChanger = false; //this variable is responsible for changing colour of every alternating row of the table
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
                      Sub Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Parent Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subCategories.map((subCategory, key) => {
                    colorChanger = !colorChanger;
                    return (
                      <TableRow
                        catName={subCategory.sub_category_name}
                        key={key}
                        categoryID={subCategory.sub_category_id}
                        arrayIndex={key}
                        parentCatName={subCategory.parent_category_name}
                        colorChanger={colorChanger}
                        onDeleteClickHandler={handleDeleteSubCategory}
                        onEditClickHandler={handleEditSubCategory}
                        catType="sub-category"
                      />
                    );
                  })}
                  {/* Add new category form */}
                  <tr className="bg-blue-300">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {subCategoriesArrayLength + 1}
                      {/*for showing index number*/}
                    </td>

                    <td>
                      <label htmlFor="category">New Category Name : </label>
                      <InputElement
                        id="subCategory"
                        name="subCategory"
                        placeholder="Sub-Category Name"
                        inputRef={subCategoryInputRef}
                      />
                    </td>
                    <td>
                      <label htmlFor="category">Parent Category Name : </label>
                      <SelectElement
                        id="parenTopCategoryName"
                        name="parenTopCategoryName"
                        selectRef={parentCategoriesSelectRef}
                      >
                        {categories.map((category, key) => {
                          return (
                            <option key={key} value={category.category_id}>
                              {category.category_name}
                            </option>
                          );
                        })}
                      </SelectElement>
                    </td>
                    <td>
                      <PrimaryButton
                        className={`float-right`}
                        onClickHandler={handleAddNewSubCategory}
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
