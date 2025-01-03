import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="md:w-1/2 md:pr-10 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          Delicious Pizza
        </h2>
        <p className="text-sm sm:text-base text-white mb-4">
          Experience the juiciest pizza in town, made with fresh ingredients and grilled to perfection.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
          Order Now
        </button>

        <h3 className="text-xl sm:text-2xl font-bold mt-6 mb-4 text-white">
          Coming Soon: Our New Pizza Launch
        </h3>

        <ul className="text-white text-sm sm:text-base list-disc pl-5">
          <li>
            <strong>Mighty Melt Pizza:</strong> Savory beef, melted cheddar, and sautéed mushrooms in a perfect bite. 🍔
          </li>
          <li>
            <strong>Crunch King Pizza:</strong> Beef patty, crispy lettuce, and spicy sauce. A crunchy delight. 🍔
          </li>
          <li>
            <strong>Fiesta Flame Pizza:</strong> Zesty beef, pepper jack cheese, and jalapeños. 🌶
          </li>
          <li>
            <strong>Classic Sizzle Pizza:</strong> Juicy beef, classic cheddar, and smoky BBQ. 🍔
          </li>
          <li>
            <strong>Sunset Glow Pizza:</strong> Savory beef, golden cheese, and caramelized onions. ☀️
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="https://img.freepik.com/free-vector/pizzeria-emblem-design_1176-233.jpg"
          alt="card"
          width={700}
          height={700}
          className="h-[300px] sm:h-[400px] md:h-[450px] rounded-lg shadow-lg transition-transform transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  );
}
