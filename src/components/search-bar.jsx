// Search Bar

import React from "react";
import { useState } from "react";
import "../style/search-bar.css";

export default function SearchBar({ setSearchQuery }) {
  const [searchTerm, setSearchTerm] = useState("");

  // console.log("fn: SearchBar() : searchTerm : ", searchTerm);

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  return (
    <>
      <div className="px-6 mt-10">
        <input
          type="text"
          placeholder="Search by name, email or role..."
          className="search-icon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch} // Real-Time Search Filter 
        />
      </div>
    </>
  );
}
