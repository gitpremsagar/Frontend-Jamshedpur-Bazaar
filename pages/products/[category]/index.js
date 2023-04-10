import ProductCard from "@/components/cards/ProductCard";
import { useRouter } from "next/router";
import React from "react";

export default function CategoryPage() {
  const router = useRouter();
  return (
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
  );
}
