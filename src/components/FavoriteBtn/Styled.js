import styled from "styled-components";

export const StyledFavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;

  svg {
    stroke-width: 2px;

    transition: all 250ms cubic-bezier(0.5, -0.75, 0.7, 2);
  }

  svg:hover,
  svg:focus {
    transform: scale(1.1);
  }
`;
