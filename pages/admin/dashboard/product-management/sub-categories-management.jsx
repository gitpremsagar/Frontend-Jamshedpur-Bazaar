import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H3 from "@/components/UI/H3";

import TableCategoryList from "@/components/admin/dashboard/product-management/TableCategoryList";
import useSWR from "swr";
import { BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES } from "@/service/envVars";
import axios from "axios";

export default function CategoriesManagementPage(props) {
  // accessing jwt
  const [token, settoken] = useState();
  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

  const [subCategories, setsubCategories] = useState(props.subCategories);

  //fetcher for useSWR
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  // fetching categories from db
  const {
    data: dataSubCategories,
    error: errorSubCategories,
    isLoading: isLoadingSubCategories,
  } = useSWR(BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES, fetcher);

  // assigning categories response to respective state
  useEffect(() => {
    if (dataSubCategories) setsubCategories(dataSubCategories);
  }, [dataSubCategories]);

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
              <TableCategoryList categories={subCategories} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const responsesubCategories = await fetch(
      BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES
    );
    const subCategories = await responsesubCategories.json();
    return {
      props: {
        subCategories,
      },
    };
  } catch (error) {
    console.log(
      "🚀 ~ file: sub-categories-management.jsx:67 ~ getStaticProps ~ error:",
      error
    );
    return {
      props: {
        subCategories: [],
      },
    };
  }
}
