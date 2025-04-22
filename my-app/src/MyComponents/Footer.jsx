import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-black rounded-l w-full"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r">
                Send
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Our Cooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Recipes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  What to Cook This Week
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Pasta
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Healthy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Vegetarian
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Vegan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Christmas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7C9.3 4.2 10.5 3 12 3zm0 5.4c4.6 0 8.3 3.7 8.3 8.3H3.7c0-4.6 3.7-8.3 8.3-8.3z" />
              </svg>
            </div>
            <span className="text-white font-bold">Chefify</span>
          </div>

          <div className="text-sm text-gray-400">
            <span>2023 Chefify Company</span>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
