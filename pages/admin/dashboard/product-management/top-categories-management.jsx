import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H3 from "@/components/UI/H3";
import TableSuperCategoryList from "@/components/admin/dashboard/product-management/TableSuperCategoryList";
import useSWR from "swr";
import { BACKEND_API_FOR_TOP_CATEGORIES } from "@/service/envVars";
import axios from "axios";

export default function TopCategoriesManagementPage(props) {
  const [token, settoken] = useState();
  // accessing jwt
  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

  const [topCategories, setTopCategories] = useState(props.topCategories);

  //fetcher for useSWR
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  // fetching top-categories from db
  const {
    data: dataTopCategories,
    error: errorTopCategory,
    isLoading: isLoadingTopCategories,
  } = useSWR(BACKEND_API_FOR_TOP_CATEGORIES, fetcher);

  // assigning top-categories response to the coresponding state
  useEffect(() => {
    if (dataTopCategories) setTopCategories(dataTopCategories);
  }, [dataTopCategories]);

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
              <TableSuperCategoryList
                topCategories={topCategories}
                setTopCategories={setTopCategories}
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const responseTopCategories = await fetch(BACKEND_API_FOR_TOP_CATEGORIES);
  const topCategories = await responseTopCategories.json();

  return {
    props: {
      topCategories,
    },
  };
}
