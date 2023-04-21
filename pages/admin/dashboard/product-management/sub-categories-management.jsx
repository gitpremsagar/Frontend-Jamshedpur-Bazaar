import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H3 from "@/components/UI/H3";
import useSWR from "swr";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
} from "@/service/envVars";
import axios from "axios";
import TableSubCategoryList from "@/components/admin/dashboard/product-management/TableSubCategoryList";

export default function CategoriesManagementPage(props) {
  // accessing jwt
  const [token, settoken] = useState();
  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

  const [subCategories, setsubCategories] = useState(props.subCategories);
  const [categories, setCategories] = useState(props.categories);

  //fetcher for useSWR
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  // fetching sub-categories from db
  const {
    data: dataSubCategories,
    error: errorSubCategories,
    isLoading: isLoadingSubCategories,
  } = useSWR(BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES, fetcher);

  // assigning sub-categories response to respective state
  useEffect(() => {
    if (dataSubCategories) setsubCategories(dataSubCategories);
  }, [dataSubCategories]);

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
              <H3>Sub-Category Details :</H3>
              <TableSubCategoryList
                subCategories={subCategories}
                setsubCategories={setsubCategories}
                categories={categories}
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

// server-side data fetching
export async function getStaticProps() {
  try {
    const responsesubCategories = await fetch(
      BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES
    );
    const subCategories = await responsesubCategories.json();

    const responseCategories = await fetch(BACKEND_API_ENDPOINT_FOR_CATEGORIES);
    const categories = await responseCategories.json();

    return {
      props: {
        subCategories,
        categories,
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
        categories: [],
      },
    };
  }
}
