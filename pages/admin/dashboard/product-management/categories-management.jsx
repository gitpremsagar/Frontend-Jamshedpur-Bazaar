import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H3 from "@/components/UI/H3";

import TableCategoryList from "@/components/admin/dashboard/product-management/TableCategoryList";
import useSWR from "swr";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";
import axios from "axios";

export default function CategoriesManagementPage(props) {
  // accessing jwt
  const [token, settoken] = useState();
  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

  const [categories, setCategories] = useState(props.categories);
  const [topCategories, setTopCategories] = useState(props.topCategories);

  //fetcher for useSWR
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  // fetching categories from db
  const {
    data: dataCategories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useSWR(BACKEND_API_ENDPOINT_FOR_CATEGORIES, fetcher);

  // assigning categories response to respective state
  useEffect(() => {
    if (dataCategories) setCategories(dataCategories);
  }, [dataCategories]);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-8">
        <div className="col-span-2 p-5 min-h-screen bg-gray-700">
          <AsideLeft />
        </div>
        <div className="col-span-6">
          <main className="p-10">
            <section>
              <H3>Category Details :</H3>
              <TableCategoryList
                categories={categories}
                setCategories={setCategories}
                topCategories={topCategories}
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

  const responseCategories = await fetch(BACKEND_API_ENDPOINT_FOR_CATEGORIES);
  const categories = await responseCategories.json();
  return {
    props: {
      categories,
      topCategories,
    },
  };
}
