import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-slate-700 font-sans px-6 py-12 mb-7">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
          alt="Delicious Pizza"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
          Delicious Pizza
        </h1>
        <p className="mt-4 text-base sm:text-lg">
          Savor the best pizza in town!
        </p>

        <button
          type="button"
          className="mt-6 bg-cyan-700 text-white text-sm sm:text-base font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
        >
          Mid Night Deals
        </button>
      </div>
    </div>
  );
}
