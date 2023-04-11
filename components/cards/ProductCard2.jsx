import React from "react";
import RupeeSymbol from "../UI/RupeeSymbol";
import Link from "next/link";
import AddToCartButton from "../UI/AddToCartButton";
import PriceTag from "./PriceTag";
import ProductDescription from "./ProductDescription";
import ProductHeading from "./ProductHeading";

const Card = ({ passed_product }) => {
  const product = {
    id: 1,
    name: "Product Name",
    price: 399,
    image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    description: "Fresh organic apples from local farmers",
    category: "Fruits",
    rating: 4.5,
    reviews: 10,
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full object-cover object-center"
        src={product.image}
        alt={product.name}
      />
      <div className="p-2 sm:p-4 md:p-6">
        <ProductHeading name={product.name} />
        <ProductDescription description={product.description}/>
        <div className="sm:mt-3 sm:flex justify-between items-center">
          <PriceTag price={product.price} />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
