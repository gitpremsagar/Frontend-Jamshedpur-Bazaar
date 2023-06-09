import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";

export default function NavMenu(props) {
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

  const oldCategories = [
    {
      name: "Grocery",
      subcategories: [
        {
          name: "Beverages",
          subcategories: [
            {
              name: "Coffee & Tea",
              subcategories: [
                { name: "Ground Coffee" },
                { name: "Instant Coffee" },
                { name: "Tea" },
              ],
            },
            {
              name: "Juices & Soft Drinks",
              subcategories: [{ name: "Juices" }, { name: "Soft Drinks" }],
            },
          ],
        },
        {
          name: "Snacks",
          subcategories: [
            { name: "Chips & Pretzels" },
            { name: "Cookies & Crackers" },
            { name: "Nuts & Seeds" },
          ],
        },
        {
          name: "Canned & Packaged Foods",
          subcategories: [
            { name: "Canned Vegetables" },
            { name: "Canned Fruits" },
            { name: "Canned Meat & Seafood" },
          ],
        },
        // add more subcategories as needed
      ],
    },
    {
      name: "Meat & Seafood",
      subcategories: [
        {
          name: "Beverages",
          subcategories: [
            {
              name: "Coffee & Tea",
              subcategories: [
                { name: "Ground Coffee" },
                { name: "Instant Coffee" },
                { name: "Tea" },
              ],
            },
            {
              name: "Juices & Soft Drinks",
              subcategories: [{ name: "Juices" }, { name: "Soft Drinks" }],
            },
          ],
        },
        {
          name: "Snacks",
          subcategories: [
            { name: "Chips & Pretzels" },
            { name: "Cookies & Crackers" },
            { name: "Nuts & Seeds" },
          ],
        },
        {
          name: "Canned & Packaged Foods",
          subcategories: [
            { name: "Canned Vegetables" },
            { name: "Canned Fruits" },
            { name: "Canned Meat & Seafood" },
          ],
        },
        // add more subcategories as needed
      ],
    },
    {
      name: "Canned & Packaged Foods",
      subcategories: [
        {
          name: "Beverages",
          subcategories: [
            {
              name: "Coffee & Tea",
              subcategories: [
                { name: "Ground Coffee" },
                { name: "Instant Coffee" },
                { name: "Tea" },
              ],
            },
            {
              name: "Juices & Soft Drinks",
              subcategories: [{ name: "Juices" }, { name: "Soft Drinks" }],
            },
          ],
        },
        {
          name: "Snacks",
          subcategories: [
            { name: "Chips & Pretzels" },
            { name: "Cookies & Crackers" },
            { name: "Nuts & Seeds" },
            { name: "Popcorn" },
            { name: "Granola Bars" },
            { name: "Trail Mix" },
            { name: "Puffed Snacks" },
            { name: "Jerky & Meat Snacks" },
            { name: "Cheese Snacks" },
            { name: "Dips & Spreads" },
            { name: "Rice Cakes & Chips" },
          ],
        },
        {
          name: "Canned & Packaged Foods",
          subcategories: [
            { name: "Canned Vegetables" },
            { name: "Canned Fruits" },
            { name: "Canned Meat & Seafood" },
            { name: "Pasta & Noodles" },
            { name: "Canned Soup & Chili" },
            { name: "Boxed Meals & Side Dishes" },
            { name: "Cereal & Breakfast Foods" },
            { name: "Dried Beans & Grains" },
            { name: "Dried Fruits & Vegetables" },
            { name: "Flour & Meal" },
          ],
        },
        // add more subcategories as needed
      ],
    },
    {
      name: "Vegetables & Fruits",
      subcategories: [
        {
          name: "Beverages",
          subcategories: [
            {
              name: "Coffee & Tea",
              subcategories: [
                { name: "Ground Coffee" },
                { name: "Instant Coffee" },
                { name: "Tea" },
              ],
            },
            {
              name: "Juices & Soft Drinks",
              subcategories: [{ name: "Juices" }, { name: "Soft Drinks" }],
            },
          ],
        },
        {
          name: "Snacks",
          subcategories: [
            { name: "Chips & Pretzels" },
            { name: "Cookies & Crackers" },
            { name: "Nuts & Seeds" },
            { name: "Popcorn" },
            { name: "Granola Bars" },
            { name: "Trail Mix" },
            { name: "Puffed Snacks" },
            { name: "Jerky & Meat Snacks" },
            { name: "Cheese Snacks" },
            { name: "Dips & Spreads" },
            { name: "Rice Cakes & Chips" },
          ],
        },
        {
          name: "Canned & Packaged Foods",
          subcategories: [
            { name: "Canned Vegetables" },
            { name: "Canned Fruits" },
            { name: "Canned Meat & Seafood" },
            { name: "Pasta & Noodles" },
            { name: "Canned Soup & Chili" },
            { name: "Boxed Meals & Side Dishes" },
            { name: "Cereal & Breakfast Foods" },
            { name: "Dried Beans & Grains" },
            { name: "Dried Fruits & Vegetables" },
            { name: "Flour & Meal" },
          ],
        },
        // add more subcategories as needed
      ],
    },

    // add more categories as needed
  ];

  // categories navigation array
  const [categriesNavigationArray, setCategriesNavigationArray] =
    useState(oldCategories);

  return (
    <div>
      <nav className="text-white bg-blue-600">
        <ul className="main_menu ">
          {categriesNavigationArray.map((category, key) => {
            return (
              <li
                key={key}
                className="mr-2 inline-block px-3 py-2 hover:bg-blue-800 cursor-pointer"
              >
                <Link href={`/products/${category.name}`} className="block">
                  {category.name}
                </Link>

                <ul className="sub_menu">
                  {category.subcategories.map((subcategory_leve_1, key) => {
                    return (
                      <li className="px-3 py-2 bg-gray-600" key={key}>
                        <Link
                          href={`/products/${category.name}/${subcategory_leve_1.name}`}
                          className="block"
                        >
                          {subcategory_leve_1.name}
                        </Link>

                        <ul className="bg-blue-600 super_submenu">
                          {subcategory_leve_1.subcategories.map(
                            (subcategory_leve_2, key) => {
                              return (
                                <li className="px-3 py-2" key={key}>
                                  <Link
                                    href={`/products/${category.name}/${subcategory_leve_1.name}/${subcategory_leve_2.name}`}
                                    className="block"
                                  >
                                    {subcategory_leve_2.name}
                                  </Link>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </li>
                    );
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
