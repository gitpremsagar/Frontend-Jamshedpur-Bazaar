import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RupeeSymbol from "@/components/UI/RupeeSymbol";
// import Rating from "../components/Rating";

const ProductDetailPage = () => {
  const [product, setProduct] = useState({
    id: 1,
    title: "Product Name",
    price: 399,
    image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    description: `Introducing our all-natural, organic peanut butter - the perfect addition to your pantry. Made from just one ingredient - fresh, roasted peanuts - this peanut butter is free from any artificial flavors or preservatives.

    Experience the rich, creamy texture and delicious taste of pure peanut butter, without any added sugars or oils. Packed with protein and healthy fats, this peanut butter is a great source of nutrition for the whole family.
    
    Spread it on your favorite bread or crackers for a healthy and satisfying snack. Use it as a base for smoothies, or as an ingredient in your favorite recipes. This versatile peanut butter is perfect for anyone looking for a healthy, all-natural alternative to conventional nut butters.
    
    Our organic peanut butter is ethically sourced and sustainably produced. It comes in a convenient glass jar, which is both reusable and recyclable. So not only are you getting a delicious and nutritious product, but you're also making a positive impact on the environment.
    
    Order now and taste the difference in our all-natural, organic peanut butter.`,
    category: "Fruits",
    rating: 4.5,
    reviews: 10,
  });
  const router = useRouter();
  const { productId } = router.query;

  // useEffect(() => {
  //   // Fetch product data from backend
  //   const fetchProduct = async () => {
  //     const res = await fetch(`/api/products/${productId}`);
  //     const data = await res.json();
  //     setProduct(data);
  //   };

  //   fetchProduct();
  // }, [productId]);

  // const product = {
  //   id: 1,
  //   name: "Product Name",
  //   price: 399,
  //   image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
  //   description: "Fresh organic apples from local farmers",
  //   category: "Fruits",
  //   rating: 4.5,
  //   reviews: 10,
  // };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{product.title} - My Ecommerce Website</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-medium text-gray-900">
                {product.title}
              </h1>
              {/* <Rating rating={product.rating} />*/}
            </div>
            <h2 className="mt-3 text-xl font-medium text-gray-900">
              <RupeeSymbol/>{product.price}
            </h2>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="mt-6 ">
              <button className="bg-blue-500 text-white text-sm px-3 py-2 rounded-lg hover:bg-blue-700">Add to Cart</button>
              <button className="bg-yellow-400 text-black text-sm px-3 py-2 rounded-lg hover:bg-yellow-500 ml-5">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Customer Reviews
          </h3>
          {product.reviews.length > 0
            ? product.reviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">{review.username}</p>
                    {/*<Rating rating={review.rating} />*/}
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
