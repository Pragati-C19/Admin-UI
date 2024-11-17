// Pagination Handlers

import React, { useEffect } from "react";
import "../style/PaginationHandler.css";
import {
  IoPlayBack,
  IoCaretBackOutline,
  IoCaretForwardOutline,
  IoPlayForward,
} from "react-icons/io5";

export default function PaginationHandler({
  currentPage,
  setCurrentPage,
  totalPages,
}) {

  if (totalPages <= 0) return null; // Handle invalid totalPages
  
  // Number of pages to display at a time
  const pagesToShow = 3;

  // Calculate the start page and end page for the current page set
  // Adjust logic to always display the last page number in the center when possible
  const getStartPage = () => {
    if (currentPage === 1) return 1;
    if (currentPage === totalPages) return Math.max(1, totalPages - pagesToShow + 1);
    return Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  };

  const startPage = getStartPage();
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToFirstPage = () => goToPage(1);
  const goToPreviousPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);
  const goToLastPage = () => goToPage(totalPages);

  // Create an array of page numbers to display (e.g., [1, 2, 3] or [2, 3, 4])
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <>
      <div className="pagination">
        {/* First Page */}
        <button
          className="first-page"
          onClick={goToFirstPage}
          disabled={currentPage === 1}
          aria-label="Go to First Page">
          <IoPlayBack />
        </button>

        {/* Previous Page */}
        <button
          className="previous-page"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          aria-label="Go to Previous Page">
          <IoCaretBackOutline />
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
        <button
          key={page}
          className={`page-number ${currentPage === page ? "active" : ""}`}
          onClick={() => goToPage(page)}
          aria-label={`Go to Page ${page}`}>
          {page}
        </button>
      ))}

        {/* Next Page */}
        <button
          className="next-page"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          aria-label="Go to Next Page">
          <IoCaretForwardOutline />
        </button>

        {/* Last Page */}
        <button
          className="last-page"
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
          aria-label="Go to Last Page">
          <IoPlayForward />
        </button>
      </div>
    </>
  );
}
