import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-center my-8">
      <div className="flex items-center">
        <button className="w-8 h-8 flex items-center justify-center rounded-md border">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-pink-500 text-white mx-1">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md border mx-1">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md border mx-1">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md border mx-1">
          4
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-md border mx-1">
          ...
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-md border mx-1">
          10
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md border mx-1">
          11
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-md border">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
