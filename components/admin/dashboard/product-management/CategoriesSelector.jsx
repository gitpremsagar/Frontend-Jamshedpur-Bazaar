import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";
import SelectElement from "@/components/UI/SelectElement";
import LableElement from "@/components/UI/LableElement";
import FormElementContainer from "@/components/UI/FormElementContainer";

export default function CategoriesSelector() {
  //refs
  const topCategorySelectorRef = useRef();
  const categorySelectorRef = useRef();
  const subCategorySelectorRef = useRef();

  const [topCategories, setTopCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [filteredCategories, setfilteredCategories] = useState([]);
  const [filteredSubCategories, setfilteredSubCategories] = useState([]);

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

  function handleTopCategorySelectorChange() {
    setfilteredCategories(() => {
      return categories.filter((category) => {
        return (
          category.parent_top_category_name ===
          topCategorySelectorRef.current.value
        );
      });
    });
    setfilteredSubCategories([]);
  }

  function handleCategorySelectorChange() {
    setfilteredSubCategories(() => {
      return subCategories.filter((subCategory) => {
        return (
          subCategory.parent_category_name === categorySelectorRef.current.value
        );
      });
    });
  }

  console.log(filteredSubCategories);

  return (
    <div className="grid grid-cols-3">
      {/* Top-Category Selector */}
      <FormElementContainer>
        <LableElement lableFor={`topCategorySelector`}>
          Select Top-Category For The Product
        </LableElement>
        <SelectElement
          id={`topCategorySelector`}
          selectRef={topCategorySelectorRef}
          onChangeHandler={handleTopCategorySelectorChange}
          disabledIndicator={false}
        >
          <option value={`none`}>Select</option>
          {topCategories.map((topCategory) => (
            <option
              key={topCategory.top_category_id}
              value={topCategory.top_category_name}
            >
              {topCategory.top_category_name}
            </option>
          ))}
        </SelectElement>
      </FormElementContainer>

      {/* Category Selector */}
      <FormElementContainer>
        <LableElement lableFor={`categorySelector`}>
          Select Category For The Product
        </LableElement>
        <SelectElement
          id={`categorySelector`}
          selectRef={categorySelectorRef}
          disabledIndicator={filteredCategories.length < 1}
          onChangeHandler={handleCategorySelectorChange}
        >
          <option value={`none`}>Select</option>
          {filteredCategories.map((category) => (
            <option key={category.category_id} value={category.category_name}>
              {category.category_name}
            </option>
          ))}
        </SelectElement>
      </FormElementContainer>

      {/* Sub-Category Selector */}
      <FormElementContainer>
        <LableElement lableFor={`subCategorySelector`}>
          Select Sub-Category For The Product
        </LableElement>
        <SelectElement
          id={`subCategorySelector`}
          selectRef={subCategorySelectorRef}
          disabledIndicator={filteredSubCategories.length < 1}
        >
          <option value={`none`}>Select</option>
          {filteredSubCategories.map((subCategory) => (
            <option
              key={subCategory.sub_category_id}
              value={subCategory.sub_category_name}
            >
              {subCategory.sub_category_name}
            </option>
          ))}
        </SelectElement>
        {/* Feedback Message FIXME: created dedicated functional component for rendering proper feedback message */}
        {filteredSubCategories.length < 1 ? (
          <span className="text-red-600 ml-5 text-xs">
            No Sub-Category Available
          </span>
        ) : (
          <span className="text-green-600 ml-5 text-xs">Please Select</span>
        )}
      </FormElementContainer>
    </div>
  );
}
