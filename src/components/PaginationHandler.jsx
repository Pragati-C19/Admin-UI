// Pagination Handlers

import React from "react";
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

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToFirstPage = () => goToPage(1);
  const goToPreviousPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);
  const goToLastPage = () => goToPage(totalPages);

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
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => goToPage(i + 1)}
            aria-label="Go to Page Number">
            {i + 1}
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
