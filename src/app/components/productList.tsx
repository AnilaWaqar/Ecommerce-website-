import React from "react";

const products = [
  {
    id: 1,
    title: "Mexican Pizza",
    category: "Fixing",
    price: "2000",
    imageUrl: "/updatedpizza1.png",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Cremy Pizza",
    category: "Delights",
    price: "3000",
    imageUrl: "/updatedpizza2.png",
    bgColor: "bg-teal-500",
  },
  {
    id: 3,
    title: "Spicy Hot Pizza",
    category: "Fixing",
    price: "4000",
    imageUrl: "/updatedpizza3.png",
    bgColor: "bg-amber-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-4 md:p-8 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 w-full max-w-screen-lg">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative ${product.bgColor} rounded-lg shadow-lg group hover:scale-105 hover:shadow-2xl transition-transform duration-300`}
            style={{ width: "100%", maxWidth: "300px", height: "400px" }}
          >
            {/* Image Section */}
            <div className="relative flex items-center justify-center h-2/3">
              <div
                className="absolute w-60 h-60 rounded-full bg-black -to-slate-700 opacity-20"
                style={{
                  background: "radial-gradient(circle, black, transparent 60%)",
                }}
              ></div>
              <img
                className="relative w-48 h-48 object-contain"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>

            {/* Text Section */}
            <div className="relative text-white px-4 py-4 bg-opacity-90 h-1/3 flex flex-col items-center justify-center">
              <span className="block opacity-80 text-sm">{product.category}</span>
              <h2 className="block font-bold text-lg text-center">
                {product.title}
              </h2>
              <span className="block bg-white rounded-full text-orange-500 text-sm font-bold px-4 py-2 mt-2">
                {product.price} PKR
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
