import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H2 from "@/components/UI/H2";
import InputElement from "@/components/UI/InputElement";
import LableElement from "@/components/UI/LableElement";
import FormElementContainer from "@/components/UI/FormElementContainer";
import TextareaElement from "@/components/UI/TextareaElement";
import CategoriesSelector from "@/components/admin/dashboard/product-management/CategoriesSelector";

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
          <main className="p-10">
            <H2>Add New Product</H2>
            <div className="">
              <form className="py-10">
                <FormElementContainer>
                  <LableElement lableFor="productName">
                    Product Name
                  </LableElement>
                  <InputElement
                    type="text"
                    name="productName"
                    id="productName"
                    placeholder="Product Name"
                  />
                </FormElementContainer>

                <FormElementContainer>
                  <LableElement lableFor="productDescription">
                    Product Description
                  </LableElement>
                  <TextareaElement
                    name="productDescription"
                    id="productDescription"
                    placeholder="Product Description"
                  />
                </FormElementContainer>

                <CategoriesSelector />
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
