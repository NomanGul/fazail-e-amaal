import React from "react";

export const Navigation = ({ goToPrevPage, goToNextPage, pageNumber }) => {
  return (
    <nav className="nav-buttons">
      <button onClick={goToPrevPage} disabled={pageNumber === 1 ? true : false}>
        &lt;&lt;
      </button>
      <button
        onClick={goToNextPage}
        disabled={pageNumber === 833 ? true : false}
      >
        &gt;&gt;
      </button>
    </nav>
  );
};
