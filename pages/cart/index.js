import ProductCardHorizontal from "@/components/cards/ProductHorizontalCard";
import { useState } from "react";

const CartPage = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 12",
      image: "https://via.placeholder.com/300",
      price: 79999,
      description: "A14 Bionic chip, Super Retina XDR display",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      image: "https://via.placeholder.com/300",
      price: 69999,
      description: "Exynos 2100, Dynamic AMOLED 2X display",
      category: "Electronics",
    },
    {
      id: 3,
      name: "HP Pavilion Gaming Laptop",
      image: "https://via.placeholder.com/300",
      price: 84999,
      description: "Intel Core i5, NVIDIA GeForce GTX 1650 graphics",
      category: "Computers",
    },
    {
      id: 4,
      name: "Apple MacBook Pro",
      image: "https://via.placeholder.com/300",
      price: 149999,
      description: "M1 chip, Retina display",
      category: "Computers",
    },
    {
      id: 5,
      name: "Nike Air Zoom Pegasus 38",
      image: "https://via.placeholder.com/300",
      price: 9999,
      description: "Responsive cushioning, durable traction",
      category: "Sports",
    },
    {
      id: 6,
      name: "Adidas Ultraboost 21",
      image: "https://via.placeholder.com/300",
      price: 13999,
      description: "Responsive Boost midsole, breathable mesh upper",
      category: "Sports",
    },
  ];

  const [cartItems, setCartItems] = useState(products);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-8">
        <div className="md:col-span-6">
          {/*Shopping Cart Items List*/}
          <section>
            {cartItems.map((product, key) => {
              return <ProductCardHorizontal key={key} product={product} />;
            })}
          </section>

          {/*Your Saved Favourite Items*/}
          <div></div>
        </div>

        {/*buy Now Card*/}
        <div className="md:col-span-2">
          <div className="min-h-[300px] min-w-full bg-blue-100 rounded-lg px-5 py-5">
            <h6>
              <span className="font-semibold">Delivery Detail: </span>Get it by
              Tomorrow
            </h6>
            <div className="min-h-[200px]"></div>
            <button className="bg-yellow-300 hover:bg-yellow-400 rounded-lg px-3 py-2 border-2 border-white w-full font-semibold">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
