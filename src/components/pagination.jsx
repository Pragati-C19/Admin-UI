// Pagination Handlers

import React from "react";
import "../style/pagination.css";
import {
  IoPlayBack,
  IoCaretBackOutline,
  IoCaretForwardOutline,
  IoPlayForward,
} from "react-icons/io5";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const goToFirstPage = () => setCurrentPage(1);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToLastPage = () => setCurrentPage(totalPages);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="pagination">
        {/* First Page */}
        <button
          className="first-page"
          onClick={goToFirstPage}
          disabled={currentPage === 1}>
          <IoPlayBack />
        </button>

        {/* Previous Page */}
        <button
          className="previous-page"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}>
          <IoCaretBackOutline />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => goToPage(i + 1)}>
            {i + 1}
          </button>
        ))}

        {/* Next Page */}
        <button
          className="next-page"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}>
          <IoCaretForwardOutline />
        </button>

        {/* Last Page */}
        <button
          className="last-page"
          onClick={goToLastPage}
          disabled={currentPage === totalPages}>
          <IoPlayForward />
        </button>
      </div>
    </>
  );
}
