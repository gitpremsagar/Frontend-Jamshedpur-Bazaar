import Link from "next/link";
import React from "react";
import Card from "./ProductCard2";

// export default function ProductCard() {
  
//   return (
//     <div className="block rounded-lg bg-white shadow-lg">
//       <a href="#!" data-te-ripple-init data-te-ripple-color="light">
//         <img
//           className="rounded-t-lg"
//           src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
//           alt=""
//         />
//       </a>
//       <div className="p-6">
//         <h5 className="mb-2 text-xl font-medium leading-tight hover:underline text-blue-600">
//         <Link href={`/products/product-detail`}>
//           Product Name
//           </Link>
//         </h5>
//         <p className="mb-4 text-base text-neutral-600 ">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         <button
//           type="button"
//           className=" border-2 rounded-xl px-3 py-2"
//           data-te-ripple-init
//           data-te-ripple-color="light"
//         >
//           Button
//         </button>
//       </div>
//     </div>
//   );
// }

export default function ProductCard(){
  return <Card/>
}
