import React, { useState } from "react";

export default function NavMenu() {
  const categories = [
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

  const [isCategoryHovered, setisCategoryHovered] = useState(false);

  return (
    <div>
      <nav>
        <ul className="main_menu">
          {categories.map((category) => {
            return (
              <li className="mr-2 inline-block px-3 py-2">
                {category.name}
                <ul className="sub_menu">
                  {category.subcategories.map((subcategory_leve_1) => {
                    return (
                      <li className="px-3 py-2 bg-gray-600">
                        {subcategory_leve_1.name}
                        <ul className="bg-blue-600 super_submenu">
                          {subcategory_leve_1.subcategories.map(
                            (subcategory_leve_2) => {
                              return (
                                <li className="px-3 py-2">
                                  {subcategory_leve_2.name}
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
