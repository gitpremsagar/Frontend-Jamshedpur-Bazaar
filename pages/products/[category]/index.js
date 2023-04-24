import ProductCard from "@/components/cards/ProductCard";
import { useRouter } from "next/router";
import React from "react";

import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";
import { Fragment } from "react";
import NavMenuCopy, {
  getStaticPropsForNavMenu,
} from "@/components/TopNavigation/NavMenuCopy";

export default function SpecificCategoryProductPage(props) {
  const router = useRouter();
  return (
    <Fragment>
      <NavMenuCopy {...props} />
      <div className="min-h-screen">
        <section className="">
          <h1 className="font-bold text-center text-4xl my-10 text-gray-800">
            {router.query.category}
          </h1>
          <div className="home_page_section">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    </Fragment>
  );
}

// server-side data fetching
export async function getStaticProps(context) {
  return await getStaticPropsForNavMenu();
}

export async function getStaticPaths() {
  const response = await fetch(BACKEND_API_FOR_TOP_CATEGORIES);
  const topCategories = await response.json();
  // console.log("topCategories on getStaticPaths = ", topCategories);

  const params = topCategories.map((topCategory) => {
    return {
      params: {
        category: topCategory.top_category_name,
      },
    };
  });

  // console.log("params = ", params);
  return {
    paths: params,
    // paths: [],
    fallback: "blocking",
  };
}
