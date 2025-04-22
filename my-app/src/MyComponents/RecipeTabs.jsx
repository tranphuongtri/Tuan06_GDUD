import React, { useState } from "react";

export default function RecipeTabs() {
  const [activeTab, setActiveTab] = useState("saved");

  const tabs = [
    { id: "saved", name: "Saved Recipes" },
    { id: "folders", name: "Folders" },
    { id: "genevieve", name: "Recipes by Genevieve" },
  ];

  return (
    <div className="mb-6 border-b">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-600 hover:text-pink-400"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}
