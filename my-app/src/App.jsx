import React from "react";
import Navbar from "./MyComponents/Navbar";
import ProfileHeader from "./MyComponents/ProfileHeader";
import RecipeTabs from "./MyComponents/RecipeTabs";
import RecipeGrid from "./MyComponents/RecipeGrid";
import Pagination from "./MyComponents/Pagination";
import Footer from "./MyComponents/Footer";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm mb-6">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-pink-500">Your Recipe Box</span>
        </div>

        <ProfileHeader />
        <RecipeTabs />
        <RecipeGrid />
        <Pagination />
      </main>
      <Footer />
    </div>
  );
}
