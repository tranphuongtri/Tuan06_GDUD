import React from "react";

export default function ProfileHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-6">Emma Gonzalez's Recipe Box</h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-pink-100">
          <img
            src="/api/placeholder/128/128"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="text-gray-700 mb-2">
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-pink-500">6.5k Subscribes</span>

            <button className="bg-pink-500 text-white px-6 py-2 rounded-md flex items-center gap-2">
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
