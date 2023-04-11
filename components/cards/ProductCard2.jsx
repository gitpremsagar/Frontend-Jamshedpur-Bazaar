import React from "react";
import RupeeSymbol from "../UI/RupeeSymbol";
import Link from "next/link";

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
        className="w-full h-48 object-cover object-center"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-blue-500 hover:underline">
        <Link href={`/products/product-detail`}>
        {product.name}
        </Link>
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product.description}</p>
        <div className="mt-3 flex justify-between">
          <span className="text-lg font-medium text-gray-900">
            <RupeeSymbol/>{product.price}
          </span>
          <button className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
