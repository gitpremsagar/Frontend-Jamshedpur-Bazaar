import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H2 from "@/components/UI/H2";
import InputElement from "@/components/UI/InputElement";
import LableElement from "@/components/UI/LableElement";
import FormElementContainer from "@/components/UI/FormElementContainer";
import TextareaElement from "@/components/UI/TextareaElement";
import CategoriesSelector from "@/components/admin/dashboard/product-management/CategoriesSelector";
import SelectElement from "@/components/UI/SelectElement";
import Section from "@/components/UI/Section";

export default function AddNewProductPage() {
  const [token, settoken] = useState();

  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-8">
        <div className="md:col-span-2 p-5 min-h-screen bg-gray-700">
          <AsideLeft />
        </div>
        <div className="md:col-span-6">
          <main>
            <Section>
              <H2>Add New Product</H2>

              <form className="py-10">
                {/* Product Name */}
                <FormElementContainer>
                  <LableElement lableFor="productName">
                    Product Name
                  </LableElement>
                  <InputElement
                    type="text"
                    name="productName"
                    id="productName"
                    placeholder="Product Name"
                    className={`w-full`}
                  />
                </FormElementContainer>

                {/* Product Description */}
                <FormElementContainer>
                  <LableElement lableFor="productDescription">
                    Product Description
                  </LableElement>
                  <TextareaElement
                    name="productDescription"
                    id="productDescription"
                    placeholder="Product Description"
                    className={`w-full`}
                  />
                </FormElementContainer>

                {/* Product Price */}
                <FormElementContainer>
                  <LableElement lableFor="productPrice">
                    Product Price
                  </LableElement>
                  <InputElement
                    type="number"
                    name="productPrice"
                    id="productPrice"
                    placeholder="Product Price"
                    className={`w-full`}
                  />
                </FormElementContainer>

                {/* Product Measurment */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                  <FormElementContainer>
                    <LableElement lableFor="productMeasurment">
                      Product Measurment
                    </LableElement>
                    <InputElement
                      name="productMeasurment"
                      id="productMeasurment"
                      placeholder="Product Description"
                      className={`w-full`}
                    />
                  </FormElementContainer>
                  <FormElementContainer>
                    <LableElement lableFor="productMeasurment">
                      Measuring Unit
                    </LableElement>
                    <InputElement
                      name="productMeasurment"
                      id="productMeasurment"
                      placeholder="Product Description"
                      className={`w-full`}
                    />
                  </FormElementContainer>
                </div>

                {/* Product Category */}
                <CategoriesSelector />

                {/* Product Quantity in Store */}
                <FormElementContainer>
                  <LableElement lableFor="productQuantityInInventory">
                    Product Quantity in Inventory
                  </LableElement>
                  <InputElement
                    name="productQuantityInInventory"
                    id="productQuantityInInventory"
                    placeholder="Product Description"
                  />
                </FormElementContainer>

                {/* Handling instruction */}
                <FormElementContainer>
                  <LableElement lableFor="isProductBreakable">
                    Is product breakable? (For handling instruction)
                  </LableElement>
                  <SelectElement
                    name="isProductBreakable"
                    id="isProductBreakable"
                  >
                    <option value="none">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </SelectElement>
                </FormElementContainer>
              </form>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}
