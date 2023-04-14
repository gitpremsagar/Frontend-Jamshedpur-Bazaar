import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H3 from "@/components/UI/H3";
import TableSuperCategoryList from "@/components/admin/dashboard/product-management/TableSuperCategoryList";
import TableSubCategoryList from "@/components/admin/dashboard/product-management/TableSubCategoryList";
import TableCategoryList from "@/components/admin/dashboard/product-management/TableCategoryList";
import useSWR from "swr";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";
import axios from "axios";

export default function AdminHomePage(props) {
  const [token, settoken] = useState();

  const [topCategories, setTopCategories] = useState(props.topCategories);
  const [categories, setCategories] = useState(props.categories);

  // accessing jwt
  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

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
              <H3>Top Category Details :</H3>
              <TableSuperCategoryList topCategories={topCategories} />
            </section>

            <section>
              <H3>Category Details :</H3>
              <TableCategoryList categories={categories} />
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

export async function getStaticProps() {
  const responseTopCategories = await fetch(BACKEND_API_FOR_TOP_CATEGORIES);
  const topCategories = await responseTopCategories.json();

  const responseCategories = await fetch(BACKEND_API_ENDPOINT_FOR_CATEGORIES);
  const categories = await responseCategories.json();
  return {
    props: {
      topCategories,
      categories,
    },
  };
}
