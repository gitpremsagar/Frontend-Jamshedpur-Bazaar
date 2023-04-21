import React, { useEffect, useRef, useState } from "react";
import TableRow from "./TableRow";
import InputElement from "@/components/UI/InputElement";
import SelectElement from "@/components/UI/SelectElement";
import PrimaryButton from "@/components/UI/PrimaryButton";

export default function TableSubCategoryList({ categories, subCategories }) {
  // calculate sub-categories array length
  const [subCategoriesArrayLength, setSubCategoriesArrayLength] = useState(0);
  useEffect(() => {
    if (subCategories) setSubCategoriesArrayLength(subCategories.length);
  }, [subCategories]);

  const subCategoryInputRef = useRef();
  const parentCategoriesSelectRef = useRef();

  async function handleAddNewSubCategory() {
    console.log("Adding new sub category");
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
                        onDeleteClickHandler={() => {
                          console.log("delete clicked");
                        }}
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
