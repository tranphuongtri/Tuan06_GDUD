import React from "react";

export default function RecipeCard({ title, time, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <div className="relative h-48">
        <img
          src={image || "/api/placeholder/400/300"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-pink-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-pink-500">{time} minutes</p>
      </div>
    </div>
  );
}
