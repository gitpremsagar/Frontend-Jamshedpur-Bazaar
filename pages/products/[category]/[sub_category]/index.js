import NavMenuCopy, {
  getStaticPropsForNavMenu,
} from "@/components/TopNavigation/NavMenuCopy";
import ProductCard from "@/components/cards/ProductCard";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

export default function SubCategoryPage(props) {
  const router = useRouter();

  return (
    <Fragment>
      <NavMenuCopy {...props} />
      <div className="min-h-screen">
        <section className="">
          <h1 className="font-bold text-center text-4xl my-10 text-gray-800">
            {router.query.sub_category}
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

export async function getStaticProps() {
  return await getStaticPropsForNavMenu();
}

export async function getStaticPaths() {
  // const topCategoriesResponse = await fetch(BACKEND_API_FOR_TOP_CATEGORIES);
  // const topCategories = await topCategoriesResponse.json();

  const categoryResponse = await fetch(BACKEND_API_ENDPOINT_FOR_CATEGORIES);
  const categories = await categoryResponse.json();

  const params = categories.map((category) => {
    return {
      params: {
        category: category.parent_top_category_name,
        sub_category: category.category_name,
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
