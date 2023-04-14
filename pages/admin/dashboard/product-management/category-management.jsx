import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H3 from "@/components/UI/H3";
import TableSuperCategoryList from "@/components/admin/dashboard/product-management/TableSuperCategoryList";
import TableSubCategoryList from "@/components/admin/dashboard/product-management/TableSubCategoryList";
import TableCategoryList from "@/components/admin/dashboard/product-management/TableCategoryList";

export default function AdminHomePage() {
  const [token, settoken] = useState();

  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-8">
        <div className="col-span-2 p-5 min-h-screen bg-gray-700">
          <AsideLeft />
        </div>
        <div className="col-span-6">
          <main className="p-10">
            <section>
              <H3>Top Category Details :</H3>
              <TableSuperCategoryList />
            </section>

            <section>
              <H3>Category Details :</H3>
              <TableCategoryList />
            </section>

            <section>
              <H3>Sub-Category Details :</H3>
              <TableSubCategoryList />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
