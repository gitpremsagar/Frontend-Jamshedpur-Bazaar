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
  // console.log("props = ", props);

  const [topCategories, setTopCategories] = useState(props.topCategories);
  const [categories, setCategories] = useState(props.categories);
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
    // if (dataTopCategories) setTopCategories(dataTopCategories);
  }, [dataTopCategories]);

  // fetching categories from db
  const {
    data: dataCategories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useSWR(BACKEND_API_ENDPOINT_FOR_CATEGORIES, fetcher);

  // assigning categories response to respective state
  useEffect(() => {
    // if (dataCategories) setCategories(dataCategories);
  }, [dataCategories]);

  // fetching sub-categories
  const {
    data: dataSubCategories,
    error: errorSubCategories,
    isLoading: isLoadingSubCategories,
  } = useSWR(BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES, fetcher);
  // assigning sub-category response to coresponding local state hook
  useEffect(() => {
    // if (dataSubCategories) setSubCategories(dataSubCategories);
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
                </Link>
                <ul className="sub_menu">
                  {categories.map((category, key) => {
                    if (
                      category.parent_top_category_name ==
                      topCategory.top_category_name
                    ) {
                      return (
                        <li className="px-3 py-2 bg-gray-600" key={key}>
                          <Link
                            href={`/products/${topCategory.top_category_name}/${category.category_name}`}
                            className="block"
                          >
                            {category.category_name}
                          </Link>

                          <ul className="bg-blue-600 super_submenu">
                            {subCategories.map((subCategory, key) => {
                              if (
                                subCategory.parent_category_name ==
                                category.category_name
                              ) {
                                return (
                                  <li className="px-3 py-2" key={key}>
                                    <Link
                                      href={`/products/${topCategory.top_category_name}/${category.category_name}/${subCategory.sub_category_name}`}
                                      className="block"
                                    >
                                      {subCategory.sub_category_name}
                                    </Link>
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
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
