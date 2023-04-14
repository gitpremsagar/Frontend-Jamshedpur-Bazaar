import React from "react";
import PrimaryButton from "@/components/UI/PrimaryButton";
import TableRow from "./TableRow";

export default function TableSuperCategoryList({
  topCategories,
  isLoadingTopCategories,
}) {
  return (
    <div>
      <div className="flex flex-col border-2 my-10 rounded-lg">
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
                  {!isLoadingTopCategories &&
                    topCategories.map((topCategory, key) => {
                      return (
                        <TableRow
                          key={key}
                          index={key}
                          topCategoryName={topCategory.top_category_name}
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
