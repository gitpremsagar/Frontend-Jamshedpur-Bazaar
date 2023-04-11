// import Image from "next/image";

const ProductCardHorizontal = ({ product }) => {
    
  return (
    <div className="flex flex-row p-4 items-center border-b border-gray-300">
      <div className="mr-4">
        <img
          src={product.image}
          alt={product.name}
          width={80}
          height={80}
        />
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-gray-500">{product.description}</p>
        <div className="flex flex-row items-center justify-between">
          <p className="font-bold text-lg">Rs. {product.price}</p>
          <div className="flex flex-row items-center space-x-2">
            <button className="bg-gray-200 p-1 rounded-full focus:outline-none">
              -
            </button>
            <p className="font-bold">{product.quantity}</p>
            <button className="bg-gray-200 p-1 rounded-full focus:outline-none">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardHorizontal;
