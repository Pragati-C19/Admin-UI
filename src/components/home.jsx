// HomePage

import React from "react";
import { useState } from "react";
import UserTable from "./table";
import "../style/home.css";
import SearchBar from "./search-bar";

export default function HomePage() {
  // Query for search bar
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Header */}
      <div>
        <h1>Welcome To The GreekTrust Coding Challenge</h1>
        <h2>Admin UI</h2>
      </div>

      {/* Search Bar */}
      <SearchBar setSearchQuery={setSearchQuery} />

      {/* Table */}
      <UserTable searchQuery={searchQuery} />

      {/* Footer */}
      <p className="footer">
        GreekTrust Coding Challenge | Admin UI with 💖 Pragati Chothe @ 16th Nov
        2024
      </p>
    </>
  );
}
