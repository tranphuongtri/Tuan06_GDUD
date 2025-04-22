import React from "react";
import RecipeCard from "./RecipeCard";
export default function RecipeGrid() {
  const recipes = [
    {
      id: 1,
      title: "Italian-style tomato salad",
      time: 14,
      image: "/img/Italian-style.png",
    },
    {
      id: 2,
      title: "Vegetable and shrimp spaghetti",
      time: 15,
      image: "/img/Vegetable_and_shrimp_spaghetti.png",
    },
    {
      id: 3,
      title: "Lotus delight salad",
      time: 20,
      image: "/img/Lotus_delight_salad.png",
    },
    {
      id: 4,
      title: "Snack cakes",
      time: 21,
      image: "/img/Snack_cakes.png",
    },
    {
      id: 5,
      title: "Salad with cabbage and shrimp",
      time: 32,
      image: "/img/Salad_with_cabbage.png",
    },
    {
      id: 6,
      title: "Bean, shrimp, and potato salad",
      time: 32,
      image: "/img/Salad_with_cabbage.png",
    },
    {
      id: 7,
      title: "Sunny-side up fried eggs",
      time: 32,
      image: "/img/Sunny-side_up_fried_eggs.png",
    },
    {
      id: 8,
      title: "Lotus delight salad",
      time: 32,
      image: "/img/Lotus_delight_salad_01.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
