import React from "react";
import { StyledPagination } from "./Styled";

const Pagination = ({ totalCars, paginate }) => {
  const pages = [];

  for (let i = 0; i < Math.ceil(totalCars / 12); i++) {
    pages.push(i + 1);
  }
  return (
    <StyledPagination>
      {pages.map((page) => (
        <li key={page}>
          <button className="paginationBtn" onClick={() => paginate(page)}>
            {page}
          </button>
        </li>
      ))}
    </StyledPagination>
  );
};

export default Pagination;
