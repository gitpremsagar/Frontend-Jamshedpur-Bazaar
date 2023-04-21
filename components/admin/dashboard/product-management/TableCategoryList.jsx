import React, { useEffect, useRef, useState } from "react";
import TableRow from "./TableRow";
import PrimaryButton from "@/components/UI/PrimaryButton";
import axios from "axios";
import { BACKEND_API_ENDPOINT_FOR_CATEGORIES } from "@/service/envVars";
import InputElement from "@/components/UI/InputElement";
import SelectElement from "@/components/UI/SelectElement";

export default function TableCategoryList({
  categories,
  setCategories,
  topCategories,
}) {
  const categoryInputRef = useRef();
  const parentTopCategoriesSelectRef = useRef();

  // calculate categories array length
  const [categoriesLength, setCategoriesLength] = useState(0);
  useEffect(() => {
    if (categories) setCategoriesLength(categories.length);
  }, [categories]);

  async function deleteClickHandler(
    categoryType,
    categoryID,
    categoryName,
    arrayIndex
  ) {
    const userAnswer = confirm(
      `Are you sure you want to delete "${categoryName}" Category`
    );
    if (userAnswer) {
      // make request to api to delete the category
      try {
        const response = await axios.delete(
          BACKEND_API_ENDPOINT_FOR_CATEGORIES + `/${categoryID}`
        );
        // remove the category from the local state hook if successfully deleted the category from the server
        if (response.data.deleted) {
          setCategories((prev) => {
            const updatedCategoriesList = prev.filter((_, index) => {
              return index !== arrayIndex;
            });
            return updatedCategoriesList;
          });
        }
      } catch (error) {
        console.log(error);
        alert("Some error occured!");
      }
    }
  }

  async function handleAddNewCategory() {
    // FIXME:specify parent top category in the category creation request
    try {
      const response = await axios.post(BACKEND_API_ENDPOINT_FOR_CATEGORIES, {
        newCategory: categoryInputRef.current.value,
        parentCategoryID: parentTopCategoriesSelectRef.current.value,
      });
      // update the local state hook if new top category got inserted into database
      if (response.data.created) {
        setCategories([...categories, response.data.insertedRow]);
      }
    } catch (error) {
      alert("Some kind of error occured while creating new category!");
      console.log(error);
    }
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

                  {/* Add new category form */}
                  <tr className="bg-blue-300">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {categoriesLength + 1}
                      {/*for showing index number*/}
                    </td>

                    <td>
                      <label htmlFor="category">New Category Name : </label>
                      <InputElement
                        id="category"
                        name="category"
                        placeholder="Category Name"
                        inputRef={categoryInputRef}
                      />
                    </td>
                    <td>
                      <label htmlFor="category">
                        Parent Top Category Name :{" "}
                      </label>
                      <SelectElement
                        id="parenTopCategoryName"
                        name="parenTopCategoryName"
                        placeholder="Parent top category name"
                        selectRef={parentTopCategoriesSelectRef}
                      >
                        {topCategories.map((topCategory, key) => {
                          return (
                            <option
                              key={key}
                              value={topCategory.top_category_id}
                            >
                              {topCategory.top_category_name}
                            </option>
                          );
                        })}
                      </SelectElement>
                    </td>
                    <td>
                      <PrimaryButton
                        className={`float-right`}
                        onClickHandler={handleAddNewCategory}
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
