import styled from "styled-components";

export const StyledLoadMore = styled.button`
  display: block;
  color: var(--blue-color);
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  margin-right: auto;
  margin-left: auto;
  transition: all 250ms cubic-bezier(0.5, -0.75, 0.7, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: var(--blue-hover-color);
  }
`;
