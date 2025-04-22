import React from "react";

export default function Navbar() {
  return (
    <header className="shadow-sm bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7C9.3 4.2 10.5 3 12 3zm0 5.4c4.6 0 8.3 3.7 8.3 8.3H3.7c0-4.6 3.7-8.3 8.3-8.3z" />
              </svg>
            </div>
            <span className="text-pink-500 text-xl font-bold">Chefify</span>
          </div>

          <div className="relative w-64">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="What would you like to cook?"
              className="w-full py-2 pl-10 pr-4 border rounded-full text-sm"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-pink-500">
            What to cook
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            Recipes
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            Ingredients
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            Occasions
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-pink-500 flex items-center gap-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 10h-4V6h-6v4H5v6h4v4h6v-4h4v-6z" />
            </svg>
            Your Recipe Box
          </button>

          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/32/32"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
