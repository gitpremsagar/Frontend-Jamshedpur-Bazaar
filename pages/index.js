import ProductCard from "@/components/cards/ProductCard";

export default function Home() {
  return (
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
  );
}
