import NavMenuCopy from "@/components/TopNavigation/NavMenuCopy";
import ProductCard from "@/components/cards/ProductCard";
import {
  BACKEND_API_ENDPOINT_FOR_CATEGORIES,
  BACKEND_API_ENDPOINT_FOR_SUB_CATEGORIES,
  BACKEND_API_FOR_TOP_CATEGORIES,
} from "@/service/envVars";
import { Fragment } from "react";

export default function Home(props) {
  return (
    <Fragment>
      <NavMenuCopy {...props} />
      <main className="min-h-screen">
        {/* Section 1*/}
        <section className="">
          <h1 className="font-bold text-center text-4xl my-10 text-gray-800">
            Fresh Vegetables and Fruits
          </h1>
          <div className="home_page_section">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        {/* Section 1*/}
        <section className="">
          <h1 className="font-bold text-center text-4xl my-10 text-gray-800">
            Beverages
          </h1>
          <div className="home_page_section">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        {/* Section 1*/}
        <section className="">
          <h1 className="font-bold text-center text-4xl my-10 text-gray-800">
            Bakery
          </h1>
          <div className="home_page_section">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        {/* Section 1*/}
        <section className="">
          <h1 className="font-bold text-center text-4xl my-10 text-gray-800">
            Snacks
          </h1>
          <div className="home_page_section">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
    </Fragment>
  );
}

// server-side data fetching
export async function getStaticProps() {
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
