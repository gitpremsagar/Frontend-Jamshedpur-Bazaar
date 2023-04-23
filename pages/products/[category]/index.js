import ProductCard from "@/components/cards/ProductCard";
import { useRouter } from "next/router";
import React from "react";

import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";
import { Fragment } from "react";
import NavMenuCopy from "@/components/TopNavigation/NavMenuCopy";

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
  const params = context.params;
  const requestedCategory = params.category;
  // console.log("requested category = ", requestedCategory);
  // console.log("preparing static props");
  try {
    const responseTopCategories = await fetch(BACKEND_API_FOR_TOP_CATEGORIES);
    const topCategories = await responseTopCategories.json();

    const responseCategories = await fetch(BACKEND_API_ENDPOINT_FOR_CATEGORIES);
    const categories = await responseCategories.json();

    const responsesubCategories = await fetch(
      BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES
    );
    const subCategories = await responsesubCategories.json();

    return {
      props: {
        topCategories,
        categories,
        subCategories,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        topCategories: [],
        categories: [],
        subCategories: [],
      },
    };
  }
}

export async function getStaticPaths() {
  const response = await fetch(BACKEND_API_ENDPOINT_FOR_CATEGORIES);
  const categories = await response.json();
  // console.log("categories on getStaticPaths = ", categories);

  const params = categories.map((category) => {
    return {
      params: {
        category: category.category_name,
      },
    };
  });

  // console.log("params = ", params);
  return {
    paths: params,
    fallback: "blocking",
  };
}
