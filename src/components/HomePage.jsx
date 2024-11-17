// HomePage Component

import React from "react";
import { useState } from "react";
import UserTable from "./UserTable";
import "../style/HomePage.css";
import SearchBar from "./SearchBar";

export default function HomePage() {
  // Query for search bar
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Header */}
      <header className="homepage-header">
        <h1>Welcome To The GeekTrust Coding Challenge</h1>
        <h2>Admin UI</h2>
      </header>

      {/* Search Bar */}
      <SearchBar setSearchQuery={setSearchQuery} />

      {/* Table */}
      <UserTable searchQuery={searchQuery} />

      {/* Footer */}
      <footer className="homepage-footer">
        GeekTrust Coding Challenge | Admin UI
        <span> 💖 Pragati Chothe @16thNov2024</span>
      </footer>
    </>
  );
}
