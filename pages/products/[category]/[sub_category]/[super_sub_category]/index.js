import NavMenuCopy, {
  getStaticPropsForNavMenu,
} from "@/components/TopNavigation/NavMenuCopy";
import ProductCard from "@/components/cards/ProductCard";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
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
            {router.query.super_sub_category}
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
  const responseCategories = await fetch(BACKEND_API_ENDPOINT_FOR_CATEGORIES);
  const categories = await responseCategories.json();

  const responseSubCategories = await fetch(
    BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES
  );
  const subCatgories = await responseSubCategories.json();

  const params = subCatgories.map((subCategory) => {
    const filteredCategory = categories.find((category) => {
      return category.category_name === subCategory.parent_category_name;
    });
    console.log("filteredCategory: ", filteredCategory);
    return {
      params: {
        category: filteredCategory.parent_top_category_name,
        sub_category: subCategory.parent_category_name,
        super_sub_category: subCategory.sub_category_name,
      },
    };
  });
  console.log(params);
  return {
    paths: params,
    // paths: [],
    fallback: "blocking",
  };
}
