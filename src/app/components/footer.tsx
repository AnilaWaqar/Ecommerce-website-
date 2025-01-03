import React from 'react';



export default function Footer() {
  return (
    <footer className="flex flex-col space-y-6 justify-center p-6 bg-slate-900">
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-4 sm:gap-6 text-slate-500">
        <a className="hover:text-cyan-500 text-amber-500" href="#">
          Home
        </a>
        <a className="hover:text-cyan-500 text-amber-500" href="#">
          About
        </a>
        <a className="hover:text-cyan-500 text-amber-500" href="#">
          Delivery
        </a>
        <a className="hover:text-cyan-500 text-amber-500" href="#">
          Contact
        </a>
      </nav>

      {/* Social Media Buttons */}
      <div className="flex justify-center flex-wrap gap-4">
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
        >
          <a href="https://www.facebook.com/">Facebook</a>
        </button>
        <button
          className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
        >
          <a href="https://www.youtube.com/">YouTube</a>
        </button>
        <button
          className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
        >
          <a href="https://www.twitter.com/">Twitter</a>
        </button>
        <button
          className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
        >
          <a href="https://www.instagram.com/">Instagram</a>
        </button>
      </div>

      {/* Footer Text */}
      <p className="text-center hover:text-cyan-600 text-amber-500 font-medium">
        2024 Anila Waqar, All Rights Reserved.
      </p>
    </footer>
  );
}
