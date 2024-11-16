// Search Bar

import React from "react";
import { useState } from "react";
import "../style/SearchBar.css";

export default function SearchBar({ setSearchQuery }) {
  const [searchTerm, setSearchTerm] = useState("");

  // console.log("fn: SearchBar() : searchTerm : ", searchTerm);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchQuery(value); // Trigger search filter in real-time
  };

  // Optional: Handles search only on pressing Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchTerm);
    }
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, email or role..."
          className="search-icon"
          value={searchTerm}
          onChange={handleSearch} // Updates search in real-time
          onKeyDown={handleKeyDown} // Optional: Handles "Enter" key
        />
      </div>
    </>
  );
}
