import styled from "styled-components";

export const StyledPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .paginationBtn {
    color: white;
    background-color: var(--blue-color);
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--blue-color);
    transition: all 250ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }
  .paginationBtn:hover,
  .paginationBtn:focus {
    transform: scale(1.05);
    background-color: var(--blue-hover-color);
    border: 1px solid var(--blue-hover-color);
  }
`;
