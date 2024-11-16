import React from 'react'
import "../style/search-bar.css"
import { LiaSearchSolid } from "react-icons/lia";

export default function SearchBar() {
  return (
    <>
      {/* Search Bar */}
      <div className="px-6 mt-10">
        <input
          type="text"
          placeholder="Search by name, email or role..."
          className="search-bar"
        />
      </div>
    </>
  )
}
