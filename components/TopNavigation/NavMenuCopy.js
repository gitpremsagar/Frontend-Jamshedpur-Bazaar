import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";

export default function NavMenuCopy(props) {
  const [topCategories, setTopCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState(props.subCategories);

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

  // fetching sub-categories
  const {
    data: dataSubCategories,
    error: errorSubCategories,
    isLoading: isLoadingSubCategories,
  } = useSWR(BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES, fetcher);
  // assigning sub-category response to coresponding local state hook
  useEffect(() => {
    if (dataSubCategories) setSubCategories(dataSubCategories);
  }, [dataSubCategories]);

  return (
    <div>
      <nav className="text-white bg-blue-600">
        <ul className="main_menu ">
          {topCategories.map((topCategory, key) => {
            return (
              <li
                key={key}
                className="mr-2 inline-block px-3 py-2 hover:bg-blue-800 cursor-pointer"
              >
                <Link
                  href={`/products/${topCategory.top_category_name}`}
                  className="block"
                >
                  {topCategory.top_category_name}
                  <ul className="sub_menu">
                    {categories.map((category) => {
                      if (
                        category.parent_top_category_name ==
                        topCategory.top_category_name
                      ) {
                        return (
                          <li className="px-3 py-2 bg-gray-600">
                            {category.category_name}

                            <ul className="bg-blue-600 super_submenu">
                              {subCategories.map((subCategory) => {
                                if (
                                  subCategory.parent_category_name ==
                                  category.category_name
                                ) {
                                  return (
                                    <li className="px-3 py-2">
                                      {subCategory.sub_category_name}
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

// server-side data fetching
export async function getStaticProps() {
  try {
    const responseTopCategories = await fetch(BACKEND_API_FOR_TOP_CATEGORIES);
    const topCategories = responseTopCategories.json();

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
    console.log(
      "🚀 ~ file: sub-categories-management.jsx:67 ~ getStaticProps ~ error:",
      error
    );
    return {
      props: {
        topCategories: [],
        categories: [],
        subCategories: [],
      },
    };
  }
}
