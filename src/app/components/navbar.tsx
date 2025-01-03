"use client";

import React, { useState } from "react";
import { FaPizzaSlice, FaSearch, FaBolt, FaCartArrowDown } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-black to-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="py-3 px-3 rounded-xl w-full">
          <div className="flex justify-between items-center">
            {/* Left Section */}
            <div className="flex justify-center items-center gap-2">
              <FaPizzaSlice className="w-8 h-8 text-orange-700 font-extrabold hover:text-cyan-700" />

              <div className="relative w-[250px] sm:w-[300px] md:w-[350px] hidden sm:block">
                <input
                  className="rounded-3xl py-2 px-4 outline-none text-xs w-full pr-10"
                  placeholder="Search for your favourite pizza from menu."
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-800 w-5 h-5" />
              </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <FaHamburger
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>

            {/* Right Section */}
            <div className="hidden md:flex justify-center items-center gap-3">
              <FaBolt className="w-5 h-5 text-orange-400" />
              <p className="text-sm text-white">
                Order now and get within{" "}
                <span className="text-orange-500">15 minutes!</span>
              </p>
              <div className="relative w-10 h-10 flex justify-center items-center rounded-full ring-2 ring-pink-500 hover:text-amber-200">
                <FaCartArrowDown className="w-6 h-6 text-white" />
              </div>
              <img
                className="inline-block w-10 h-10 rounded-full ring-2 p-1 ring-pink-500 hover:text-amber-500"
                src="data:image/jpeg;base64,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"
                alt="user avatar"
              />
            </div>
          </div>

          {isMenuOpen && (
            <div className="mt-3 space-y-2 md:hidden">
              <div className="flex flex-col items-start gap-3">
                <input
                  className="rounded-3xl py-2 px-4 outline-none text-xs w-full"
                  placeholder="Search for your favourite pizza from menu."
                />
                <p className="text-sm text-white">
                  Order now and get within{" "}
                  <span className="text-orange-500">15 minutes!</span>
                </p>
                <div className="relative w-10 h-10 flex justify-center items-center rounded-full ring-2 ring-pink-500 hover:text-amber-200">
                  <FaCartArrowDown className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
